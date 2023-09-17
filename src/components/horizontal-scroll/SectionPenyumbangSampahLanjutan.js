import { Box, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

import color from "../../themes/Color";

const SectionPenyumbangSampahLanjutan = () => {
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

  const renderColorfulLegendText = (value, entry) => {
    return <span style={{ color: "black" }}>{value}</span>;
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw", md: "40%" },
          height: { xs: "30vh", md: "50%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "15%" },
          left: { xs: "53%", sm: "45%", md: "0%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>
          Komposisi Sampah Berdasarkan Jenis Sampah
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
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
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Box
        sx={{
          width: { xs: "90vw", md: "40%" },
          height: { xs: "30vh", md: "50%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "15%" },
          left: { xs: "53%", sm: "45%", md: "45%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <Typography sx={{ textAlign: "center" }}>
          Komposisi Sampah Berdasarkan Sumber Sampah
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
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
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionPenyumbangSampahLanjutan;