import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Section8.css";
import color from "../../themes/Color";

const Section8a = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Box
      sx={{
        paddingX: { xs: "16px", xl: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "100vh" },
          marginX: { xs: "auto" },
          display: { xs: "flex" },
          gap: { xs: "16px", md: "32px" },
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box
          sx={{ width: { xs: "fit-content" } }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Typography
            variant="h3"
            sx={{
              marginX: { xs: "auto" },
              marginBottom: { xs: "8px" },
              color: { xs: color.black },
              fontWeight: { xs: "bold" },
              textAlign: { xs: "center" },
            }}
          >
            Dia Satria
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "0px", sm: "150px", md: "200px" },
            display: { xs: "none", sm: "block" },
            transform: { xs: "translateY(-100px)" },
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="assets/image/arrow-left.png"
            alt="Arrow"
            style={{ width: "100%" }}
          />
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
            alt="Tangan"
          />
          <img
            src="assets/image/satria/satria.png"
            alt="Satria"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section8a;
