import { Box, Grid, Paper, Typography } from "@mui/material";
import color from "../themes/Color";
import { Label, Pie, PieChart } from "recharts";
import { textAlign } from "@mui/system";

const SectionPenangananSampahPie = () => {
  const data01 = [
    {
      name: "Rumah Tannga",
      value: 60,
    },
    {
      name: "Perkantoran",
      value: 4,
    },
    {
      name: "Perniagaan",
      value: 6,
    },
    {
      name: "Pasar",
      value: 10,
    },
    {
      name: "Fasilitas Publik",
      value: 13.3,
    },
    {
      name: "Kawasan",
      value: 5,
    },
    {
      name: "Lain",
      value: 1.7,
    },
  ];
  const data02 = [
    {
      name: "Group Sisa Makanan",
      value: 44.52,
    },
    {
      name: "Kayu/Ranting",
      value: 3.98,
    },
    {
      name: "Kertas/Karton",
      value: 13.12,
    },
    {
      name: "Plastik",
      value: 16.7,
    },
    {
      name: "Logam",
      value: 0.9,
    },
    {
      name: "Kain",
      value: 4.75,
    },
    {
      name: "Karet/Kulit",
      value: 2.38,
    },
    {
      name: "Kaca",
      value: 1.97,
    },
    {
      name: "Lainnya",
      value: 11.68,
    },
  ];

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
        <Grid item sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000">
          <Box
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginX: { xs: "auto" },
              color: { xs: color.black },
            }}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Typography style={{ textAlign: "center" }}>KOMPOSISI SAMPAH BERDASARKAN<br /> SUMBER SAMPAH</Typography>
            <PieChart width={730} height={250} label={{ value: "Komposisi" }}>
              
              <Pie
                data={data01}
                dataKey="value"
                name="name"
                nameKey="name"
                fill="#82ca9d"
                label
              />
            </PieChart>
          </Box>
        </Grid>
        <Grid item xs sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000">
          <Box sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginX: { xs: "auto" },
              color: { xs: color.black },
            }}
            data-aos="zoom-in-up"
            data-aos-duration="1000">
              <Typography style={{ textAlign: "center" }}>KOMPOSISI SAMPAH BERDASARKAN<br /> JENIS SAMPAH</Typography>
            <PieChart width={730} height={250}>
            <Pie
                data={data02}
                dataKey="value"
                name="name"
                nameKey="name"
                fill="#82ca9d"
                label
              />
            </PieChart>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{
                width: { xs: "100%", sm: "400px", md: "500px" },
                marginX: { xs: "auto" },
                color: { xs: color.black },
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000">
          <Box sx={{ marginTop: "50px" }}>
            <Typography
              
            >
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
