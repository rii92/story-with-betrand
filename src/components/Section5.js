import { useContext, useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import PetaContext from "../context/PetaContext";

const Section5 = () => {
  maptilersdk.config.apiKey = "rH1R16C7vNQTnfeMTaFw";
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
  const koordinatTengah = [118.0597507, -1.694867];
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 4;

  const metropolitan = [
    [98.047515, 3.4811201, 8], // Mebidangro
    [104.5710289, -2.9509919, 8], // Patungraya Agung
    [106.1583688, -6.3498264, 8], // Jabodetabekpunjur
    [107.227219, -7.0015221, 8], // Cekungan Bandung
    [110.3546711, -7.0837825, 8], // Kedungsepur
    [112.3980395, -7.3162941, 8], // Gerbangkertosusila
    [114.4009023, -3.2643081, 8], // Banjar Bakula
    [115.0064513, -8.5291797, 8], // Sarbagita
    [119.359302, -5.2408108, 8], // Mamminasata
    [124.7486837, 1.562365, 8], // Bimindo
    [118.0597507, -1.694867, 4], // Indonesia
  ];

  const metropolitans = [
    [98.047515, 3.4811201], // Mebidangro
    [104.5710289, -2.9509919], // Patungraya Agung
    [106.1583688, -6.3498264], // Jabodetabekpunjur
    [107.227219, -7.0015221], // Cekungan Bandung
    [110.3546711, -7.0837825], // Kedungsepur
    [112.3980395, -7.3162941], // Gerbangkertosusila
    [114.4009023, -3.2643081], // Banjar Bakula
    [115.0064513, -8.5291797], // Sarbagita
    [119.359302, -5.2408108], // Mamminasata
    [124.7486837, 1.562365], // Bimindo
  ];

  const pindahKoordinatPeta = (urutan) => {
    const lon = parseFloat(metropolitan[urutan][0]);
    const lat = parseFloat(metropolitan[urutan][1]);
    map.current.flyTo({
      center: [lon, lat],
      zoom: metropolitan[urutan][2],
      speed: 1,
      curve: 1,
    });
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
    window.addEventListener("scroll", isPindahKoordinat);

    return () => {
      window.removeEventListener("scroll", isPindahKoordinat);
    };
  }, [posisiAtasElementPengenalan]);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "e5a892bb-39ee-4226-b059-df8f84d1fb69",
      center: koordinatTengah,
      zoom: zoom,
      navigationControl: false,
      geolocateControl: false,
      zoomControl: false,
      boxZoom: false,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      doubleClickZoom: false,
    });

    for (let metropolitan of metropolitans) {
      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat(metropolitan)
        .addTo(map.current);
    }
  }, []);

  const isPindahKoordinat = (e) => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);
    cekKoordinatSekarang(scrollTop);
  };

  return (
    <div
      className="map-wrap"
      style={{
        position: "sticky",
        top: "0px",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        ref={mapContainer}
        className="map"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Section5;
