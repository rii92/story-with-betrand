import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section3 = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        overflowX: { xs: "hidden" },
        backgroundColor: color.blue,
      }}
    >
      <Box
        sx={{
          paddingY: { xs: "250px", md: "300px" },
          width: { xs: "100%", xl: "1200px" },
          marginX: { xs: "auto" },
          position: { xs: "relative" },
        }}
      >
        <Parallax
          translateX={["-100px", "0px"]}
          speed={10}
          style={
            lg
              ? {
                  width: "300px",
                  position: "absolute",
                  top: "56px",
                  left: "56px",
                  zIndex: 8,
                }
              : md
              ? {
                  width: "300px",
                  position: "absolute",
                  top: "56px",
                  left: "56px",
                  zIndex: 8,
                }
              : sm
              ? {
                  width: "200px",
                  position: "absolute",
                  top: "56px",
                  left: "56px",
                  zIndex: 8,
                }
              : { width: "100px", position: "absolute", top: "56px", zIndex: 8 }
          }
        >
          <img
            src="assets/image/cloud-1.png"
            alt="Awan"
            style={{ width: "100%" }}
          />
        </Parallax>

        <Parallax
          translateX={["100px", "0px"]}
          speed={10}
          style={
            lg
              ? {
                  width: "250px",
                  position: "absolute",
                  top: "56px",
                  right: "88px",
                  zIndex: 8,
                }
              : md
              ? {
                  width: "200px",
                  position: "absolute",
                  top: "56px",
                  right: "88px",
                  zIndex: 8,
                }
              : sm
              ? {
                  width: "150px",
                  position: "absolute",
                  top: "56px",
                  right: "72px",
                  zIndex: 8,
                }
              : {
                  width: "100px",
                  position: "absolute",
                  top: "56px",
                  right: "32px",
                  zIndex: 8,
                }
          }
        >
          <img
            src="assets/image/cloud-2.png"
            alt="Awan"
            style={{ width: "100%" }}
          />
        </Parallax>

        <Parallax
          translateX={["100px", "0px"]}
          speed={10}
          style={
            lg
              ? {
                  width: "300px",
                  position: "absolute",
                  top: "160px",
                  right: "240px",
                  zIndex: 8,
                }
              : md
              ? {
                  width: "250px",
                  position: "absolute",
                  top: "136px",
                  right: "160px",
                  zIndex: 8,
                }
              : sm
              ? {
                  width: "180px",
                  position: "absolute",
                  top: "128px",
                  right: "112px",
                  zIndex: 8,
                }
              : {
                  width: "130px",
                  position: "absolute",
                  top: "112px",
                  right: "40px",
                  zIndex: 8,
                }
          }
        >
          <img
            src="assets/image/cloud-3.png"
            alt="Awan"
            style={{ width: "100%" }}
          />
        </Parallax>

        <Typography
          variant="body1"
          sx={{
            width: { xs: "100%", sm: "450px" },
            position: { xs: "relative" },
            zIndex: { xs: 4 },
            fontSize: { xs: "12px", sm: "16px" },
          }}
          data-aos="fade-right"
        >
          <span style={{ backgroundColor: color.white, padding: "2px 3px" }}>
            Pada tahun 2045, jumlah penduduk Indonesia diproyeksikan akan
            mencapai <span style={{ fontWeight: "bold" }}>318,9 juta jiwa</span>
            , dengan <span style={{ fontWeight: "bold" }}>73 persen</span>{" "}
            populasi penduduk akan tinggal{" "}
            <span style={{ fontWeight: "bold" }}>di wilayah perkotaan</span>.
          </span>
        </Typography>

        <img
          className="image-city"
          src="assets/image/city-1.png"
          alt="City"
          style={{
            position: "absolute",
            zIndex: 3,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1600"
        />
        <img
          className="image-city"
          src="assets/image/city-2.png"
          alt="City"
          style={{
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        />
        <img
          className="image-city"
          src="assets/image/city-3.png"
          alt="City"
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          data-aos="fade-up"
          data-aos-duration="800"
        />
      </Box>
    </Box>
  );
};

export default Section3;
