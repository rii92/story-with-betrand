import color from "../themes/Color";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import { BgContainer } from "./bg-container";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";

const Section13 = () => {
  const parallax = useParallax({
    rotate: [0, 360],
    shouldAlwaysCompleteAnimation: true,
  });
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "150vh" },
        padding: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs
          sx={{
            backgroundColor: { xs: color.white },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Parallax speed={-5}>
              <Paper
                ref={parallax.ref}
                style={{
                  position: "relative",
                  border: "1px solid red", // Ganti dengan warna border yang sesuai
                  borderRadius: "50%", // Ganti dengan border radius yang sesuai
                  height: "25rem", // Ganti dengan tinggi yang sesuai
                  width: "25rem", // Ganti dengan lebar yang sesuai
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem", // Ganti dengan ukuran font yang sesuai
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "blue", // Ganti dengan efek bayangan yang sesuai
                }}
                elevation={4}
              >
                <img
                  src="assets/image/unitedNation.png"
                  alt="Road"
                  className="slow"
                />
                <div
                  style={{
                    position: "absolute", // Ganti dengan warna latar belakang yang sesuai
                    // Ganti dengan border radius yang sesuai
                    height: "3.5rem", // Ganti dengan tinggi yang sesuai
                    width: "3.5rem", // Ganti dengan lebar yang sesuai
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformOrigin: "center",
                    willChange: "transform",
                    top: "-15%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src="assets/image/walkingPeople.png"
                    alt="Road"
                    className="slow"
                    style={{ width: "150px" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute", // Ganti dengan warna latar belakang yang sesuai
                    // Ganti dengan border radius yang sesuai
                    height: "3.5rem", // Ganti dengan tinggi yang sesuai
                    width: "3.5rem", // Ganti dengan lebar yang sesuai
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformOrigin: "center",
                    willChange: "transform",
                    right: "0",
                    top: "50%",
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <AirplanemodeActiveOutlinedIcon fontSize="30px" />
                </div>
                <div
                  style={{
                    position: "absolute", // Ganti dengan warna latar belakang yang sesuai
                    // Ganti dengan border radius yang sesuai
                    height: "3.5rem", // Ganti dengan tinggi yang sesuai
                    width: "3.5rem", // Ganti dengan lebar yang sesuai
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformOrigin: "center",
                    willChange: "transform",
                    bottom: "-15%",
                    left: "50%",
                    transform: "translate(-50%, 50%) rotate(180deg)",
                  }}
                >
                  <img
                    src="assets/image/walkingPeople.png"
                    alt="Road"
                    className="slow"
                    style={{ width: "150px" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute", // Ganti dengan warna latar belakang yang sesuai
                    // Ganti dengan border radius yang sesuai
                    height: "3.5rem", // Ganti dengan tinggi yang sesuai
                    width: "3.5rem", // Ganti dengan lebar yang sesuai
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformOrigin: "center",
                    willChange: "transform",
                    top: "50%",
                    left: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <AirplanemodeActiveOutlinedIcon fontSize="30px" />
                </div>
              </Paper>
            </Parallax>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginTop: "50px" }}>
            <Typography
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Tren perkotaan global menunjukkan perubahan signifikan dalam
              beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11
              Sustainable Development Goals (SDGs), kebijakan perkotaan di
              seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan
              perkotaan berkelanjutan.
            </Typography>
            <Box sx={{ height: "10vh" }} />
            <Typography
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Masa depan perkotaan Indonesia adalah sebuah perkotaan
              berkelanjutan yang memiliki keseimbangan antar aspek sosial,
              lingkungan, dan ekonomi dengan tata kelola yang demokratis dan
              partisipatif.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section13;
