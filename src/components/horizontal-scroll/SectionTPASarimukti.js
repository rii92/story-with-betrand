import { Box, Typography } from "@mui/material";

const SectionTPASarimukti = () => {
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
      left: { xs: "35%" },
      bottom: { xs: "72px", sm: "104px" },
      zIndex: 2,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px", sm: "250px" },
      left: { xs: "60%" },
      bottom: { xs: "48px", sm: "80px" },
      zIndex: 4,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "20%" },
      bottom: { xs: "96px", sm: "128px", md: "50px" },
      zIndex: 1,
      image: "assets/image/cars-01.png",
      alt: "Mobil",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "30%" },
      bottom: { xs: "48px", sm: "56px", md: "-20px" },
      zIndex: 4,
      image: "assets/image/cars-03.png",
      alt: "Mobil",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: { xs: "320px", sm: "450px" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "30%", md: "20%" },
          left: { xs: "0%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Saat dalam perjalanan ia melihat berita Kebakaran di TPA Sarimukti.
          Kebakaran di TPA Sarimukti terjadi sejak Sabtu (19/8/2023).
          Penyebabnya diduga akibat dari puntung rokok serta adanya gas metan
          dari tumpukan sampah. Hingga saat ini, area yang terbakar sekitar 10
          hektar di zona 4, 3 dan 2. Akibatnya, asap kebakaran yang ditimbulkan
          menyebar ke tiga desa, yaitu Desa Sarimukti, Desa Mandalasari, Desa
          Rajamandala. (Republika.co.id, 2023)
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
              md: kendaraan.bottom.md,
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
        src="assets/image/tpa-sarimukti.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionTPASarimukti;
