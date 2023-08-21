import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Hero = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "500px" },
        position: { xs: "relative" },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
            textAlign: { xs: "center" },
            color: color.white,
          }}
        >
          Transformasi <span style={{ fontWeight: "bold" }}>Metropolitan</span>{" "}
          <br /> Menuju{" "}
          <span style={{ fontWeight: "bold" }}>Kota Berkelanjutan</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "250px", sm: "350px" },
            marginTop: { xs: "16px" },
            marginX: { xs: "auto" },
            fontSize: { xs: "12px", sm: "16px" },
            color: color.white,
            textAlign: { xs: "center" },
          }}
        >
          Sesuaikan gaya membaca yang kamu suka, tombol kiri untuk membaca
          dengan musik dan tombol kanan untuk membaca tanpa musik.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          opacity: ".5",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      ></Box>
      <video
        style={{
          height: "100%",
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -2,
          top: 0,
        }}
        autoPlay
        loop
        muted
      >
        <source src="assets/video/hero.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};

export default Hero;
