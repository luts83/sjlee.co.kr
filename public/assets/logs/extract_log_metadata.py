import os
import json
import datetime
from PIL import Image, ExifTags
from PIL.ExifTags import TAGS, GPSTAGS
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut
import time

# ✅ 분석할 이미지 폴더 경로
INPUT_FOLDER = "./images"  # logs/images 내부에서 실행한다고 가정

# ✅ 결과를 항상 public/assets 폴더에 저장
BASE_DIR = os.path.abspath(os.path.join(
    os.path.dirname(__file__), "../.."))  # 한 단계만 나가기!
OUTPUT_FILE = os.path.join(BASE_DIR, "assets/logsData.json")
GROUPED_OUTPUT_FILE = os.path.join(BASE_DIR, "assets/logsGrouped.json")


SUPPORTED_EXT = (".jpg", ".jpeg", ".JPG", ".JPEG", ".mp4", ".MP4")

geolocator = Nominatim(user_agent="log_mapper")


def extract_exif(image_path):
    try:
        image = Image.open(image_path)
        exif_data = image._getexif()
        if not exif_data:
            return {}

        exif_info = {}
        for tag, value in exif_data.items():
            tag_name = TAGS.get(tag, tag)
            if tag_name == "GPSInfo":
                gps_data = {}
                for t in value:
                    sub_decoded = GPSTAGS.get(t, t)
                    gps_data[sub_decoded] = value[t]
                exif_info["GPSInfo"] = gps_data
            else:
                exif_info[tag_name] = value
        return exif_info
    except:
        return {}


def convert_ifdrational(val):
    try:
        return float(val.numerator) / float(val.denominator)
    except AttributeError:
        return float(val[0]) / float(val[1])


def convert_gps(coord, ref):
    d, m, s = coord
    d = convert_ifdrational(d)
    m = convert_ifdrational(m)
    s = convert_ifdrational(s)
    value = d + m / 60 + s / 3600
    return -value if ref in ['S', 'W'] else value


def get_lat_lng(gps_info):
    lat = lng = None
    if "GPSLatitude" in gps_info and "GPSLatitudeRef" in gps_info:
        lat = convert_gps(gps_info["GPSLatitude"], gps_info["GPSLatitudeRef"])
    if "GPSLongitude" in gps_info and "GPSLongitudeRef" in gps_info:
        lng = convert_gps(gps_info["GPSLongitude"],
                          gps_info["GPSLongitudeRef"])
    return lat, lng


def reverse_geocode(lat, lng):
    try:
        location = geolocator.reverse(
            (lat, lng), exactly_one=True, language="en")
        if location and location.raw.get("address"):
            addr = location.raw["address"]
            country = addr.get("country", "Unknown")
            city = addr.get("city") or addr.get(
                "town") or addr.get("village") or addr.get("state")
            return country, city
    except GeocoderTimedOut:
        time.sleep(1)
        return reverse_geocode(lat, lng)
    except:
        pass
    return "Unknown", "Unknown"


def extract_metadata(folder_path):
    result = []
    for root, _, files in os.walk(folder_path):
        for file in files:
            if not file.lower().endswith(SUPPORTED_EXT):
                continue

            path = os.path.join(root, file)
            ext = os.path.splitext(file)[1].lower()
            rel_path = os.path.relpath(path, folder_path)

            if ext in [".mp4"]:
                result.append({
                    "src": rel_path,
                    "type": "video",
                    "date": None,
                    "latitude": None,
                    "longitude": None,
                    "camera": None,
                    "country": None,
                    "city": None
                })
                continue

            exif = extract_exif(path)
            gps = exif.get("GPSInfo", {})
            lat, lng = get_lat_lng(gps)
            country = city = None
            if lat and lng:
                country, city = reverse_geocode(lat, lng)

            date_raw = exif.get("DateTimeOriginal")
            date_iso = None
            if date_raw:
                try:
                    dt = datetime.datetime.strptime(
                        date_raw, "%Y:%m:%d %H:%M:%S")
                    date_iso = dt.isoformat()
                except:
                    pass

            result.append({
                "src": rel_path,
                "type": "image",
                "date": date_iso,
                "latitude": lat,
                "longitude": lng,
                "camera": exif.get("Model"),
                "country": country,
                "city": city
            })
    return result


def group_by_year_and_country(data):
    grouped = {}
    for item in data:
        if not item["date"] or not item["country"]:
            continue
        year = item["date"][:4]
        country = item["country"]
        grouped.setdefault(year, {}).setdefault(country, {}).setdefault(
            item["city"] or "Unknown", []).append(item)
    return grouped


if __name__ == "__main__":
    data = extract_metadata(INPUT_FOLDER)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    grouped = group_by_year_and_country(data)
    with open(GROUPED_OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(grouped, f, ensure_ascii=False, indent=2)

    print(f"✅ Extracted {len(data)} items.")
    print(f"📦 Saved logsData → {OUTPUT_FILE}")
    print(f"📦 Saved logsGrouped → {GROUPED_OUTPUT_FILE}")
