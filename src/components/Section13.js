import { Box, Grid, Paper, Typography } from "@mui/material";
import color from "../themes/Color";
import { Parallax, useParallax } from "react-scroll-parallax";

const Section23 = () => {
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
                  backgroundColor: "blue" // Ganti dengan efek bayangan yang sesuai
                }}
                elevation={4}
              >
                <img
                  src="assets/image/handshake.png"
                  alt="Road"
                  className="slow"
                />
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

export default Section23;
