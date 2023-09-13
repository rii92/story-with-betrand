import { useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { Parallax } from "react-scroll-parallax";
import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import "../css/Bridging1.css";

const Bridging1 = () => {
  maptilersdk.config.apiKey = "rH1R16C7vNQTnfeMTaFw";
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "e5a892bb-39ee-4226-b059-df8f84d1fb69",
      center: [107.2150624, -6.5293796],
      zoom: 8.5,
      navigationControl: false,
      geolocateControl: false,
      zoomControl: false,
      boxZoom: false,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      doubleClickZoom: false,
    });
    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([106.6646986, -6.2293796])
      .addTo(map.current);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([107.560754, -6.9032719])
      .addTo(map.current);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "600px" },
          paddingX: { xs: "16px" },
          paddingY: { xs: "8px", sm: "16px" },
          position: { xs: "relative" },
          backgroundImage:
            "url('assets/image/bridging/street-house-while-night.png')",
          overflow: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", xl: "1200px" },
            height: { xs: "100%" },
            marginX: { xs: "auto" },
            display: { xs: "flex" },
            gap: { xs: "32px" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "end", sm: "center" },
            alignItems: { xs: "center", sm: "end" },
          }}
        >
          <Box
            sx={{ height: { xs: "fit-content", sm: "50%" } }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Typography
              variant="body1"
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginBottom: { xs: "8px" },
                color: { xs: color.black },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <span
                style={{ backgroundColor: color.white, padding: "1px 2px" }}
              >
                Mengetahui fakta tersebut, Satria bersama Asep memilih waktu
                malam hari untuk menghindari macet dan polusi Jakarta.
                Sesampainya di rumah Asep yang berada di Bandung, ia
                beristirahat dan akan memulai pendakian keesokan harinya.
              </span>
            </Typography>
          </Box>

          <Box
            sx={{
              position: { xs: "relative" },
              height: { xs: "300px", sm: "400px", md: "500px" },
              transform: "translateX(100px)",
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Box
              sx={{
                width: { xs: "300px", sm: "400px", md: "500px" },
                position: { xs: "absolute" },
                transform: {
                  xs: "translate(-100px,50px)",
                  sm: "translate(-70px, 80px)",
                  md: "translate(-40px, 100px)",
                },
              }}
            >
              <img
                src="assets/image/bridging/motorcycle.png"
                alt="Motor"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "105px", sm: "145px", md: "175px" },
                position: { xs: "absolute" },
                transform: {
                  xs: "translate(-3px,20px)",
                  sm: "translate(-7px,25px)",
                  md: "translate(-7px,40px)",
                },
              }}
            >
              <img
                src="assets/image/satria/bag-1.png"
                alt="Tas"
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "90px", sm: "110px", md: "130px" },
                position: { xs: "absolute" },
                transform: {
                  xs: "translate(3px,50px)",
                  sm: "translate(10px,65px)",
                  md: "translate(17px,93px)",
                },
                zIndex: { xs: 2 },
              }}
            >
              <img
                src="assets/image/satria/bag-2.png"
                alt="Tas"
                style={{ width: "100%" }}
              />
            </Box>
            <img
              className="tangan-satria-di-bridging"
              src="assets/image/satria/tangan-satria.png"
              alt="Tangan"
              style={{ zIndex: 1 }}
            />
            <img
              src="assets/image/bridging/satria.png"
              alt="Satria"
              style={{ height: "100%", position: "relative", zIndex: 1 }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <div
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
        <Parallax>
          <Box sx={{ width: "100px" }}>
            <img
              src="assets/image/section9/motorcycle.png"
              alt="Motorcycle"
              style={{ width: "100%" }}
            />
          </Box>
        </Parallax>
      </Box>
    </>
  );
};

export default Bridging1;
