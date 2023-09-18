import { Box, Typography } from "@mui/material";
import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

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
      left: { xs: "60%" },
      bottom: { xs: "48px", sm: "80px" },
      zIndex: 4,
      image: "assets/image/motorcycle.png",
      alt: "Motor",
    },
    {
      width: { xs: "480px", sm: "740px" },
      left: { xs: "30%" },
      bottom: { xs: "48px", sm: "56px", md: "26px" },
      zIndex: 4,
      image: "assets/image/cars-01.png",
      alt: "Mobil",
    },
  ];

  const dataHubunganKejadianBanjirKePemukimanKumuh = [
    { x: 100, y: 86, z: 200 },
    { x: 83, y: 215, z: 260 },
    { x: 58, y: 47, z: 400 },
    { x: 67, y: 88, z: 280 },
    { x: 37, y: 27, z: 500 },
    { x: 39, y: 164, z: 200 },
    { x: 25, y: 14, z: 200 },
    { x: 25, y: 76, z: 200 },
    { x: 15, y: 24, z: 200 },
    { x: 14, y: 49, z: 200 },
    { x: 20, y: 148, z: 200 },
    { x: 247, y: 641, z: 200 },
    { x: 153, y: 401, z: 200 },
    { x: 6, y: 23, z: 200 },
    { x: 149, y: 258, z: 200 },
    { x: 57, y: 214, z: 200 },
    { x: 13, y: 21, z: 200 },
    { x: 79, y: 103, z: 200 },
    { x: 59, y: 86, z: 200 },
    { x: 45, y: 153, z: 200 },
    { x: 51, y: 81, z: 200 },
    { x: 62, y: 103, z: 200 },
    { x: 36, y: 103, z: 200 },
    { x: 16, y: 21, z: 200 },
    { x: 23, y: 65, z: 200 },
    { x: 96, y: 49, z: 200 },
    { x: 68, y: 214, z: 200 },
    { x: 38, y: 62, z: 200 },
    { x: 22, y: 23, z: 200 },
    { x: 23, y: 30, z: 200 },
    { x: 23, y: 40, z: 200 },
    { x: 20, y: 63, z: 200 },
    { x: 5, y: 46, z: 200 },
    { x: 20, y: 67, z: 200 },
  ];

  return (
    <>
      <Box
        sx={{
          width: { xs: "320px", sm: "400px" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "35%", md: "0%" },
          left: { xs: "0%" },
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
          }}
        >
          Selain itu, keberadaan pemukiman kumuh di sekitar bantaran sungai juga
          berpotensi menyebabkan banjir. Hal tersebut dapat terjadi karena
          kurangnya daerah resapan maupun akibat perilaku membuang sampah
          sembarangan yang dilakukan penduduk pada pemukiman tersebut.
          Berdasarkan data dari Publikasi Statistik Lingkungan Hidup BPS,
          terdapat korelasi positif antara jumlah desa yang memiliki pemukiman
          kumuh dengan kejadian banjir.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "320px", sm: "450px", md: "500px" },
          height: { xs: "50%", sm: "500px", md: "60%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "10%", md: "5%" },
          left: { xs: "20%", md: "36%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
          display: { xs: "flex" },
          flexDirection: { xs: "column" },
          justifyContent: { xs: "space-between" },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>
          Hubungan Jumlah Kejadian Banjir dan Keberadaan Pemukiman Kumuh
        </Typography>
        <ResponsiveContainer width="100%" height="70%">
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Kejadian banjir" />
            <YAxis
              type="number"
              dataKey="y"
              name="Keberadaan pemukiman kumuh (desa)"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter
              name="Hubungan Jumlah Kejadian Banjir dan Keberadaan Pemukiman Kumuh"
              data={dataHubunganKejadianBanjirKePemukimanKumuh}
              fill="#8884d8"
            />
          </ScatterChart>
        </ResponsiveContainer>

        <Typography
          sx={{
            position: "absolute",
            bottom: { xs: "170px", sm: "230px", md: "170px" },
            left: "-30px",
            transform: "rotate(-90deg)",
            fontSize: "12px",
          }}
        >
          Kejadian banjir
        </Typography>

        <Typography
          sx={{
            position: "absolute",
            bottom: { xs: "50px", sm: "70px", md: "50px" },
            left: { xs: "70px", sm: "130px", md: "130px" },
            fontSize: "12px",
          }}
        >
          Keberadaan pemukiman kumuh (desa)
        </Typography>

        <Typography sx={{ marginTop: "16px", fontSize: "12px" }}>
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

export default SectionSungaiKotorLanjutan2;
