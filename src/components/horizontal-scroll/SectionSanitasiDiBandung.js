import { Box, Typography } from "@mui/material";

const SectionSanitasiDiBandung = () => {
  const kendaraans = [
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
      width: { xs: "180px", sm: "250px" },
      left: { xs: "10%" },
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
      left: { xs: "10%" },
      bottom: { xs: "72px", sm: "104px", md: "34px" },
      zIndex: 2,
      image: "assets/image/cars-04.png",
      alt: "Mobil",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "30%" },
      bottom: { xs: "48px", sm: "56px", md: "-30px" },
      zIndex: 3,
      image: "assets/image/cars-06.png",
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
          top: { xs: "30%", sm: "30%", md: "25%" },
          left: { xs: "5%" },
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
          Di perjalanan Alin juga melihat informasi dari baliho bahwa daerah
          perkotaan di Bandung masih menghadapi tantangan serius dalam hal
          sanitasi toilet yang layak.
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
        src="assets/image/sanitasi-di-bandung.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSanitasiDiBandung;
