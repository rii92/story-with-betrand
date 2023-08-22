import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";

const SetViewOnClick = ({ coords, zoom }) => {
  const map = useMap();
  map.flyTo([-1.694867, 118.0597507], 5, {
    animate: true,
    duration: 1.5,
  });

  setTimeout(
    () =>
      map.flyTo(coords, zoom, {
        animate: true,
        duration: 1.5,
      }),
    2000
  );
  return null;
};

const Section5 = () => {
  const [index, setIndex] = useState(0);
  const [coords, setCoords] = useState([-1.694867, 118.0597507]);
  const [zoom, setZoom] = useState(5);
  const metropolitan = [
    [3.4811201, 98.047515, 9], // Mebidangro
    [-2.9509919, 104.5710289, 9], // Patungraya Agung
    [-6.3498264, 106.1583688, 9], // Jabodetabekpunjur
    [-7.0015221, 107.227219, 9], // Cekungan Bandung
    [-7.0837825, 110.3546711, 9], // Kedungsepur
    [-7.3162941, 112.3980395, 9], // Gerbangkertosusila
    [-3.2643081, 114.4009023, 9], // Banjar Bakula
    [-8.5291797, 115.0064513, 9], // Sarbagita
    [-5.2408108, 119.359302, 9], // Mamminasata
    [1.562365, 124.7486837, 9], // Bimindo
  ];

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
  };

  const handleScroll = (e) => {
    const lat = parseFloat(metropolitan[index][0]);
    const lon = parseFloat(metropolitan[index][1]);
    setCoords([lat, lon]);
    if (index === 9) setIndex(0);
    else setIndex((prev) => prev + 1);
  };

  return (
    <MapContainer
      center={coords}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomAnimation={true}
      zoomControl={false}
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <SetViewOnClick coords={coords} zoom={zoom} />
    </MapContainer>
  );
};

export default Section5;
