import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


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
  const globeRef = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/assets/logsGrouped.json")
      .then((res) => res.json())
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
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("lastGlobeFocus");
    if (saved && globeRef.current) {
      const { lat, lng } = JSON.parse(saved);
      setTimeout(() => {
        globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 1500);
      }, 1000);
    }
  }, []);

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
      <meta property="og:title" content="Sangjin Lee | Logs Globe" />
      <meta property="og:description" content="Explore travel logs on the globe by Sangjin Lee." />
    </Helmet>
    <div className="w-screen h-screen bg-black overflow-hidden">
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
