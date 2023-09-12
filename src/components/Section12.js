import { Box, Grid, Typography } from "@mui/material";
import color from "../themes/Color";
import { Parallax, useParallax } from "react-scroll-parallax";

const Section12 = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "200vh" },
        padding: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
          marginX: { xs: "auto" },
          color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Tren perkotaan global menunjukkan perubahan signifikan dalam beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11 Sustainable Development Goals (SDGs), kebijakan perkotaan di seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan perkotaan berkelanjutan. 

            </Typography>
            <Box sx={{ height: "10vh" }} />
            <Typography
              variant="h4"
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
          marginX: { xs: "auto" },
          color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Masa depan perkotaan Indonesia adalah sebuah perkotaan berkelanjutan yang memiliki keseimbangan antar aspek sosial, lingkungan, dan ekonomi dengan tata kelola yang demokratis dan partisipatif. 

            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: { xs: color.white },  display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
          <Box>
            <Parallax speed={-5} >
            <img
              src="assets/image/unitedNation.png"
              style={{ width: { xs: "100%", sm: "400px", md: "500px" },
              marginX: { xs: "auto" },
              color: { xs: color.black }, }}
              alt="Road"
              className="slow"
            />

            </Parallax>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section12;
