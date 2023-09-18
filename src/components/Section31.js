import { Box, CardMedia, Typography } from "@mui/material";
import color from "../themes/Color";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section31 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#umbrella',
      {
        opacity: 0,
        x: 100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#umbrella-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#umbrella-text',
      {
        opacity: 0,
        x: -100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#umbrella-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#food',
      {
        opacity: 0,
        x: 100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#food-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#food-text',
      {
        opacity: 0,
        x: -100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#food-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#sanitation',
      {
        opacity: 0,
        x: 100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#sanitation-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#sanitation-text',
      {
        opacity: 0,
        x: -100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#sanitation-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#greenhouse',
      {
        opacity: 0,
        x: 100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#greenhouse-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#greenhouse-text',
      {
        opacity: 0,
        x: -100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#greenhouse-container',
          start: 'top 80%', // Mulai animasi saat elemen container berjarak 80% dari atas
          end: 'center center', // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "450vh" },
        display: { xs: "block" },
        justifyContent: { xs: "center" },
        backgroundColor: { xs: color.white },
        paddingTop: { xs: "30px" },
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
        Tren perkotaan global menunjukkan perubahan signifikan dalam beberapa
        dekade terakhir. Dalam upaya mencapai Tujuan 11 Sustainable Development
        Goals (SDGs), kebijakan perkotaan di seluruh dunia tak terkecuali
        Indonesia, berfokus pada pembangunan perkotaan berkelanjutan.
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
      <Box sx={{ marginBottom: "50px" }} id="umbrella-container">
      <CardMedia
        id="umbrella"
          image="assets/image/umbrellaRain.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />

        <Typography
        id="umbrella-text"
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
            // opacity: 0,
            // transform: "translate(100,0px)",
          }}
        >
          Dalam lingkungan fisik, pembangunan fisik tidak boleh{" "}
          <strong>menambah limpahan air hujan</strong> yang bisa menyebabkan
          banjir.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "50px" }} id="food-container">
        <CardMedia
        id="food"
          image="assets/image/consumePattern.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />

        <Typography
        id="food-text"
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          <strong>Pola produksi dan konsumsi</strong> masyarakatnya tidak
          membuat <strong>volume sampah dan limbah bertambah tinggi.</strong>
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "50px" }} id="sanitation-container">
        <CardMedia
        id="sanitation"
          image="assets/image/sanitation.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />

        <Typography
        id="sanitation-text"
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          <strong>Sanitasi yang layak</strong> adalah prasyarat penting untuk
          meningkatkan kualitas hidup dan mencapai kota berkelanjutan dengan
          menciptakan lingkungan yang sehat, mengurangi risiko penyakit, dan
          meningkatkan akses masyarakat terhadap fasilitas dasar yang mendukung
          kehidupan yang lebih baik.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "50px" }} id="greenhouse-container">
        <CardMedia
        id="greenhouse"
          image="assets/image/greenInfrastructure.png"
          sx={{ maxWidth: "300px", height: "200px", marginX: { xs: "auto" } }}
        />

        <Typography
        id="greenhouse-text"
          variant="h5"
          sx={{
            marginX: { xs: "auto" },
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          Pembangunan berkelanjutan juga harus{" "}
          <strong>menyediakan infrastruktur hijau</strong> , yakni infrastruktur
          untuk aktivitas yang tidak menimbulkan emisi/polusi seperti jalur
          pedestrian arau jalur khusus sepeda. Masyarakat pun mendapatkan
          sarana/moda transportasi hijau untuk aktivitasnya sehari-hari.
        </Typography>
      </Box>
    </Box>
  );
};

export default Section31;
