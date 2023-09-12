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
        height: { xs: "600px", sm: "400px" },
        paddingX: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        display: { xs: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "start", sm: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Parallax
        translateX={[]}
        speed={sm ? 70 : 40}
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
        <Box sx={{ width: { xs: "320px", sm: "350px", lg: "400px" } }}>
          <img
            src="assets/image/polusi-jakarta.jpg"
            alt="Polusi Jakarta"
            style={{ width: "100%" }}
          />
        </Box>
      </Parallax>
      <Parallax
        translateX={[]}
        speed={sm ? 50 : 80}
        style={
          lg
            ? { position: "absolute", left: "10%", zIndex: 17 }
            : sm
            ? { position: "absolute", left: "5%", zIndex: 17 }
            : { position: "absolute", top: "100px", zIndex: 17 }
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
            Emisi gas buang adalah sisa hasil pembakaran bahan bakar pada suatu
            mesin, seperti motor maupun mobil. Jakarta merupakan salah satu kota
            yang sering terjadi kemacetan. Menurut data BPS, pada tahun 2022
            kendaraan bermotor mencapai 26 juta unit kendaraan.
          </Typography>
          <Typography sx={{ marginBottom: "8px" }}>
            (Grafik yang menggambarkan kemacetan di Jakarta. Motor memenuhi
            55.9% jalan di jakarta. Mobil memenuhi 93.3%. Truk memenuhi 68.5%.
            Bus 3.4%. Bayangin kalo semua kendaraan turun ke jalan bersamaan,
            semua jalan ketutup kendaraan. Bahkan 2x lipat luas jalan di Jakarta
            ga bisa menampung semua kendaraan yang ada (211.1% luas jalan
            tertutup kendaraan)).
          </Typography>
          <Typography>
            *catatan jalan mencakup tol, jalan nasional dan jalan daerah. Kalo
            motor gak menempati jalan tol, dia memenuhi 61.2% jalan di Jakarta.
          </Typography>
        </Box>
      </Parallax>
    </Box>
  );
};

export default Section9a;
