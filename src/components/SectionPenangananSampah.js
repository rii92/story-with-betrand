import { Box, Grid, Typography } from "@mui/material";
import {
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import color from "../themes/Color";

const SectionPenangananSampah = () => {
  const dataPenangananSampah = [
    {
      name: "2020",
      persentaseBimindo: 65.89,
      persentaseSarbagita: 53.66,
      persentaseJabodetabekpunjur: 61.14,
      persentaseBanjarBakula: 63.87,
      persentasePatungrayaAgung: 49.28,
      persentaseCekunganBandung: 54.91,
      persentaseMamminasata: 45.18,
      persentaseMebidangro: 52.8,
      persentaseGerbangkertosusila: 0,
      persentaseKedungsepur: 0,
    },
    {
      name: "2021",
      persentaseBimindo: 71.85,
      persentaseSarbagita: 69.72,
      persentaseJabodetabekpunjur: 71.27,
      persentaseBanjarBakula: 58.85,
      persentasePatungrayaAgung: 74.6,
      persentaseCekunganBandung: 24.95,
      persentaseMamminasata: 50.42,
      persentaseMebidangro: 33.75,
      persentaseGerbangkertosusila: 0,
      persentaseKedungsepur: 0,
    },
    {
      name: "2022",
      persentaseBimindo: 64.64,
      persentaseSarbagita: 80.25,
      persentaseJabodetabekpunjur: 66.19,
      persentaseBanjarBakula: 50.98,
      persentasePatungrayaAgung: 53.32,
      persentaseCekunganBandung: 57.55,
      persentaseMamminasata: 51.08,
      persentaseMebidangro: 72.81,
      persentaseGerbangkertosusila: 14.64,
      persentaseKedungsepur: 0,
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
                  name="Bimindo"
                  dataKey="persentaseBimindo"
                  stroke="#0772E2"
                />
                <Line
                  name="Sarbagita"
                  dataKey="persentaseSarbagita"
                  stroke="#13AFBE"
                />
                <Line
                  name="Jabodetabekpunjur"
                  dataKey="persentaseJabodetabekpunjur"
                  stroke="#EF0197"
                />
                <Line
                  name="Banjar Bakula"
                  dataKey="persentaseBanjarBakula"
                  stroke="#F17005"
                />
                <Line
                  name="Patungraya Agung"
                  dataKey="persentasePatungrayaAgung"
                  stroke="#FDA806"
                />
                <Line
                  name="Cekungan Bandung"
                  dataKey="persentaseCekunganBandung"
                  stroke="#84AD56"
                />
                <Line
                  name="Mamminasata"
                  dataKey="persentaseMamminasata"
                  stroke="#6039AD"
                />
                <Line
                  label=""
                  dataKey="persentaseMebidangro"
                  stroke="#02A9F0"
                />
                <Line
                  name="Gerbangkertosusila"
                  dataKey="persentaseGerbangkertosusila"
                  stroke="#E9417A"
                />
                <Line
                  name="Kedungsepur"
                  dataKey="persentaseKedungsepur"
                  stroke="#E37C58"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginTop: "50px" }}>
            <Typography
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Tren perkotaan global menunjukkan perubahan signifikan dalam
              beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11
              Sustainable Development Goals (SDGs), kebijakan perkotaan di
              seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan
              perkotaan berkelanjutan.
            </Typography>
            <Box sx={{ height: "10vh" }} />
            <Typography
              sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Masa depan perkotaan Indonesia adalah sebuah perkotaan
              berkelanjutan yang memiliki keseimbangan antar aspek sosial,
              lingkungan, dan ekonomi dengan tata kelola yang demokratis dan
              partisipatif.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionPenangananSampah;
