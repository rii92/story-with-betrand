import { useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { Parallax } from "react-scroll-parallax";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import "../css/Bridging1.css";

const SectionSatriaDanAsepPergiKeBandung = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  maptilersdk.config.apiKey = "rH1R16C7vNQTnfeMTaFw";
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    AOS.init();
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
          backgroundImage: {
            xs: "url('assets/image/bridging/street-house-while-night.png')",
          },
          backgroundRepeat: { xs: "repeat-x" },
          overflow: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", xl: "1200px" },
            height: { xs: "100%" },
            paddingTop: { xs: "48px" },
            marginX: { xs: "auto" },
            display: { xs: "flex" },
            gap: { xs: "32px" },
            justifyContent: { xs: "center" },
            alignItems: { xs: "start" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginBottom: { xs: "8px" },
              color: { xs: color.black },
              textAlign: { xs: "center", sm: "left" },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span style={{ backgroundColor: color.white, padding: "1px 2px" }}>
              Mengetahui fakta tersebut, Satria bersama Asep memilih waktu malam
              hari untuk menghindari macet dan polusi Jakarta. Sesampainya di
              rumah Asep yang berada di Bandung, ia beristirahat dan akan
              memulai pendakian keesokan harinya.
            </span>
          </Typography>

          <Parallax
            translateX={
              md
                ? ["600px", "-600px"]
                : sm
                ? ["400px", "-400px"]
                : ["200px", "-200px"]
            }
            style={{ position: "absolute", bottom: "4px" }}
          >
            <Box sx={{ width: "250px" }}>
              <img
                src="assets/image/bridging/satria-and-asep.png"
                alt="Satria dan Asep"
                style={{ width: "100%" }}
              />
            </Box>
          </Parallax>
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

export default SectionSatriaDanAsepPergiKeBandung;
