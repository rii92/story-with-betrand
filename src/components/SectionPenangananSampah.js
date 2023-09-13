import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const SectionPenangananSampah = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        paddingX: { xs: "16px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        backgroundColor: { xs: color.white },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          height: { xs: "100vh" },
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          Penanganan sampah merupakan permasalahan yang terjadi di berbagai
          wilayah di Indonesia. Penanganan sampah di Indonesia terjadi secara
          fluktuatif setiap tahunnya.
        </Typography>
        <Typography variant="body1">
          Wilayah <b>Cekungan Bandung</b> ini merupakan salah satu wilayah
          dengan penanganan sampah yang terendah.
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionPenangananSampah;
