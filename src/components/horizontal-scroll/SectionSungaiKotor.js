import { Box, Typography } from "@mui/material";

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
      left: { xs: "20%" },
      bottom: { xs: "96px", sm: "128px", md: "50px" },
      zIndex: 1,
      image: "assets/image/cars-02.png",
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
          top: { xs: "20%", sm: "30%", md: "10%" },
          left: { xs: "0%", md: "5%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: { xs: "8px" },
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          Ketika pulang, Alin melihat sungai kotor yang berada di sekitar
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
          width: { xs: "320px", sm: "600px", md: "600px" },
          position: "absolute",
          top: { xs: "20%", md: "10%" },
          left: { xs: "30%", md: "45%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
          overflow: { xs: "hidden" },
        }}
      >
        <img
          src="assets/image/kualitas-air.jpg"
          alt="Peta Kualitas Air"
          style={{ width: "100%" }}
        />
        <Typography sx={{ fontSize: "12px" }}>
          Sumber: Indeks Kualitas Lingkungan Hidup (Kementerian Lingkungan Hidup
          dan Kehutanan, 2020)
        </Typography>
      </Box>

      {/* {kendaraans.map((kendaraan) => (
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
      ))} */}

      <img
        src="assets/image/jalan-sungai.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSungaiKotor;
