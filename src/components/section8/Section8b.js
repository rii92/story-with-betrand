import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../../themes/Color";

const Section8b = () => {
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
          height: { xs: "100vh", sm: "700px", md: "100vh" },
          marginX: { xs: "auto" },
          display: { xs: "flex" },
          gap: { xs: "16px", md: "32px" },
          flexDirection: { xs: "column", sm: "row-reverse" },
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
            variant="body1"
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginBottom: { xs: "8px" },
              color: { xs: color.black },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Dia merupakan anggota mapala yang berencana untuk mendaki gunung di
            sekitaran Bandung untuk mengisi waktu liburannya sebelum pulang.
            Sebelum keberangkatan, Satria melihat berita di sosial medianya yang
            mengatakan polusi Jakarta dapat mengurangi harapan hidup seseorang
            hingga 5,5 tahun. Dia pun penasaran dan mencari tahu hal tersebut.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100px", sm: "130px", md: "160px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(0px,60px)",
              sm: "translate(-208px, -78px)",
              md: "translate(-265px, -100px)",
            },
          }}
        >
          <img
            src="assets/image/satria/bag-1.png"
            alt="Satria"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "75px", sm: "110px", md: "140px" },
            position: { xs: "absolute" },
            zIndex: { xs: 1 },
            transform: {
              xs: "translate(0px,55px)",
              sm: "translate(-208px, -80px)",
              md: "translate(-265px, -100px)",
            },
          }}
        >
          <img
            src="assets/image/satria/bag-2.png"
            alt="Satria"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            height: { xs: "300px", sm: "400px", md: "500px" },
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img
            src="assets/image/satria/satria-2.png"
            alt="Satria"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section8b;
