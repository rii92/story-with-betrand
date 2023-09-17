import { Box, Typography } from "@mui/material";
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
import color from "../../themes/Color";

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
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Wilayah Kota Bandung, Kabupaten Bandung, Kabupaten Bandung Barat, dan
          Kota Cimahi (Cekungan Bandung) ini merupakan salah satu wilayah dengan
          penanganan sampah yang terendah.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "90vw", md: "53%" },
          height: { xs: "30vh", md: "50%" },
          paddingY: { xs: "16px" },
          paddingRight: { xs: "24px" },
          position: "absolute",
          top: { xs: "20%" },
          left: { xs: "53%", sm: "45%", md: "43%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataPenangananSampah}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis type="number" />
            <XAxis dataKey="name" type="category" />
            <Tooltip content={renderTooltip} />
            <Legend verticalAlign="top" height={60} formatter={renderLegend} />
            {/* <Line name="Bimindo" dataKey="persentaseBimindo" stroke="#0772E2" />
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
            /> */}
            <Line
              name="Cekungan Bandung"
              dataKey="persentaseCekunganBandung"
              stroke="#84AD56"
            />
            {/* <Line
              name="Mamminasata"
              dataKey="persentaseMamminasata"
              stroke="#6039AD"
            />
            <Line label="" dataKey="persentaseMebidangro" stroke="#02A9F0" />
            <Line
              name="Gerbangkertosusila"
              dataKey="persentaseGerbangkertosusila"
              stroke="#E9417A"
            />
            <Line
              name="Kedungsepur"
              dataKey="persentaseKedungsepur"
              stroke="#E37C58"
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <img src="assets/image/city.jpg" alt="City" style={{ height: "100%" }} />
    </>
  );
};

export default SectionPenangananSampah;
