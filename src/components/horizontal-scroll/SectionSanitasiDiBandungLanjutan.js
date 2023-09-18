import { Box, Typography } from "@mui/material";

const SectionSanitasiDiBandungLanjutan = () => {
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
      width: { xs: "180px", sm: "250px" },
      left: { xs: "35%" },
      bottom: { xs: "72px", sm: "104px" },
      zIndex: 2,
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
      left: { xs: "10%" },
      bottom: { xs: "72px", sm: "104px", md: "34px" },
      zIndex: 2,
      image: "assets/image/cars-02.png",
      alt: "Mobil",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "30%" },
      bottom: { xs: "48px", sm: "56px", md: "-20px" },
      zIndex: 3,
      image: "assets/image/cars-05.png",
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
          left: { xs: "30%", sm: "20%", md: "20%" },
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
          Pada tahun 2020 terdapat 44,82% warga Kota Bandung buang air besar
          (BAB) di Kolam/Sawah/Sungai/Danau/Laut (Badan Pusat Statistik)
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
        src="assets/image/bg-city.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSanitasiDiBandungLanjutan;
