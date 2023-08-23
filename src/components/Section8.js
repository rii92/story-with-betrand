import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section8 = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        backgroundColor: { xs: color.white },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        placeItems: { xs: "center" },
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%" },
          marginX: { xs: "auto" },
          textAlign: { xs: "center" },
          color: { xs: color.black },
        }}
      >
        Dia Didin
      </Typography>
      <Box sx={{ width: { xs: "300px", sm: "350px", md: "400px" } }}>
        <img
          src="assets/image/didin.png"
          alt="Didin"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Section8;
