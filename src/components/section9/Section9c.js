import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import color from "../../themes/Color";

const Section9c = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "344px" },
        position: { xs: "relative" },
        backgroundImage: "url('assets/image/section9/road.png')",
        backgroundRepeat: { xs: "repeat-x" },
      }}
    >
      <Box
        sx={{
          height: { xs: "86px" },
          paddingTop: { xs: "16px" },
          display: { xs: "flex" },
        }}
      >
        {Array.from({ length: 11 }).map((_, index) => (
          <Box
            sx={{ width: "5%" }}
            data-aos="fade-right"
            data-aos-duration="50"
            data-aos-delay={50 * index}
          >
            <img
              src="assets/image/section9/motorcycle.png"
              alt="Car"
              style={{ width: "100%" }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          padding: { xs: "4px 8px" },
          position: { xs: "absolute" },
          top: { xs: "16px" },
          right: { xs: "16px", sm: "40px" },
          backgroundColor: { xs: color.white },
          borderRadius: { xs: "8px" },
        }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Typography variant="body1">Motor memenuhi 55,9% jalan</Typography>
      </Box>

      <Box
        sx={{
          height: { xs: "86px" },
          paddingTop: { xs: "16px" },
          display: { xs: "flex" },
        }}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <Box
            sx={{ width: "5%" }}
            data-aos="fade-right"
            data-aos-duration="50"
            data-aos-delay={50 * index}
          >
            <img
              src="assets/image/section9/car.png"
              alt="Car"
              style={{ width: "100%" }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          padding: { xs: "4px 8px" },
          position: { xs: "absolute" },
          top: { xs: "102px" },
          right: { xs: "16px", sm: "40px" },
          backgroundColor: { xs: color.white },
          borderRadius: { xs: "8px" },
        }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Typography variant="body1">Mobil memenuhi 93,3% jalan</Typography>
      </Box>

      <Box
        sx={{
          height: { xs: "86px" },
          paddingTop: { xs: "16px" },
          display: { xs: "flex" },
        }}
      >
        {Array.from({ length: 13 }).map((_, index) => (
          <Box
            sx={{ width: "5%" }}
            data-aos="fade-right"
            data-aos-duration="50"
            data-aos-delay={50 * index}
          >
            <img
              src="assets/image/section9/truck.png"
              alt="Car"
              style={{ width: "100%" }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          padding: { xs: "4px 8px" },
          position: { xs: "absolute" },
          top: { xs: "188px" },
          right: { xs: "16px", sm: "40px" },
          backgroundColor: { xs: color.white },
          borderRadius: { xs: "8px" },
        }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Typography variant="body1">Truk memenuhi 68,5% jalan</Typography>
      </Box>

      <Box
        sx={{
          height: { xs: "86px" },
          paddingTop: { xs: "16px" },
          display: { xs: "flex" },
        }}
      >
        {Array.from({ length: 1 }).map((_, index) => (
          <Box
            sx={{ width: "7%" }}
            data-aos="fade-right"
            data-aos-duration="50"
            data-aos-delay={50 * index}
          >
            <img
              src="assets/image/section9/bus.png"
              alt="Car"
              style={{ width: "100%" }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          padding: { xs: "4px 8px" },
          position: { xs: "absolute" },
          top: { xs: "274px" },
          right: { xs: "16px", sm: "40px" },
          backgroundColor: { xs: color.white },
          borderRadius: { xs: "8px" },
        }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Typography variant="body1">Bus memenuhi 3,4% jalan</Typography>
      </Box>
    </Box>
  );
};

export default Section9c;
