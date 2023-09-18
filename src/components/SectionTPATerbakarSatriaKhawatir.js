import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const SectionTPATerbakarSatriaKhawatir = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        position: { xs: "relative" },
        zIndex: { xs: 1 },
        backgroundColor: { xs: color.orange },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "650px" },
          paddingX: { xs: "16px" },
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "32px", sm: "48px" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Typography
          sx={{
            width: { xs: "100%", sm: "500px" },
            color: { xs: color.white },
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Mendengar kabar terkait asap dari TPA Sarimukti yang terbakar, Alin
          khawatir karena asap tersebut dapat menutupi pandangan pengendara.
          Namun, Asep meyakinkannya untuk tetap melanjutkan perjalanan.
        </Typography>
        <Box
          sx={{
            height: { xs: "300px", sm: "350px", md: "400px" },
            position: { xs: "relative" },
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <Box
            sx={{
              width: { xs: "80px" },
              position: { xs: "absolute" },
              left: { xs: "-40px" },
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="2500"
          >
            <img
              src="assets/image/bubble-question-mark-left.png"
              alt="Didin"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100px" },
              position: { xs: "absolute" },
              top: { xs: "20px" },
              right: { xs: "-50px" },
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="2500"
          >
            <img
              src="assets/image/bubble-question-mark-right.png"
              alt="Didin"
              style={{ width: "100%" }}
            />
          </Box>
          <img
            src="assets/image/satria/satria-is-thinking.png"
            alt="Didin"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTPATerbakarSatriaKhawatir;
