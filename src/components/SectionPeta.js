import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PetaContext from "../context/PetaContext";

const SetViewOnClick = ({ coords, zoom }) => {
  const map = useMap();
  map.flyTo(coords, zoom, {
    animate: true,
    duration: 1.5,
  });
  return null;
};

const SectionPeta = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
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
    let pengenalan = 0,
      pertama = 0,
      kedua = 0,
      ketiga = 0,
      keempat = 0,
      kelima = 0,
      keenam = 0,
      ketujuh = 0,
      kedelapan = 0,
      kesembilan = 0,
      kesepuluh = 0;

    if (lg) {
      pengenalan = 21568;
      pertama = 22973;
      kedua = 24378;
      ketiga = 25783;
      keempat = 27156;
      kelima = 28593;
      keenam = 29999;
      ketujuh = 31404;
      kedelapan = 32796;
      kesembilan = 34214;
      kesepuluh = 35619;
    } else if (md) {
      pengenalan = 18314;
      pertama = 19208;
      kedua = 20102;
      ketiga = 20998;
      keempat = 21892;
      kelima = 22786;
      keenam = 23680;
      ketujuh = 24576;
      kedelapan = 25470;
      kesembilan = 26364;
      kesepuluh = 27258;
    } else if (sm) {
      pengenalan = 11064;
      pertama = 11458;
      kedua = 11834;
      ketiga = 12242;
      keempat = 12636;
      kelima = 13028;
      keenam = 13420;
      ketujuh = 13814;
      kedelapan = 14206;
      kesembilan = 14600;
      kesepuluh = 14992;
    }
    // console.log(pengenalan);

    if (
      Math.floor(scrollTop) > pengenalan + 200 &&
      Math.floor(scrollTop) < pertama + 200
    ) {
      // console.log("Mebidangro");
      pindahKoordinatPeta(0);
    } else if (
      Math.floor(scrollTop) > pertama + 200 &&
      Math.floor(scrollTop) < kedua + 200
    ) {
      // console.log("Patungraya Agung", posisiAtasElementMetropolitanPertama);
      pindahKoordinatPeta(1);
    } else if (
      Math.floor(scrollTop) > kedua + 200 &&
      Math.floor(scrollTop) < ketiga + 200
    ) {
      // console.log("Jabodetabekpunjur", posisiAtasElementMetropolitanKedua);
      pindahKoordinatPeta(2);
    } else if (
      Math.floor(scrollTop) > ketiga + 200 &&
      Math.floor(scrollTop) < keempat + 200
    ) {
      // console.log("Cekungan Bandung", posisiAtasElementMetropolitanKetiga);
      pindahKoordinatPeta(3);
    } else if (
      Math.floor(scrollTop) > keempat + 200 &&
      Math.floor(scrollTop) < kelima + 200
    ) {
      // console.log("Kedungsepur", posisiAtasElementMetropolitanKeempat);
      pindahKoordinatPeta(4);
    } else if (
      Math.floor(scrollTop) > kelima + 200 &&
      Math.floor(scrollTop) < keenam + 200
    ) {
      // console.log("Gerbangkertosusila", posisiAtasElementMetropolitanKelima);
      pindahKoordinatPeta(5);
    } else if (
      Math.floor(scrollTop) > keenam + 200 &&
      Math.floor(scrollTop) < ketujuh + 200
    ) {
      // console.log("Banjar Bakula", posisiAtasElementMetropolitanKeenam);
      pindahKoordinatPeta(6);
    } else if (
      Math.floor(scrollTop) > ketujuh + 200 &&
      Math.floor(scrollTop) < kedelapan + 200
    ) {
      // console.log("Sarbagita", posisiAtasElementMetropolitanKetujuh);
      pindahKoordinatPeta(7);
    } else if (
      Math.floor(scrollTop) > kedelapan + 200 &&
      Math.floor(scrollTop) < kesembilan + 200
    ) {
      // console.log("Mamminasata", posisiAtasElementMetropolitanKedelapan);
      pindahKoordinatPeta(8);
    } else if (
      Math.floor(scrollTop) > kesembilan + 200 &&
      Math.floor(scrollTop) < kesepuluh + 200
    ) {
      // console.log("Bimindo", posisiAtasElementMetropolitanKesepuluh);
      pindahKoordinatPeta(9);
    } else {
      pindahKoordinatPeta(10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isPindahKoordinat);

    return () => {
      window.removeEventListener("scroll", isPindahKoordinat);
    };
  }, [posisiAtasElementPengenalan]);

  const isPindahKoordinat = (e) => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);
    cekKoordinatSekarang(scrollTop);
  };

  return (
    <MapContainer
      center={coords}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomAnimation={true}
      zoomControl={false}
      dragging={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
      <SetViewOnClick coords={coords} zoom={zoom} />
    </MapContainer>
  );
};

export default SectionPeta;
