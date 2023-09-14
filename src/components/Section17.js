import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section17 = () => {
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
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
     “Sudahkah Anda memahami peran untuk berkontribusi mewujudkan perkotaan masa depan yang kita inginkan?” 
    </Typography>
  </Box>
  );
};

export default Section17;
