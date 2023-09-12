import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const Section8 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Box
      sx={{
        paddingX: { xs: "16px", xl: "0px" },
        backgroundColor: { xs: color.white },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "100vh", sm: "700px" },
          marginX: { xs: "auto" },
          display: { xs: "flex" },
          gap: { xs: "16px", md: "32px" },
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box
          sx={{ width: { xs: "100%", sm: "500px", md: "600px" } }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Typography
            sx={{
              marginX: { xs: "auto" },
              marginBottom: { xs: "8px" },
              color: { xs: color.black },
            }}
          >
            Di suatu tempat di Jakarta, tinggallah seorang mahasiswa perantauan
            yang bernama Satria. Dia merupakan anggota mapala yang berencana
            untuk mendaki gunung di sekitaran Bandung untuk mengisi waktu
            liburannya sebelum pulang.
          </Typography>
          <Typography
            sx={{
              marginX: { xs: "auto" },
              color: { xs: color.black },
            }}
          >
            Sebelum keberangkatan, Satria melihat berita di sosial medianya yang
            mengatakan polusi Jakarta dapat mengurangi harapan hidup seseorang
            hingga 5,5 tahun. Dia pun penasaran dan mencari tahu hal tersebut.
          </Typography>
        </Box>
        <Box
          sx={{ height: { xs: "300px", sm: "400px", md: "500px" } }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="assets/image/satria.png"
            alt="Didin"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section8;
