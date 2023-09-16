import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionTPASarimukti = () => {
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
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Saat ia melewati daerah di sekitar TPA Sarimukti, asap pekat
          mengganggu pandangannya. Hal ini disebabkan karena kebakaran di TPA
          Sarimukti yang terjadi sejak Sabtu (19/8/2023). Penyebabnya diduga
          akibat dari puntung rokok serta adanya gas metan dari tumpukan sampah.
          Hingga saat ini, area yang terbakar sekitar 10 hektar di zona 4, 3 dan
          2. Akibatnya, asap kebakaran yang ditimbulkan menyebar ke tiga desa.
          Ketiga desa itu, yaitu Desa Sarimukti, Desa Mandalasari, Desa
          Rajamandala.
        </Typography>
      </Box>

      <img
        src="assets/image/tpa-sarimukti.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionTPASarimukti;
