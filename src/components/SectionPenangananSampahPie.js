import { Box, Grid, Typography } from "@mui/material";
import color from "../themes/Color";
import { Pie, PieChart } from "recharts";
import { useCallback } from "react";

const SectionPenangananSampahPie = () => {
  const data01 = [
    {
      name: "Rumah Tangga",
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
  const data02 = [
    {
      name: "Group Sisa Makanan",
      value: 44.52,
      fill: "#FF0000", // Merah
    },
    {
      name: "Kayu/Ranting",
      value: 3.98,
      fill: "#FFA500", // Oranye
    },
    {
      name: "Kertas/Karton",
      value: 13.12,
      fill: "#FFFF00", // Kuning
    },
    {
      name: "Plastik",
      value: 16.7,
      fill: "#008000", // Hijau
    },
    {
      name: "Logam",
      value: 0.9,
      fill: "#0000FF", // Biru
    },
    {
      name: "Kain",
      value: 4.75,
      fill: "#4B0082", // Indigo
    },
    {
      name: "Karet/Kulit",
      value: 2.38,
      fill: "#800080", // Ungu
    },
    {
      name: "Kaca",
      value: 1.97,
      fill: "#FF1493", // Merah Muda
    },
    {
      name: "Lainnya",
      value: 11.68,
      fill: "#00FFFF", // Cyan
    },
  ];

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
              <br /> JENIS SAMPAH
            </Typography>
            <PieChart width={730} height={250}>
              <Pie
                data={data02}
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

export default SectionPenangananSampahPie;
