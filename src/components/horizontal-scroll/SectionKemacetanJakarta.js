import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionKemacetanJakarta = () => {
  const kendaraans = [
    {
      width: { xs: "180px" },
      left: { xs: "0%" },
      bottom: { xs: "96px" },
      zIndex: 1,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "40%" },
      bottom: { xs: "96px" },
      zIndex: 1,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "13%" },
      bottom: { xs: "96px" },
      zIndex: 1,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "5%" },
      bottom: { xs: "72px" },
      zIndex: 2,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "30%" },
      bottom: { xs: "72px" },
      zIndex: 2,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "10%" },
      bottom: { xs: "48px" },
      zIndex: 4,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "30%" },
      bottom: { xs: "48px" },
      zIndex: 4,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "180px" },
      left: { xs: "50%" },
      bottom: { xs: "48px" },
      zIndex: 4,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "480px" },
      left: { xs: "20%" },
      bottom: { xs: "96px" },
      zIndex: 1,
      image: "assets/image/car.png",
      alt: "Mobil",
    },
    {
      width: { xs: "480px" },
      left: { xs: "10%" },
      bottom: { xs: "72px" },
      zIndex: 2,
      image: "assets/image/car.png",
      alt: "Mobil",
    },
    {
      width: { xs: "480px" },
      left: { xs: "30%" },
      bottom: { xs: "48px" },
      zIndex: 3,
      image: "assets/image/car.png",
      alt: "Mobil",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: { xs: "80vw" },
          padding: { xs: "8px" },
          position: "absolute",
          top: { xs: "30%" },
          left: { xs: "20%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Jakarta merupakan salah satu kota yang sering terjadi kemacetan.
          Menurut data BPS, pada tahun 2022 kendaraan bermotor mencapai 26 juta
          unit kendaraan.
        </Typography>
      </Box>

      {kendaraans.map((kendaraan) => (
        <Box
          sx={{
            width: { xs: kendaraan.width.xs },
            position: { xs: "absolute" },
            left: { xs: kendaraan.left.xs },
            bottom: { xs: kendaraan.bottom.xs },
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

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionKemacetanJakarta;
