import { Box, Grid, Typography } from "@mui/material";
import color from "../themes/Color";
import { Parallax } from "react-scroll-parallax";

const SanitasiLayakSection = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        padding: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          marginX: { xs: "auto" },
          color: { xs: color.black },
        }}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h1>Sanitasi Layak</h1>
        Asep pun bercerita, kita mau bangun sendiri juga udah sesak pemukiman. Dulu kita biasa kalau mau BAB di bantaran sungai. Asep dan 45% warga Kota Bandung lainnya BAB di perairan (Nih datanya di Badan Pusat Statistik Kota Bandung (bps.go.id) beritanya di note). Hal tersebut menjadi salah satu penyebab tercemarnya sungai-sungai di Kota Bandung (Sumber data Badan Pusat Statistik Kota Bandung (bps.go.id).
Tapi pas 3 tahun lalu, walikota buatin itu. Sekarang, tahun 22 udah 96% yang wcnya pake tangki. (Datanya di Badan Pusat Statistik Kota Bandung (bps.go.id)). Dan sekitar 82% masyarakat Kota Bandung yang sudah memiliki fasilitas BAB sendiri. (datanya di Badan Pusat Statistik Kota Bandung (bps.go.id)). Kalau aku sih, langsung ke kali aja. Tau sendiri kan? Antrinya panjang. Orangnya banyak tapi toiletnya sedikit. Belum lagi ada yang rusak.
(Cuman gatau irisannya berapa. Soalnya aku baca berita juga ada beberapa warga yg punya fasilitas sendiri, tp ga layak gitu. Langsung buang ke sungai. Jadi, walaupun datanya bagus” nih, tapi masalahnya blm selesai di situ. Karena setelah banyak fasilitas pun, masih blm menampung semua. Apalagi perlu antri. Blm lagi ada yang toilet yg rusak. Gitu” lah. Cuman data pendukungnya hmmmm :D).

      </Typography>
    </Box>
  );
};

export default SanitasiLayakSection;
