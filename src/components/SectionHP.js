import { Box, Typography } from "@mui/material";
import { useLayoutEffect, } from "react";
import "../css/SectionHP.css";
import color from "../themes/Color";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionHP = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#hp", {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#hp-container",
        start: "top bottom",
        end: "+=400",
        scrub: 1,
      },
    });
  }, []);

  return (
    <Box
      id="hp-container"
      sx={{
        width: { xs: "100%" },
        height: { xs: "fit-content" },
        paddingBottom: { xs: "32px", sm: "48px" },
        position: { xs: "sticky" },
        zIndex: { xs: 1 },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        backgroundColor: { xs: "#B1D3EF" },
      }}
    >
      <Box
        id="hp"
        sx={{
          width: { xs: "328px", sm: "450px" },
          height: { xs: "645px", sm: "884.9px" },
          padding: { xs: "10px" },
          backgroundColor: { xs: color.black },
          borderRadius: { xs: "20px" },
          opacity: { xs: 0 },
          transform: { xs: "translate(0,100px)" },
        }}
      >
        <Box
          className="isi-hp"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100%" },
            paddingTop: { xs: "29px" },
            paddingBottom: { xs: "16px" },
            position: { xs: "relative" },
            backgroundColor: { xs: color.white },
            borderRadius: { xs: "10px" },
            overflowY: { xs: "auto" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%" },
              height: { xs: "30px" },
              paddingX: { xs: " 12px" },
              position: { xs: "fixed" },
              top: { xs: 9 },
              left: { xs: 0 },
              right: { xs: 0 },
              display: { xs: "flex" },
              justifyContent: { xs: "space-between" },
              alignItems: { xs: "center" },
              backgroundColor: { xs: color.black },
              borderRadius: { xs: "10px 10px 0 0" },
              color: { xs: color.white },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px" },
              }}
            >
              10.24 AM
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px" },
              }}
            >
              100%
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%" },
              paddingX: { xs: "16px" },
              paddingY: { xs: "16px", sm: "24px" },
              marginBottom: { xs: "8px" },
              display: { xs: "flex" },
              alignItems: { xs: "center" },
              backgroundColor: { xs: color.darkBlue },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", sm: "32px" },
                fontWeight: { xs: "bold" },
                color: { xs: color.white },
              }}
            >
              Kempis
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%" }, paddingX: { xs: "16px" } }}>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "20px", sm: "28px" } }}
            >
              Ternyata, polusi Jakarta dapat mengurangi harapan hidup seseorang
              hingga <b>5,5 tahun</b>.
            </Typography>
            <Box
              sx={{
                width: { xs: "100%" },
                height: { xs: "150px", sm: "200px" },
                margin: { xs: "16px 0px 8px" },
                position: { xs: "relative" },
                backgroundColor: { xs: color.lightBlue },
                borderRadius: { xs: "12px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "80px", sm: "130px" },
                  position: { xs: "absolute" },
                }}
              >
                <img
                  src="assets/image/ciggarate.png"
                  alt="Rokok"
                  style={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100px", sm: "150px" },
                  position: { xs: "absolute" },
                  left: { xs: "20%", sm: "25%" },
                }}
              >
                <img
                  src="assets/image/smoke-to-right.png"
                  alt="Jelaga"
                  style={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "120px", sm: "170px" },
                  position: { xs: "absolute" },
                  left: { xs: "50%", sm: "55%" },
                }}
              >
                <img
                  src="assets/image/smoke-to-left.png"
                  alt="Jelaga"
                  style={{ width: "100%" }}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "120px", sm: "170px" },
                  position: { xs: "absolute" },
                  bottom: { xs: "0%" },
                  left: { xs: "10%" },
                }}
              >
                <img
                  src="assets/image/dust.png"
                  alt="Jelaga"
                  style={{ width: "100%" }}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "120px", sm: "150px" },
                  position: { xs: "absolute" },
                  bottom: { xs: "0" },
                  left: { xs: "50%", sm: "55%" },
                }}
              >
                <img
                  src="assets/image/gas-emission.png"
                  alt="Jelaga"
                  style={{ width: "100%" }}
                />
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
            >
              Menurut data yang dikeluarkan oleh Kementerian Lingkungan Hidup
              dan Kehutanan (MenLHK), nilai Indeks Standar Pencemar Udara (ISPU)
              Jakarta mencapai 130 yang berarti udara di Jakarta tidak sehat.
              Nilai parameter yang tertinggi diakibatkan oleh PM 2.5, yaitu
              polutan udara dengan diameter kurang dari 2.5 mikron. PM 2.5 dapat
              bersumber dari tanah, debu, jelaga, asap, rokok, emisi gas buang,
              konstruksi dan pembongkaran.
            </Typography>

            <Box
              sx={{
                width: { xs: "100%" },
                height: { xs: "150px", sm: "200px" },
                margin: { xs: "16px 0px 8px" },
                backgroundColor: { xs: "white" },
                borderRadius: { xs: "12px" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "100%" },
                  width: { xs: "fit-content" },
                  marginX: { xs: "auto" },
                }}
              >
                <img
                  src="assets/image/people-with-lung-disease.png"
                  alt="Orang sakit paru"
                  style={{ height: "100%" }}
                />
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "12px", sm: "16px" } }}
            >
              Dari semua polutan yang terdaftar, PM2.5 merupakan ancaman
              kesehatan terbesar bagi kesehatan manusia. Ini karena PM2.5 dapat
              masuk jauh ke bagian paling sensitif dari saluran pernapasan saat
              terhirup dan memicu penyakit pernapasan seperti asma, bronkitis,
              dan emfisema.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionHP;
