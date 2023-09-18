import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const Section30 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "30vh" },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          color: { xs: color.black },
          textAlign: { xs: "center" },
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Tren perkotaan global menunjukkan perubahan signifikan dalam beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11 Sustainable Development Goals (SDGs), kebijakan perkotaan di seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan perkotaan berkelanjutan. 
      </Typography>
    </Box>
  );
};

export default Section30;
