import { Box, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import color from "../../themes/Color";

const Section9a = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "600px", sm: "400px", md: "300px" },
        paddingX: { xs: "16px", sm: "0px" },
        paddingTop: { xs: "200px", sm: "0px" },
        position: { xs: "relative" },
        display: { xs: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "start", sm: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Parallax
        translateX={[]}
        speed={sm ? 70 : 30}
        style={
          lg
            ? {
                position: "absolute",
                right: "15%",
                zIndex: 16,
              }
            : sm
            ? {
                position: "absolute",
                right: "5%",
                zIndex: 16,
              }
            : {
                position: "absolute",
                zIndex: 16,
              }
        }
      >
        <Box
          sx={{
            width: { xs: "320px", sm: "350px", lg: "400px" },
            boxShadow: { xs: "", sm: "0px 2px 6px rgb(0,0,0, 0.3)" },
            borderRadius: { xs: "10px" },
            overflow: { xs: "hidden" },
          }}
        >
          <img
            src="assets/image/polusi-jakarta.jpg"
            alt="Polusi Jakarta"
            style={{ width: "100%" }}
          />
        </Box>
      </Parallax>
      <Parallax
        translateX={[]}
        speed={sm ? 50 : 90}
        style={
          lg
            ? { position: "absolute", left: "10%", zIndex: 17 }
            : sm
            ? { position: "absolute", left: "5%", zIndex: 17 }
            : { position: "absolute", top: "200px", zIndex: 17 }
        }
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "400px", md: "600px" },
            padding: { xs: "8px 16px", sm: "16px 24px" },
            color: { xs: color.black },
            backgroundColor: { xs: color.white },
            borderRadius: { xs: "10px" },
            boxShadow: { xs: "", sm: "0px 2px 6px rgb(0,0,0, 0.3)" },
          }}
        >
          <Typography sx={{ marginBottom: "8px" }}>
            Ternyata memang akhir-akhir ini polusi udara di Jakarta memburuk dan
            menjadi suatu permasalahan sendiri. Menurut data yang dikeluarkan
            oleh KLHK, nilai ISPU Jakarta mencapai 130 yang berarti udara di
            Jakarta tidak sehat. Nilai parameter yang tertinggi diakibatkan oleh
            PM2.5. PM2.5 adalah polutan udara dengan diameter kurang dari 2.5
            mikron. PM2.5 dapat bersumber dari tanah, debu, jelaga, asap, rokok,
            emisi gas buang, konstruksi, dan pembongkaran.
          </Typography>
          <Typography>
            Dari semua polutan yang terdaftar, PM2.5 merupakan ancaman kesehatan
            terbesar bagi kesehatan manusia. Ini karena PM2.5 dapat masuk jauh
            ke bagian paling sensitif dari saluran pernapasan saat terhirup dan
            memicu penyakit pernapasan seperti asma, bronkitis, dan emfisema.
          </Typography>
        </Box>
      </Parallax>
    </Box>
  );
};

export default Section9a;
