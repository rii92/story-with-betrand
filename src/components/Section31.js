import { Box, Card, CardMedia, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const Section31 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "300vh" },
        display: { xs: "block" },
        justifyContent: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          color: { xs: color.black },
          marginX: { xs: "auto" },
          marginBottom: "50px",
        }}
      >
        Pembangunan perkotaan berkelanjutan dicirikan oleh kondisi terwujudnya
        keseimbangan ekologis berupa keseimbangan antara daerah terbangun dan
        ruang hijau terbuka (RTH), peningkatan kualitas lingkungan, dan
        penggunaan sumber daya terbarukan. Pembangunan ini juga berusaha
        melakukan konservasi energi dan pengembangan energi alternatif.
      </Typography>
      <Box sx={{ marginBottom: "50px", }}>
        <CardMedia
          image="assets/image/umbrellaRain.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
          data-aos="fade-right"
          data-aos-duration="20000"
        />
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
          data-aos="fade-left"
          data-aos-duration="20000"
        >
          Dalam lingkungan fisik, pembangunan fisik tidak boleh{" "}
          <strong>menambah limpahan air hujan</strong> yang bisa menyebabkan
          banjir.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "50px", }}>
        <CardMedia
          image="assets/image/consumePattern.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
          data-aos="fade-right"
          data-aos-duration="20000"
        />
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
          data-aos="fade-left"
          data-aos-duration="20000"
        >
          <strong>Pola produksi dan konsumsi</strong> masyarakatnya tidak membuat <strong>volume sampah dan limbah bertambah tinggi.</strong>  
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "50px", }}>
        <CardMedia
          image="assets/image/sanitation.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
          data-aos="fade-right"
          data-aos-duration="20000"
        />
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
          data-aos="fade-left"
          data-aos-duration="20000"
        >
          <strong>Sanitasi yang layak</strong> adalah prasyarat penting untuk meningkatkan kualitas hidup dan mencapai kota berkelanjutan dengan menciptakan lingkungan yang sehat, mengurangi risiko penyakit, dan meningkatkan akses masyarakat terhadap fasilitas dasar yang mendukung kehidupan yang lebih baik.  
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "50px", }}>
        <CardMedia
          image="assets/image/greenInfrastructure.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
          data-aos="fade-right"
          data-aos-duration="20000"
        />
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
          data-aos="fade-left"
          data-aos-duration="20000"
        >
          Pembangunan berkelanjutan juga harus <strong>menyediakan infrastruktur hijau</strong> , yakni infrastruktur untuk aktivitas yang tidak menimbulkan emisi/polusi seperti jalur pedestrian arau jalur khusus sepeda. Masyarakat pun mendapatkan sarana/moda transportasi hijau untuk aktivitasnya sehari-hari.  
        </Typography>
      </Box>
    </Box>
  );
};

export default Section31;
