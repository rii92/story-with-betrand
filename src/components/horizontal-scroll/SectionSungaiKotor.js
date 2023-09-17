import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionSungaiKotor = () => {
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
      width: { xs: "180px", sm: "250px" },
      left: { xs: "10%" },
      bottom: { xs: "48px", sm: "80px" },
      zIndex: 4,
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
      left: { xs: "3%" },
      bottom: { xs: "80px", sm: "128px" },
      zIndex: 1,
      image: "assets/image/car.png",
      alt: "Mobil",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "40%" },
      bottom: { xs: "48px", sm: "80px" },
      zIndex: 3,
      image: "assets/image/car.png",
      alt: "Mobil",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw", md: "35%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "30%", md: "10%" },
          left: { xs: "40%", md: "5%" },
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

      <Box
        sx={{
          width: { xs: "90vw", md: "50%" },
          padding: { xs: "8px 16px" },
          position: "absolute",
          top: { xs: "20%", sm: "30%", md: "20%" },
          left: { xs: "40%", md: "43%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <img
          src="assets/image/peta-kualitas-air.png"
          alt="Peta Kualitas Air"
          style={{ width: "100%" }}
        />
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
        src="assets/image/dirty-river.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSungaiKotor;
