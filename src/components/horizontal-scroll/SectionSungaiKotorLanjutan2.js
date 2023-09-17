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
            <Line
              name="Cekungan Bandung"
              dataKey="persentaseCekunganBandung"
              stroke="#84AD56"
            />
          </LineChart>
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

export default SectionSungaiKotorLanjutan2;
