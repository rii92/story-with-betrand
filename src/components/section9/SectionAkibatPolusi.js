import { Box, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import color from "../../themes/Color";

const SectionAkibatPolusi = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "400px", sm: "200px" },
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
        speed={40}
        style={
          lg
            ? {
                position: "absolute",
                left: "15%",
                zIndex: 16,
              }
            : sm
            ? {
                position: "absolute",
                left: "5%",
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
            width: { xs: "320px", sm: "400px", md: "450px" },
          }}
        >
          <img
            src="assets/image/people-with-lung-disease.png"
            alt="Polusi Jakarta"
            style={{ width: "100%" }}
          />
        </Box>
      </Parallax>
      <Parallax
        translateX={[]}
        speed={70}
        style={
          lg
            ? { position: "absolute", right: "15%", zIndex: 17 }
            : sm
            ? { position: "absolute", right: "5%", zIndex: 17 }
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

export default SectionAkibatPolusi;
