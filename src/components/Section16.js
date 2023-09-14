import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section16 = () => {
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
       Secara <span style={{ fontWeight: "bold" }}>ekonomi</span>, pembangunan kawasan perkoraan yang berkelanjuran harus menjamin penyediaan lapangan kerja, pemberdayaan, peningkaran produkriviras dan daya saing kora (competitiveness) dan peningkaran kesejahreraan masyarakarnya. 
      </Typography>
    </Box>
  );
};

export default Section16;
