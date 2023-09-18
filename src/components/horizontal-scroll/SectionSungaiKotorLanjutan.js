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
import color from "../../themes/Color";

const SectionSungaiKotorLanjutan = () => {
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
  const dataHubunganSungaiKePemukimanKumuh = [
    { x: 3601, y: 86, z: 200 },
    { x: 4928, y: 215, z: 260 },
    { x: 1119, y: 47, z: 400 },
    { x: 1477, y: 88, z: 280 },
    { x: 1373, y: 27, z: 500 },
    { x: 2902, y: 164, z: 200 },
    { x: 1262, y: 14, z: 200 },
    { x: 2122, y: 76, z: 200 },
    { x: 319, y: 24, z: 200 },
    { x: 114, y: 49, z: 200 },
    { x: 217, y: 148, z: 200 },
    { x: 5377, y: 641, z: 200 },
    { x: 7748, y: 401, z: 200 },
    { x: 365, y: 23, z: 200 },
    { x: 7177, y: 258, z: 200 },
    { x: 1240, y: 214, z: 200 },
    { x: 660, y: 21, z: 200 },
    { x: 1042, y: 103, z: 200 },
    { x: 2211, y: 86, z: 200 },
    { x: 2061, y: 153, z: 200 },
    { x: 1519, y: 81, z: 200 },
    { x: 1759, y: 103, z: 200 },
    { x: 932, y: 103, z: 200 },
    { x: 461, y: 21, z: 200 },
    { x: 1317, y: 65, z: 200 },
    { x: 1556, y: 49, z: 200 },
    { x: 2446, y: 214, z: 200 },
    { x: 1459, y: 62, z: 200 },
    { x: 589, y: 23, z: 200 },
    { x: 574, y: 30, z: 200 },
    { x: 601, y: 40, z: 200 },
    { x: 826, y: 63, z: 200 },
    { x: 1332, y: 46, z: 200 },
    { x: 3950, y: 67, z: 200 },
  ];

  return (
    <>
      <Box
        sx={{
          width: { xs: "30%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "35%", md: "0%" },
          left: { xs: "5%", md: "0%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
          borderRadius: { xs: "8px", sm: "16px" },
          boxShadow: { xs: "4px 4px 5px rgb(0,0,0,0.5)" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          Hal tersebut diperparah dengan keberadaan pemukiman kumuh di sekitar
          bantaran sungai. Berdasarkan data dari Publikasi Statistik Lingkungan
          Hidup BPS, terdapat korelasi positif antara jumlah desa yang memiliki
          sungai dan jumlah desa yang memiliki pemukiman kumuh. Provinsi dengan
          sungai yang lebih banyak, cenderung memiliki pemukiman kumuh yang
          lebih banyak.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "30%", sm: "40%", md: "50%" },
          height: { xs: "40%", md: "55%" },
          paddingY: { xs: "16px" },
          paddingRight: { xs: "24px" },
          position: "absolute",
          top: { xs: "20%", md: "10%" },
          left: { xs: "40%", md: "36%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
          borderRadius: { xs: "8px", sm: "16px" },
          boxShadow: { xs: "4px 4px 5px rgb(0,0,0,0.5)" },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>
          Hubungan Keberadaan Sungai dan Keberadaan Pemukiman Kumuh
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 45,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Keberadaan sungai (desa)" />
            <YAxis
              type="number"
              dataKey="y"
              name="Keberadaan pemukiman kumuh (desa)"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter
              name="Hubungan Keberadaan Sungai dan Keberadaan Pemukiman Kumuh"
              data={dataHubunganSungaiKePemukimanKumuh}
              fill="#8884d8"
            />
          </ScatterChart>
        </ResponsiveContainer>
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

export default SectionSungaiKotorLanjutan;
