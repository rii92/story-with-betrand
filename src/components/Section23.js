import { Box, CardMedia, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const Section31 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "80vh" },
        display: { xs: "block" },
        justifyContent: { xs: "center" },
        backgroundColor: { xs: color.white },
        alignItems: { xs: "center" },
        paddingTop: {xs: "30px"}
      }}
    >
      <CardMedia
        image="assets/image/handshake.png"
        sx={{
          maxWidth: "300px",
          height: "280px",
          marginX: { xs: "auto" },
        }}
        data-aos="fade-right"
        data-aos-duration="20000"
      />
      <Typography
        variant="h5"
        sx={{
          marginX: { xs: "auto" },
          width: { xs: "100%", sm: "400px", md: "800px" },
          color: { xs: color.black },
          textAlign: { xs: "center" },
        }}
        data-aos="fade-left"
        data-aos-duration="20000"
      >
        Menilik berbagai permasalahan yang dihadapi, tidak sedikit pihak yang
        pesimistis terhadap masa depan perkotaan di Indonesia.{" "}
        <strong>Namun bagaimana pun</strong> , kita harus terus melakukan
        perubahan untuk mewujudkan perkotaan yang lebih baik.
      </Typography>
    </Box>
  );
};

export default Section31;
