import { Box, Grid, Typography } from "@mui/material";
import color from "../themes/Color";
import { Parallax } from "react-scroll-parallax";

const BridgingSectionSecond = () => {
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
        <h1>Bridging</h1>
        Selesai ke puncak, Satria pun pulang kampung ke Palembang setelah itu ke Banyuasin.

      </Typography>
    </Box>
  );
};

export default BridgingSectionSecond;
