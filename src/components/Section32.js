import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const Section32 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: { xs: "100%", sm: "400px", md: "1000px" },
          color: { xs: color.black },
          textAlign: { xs: "center" },
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        “Mari menata lingkungan, aksi nyata kita wujudkan kota berkelanjutan”
      </Typography>
    </Box>
  );
};

export default Section32;
