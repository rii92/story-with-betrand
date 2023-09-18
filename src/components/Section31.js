import { Box, Card, CardMedia, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";

const Section31 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
   return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "450vh" },
        display: { xs: "block" },
        justifyContent: { xs: "center" },
        backgroundColor: { xs: color.white },
        paddingTop: {xs: "30px"}
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
        Meskipun berkembang secara pesat, wilayah metropolitan kemudian{" "}
        <strong>menghadapi berbagai permasalahan</strong> yang beragam, termasuk
        juga terkait isu lingkungan. Beberapa kota di atas, merupakan hanya
        sebagian dari wilayah metropolitan di Indonesia.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          color: { xs: color.black },
          marginX: { xs: "auto" },
          marginBottom: "50px",
        }}
      >
        Tren perkotaan global menunjukkan perubahan signifikan dalam beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11 Sustainable Development Goals (SDGs), kebijakan perkotaan di seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan perkotaan berkelanjutan.
      </Typography>
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
        <Parallax translateX={['400px', '0px']} >

        <CardMedia
          image="assets/image/umbrellaRain.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" }}}
        />
        </Parallax>
        <Parallax  translateX={['-400px', '0px']} >

        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          Dalam lingkungan fisik, pembangunan fisik tidak boleh{" "}
          <strong>menambah limpahan air hujan</strong> yang bisa menyebabkan
          banjir.
        </Typography>
        </Parallax>
      </Box>
      <Box sx={{ marginBottom: "50px", }}>
        <Parallax translateX={['400px', '0px']} >
        <CardMedia
          image="assets/image/consumePattern.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />
        </Parallax>
        <Parallax  translateX={['-400px', '0px']} >
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          <strong>Pola produksi dan konsumsi</strong> masyarakatnya tidak membuat <strong>volume sampah dan limbah bertambah tinggi.</strong>  
        </Typography>
        </Parallax>
      </Box>
      <Box sx={{ marginBottom: "50px", }}>
        <Parallax translateX={['400px', '0px']} >
        <CardMedia
          image="assets/image/sanitation.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />
        </Parallax>
        <Parallax  translateX={['-400px', '0px']} >
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          <strong>Sanitasi yang layak</strong> adalah prasyarat penting untuk meningkatkan kualitas hidup dan mencapai kota berkelanjutan dengan menciptakan lingkungan yang sehat, mengurangi risiko penyakit, dan meningkatkan akses masyarakat terhadap fasilitas dasar yang mendukung kehidupan yang lebih baik.  
        </Typography>
        </Parallax>
      </Box>
      <Box sx={{ marginBottom: "50px", }}>
        <Parallax translateX={['400px', '0px']} >
        <CardMedia
          image="assets/image/greenInfrastructure.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />
        </Parallax>
        <Parallax  translateX={['-400px', '0px']} >
        <Typography
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          Pembangunan berkelanjutan juga harus <strong>menyediakan infrastruktur hijau</strong> , yakni infrastruktur untuk aktivitas yang tidak menimbulkan emisi/polusi seperti jalur pedestrian arau jalur khusus sepeda. Masyarakat pun mendapatkan sarana/moda transportasi hijau untuk aktivitasnya sehari-hari.  
        </Typography>
        </Parallax>
      </Box>
    </Box>
  );
};

export default Section31;
