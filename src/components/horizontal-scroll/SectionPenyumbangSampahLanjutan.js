import { Box, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";


const SectionPenyumbangSampahLanjutan = () => {
  const kendaraans = [
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

  const dataJenisSampah = [
    { name: "Sisa Makanan", value: 44.52 },
    { name: "Kayu/Ranting", value: 3.98 },
    { name: "Kertas/Karton", value: 13.12 },
    { name: "Plastik", value: 16.7 },
    { name: "Logam", value: 0.9 },
    { name: "Kain", value: 4.75 },
    { name: "Karet/Kulit", value: 2.38 },
    { name: "Kaca", value: 1.97 },
    { name: "Lainnya", value: 11.68 },
  ];

  const dataSumberSampah = [
    { name: "Rumah Tangga", value: 60 },
    { name: "Perkantoran", value: 4 },
    { name: "Perniagaan", value: 6 },
    { name: "Pasar", value: 10 },
    { name: "Fasilitas Publik", value: 13.3 },
    { name: "Kawasan", value: 5 },
    { name: "Lain", value: 1.7 },
  ];

  const COLORS = [
    "#5D6FC2",
    "#A3CB79",
    "#EDC760",
    "#D26666",
    "#8DBFDC",
    "#66A174",
    "#E18355",
    "#8B60B0",
    "#D17BC8",
  ];

  const renderCustomizedLabel = ({ percent }) => {
    return `${(percent * 100).toFixed(2)}%`;
  };

  const renderBlackLegendText = (value, entry) => {
    return <span style={{ color: "black" }}>{value}</span>;
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: "30%", sm: "25%", md: "40%" },
          height: { xs: "70%", sm: "75%", md: "80%" },
          padding: { xs: "8px 16px", sm: "8px 24px 16px" },
          position: "absolute",
          top: { xs: "5%", sm: "5%", md: "0%" },
          left: { xs: "0%", sm: "10%", md: "0%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
          display: { xs: "flex" },
          flexDirection: { xs: "column" },
          justifyContent: { xs: "space-between" },
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          Komposisi Sampah Berdasarkan Jenis Sampah
        </Typography>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart>
            <Typography>Komposisi Sampah Berdasarkan Jenis Sampah</Typography>
            <Pie
              data={dataJenisSampah}
              label={renderCustomizedLabel}
              outerRadius={80}
              dataKey="value"
            >
              {dataJenisSampah.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend formatter={renderBlackLegendText} />
          </PieChart>
        </ResponsiveContainer>
        <Typography sx={{ marginTop: "8px", fontSize: "12px" }}>
          Sumber: Sistem Informasi Pengelolaan Sampah Nasional (Kementerian
          Lingkungan Hidup dan Kehutanan, 2021)
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "30%", sm: "25%", md: "40%" },
          height: { xs: "65%", sm: "70%", md: "75%" },
          padding: { xs: "8px 16px", sm: "8px 24px 16px" },
          position: "absolute",
          top: { xs: "5%", sm: "5%", md: "0%" },
          left: { xs: "34%", sm: "40%", md: "45%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
          display: { xs: "flex" },
          flexDirection: { xs: "column" },
          justifyContent: { xs: "space-between" },
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          Komposisi Sampah Berdasarkan Sumber Sampah
        </Typography>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart>
            <Pie
              data={dataSumberSampah}
              label={renderCustomizedLabel}
              outerRadius={80}
              dataKey="value"
            >
              {dataSumberSampah.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend formatter={renderBlackLegendText} />
          </PieChart>
        </ResponsiveContainer>
        <Typography sx={{ marginTop: "8px", fontSize: "12px" }}>
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

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionPenyumbangSampahLanjutan;
