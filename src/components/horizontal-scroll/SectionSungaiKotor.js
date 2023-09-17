import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionSungaiKotor = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw", md: "60%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "30%", md: "20%" },
          left: { xs: "40%", md: "35%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: { xs: "8px" },
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          Ketika pulang, Satria melihat sungai kotor yang berada di sekitar
          pemukiman kumuh.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Data dari Indeks Kualitas Lingkungan Hidup 2020 menunjukkan bahwa
          provinsi dengan kualitas air terendah adalah Jawa Barat (41,5),
          kemudian diikuti oleh DKI Jakarta (42,73). Kualitas air pada 2
          provinsi tersebut tergolong pada kategori Buruk.
        </Typography>
      </Box>

      <img
        src="assets/image/dirty-river.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSungaiKotor;
