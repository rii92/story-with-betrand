import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../../themes/Color";

const Section8c = () => {
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
          height: { xs: "100vh", sm: "600px", md: "100vh" },
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
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography
            variant="body1"
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginX: { xs: "auto" },
              color: { xs: color.black },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Sebelum keberangkatan, Satria melihat berita di media sosialnya yang
            mengatakan polusi Jakarta dapat mengurangi harapan hidup seseorang
            hingga <strong>5,5 tahun</strong>.
          </Typography>
        </Box>
        <Box
          sx={{
            position: { xs: "relative" },
            height: { xs: "400px", sm: "450px", md: "500px" },
            transform: "translateY(-100px)",
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="assets/image/satria/satria-with-smartphone.png"
            alt="Satria"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section8c;