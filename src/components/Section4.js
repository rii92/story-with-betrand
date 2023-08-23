import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import { Parallax } from "react-scroll-parallax";

const Section4 = () => {
  return (
    <>
      <Box
        sx={{
          paddingX: "16px",
          paddingTop: "80px",
          display: { xs: "block", md: "flex" },
          flexDirection: { md: "row-reverse" },
          justifyContent: { md: "center" },
          gap: { md: "40px" },
          backgroundColor: color.darkYellow,
        }}
      >
        <Box
          sx={{
            width: { xs: "180px", md: "200px" },
            height: { xs: "180px", md: "200px" },
            marginX: { xs: "auto", md: "0px" },
            marginBottom: { xs: "32px", md: "0px" },
            backgroundColor: { xs: color.semiDarkYellow },
            borderRadius: { xs: "100%" },
            overflow: { xs: "hidden" },
          }}
        >
          <Parallax translateY={["80px", "0px"]} speed={50}>
            <img
              src="assets/image/bambang-brodjonegoro.png"
              alt="Bambang Brodjonegoro"
              style={{ width: "100%" }}
            />
          </Parallax>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "500px" } }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              fontStyle: { xs: "italic" },
              color: { xs: color.black },
              fontWeight: { xs: "bolder" },
            }}
          >
            “Mengingat sumber pertumbuhan akan berada di perkotaan, maka
            konsentrasi penduduk di perkotaan harus diurus dengan strategi
            pengelolaan metropolitan berkelanjutan dengan sebaik-baiknya,”
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: { xs: "8px" },
              fontSize: { xs: "12px", sm: "16px" },
              color: { xs: color.black },
              fontWeight: { xs: "bolder" },
            }}
          >
            Menteri PPN/Kepala Bappenas Periode 2016-2019, Bambang Brodjonegoro
          </Typography>
        </Box>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          backgroundColor: color.lightBlue,
          position: "relative",
          zIndex: 15,
        }}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#A68B03"
          fill-opacity="1"
          d="M0,96L30,90.7C60,85,120,75,180,106.7C240,139,300,213,360,224C420,235,480,181,540,138.7C600,96,660,64,720,85.3C780,107,840,181,900,186.7C960,192,1020,128,1080,112C1140,96,1200,128,1260,122.7C1320,117,1380,75,1410,53.3L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Section4;
