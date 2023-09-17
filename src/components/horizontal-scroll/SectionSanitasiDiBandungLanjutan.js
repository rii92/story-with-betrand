import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionSanitasiDiBandungLanjutan = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw", sm: "70vw", md: "60%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "10%" },
          left: { xs: "20%", sm: "10%", md: "20%" },
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
          Pada tahun 2020 terdapat 44,82% warga Kota Bandung buang air besar
          (BAB) di kolam/Sawah/Sungai/Danau/Laut (Badan Pusat Statistik)
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Buang Air Besar Sembarangan (BABS) memiliki dampak yang cukup buruk
          untuk kesehatan. Kontaminasi kotoran manusia akibat buang air besar
          sembarangan serta perilaku yang tidak higienis menyebabkan kematian
          anak, kesakitan, kekurangan gizi dan stunting, serta memengaruhi
          perkembangan kognitif anak (UNICEF, 2018).
        </Typography>
      </Box>

      <img
        src="assets/image/sanitasi-di-bandung.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSanitasiDiBandungLanjutan;
