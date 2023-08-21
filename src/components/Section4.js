import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import { Parallax } from "react-scroll-parallax";

const Section4 = () => {
  return (
    <Box
      sx={{
        paddingX: "16px",
        paddingY: "80px",
        display: { xs: "block", md: "flex" },
        flexDirection: { md: "row-reverse" },
        justifyContent: { md: "center" },
        gap: { md: "40px" },
        backgroundColor: color.darkYellow,
      }}
    >
      <Box
        sx={{
          width: { xs: "180px", md: "200px" },
          height: { xs: "180px", md: "200px" },
          marginX: { xs: "auto", md: "0px" },
          marginBottom: { xs: "32px", md: "0px" },
          backgroundColor: { xs: color.semiDarkYellow },
          borderRadius: { xs: "100%" },
          overflow: { xs: "hidden" },
        }}
      >
        <Parallax translateY={["80px", "0px"]} speed={50}>
          <img
            src="assets/image/bambang-brodjonegoro.png"
            alt="Bambang Brodjonegoro"
            style={{ width: "100%" }}
          />
        </Parallax>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "500px" } }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "12px", sm: "16px" },
            fontStyle: { xs: "italic" },
            color: { xs: color.black },
            fontWeight: { xs: "bolder" },
          }}
        >
          “Mengingat sumber pertumbuhan akan berada di perkotaan, maka
          konsentrasi penduduk di perkotaan harus diurus dengan strategi
          pengelolaan metropolitan berkelanjutan dengan sebaik-baiknya,”
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: { xs: "8px" },
            fontSize: { xs: "12px", sm: "16px" },
            color: { xs: color.black },
            fontWeight: { xs: "bolder" },
          }}
        >
          Menteri PPN/Kepala Bappenas Periode 2016-2019, Bambang Brodjonegoro
        </Typography>
      </Box>
    </Box>
  );
};

export default Section4;
