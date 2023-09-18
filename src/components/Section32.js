import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import {useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section32 = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#endsection", {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#endsection-container",
        start: "top bottom",
        end: "+=400",
        scrub: 1,
      },
    });
  }, []);
  return (
    <Box
    id="endsection-container"
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
      id="endsection"
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
    </Box>
  );
};

export default Section32;
