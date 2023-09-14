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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
            rumah Asep yang berada di Bandung, ia beristirahat dan akan memulai
            pendakian keesokan harinya.
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
  );
};

export default SectionSatriaDanAsepPergiKeBandung;
