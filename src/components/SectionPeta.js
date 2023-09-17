import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PetaContext from "../context/PetaContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import color from "../themes/Color";

const SetViewOnClick = ({ coords, zoom }) => {
  const map = useMap();
  map.flyTo(coords, zoom, {
    animate: true,
    duration: 1.5,
  });
  return null;
};

const SectionPeta = () => {
  const {
    posisiAtasElementPengenalan,
    posisiAtasElementMetropolitanPertama,
    posisiAtasElementMetropolitanKedua,
    posisiAtasElementMetropolitanKetiga,
    posisiAtasElementMetropolitanKeempat,
    posisiAtasElementMetropolitanKelima,
    posisiAtasElementMetropolitanKeenam,
    posisiAtasElementMetropolitanKetujuh,
    posisiAtasElementMetropolitanKedelapan,
    posisiAtasElementMetropolitanKesembilan,
    posisiAtasElementMetropolitanKesepuluh,
  } = useContext(PetaContext);
  const [coords, setCoords] = useState([-1.694867, 118.0597507]);
  const [zoom, setZoom] = useState(5);
  const mapContainer = useRef();
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
    [-1.694867, 118.0597507, 5], // Indonesia
  ];

  const pindahKoordinatPeta = (urutan) => {
    const lat = parseFloat(metropolitan[urutan][0]);
    const lon = parseFloat(metropolitan[urutan][1]);
    setCoords([lat, lon]);
    setZoom(metropolitan[urutan][2]);
  };

  const cekKoordinatSekarang = (scrollTop) => {
    if (
      Math.floor(scrollTop) >= posisiAtasElementPengenalan + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanPertama + 100
    ) {
      pindahKoordinatPeta(0);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanPertama + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKedua + 100
    ) {
      pindahKoordinatPeta(1);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKedua + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKetiga + 100
    ) {
      pindahKoordinatPeta(2);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKetiga + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKeempat + 100
    ) {
      pindahKoordinatPeta(3);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKeempat + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKelima + 100
    ) {
      pindahKoordinatPeta(4);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKelima + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKeenam + 100
    ) {
      pindahKoordinatPeta(5);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKeenam + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKetujuh + 100
    ) {
      pindahKoordinatPeta(6);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKetujuh + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKedelapan + 100
    ) {
      pindahKoordinatPeta(7);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKedelapan + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKesembilan + 100
    ) {
      pindahKoordinatPeta(8);
    } else if (
      Math.floor(scrollTop) >= posisiAtasElementMetropolitanKesembilan + 100 &&
      Math.floor(scrollTop) <= posisiAtasElementMetropolitanKesepuluh + 100
    ) {
      pindahKoordinatPeta(9);
    } else {
      pindahKoordinatPeta(10);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: "#map-container", // What element triggers the scroll\
      // scroller: "#map-container",
      scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
      start: "top top", // Can be top, center, bottom
      end: "bottom bottom",
      pin: "#map",
      pinSpacing: false,
      markers: true,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isPindahKoordinat);

    return () => {
      window.removeEventListener("scroll", isPindahKoordinat);
    };
  }, [posisiAtasElementPengenalan]);

  const isPindahKoordinat = (e) => {
    const scrollTop = window.scrollY;
    cekKoordinatSekarang(scrollTop);
  };

  return (
    <Box id="map-container" sx={{ height: "400vh" }}>
      <h1 id="map" style={{ position: "absolute", zIndex: 100000000 }}>
        Ini adalah section peta
      </h1>
      {/* <MapContainer
        ref={mapContainer}
        center={coords}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomAnimation={true}
        zoomControl={false}
        dragging={false}
        style={{
          position: { xs: "relative" },
          zIndex: { xs: 15 },
          width: "100%",
          height: "100vh",
        }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
        <SetViewOnClick coords={coords} zoom={zoom} />
      </MapContainer> */}
    </Box>
  );
};

export default SectionPeta;
