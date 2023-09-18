import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Section8.css";
import color from "../../themes/Color";

const SectionPengenalanSatria = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Box
      sx={{
        position: { xs: "relative" },
        backgroundColor: { xs: color.lightBlue },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "650px" },
          paddingX: { xs: "16px", xl: "0px" },
          paddingY: { xs: "40px" },
          marginX: { xs: "auto" },
          position: { xs: "relative" },
          zIndex: { xs: 1 },
          display: { xs: "flex" },
          gap: { xs: "16px", md: "32px" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "end", sm: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box
          sx={{
            height: { xs: "550px", sm: "570px" },
            position: { xs: "absolute" },
            top: { xs: "5%" },
            left: { sm: "15%", md: "25%" },
          }}
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img
            src="assets/image/monas.png"
            alt="Monas"
            style={{ height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "310px", md: "450px" },
            position: { xs: "relative" },
            zIndex: { xs: 1 },
          }}
        >
          <Typography variant="body1" sx={{ fontSize: { xs: "14px" } }}>
            <span style={{ padding: "1px 2px", backgroundColor: color.white }}>
              Dia <b>Alin</b>, seorang mahasiswa yang berkuliah di Jakarta.
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            position: { xs: "relative" },
            height: { xs: "400px", sm: "450px", md: "500px" },
            transform: "translateX(100px)",
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            className="tangan-satria"
            src="assets/image/satria/tangan-satria.png"
            alt="Tangan Satria"
          />
          <img
            src="assets/image/satria/satria.png"
            alt="Satria"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100%" },
          position: { xs: "absolute" },
          bottom: { xs: "40px", sm: "70px", md: "50px" },
        }}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <img
          src="assets/image/building/background-building-in-satria-3.png"
          alt="Building"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100%" },
          position: { xs: "absolute" },
          bottom: { xs: "40px", sm: "70px", md: "50px" },
        }}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <img
          src="assets/image/building/background-building-in-satria-2.png"
          alt="Building"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100%" },
          position: { xs: "absolute" },
          bottom: { xs: "40px", sm: "70px", md: "50px" },
        }}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="1600"
      >
        <img
          src="assets/image/building/background-building-in-satria-1.png"
          alt="Building"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "120px", sm: "170px", md: "130px" },
          position: { xs: "absolute" },
          backgroundColor: { xs: "#9B8C9D" },
          bottom: { xs: 0 },
          borderRadius: { xs: "100% 100% 0 0" },
        }}
      ></Box>
    </Box>
  );
};

export default SectionPengenalanSatria;
