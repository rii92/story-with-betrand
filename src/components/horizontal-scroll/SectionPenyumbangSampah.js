import { Box, Typography } from "@mui/material";

const SectionPenyumbangSampah = () => {
  const kendaraans = [
    {
      width: { xs: "180px", sm: "250px" },
      left: { xs: "53%" },
      bottom: { xs: "96px", sm: "128px" },
      zIndex: 1,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px", sm: "250px" },
      left: { xs: "13%" },
      bottom: { xs: "96px", sm: "128px" },
      zIndex: 1,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "3%" },
      bottom: { xs: "80px", sm: "128px" },
      zIndex: 1,
      image: "assets/image/car.png",
      alt: "Mobil",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: { xs: "320px", sm: "450px", md: "500px" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "10%", sm: "30%", md: "10%" },
          left: { xs: "20%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
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

      {kendaraans.map((kendaraan) => (
        <Box
          sx={{
            width: {
              xs: kendaraan.width.xs,
              sm: kendaraan.width.sm,
              md: kendaraan.width.xs,
            },
            position: { xs: "absolute" },
            left: { xs: kendaraan.left.xs },
            bottom: {
              xs: kendaraan.bottom.xs,
              sm: kendaraan.bottom.sm,
              md: kendaraan.bottom.xs,
            },
            zIndex: { xs: kendaraan.zIndex },
          }}
        >
          <img
            src={kendaraan.image}
            alt={kendaraan.alt}
            style={{ width: "100%" }}
          />
        </Box>
      ))}

      <img
        src="assets/image/bg-city.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionPenyumbangSampah;
