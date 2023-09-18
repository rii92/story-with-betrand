import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionSungaiKotorLanjutan2 = () => {
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
      left: { xs: "60%" },
      bottom: { xs: "48px", sm: "80px" },
      zIndex: 4,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
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
          width: { xs: "320px", sm: "450px", md: "500px" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "35%", md: "10%" },
          left: { xs: "10%", md: "0%" },
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
          padding: { xs: "8px 16px" },
          position: "absolute",
          top: { xs: "20%", sm: "35%", md: "10%" },
          left: { xs: "43%", sm: "45%", md: "43%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
        }}
      >
        <Typography
          sx={{
            width: "300px",
            marginBottom: "8px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Judul tabel Persentase Penanganan Sampah menurut Wilayah Kota
          Metropolitan
        </Typography>
        <table style={{ borderCollapse: "collapse", border: "0px" }}>
          <thead>
            <tr
              style={{
                backgroundColor: color.lightBlue,
              }}
            >
              <th style={{ padding: "3px" }}>Wilayah</th>
              <th style={{ padding: "3px" }}>Penanganan Sampah (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>Patungraya Agung</td>
              <td>74.60</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Bimindo</td>
              <td>71.85</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Jabodetabekpunjur</td>
              <td>71.27</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Sarbagita</td>
              <td>69.72</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Banjar Bakula</td>
              <td>58.85</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Mamminasata</td>
              <td>50.42</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Mebidangro</td>
              <td>33.75</td>
            </tr>
            <tr
              style={{ borderBottom: "1px solid black", textAlign: "center" }}
            >
              <td>Cekungan Bandung</td>
              <td>24.95</td>
            </tr>
          </tbody>
        </table>
        <Typography sx={{ width: "300px", marginTop: "8px", fontSize: "12px" }}>
          Sumber: Sistem Informasi Pengelolaan Sampah Nasional (Kementerian
          Lingkungan Hidup dan Kehutanan, 2021)
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

export default SectionSungaiKotorLanjutan2;
