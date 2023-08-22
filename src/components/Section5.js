import { Box, Button } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const SetViewOnClick = ({ coords }) => {
  const map = useMap();
  map.flyTo([-1.694867, 118.0597507], 5, {
    animate: true,
    duration: 1.5,
  });

  setTimeout(
    () =>
      map.flyTo(coords, 9, {
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
  const countries = [
    [3.4811201, 98.047515],
    [-2.9509919, 104.5710289],
    [-6.3498264, 106.1583688],
    [-7.0015221, 107.227219],
    [-7.0837825, 110.3546711],
    [-7.3162941, 112.3980395],
    [-3.2643081, 114.4009023],
    [-8.5291797, 115.0064513],
    [-5.2408108, 119.359302],
    [1.562365, 124.7486837],
  ];

  const handleScroll = (e) => {
    // const bottom =
    //   e.target.scrollHeight - Math.floor(e.target.scrollTop) ===
    //   e.target.clientHeight;
    // console.log("scrollHeight:", e.target.scrollHeight);
    // console.log("scrollTop:", e.target.scrollTop);
    // console.log("clientHeight:", e.target.clientHeight);
    // console.log("bottom:", bottom);
    // if (bottom) {
    const lat = parseFloat(countries[index][0]);
    const lon = parseFloat(countries[index][1]);
    setCoords([lat, lon]);
    if (index === 9) setIndex(0);
    else setIndex((prev) => prev + 1);
    // }
  };

  return (
    <Box sx={{ position: "sticky" }}>
      <Button onClick={handleScroll}>Ubah Koordinat</Button>
      <MapContainer
        center={coords}
        zoom={5}
        scrollWheelZoom={false}
        zoomAnimation={true}
        style={{
          position: "sticky",
        }}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SetViewOnClick coords={coords} />
      </MapContainer>
    </Box>
  );
};

export default Section5;
