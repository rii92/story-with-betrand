import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../css/SectionHP.css";
import color from "../themes/Color";

const SectionHP = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "fit-content" },
        paddingBottom: { xs: "32px" },
        position: { xs: "sticky" },
        zIndex: { xs: 1 },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        backgroundColor: { xs: "#B1D3EF" },
      }}
    >
      <Box
        sx={{
          width: { xs: "328px" },
          height: { xs: "600px" },
          padding: { xs: "10px" },
          backgroundColor: { xs: color.black },
          borderRadius: { xs: "20px" },
        }}
        data-aos="zoom-in"
        data-aos-duration="500"
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
            <Box>
              <Typography>10.24 AM</Typography>
            </Box>
            <Box>
              <Typography>100%</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%" },
              height: { xs: "50px" },
              paddingX: { xs: "16px" },
              marginBottom: { xs: "8px" },
              display: { xs: "flex" },
              alignItems: { xs: "center" },
              backgroundColor: { xs: color.darkBlue },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px" },
                fontWeight: { xs: "bold" },
                color: { xs: color.white },
              }}
            >
              Kempis
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%" }, paddingX: { xs: "16px" } }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "20px" } }}>
              Ternyata, polusi Jakarta dapat mengurangi harapan hidup seseorang
              hingga <b>5,5 tahun</b>.
            </Typography>
            <Box
              sx={{
                width: { xs: "100%" },
                height: "150px",
                margin: { xs: "16px 0px 8px" },
                backgroundColor: { xs: color.lightBlue },
                borderRadius: { xs: "12px" },
              }}
            ></Box>
            <Typography variant="body1" sx={{ fontSize: "12px" }}>
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
                height: "150px",
                margin: { xs: "16px 0px 8px" },
                backgroundColor: { xs: color.lightBlue },
                borderRadius: { xs: "12px" },
              }}
            ></Box>
            <Typography variant="body1" sx={{ fontSize: "12px" }}>
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
