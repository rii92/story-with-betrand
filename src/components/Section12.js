import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section12 = () => {
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
        Tren perkotaan global menunjukkan perubahan signifikan dalam beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11 Sustainable Development Goals (SDGs), kebijakan perkotaan di seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan perkotaan berkelanjutan. 
      </Typography>
    </Box>
  );
};

export default Section12;
