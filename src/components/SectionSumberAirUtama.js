import { Box, Grid, Paper, Typography } from "@mui/material";
import color from "../themes/Color";
import { textAlign } from "@mui/system";
import { useCallback } from "react";
import {
  Tooltip,
  Line,
  YAxis,
  Legend,
  CartesianGrid,
  Label,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const SectionSumberAirUtama = () => {
  const data01 = [
    {
      name: "Air hujan",
      value: 60,
      fill: "#800080", // Ungu
    },
    {
      name: "Perkantoran",
      value: 4,
      fill: "#FFA500", // Oranye
    },
    {
      name: "Perniagaan",
      value: 6,
      fill: "#FFFF00", // Kuning
    },
    {
      name: "Pasar",
      value: 10,
      fill: "#008000", // Hijau
    },
    {
      name: "Fasilitas Publik",
      value: 13.3,
      fill: "#0000FF", // Biru
    },
    {
      name: "Kawasan",
      value: 5,
      fill: "#4B0082", // Indigo
    },
    {
      name: "Lain",
      value: 1.7,
      fill: "#FF0000", // Merah
    },
  ];
  const dataPenangananSampah = [
    {
      "name": "2019",
      "persentaseAirIsiUlang": 35.76,
      "persentaseLedengMeteran": 6.78,
      "persentaseSumurBor": 0.69,
      "persentaseSumurTerlindung": 9.28,
      "persentaseSumurTakTerlindung": 4.84,
      "persentaseMataAirTerlindung": 1.21,
      "persentaseAirPermukaan": 3.78,
      "persentaseAirHujan": 37.66,
      "persentaseLainnya": 0
    },
    {
      "name": "2020",
      "persentaseAirIsiUlang": 37.48,
      "persentaseLedengMeteran": 4.36,
      "persentaseSumurBor": 2.97,
      "persentaseSumurTerlindung": 12.57,
      "persentaseSumurTakTerlindung": 14.55,
      "persentaseMataAirTerlindung": 0.94,
      "persentaseAirPermukaan": 3.61,
      "persentaseAirHujan": 23.52,
      "persentaseLainnya": 0
    },
    {
      "name": "2021",
      "persentaseAirIsiUlang": 35.85,
      "persentaseLedengMeteran": 4.97,
      "persentaseSumurBor": 0.66,
      "persentaseSumurTerlindung": 9.08,
      "persentaseSumurTakTerlindung": 4.45,
      "persentaseMataAirTerlindung": 0.35,
      "persentaseAirPermukaan": 2.81,
      "persentaseAirHujan": 41.82,
      "persentaseLainnya": 0
    },
    {
      "name": "2022",
      "persentaseAirIsiUlang": 35.42,
      "persentaseLedengMeteran": 2.01,
      "persentaseSumurBor": 0.52,
      "persentaseSumurTerlindung": 10.06,
      "persentaseSumurTakTerlindung": 0.31,
      "persentaseMataAirTerlindung": 1,
      "persentaseAirPermukaan": 5.84,
      "persentaseAirHujan": 42.05,
      "persentaseLainnya": 0
    },
  ];

  const renderLegend = (value, entry) => {
    return <span style={{ color: "black" }}>{value}</span>;
  };
  const renderTooltip = (props) => {
    const { payload } = props;

    return (
      <Box
        sx={{
          width: { xs: "fit-content" },
          backgroundColor: { xs: color.white },
          padding: { xs: "8px 16px" },
          borderRadius: { xs: "8px" },
          boxShadow: { xs: "0px 2px 4px rgb(0,0,0,0.4)" },
        }}
      >
        <ul style={{ listStyle: "none" }}>
          {payload.map((entry, index) => (
            <li key={`item-${index}`}>
              {entry.name}: {entry.value}
            </li>
          ))}
        </ul>
      </Box>
    );
  };
  const renderLabel = useCallback((piePiece) => {
    return `${piePiece.name}: ${piePiece.value}%`;
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "150vh" },
        padding: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            width: { xs: "100%", sm: "400px", md: "500px" },
            marginX: { xs: "auto" },
            color: { xs: color.black },
          }}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginX: { xs: "auto" },
              color: { xs: color.black },
            }}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Typography style={{ textAlign: "center" }}>
              KOMPOSISI SAMPAH BERDASARKAN
              <br /> SUMBER SAMPAH
            </Typography>
            <PieChart width={730} height={250} label={{ value: "Komposisi" }}>
              <Pie
                data={data01}
                dataKey="value"
                name="name"
                nameKey="name"
                fill="#82ca9d"
                isAnimationActive={true}
                outerRadius={"75%"}
                label={renderLabel}
              />
            </PieChart>
          </Box>
        </Grid>
        <Grid
          item
          xs
          sx={{
            backgroundColor: { xs: color.white },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { md: "600px" }, height: { md: "350px" } }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataPenangananSampah}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" />
                <XAxis dataKey="name" type="category" />
                <Tooltip content={renderTooltip} />
                <Legend
                  verticalAlign="top"
                  height={60}
                  formatter={renderLegend}
                />
                <Line
                  name="Air Kemasan Bermerek/ AirIsi Ulang"
                  dataKey="persentaseAirIsiUlang"
                  stroke="#FF7F00" // Jingga
                />
                <Line
                  name="Ledeng Meteran/Eceran"
                  dataKey="persentaseLedengMeteran"
                  stroke="#FFFF00" // Kuning
                />
                <Line
                  name="Sumur bor/Pompa"
                  dataKey="persentaseSumurBor"
                  stroke="#00FF00" // Hijau
                />
                <Line
                  name="Sumur Terlindung"
                  dataKey="persentaseSumurTerlindung"
                  stroke="#0000FF" // Biru
                />
                <Line
                  name="Sumur TakTerlindung"
                  dataKey="persentaseSumurTakTerlindung"
                  stroke="#4B0082" // Indigo
                />
                <Line
                  name="Mata AirTerlindung/ TakTerlindung"
                  dataKey="persentaseMataAirTerlindung"
                  stroke="#9400D3" // Ungu
                />
                <Line
                  name="Air Permukaan"
                  dataKey="persentaseAirPermukaan"
                  stroke="#FF4500" // Oranye Merah
                />
                <Line
                  name="Air Hujan"
                  dataKey="persentaseAirHujan"
                  stroke="#FF0000" // Merah
                />
                <Line
                  name="Lainnya"
                  dataKey="persentaseLainnya"
                  stroke="#00CED1" // Biru Muda
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            width: { xs: "100%", sm: "400px", md: "500px" },
            marginX: { xs: "auto" },
            color: { xs: color.black },
          }}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <Box sx={{ marginTop: "50px" }}>
            <Typography>
              Menurut data dari menlhk, rumah tangga menjadi penyumbang paling
              banyak di Kota Bandung. Sebesar 60% sampah di Kota Bandung berasal
              dari rumah tangga. Jenis sampah yang terbanyak merupakan sampah
              sisa makanan sebesar 45%, diikuti dengan sampah plastik 17%.{" "}
              <br />
              Sampah sisa makanan ini berbahaya karena ketika sampah tersebut
              membusuk, akan menghasilkan metana. Metana sendiri memiliki sifat
              mudah terbakar bahkan dapat menghasilkan ledakan. Selain itu, gas
              tersebut juga memiliki efek rumah kaca 25 kali lebih kuat
              dibandingkan dengan karbon dioksida, sehingga dapat memengaruhi
              iklim sekitar.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionSumberAirUtama;
