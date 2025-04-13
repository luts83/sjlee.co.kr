import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";


import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ✅ 이렇게 정확하게 이미지 경로를 지정해줘야 함
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});


interface LogItem {
  src: string;
  type: "image" | "video";
  date: string | null;
  camera?: string;
  country: string;
  city: string;
  latitude?: number;
  longitude?: number;
}

const CountryLogs: React.FC = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [groupedLogs, setGroupedLogs] = useState<Record<string, LogItem[]>>({});
  const [mapLogs, setMapLogs] = useState<LogItem[]>([]);

  useEffect(() => {
    fetch("/assets/logsGrouped.json")
      .then((res) => res.json())
      .then((data) => {
        const result: Record<string, LogItem[]> = {};
        const mapPoints: LogItem[] = [];

        for (const year in data) {
          for (const originalCountryName in data[year]) {
            const slugged = originalCountryName.toLowerCase().replace(/ /g, "-");

            if (slugged === country) {
              const countryData = data[year][originalCountryName];

              let itemsArray: LogItem[] = [];

              if (Array.isArray(countryData)) {
                itemsArray = countryData;
              } else if (typeof countryData === "object" && countryData !== null) {
                itemsArray = Object.values(countryData)
                  .flatMap((cityItems) => (Array.isArray(cityItems) ? cityItems : []));
              }

              if (!result[year]) result[year] = [];
              result[year].push(...itemsArray);

              // 지도용 로그
              mapPoints.push(...itemsArray.filter((i) => i.latitude && i.longitude));
            }
          }
        }

        const sortedResult = Object.fromEntries(
          Object.entries(result).sort((a, b) => Number(b[0]) - Number(a[0]))
        );

        setGroupedLogs(sortedResult);
        setMapLogs(mapPoints);
      });
  }, [country]);

  // 🧭 지도 시작 위치
  const defaultCenter = mapLogs.length > 0
    ? [mapLogs[0].latitude!, mapLogs[0].longitude!]
    : [0, 0];

  const customIcon = L.icon({
    iconUrl: "/images/pin-orange.svg", // 너가 원하면 커스텀 가능
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36]
  });

  return (
    <div className="px-6 pt-20 text-white bg-black min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate('/logs')}
        className="mb-8 text-gray-400 hover:text-white transition-colors"
      >
        ← Back to Globe
      </button>

      <h1 className="text-4xl font-bold mb-12 capitalize">
        {country?.replace(/-/g, " ")}
      </h1>

      {/* 지도 섹션 */}
      {mapLogs.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-300 mb-4">
            Map of Logs
          </h2>
          <MapContainer
            center={defaultCenter as [number, number]}
            zoom={4}
            scrollWheelZoom={false}
            className="w-full h-[400px] rounded-md z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {mapLogs.map((log, idx) => (
              <Marker
                key={idx}
                position={[log.latitude!, log.longitude!]}
                icon={customIcon}
              >
                <Popup>
                  <div className="text-xs text-black">
                    {log.city} ({log.date?.split("T")[0]})<br />
                    {log.type === "image" ? (
                      <img
                        src={`/assets/logs/images/${log.src}`}
                        alt="log"
                        className="w-32 h-20 object-cover mt-2 rounded"
                      />
                    ) : (
                      <video
                        src={`/assets/logs/videos/${log.src}`}
                        className="w-32 h-20 object-cover mt-2 rounded"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* 갤러리 */}
      {Object.keys(groupedLogs).length === 0 ? (
        <p>No logs found for this country.</p>
      ) : (
        <PhotoProvider>
          {Object.entries(groupedLogs).map(([year, items]) => (
            <div key={year} className="mb-16">
              <h2 className="text-2xl font-light text-gray-300 mb-6 border-b border-gray-600 pb-1">
                {year}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded shadow-md hover:scale-105 transition"
                  >
                    {item.type === "image" ? (
                      <PhotoView src={`/assets/logs/images/${item.src}`}>
                        <img
                          src={`/assets/logs/images/${item.src}`}
                          alt={item.city}
                          className="w-full h-48 object-cover cursor-zoom-in"
                        />
                      </PhotoView>
                    ) : (
                      <video
                        src={`/assets/logs/videos/${item.src}`}
                        className="w-full h-48 object-cover rounded-md"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                    )}
                    <div className="text-xs text-gray-400 p-2">
                      {item.city} · {item.date?.split("T")[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </PhotoProvider>
      )}
    </div>
  );
};

export default CountryLogs;
