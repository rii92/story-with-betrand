import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Section8.css";
import color from "../../themes/Color";

const SectionHobiSatria = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Box
      sx={{
        position: { xs: "relative" },
        backgroundColor: { xs: color.lightBlue },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "700px" },
          paddingX: { xs: "16px", xl: "0px" },
          paddingY: { xs: "24px" },
          marginX: { xs: "auto" },
          position: { xs: "relative" },
          zIndex: { xs: 1 },
          display: { xs: "flex" },
          gap: { xs: "16px", md: "32px" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "end", sm: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box
          sx={{
            width: { xs: "800px", sm: "570px" },
            position: { xs: "absolute" },
            top: { xs: "28%" },
          }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img
            src="assets/image/house.png"
            alt="Rumah"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "310px", md: "450px" },
            position: { xs: "relative" },
            zIndex: { xs: 1 },
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginBottom: { xs: "8px" }, fontSize: { xs: "14px" } }}
          >
            <span style={{ padding: "1px 2px", backgroundColor: color.white }}>
              Satria adalah seorang yang hobi bersepeda. Saat ia bersepeda dalam
              kegiatan Car Free Day (CFD), dia mulai melihat dampak polusi udara
              yang buruk di jalanan kota. Meskipun merupakan “Hari Bebas
              Kendaraan”, langit Jakarta tetap tampak gelap gulita dipenuhi
              kabut polusi.
            </span>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "14px" } }}>
            <span style={{ padding: "1px 2px", backgroundColor: color.white }}>
              Dengan rasa ingin tahu yang tinggi, Satria mencari informasi
              terkait fenomena ini.
            </span>
          </Typography>
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
            alt="Tangan Satria"
          />
          <img
            src="assets/image/satria/satria.png"
            alt="Satria"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "120px", sm: "170px", md: "130px" },
          position: { xs: "absolute" },
          backgroundColor: { xs: "#9B8C9D" },
          bottom: { xs: 0 },
        }}
      ></Box>
    </Box>
  );
};

export default SectionHobiSatria;
