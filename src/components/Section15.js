import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section15 = () => {
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
       Sedangkan dari sudut pandang  <span style={{ fontWeight: "bold" }}>lingkungan</span>, pembangunan perkotaan berkelanjutan dicirikan oleh kondisi berupa terwujudnya keseimbangan ekologis berupa keseimbangan antara daerah terbangun dan ruang hijau terbuka (RTH), peningkatan kualitas lingkungan, dan penggunaan sumber daya terbarukan. Pembangunan ini juga berusaha melakukan konservasi energi dan pengembangan n energi alternatif. Dalam lingkungan fisik, pembangunan fisik tidak boleh menambah limpasan air hujan yang bisa menyebabkan banjir. Pola produksi dan konsumsi masyarakatnya tidak membuar volume sampah dan limbah bertambah tinggi. Bangunan yang didirikan pun menerapkan konsep bangunan yang ramah lingkungan. 

Pembangunan berkelanjutan juga menyediakan infrastruktur hijau, yakni infrastruktur untuk aktivitas yang tidak menimbulkan emisi/ polusi seperti jalur pedestrian arau jalur khusus sepeda . Masyarakat pun mendapatkan sarana/moda transportasi hijau untuk aktivitasnya sehari-hari . 

      </Typography>
    </Box>
  );
};

export default Section15;
