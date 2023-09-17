import { Box, Typography } from "@mui/material";

import color from "../../themes/Color";

const SectionPenyumbangSampah = () => {
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
          Menurut data dari MenLHK, rumah tangga menjadi penyumbang paling
          banyak di Kota Bandung. Sebesar 60% sampah di Kota Bandung berasal
          dari rumah tangga. Jenis sampah yang terbanyak merupakan sampah sisa
          makanan sebesar 45%, diikuti dengan sampah plastik 17%.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Sampah sisa makanan ini berbahaya karena ketika sampah tersebut
          membusuk, akan menghasilkan metana. Metana sendiri memiliki sifat
          mudah terbakar bahkan dapat menghasilkan ledakan. Selain itu, gas
          tersebut juga memiliki efek rumah kaca 25 kali lebih kuat dibandingkan
          dengan karbon dioksida, sehingga dapat memengaruhi iklim sekitar.
        </Typography>
      </Box>

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionPenyumbangSampah;
