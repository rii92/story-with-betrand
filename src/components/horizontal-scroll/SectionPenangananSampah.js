import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionSungaiKotorLanjutan2 = () => {
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
          width: { xs: "90vw", sm: "70vw", md: "40%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "35%", md: "10%" },
          left: { xs: "20%", sm: "10%", md: "0%" },
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
          Penanganan sampah merupakan permasalahan yang terjadi di berbagai
          wilayah di Indonesia. Penanganan sampah di Indonesia terjadi secara
          fluktuatif setiap tahunnya.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          Wilayah Kota Bandung, Kabupaten Bandung, Kabupaten Bandung Barat, dan
          Kota Cimahi (Cekungan Bandung) ini merupakan salah satu wilayah dengan
          penanganan sampah yang terendah.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "fit-content" },
          padding: { xs: "8px" },
          position: "absolute",
          top: { xs: "20%" },
          left: { xs: "53%", sm: "45%", md: "43%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <table border={1}>
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th>Wilayah</th>
              <th>Penanganan Sampah (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Patungraya Agung</td>
              <td>74.60</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Bimindo</td>
              <td>71.85</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Jabodetabekpunjur</td>
              <td>71.27</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Sarbagita</td>
              <td>69.72</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Banjar Bakula</td>
              <td>58.85</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Mamminasata</td>
              <td>50.42</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Mebidangro</td>
              <td>33.75</td>
            </tr>
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td>Cekungan Bandung</td>
              <td>24.95</td>
            </tr>
          </tbody>
        </table>
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

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionSungaiKotorLanjutan2;
