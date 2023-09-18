import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const SectionProyeksiJumlahOrangDiKota = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#city",
      {
        opacity: 0,
        y: 100, // Geser objek ke kanan sejauh 100px
      },
      {
        opacity: 1,
        y: 0, // Geser objek kembali ke posisi awal
        duration: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#city-container",
          start: "top 30%", // Mulai animasi saat elemen container berjarak 80% dari atas
          end: "center center", // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#jumlah-penduduk",
      {
        opacity: 0,
        x: -100, // Geser objek ke kiri sejauh 100px
      },
      {
        opacity: 1,
        x: 0, // Geser objek kembali ke posisi awal
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#city-container",
          start: "top 80%", // Mulai animasi saat elemen container berjarak 80% dari atas
          end: "center center", // Akhiri animasi saat elemen container berada di tengah layar
          scrub: true,
        },
      }
    );
  })

  return (
    <Box
      sx={{
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        overflowX: { xs: "hidden" },
        backgroundColor: color.white,
      }}
    >
      <Box
        sx={{
          paddingY: { xs: "250px", md: "300px" },
          width: { xs: "100%", xl: "1200px" },
          marginX: { xs: "auto" },
          position: { xs: "relative" },
          backgroundColor: color.white,
        }}
        id="city-container"
      >
        <Parallax
          translateX={["-100px", "0px"]}
          speed={10}
          style={
            lg
              ? {
                  width: "300px",
                  position: "absolute",
                  top: "56px",
                  left: "56px",
                  zIndex: 8,
                }
              : md
              ? {
                  width: "300px",
                  position: "absolute",
                  top: "56px",
                  left: "56px",
                  zIndex: 8,
                }
              : sm
              ? {
                  width: "200px",
                  position: "absolute",
                  top: "56px",
                  left: "56px",
                  zIndex: 8,
                }
              : { width: "100px", position: "absolute", top: "56px", zIndex: 8 }
          }
        >
          <img
            src="assets/image/cloud-1.png"
            alt="Awan"
            style={{ width: "100%" }}
          />
        </Parallax>

        <Parallax
          translateX={["100px", "0px"]}
          speed={10}
          style={
            lg
              ? {
                  width: "250px",
                  position: "absolute",
                  top: "56px",
                  right: "88px",
                  zIndex: 8,
                }
              : md
              ? {
                  width: "200px",
                  position: "absolute",
                  top: "56px",
                  right: "88px",
                  zIndex: 8,
                }
              : sm
              ? {
                  width: "150px",
                  position: "absolute",
                  top: "56px",
                  right: "72px",
                  zIndex: 8,
                }
              : {
                  width: "100px",
                  position: "absolute",
                  top: "56px",
                  right: "32px",
                  zIndex: 8,
                }
          }
        >
          <img
            src="assets/image/cloud-2.png"
            alt="Awan"
            style={{ width: "100%" }}
          />
        </Parallax>

        <Parallax
          translateX={["100px", "80px"]}
          speed={10}
          style={
            lg
              ? {
                  width: "300px",
                  position: "absolute",
                  top: "160px",
                  right: "240px",
                  zIndex: 8,
                }
              : md
              ? {
                  width: "250px",
                  position: "absolute",
                  top: "136px",
                  right: "160px",
                  zIndex: 8,
                }
              : sm
              ? {
                  width: "180px",
                  position: "absolute",
                  top: "128px",
                  right: "112px",
                  zIndex: 8,
                }
              : {
                  width: "130px",
                  position: "absolute",
                  top: "112px",
                  right: "40px",
                  zIndex: 8,
                }
          }
        >
          <img
            src="assets/image/cloud-3.png"
            alt="Awan"
            style={{ width: "100%" }}
          />
        </Parallax>

        <Typography
          variant="h5"
          sx={{
            width: { xs: "100%", sm: "450px" },
            position: { xs: "relative" },
            zIndex: { xs: 4 },
            // marginX: {xs: "auto"}
            // fontSize: { xs: "12px", sm: "16px" },
          }}
          // data-aos="fade-right"
          id="jumlah-penduduk"
        >
          <span style={{ backgroundColor: color.white, padding: "2px 3px" }}>
            Pada tahun 2045, jumlah penduduk Indonesia diproyeksikan akan
            mencapai <b>318,9 juta jiwa</b>, dengan <b>73 persen</b> populasi
            penduduk akan tinggal <b>di wilayah perkotaan</b>. (BAPPENAS, 2019)
          </span>
        </Typography>

        <img
          className="image-city"
          src="assets/image/city-1.png"
          alt="City"
          style={{
            position: "absolute",
            zIndex: 3,
            bottom: 0,
            left: "50%",
            // transform: "translateX(-50%)",
          }}
          id="city"
        />
        <img
          className="image-city"
          src="assets/image/city-2.png"
          alt="City"
          style={{
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            left: "50%",
            // transform: "translateX(-50%)",
          }}
          id="city"
          // data-aos="fade-up"
          // data-aos-duration="800"
          // data-aos-delay="800"
        />
        <img
          className="image-city"
          src="assets/image/city-3.png"
          alt="City"
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          id="city"
          // data-aos="fade-up"
          // data-aos-duration="800"
        />
      </Box>
    </Box>
  );
};

export default SectionProyeksiJumlahOrangDiKota;
