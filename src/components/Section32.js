import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

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
      <Parallax speed={10}>

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
        “Mari menata lingkungan, <strong>aksi nyata</strong> kita wujudkan <strong>kota berkelanjutan</strong>”
      </Typography>
      </Parallax>
    </Box>
  );
};

export default Section32;
