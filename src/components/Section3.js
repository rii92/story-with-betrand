import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

const Section3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        position: { xs: "relative" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        paddingY: { xs: "250px" },
        overflowX: { xs: "hidden" },
        backgroundColor: color.blue,
      }}
    >
      <Parallax
        translateX={["-100px", "0px"]}
        speed={10}
        style={{ width: "150px", position: "absolute", top: "56px" }}
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
        style={{
          width: "100px",
          position: "absolute",
          top: "56px",
          right: "16px",
        }}
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
        style={{
          width: "130px",
          position: "absolute",
          top: "112px",
          right: "40px",
        }}
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
          position: {
            xs: "relative",
            zIndex: 4,
            // transform: "translateY(20px)",
          },
        }}
        data-aos="fade-right"
      >
        <span style={{ backgroundColor: color.white, padding: "2px 3px" }}>
          Pada tahun 2045, jumlah penduduk Indonesia diproyeksikan akan mencapai{" "}
          <span style={{ fontWeight: "bold" }}>318,9 juta jiwa</span>, dengan{" "}
          <span style={{ fontWeight: "bold" }}>73 persen</span> populasi
          penduduk akan tinggal{" "}
          <span style={{ fontWeight: "bold" }}>di wilayah perkotaan</span>.
        </span>
      </Typography>

      <img
        src="assets/image/city-1.png"
        alt="City"
        style={{
          height: "300px",
          position: "absolute",
          zIndex: 3,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-delay="700"
      />
      <img
        src="assets/image/city-2.png"
        alt="City"
        style={{
          height: "300px",
          position: "absolute",
          zIndex: 2,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        data-aos="fade-up"
        data-aos-duration="350"
        data-aos-delay="350"
      />
      <img
        src="assets/image/city-3.png"
        alt="City"
        style={{
          height: "300px",
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        data-aos="fade-up"
        data-aos-duration="350"
      />
    </Box>
  );
};

export default Section3;
