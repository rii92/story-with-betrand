import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section13 = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        padding: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          marginX: { xs: "auto" },
          color: { xs: color.black },
        }}
      >
        Masa depan perkotaan Indonesia adalah sebuah perkotaan berkelanjutan yang memiliki keseimbangan antar aspek sosial, lingkungan, dan ekonomi dengan tata kelola yang demokratis dan partisipatif. 
      </Typography>
    </Box>
  );
};

export default Section13;
