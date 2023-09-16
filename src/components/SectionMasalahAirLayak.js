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

const SectionMasalahAirLayak = () => {
  const dataPenangananSampah = [
    {
      name: "2020",
      persentaseKotaPalembang: 97.13,
      persentaseKabupatenOganIlir: 57.16,
      persentaseKabupatenOganKomeringIlir: 65.28,
      persentaseKabupatenBanyuasin: 51.95,
    },
    {
      name: "2021",
      persentaseKotaPalembang: 97.56,
      persentaseKabupatenOganIlir: 70.62,
      persentaseKabupatenOganKomeringIlir: 57.37,
      persentaseKabupatenBanyuasin: 47.09,
    },
    {
      name: "2022",
      persentaseKotaPalembang: 96.44,
      persentaseKabupatenOganIlir: 70.55,
      persentaseKabupatenOganKomeringIlir: 66.76,
      persentaseKabupatenBanyuasin: 87.08,
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
                  name="Kota Palembang"
                  dataKey="persentaseKotaPalembang"
                  stroke="#0772E2"
                />
                <Line
                  name="Kabupaten Ogan Ilir"
                  dataKey="persentaseKabupatenOganIlir"
                  stroke="#13AFBE"
                />
                <Line
                  name="Kabupaten Ogan Komering Ilir"
                  dataKey="persentaseKabupatenOganKomeringIlir"
                  stroke="#EF0197"
                />
                <Line
                  name="Kabupaten Banyuasin"
                  dataKey="persentaseKabupatenBanyuasin"
                  stroke="#F17005"
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

export default SectionMasalahAirLayak;

