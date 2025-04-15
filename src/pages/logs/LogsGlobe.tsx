import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface CountryMarker {
  country: string;
  lat: number;
  lng: number;
  year: string;
}

const isWebGLSupported = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

const LogsGlobe: React.FC = () => {
  const [markers, setMarkers] = useState<CountryMarker[]>([]);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showGuide, setShowGuide] = useState(false);
  const globeRef = useRef<any>(null);
  const navigate = useNavigate();

  // 1. 마커 불러오기
  useEffect(() => {
    fetch("/assets/logsGrouped.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch logsGrouped.json");
        return res.json();
      })
      .then((data) => {
        const result: CountryMarker[] = [];
        for (const year in data) {
          for (const country in data[year]) {
            const entries = data[year][country];
            const allItems = Array.isArray(entries)
              ? entries
              : Object.values(entries).flat();
            const withCoords = allItems.find((item: any) => item.latitude && item.longitude);
            if (withCoords) {
              result.push({
                country,
                year,
                lat: withCoords.latitude,
                lng: withCoords.longitude,
              });
            }
          }
        }
        setMarkers(result);
      })
      .catch((error) => {
        console.error("Error fetching markers:", error);
      });
  }, []);

  // 2. 윈도우 리사이즈
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. 마지막 포커스 위치 기억
  useEffect(() => {
    const saved = localStorage.getItem("lastGlobeFocus");
    if (saved && globeRef.current) {
      const { lat, lng } = JSON.parse(saved);
      setTimeout(() => {
        globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 1500);
      }, 1000);
    }
  }, []);

  // 4. 마커 로드 완료 후 안내 메시지 (첫 방문 시만)
  useEffect(() => {
    if (markers.length > 0) {
      const hasVisited = localStorage.getItem("hasVisitedGlobe");
      if (!hasVisited) {
        const show = setTimeout(() => {
          setShowGuide(true);
          const hide = setTimeout(() => {
            setShowGuide(false);
            localStorage.setItem("hasVisitedGlobe", "true");
          }, 3000);
          return () => clearTimeout(hide);
        }, 800);
        return () => clearTimeout(show);
      }
    }
  }, [markers]);

  // 5. WebGL 체크
  if (!isWebGLSupported()) {
    return (
      <div className="text-white h-screen flex items-center justify-center text-center px-6">
        <p>
          ❌ Your browser does not support WebGL.<br />
          Try opening this page in Chrome, Safari, or a desktop browser.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Sangjin Lee | Logs Globe</title>
        <meta name="description" content="Explore Sangjin Lee's travel logs on the globe." />
        <meta property="og:title" content="Logs | Sangjin Lee" />
        <meta property="og:description" content="Travel logs and experiences of Sangjin Lee." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sjlee.co.kr/images/og/main-og-image.png" />
        <meta property="og:url" content="https://sjlee.co.kr/logs" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="w-screen h-screen bg-black overflow-hidden relative">
        {showGuide && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-lg transition-opacity duration-700 z-10">
            👆 Tap dots to explore
          </div>
        )}

        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0,0,0,1)"
          pointsData={markers}
          pointLat={(d: any) => d.lat}
          pointLng={(d: any) => d.lng}
          pointColor={() => "orange"}
          pointAltitude={() => 0.08}
          pointLabel={(d: any) => `${d.country} (${d.year})`}
          onPointClick={(d: any) => {
            const slug = d.country.toLowerCase().replace(/ /g, "-");
            localStorage.setItem("lastGlobeFocus", JSON.stringify({ lat: d.lat, lng: d.lng }));
            navigate(`/logs/${slug}`);
          }}
        />
      </div>
    </>
  );
};

export default LogsGlobe;