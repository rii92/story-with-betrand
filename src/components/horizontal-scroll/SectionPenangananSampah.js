import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionPenangananSampah = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw" },
          padding: { xs: "8px" },
          position: "absolute",
          top: { xs: "20%" },
          left: { xs: "20%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            marginBottom: { xs: "8px" },
          }}
        >
          Penanganan sampah merupakan permasalahan yang terjadi di berbagai
          wilayah di Indonesia. Penanganan sampah di Indonesia terjadi secara
          fluktuatif setiap tahunnya.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Wilayah Kota Bandung, Kabupaten Bandung, Kabupaten Bandung Barat, dan
          Kota Cimahi (Cekungan Bandung) ini merupakan salah satu wilayah dengan
          penanganan sampah yang terendah.
        </Typography>
      </Box>

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionPenangananSampah;
