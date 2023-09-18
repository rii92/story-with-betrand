import { Box, CardMedia, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

const Section31 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        paddingTop: { xs: "30px" },
        backgroundColor: color.whiteColor,
      }}
    >
      <Grid container spacing={2}>
        <Grid xs item>
          <Parallax translateY={["-80px", "0px"]} speed={100}>
            <CardMedia
              image="assets/image/handshake.png"
              sx={{
                width: "300px",
                height: "300px",
                marginX: { xs: "auto" },
              }}
            />
          </Parallax>
        </Grid>
        <Grid xs={6} item sx={{ marginX: { xs: "auto" } }}>
          <Typography
            variant="h5"
            sx={{
              marginX: { xs: "auto" },
              width: { xs: "100%", sm: "400px", md: "600px" },
              color: { xs: color.black },
              textAlign: { xs: "center" },
            }}
          >
            Menilik berbagai permasalahan yang dihadapi, tidak sedikit pihak
            yang pesimistis terhadap masa depan perkotaan di Indonesia.{" "}
            <strong>Namun bagaimana pun</strong> , kita harus terus melakukan
            perubahan untuk mewujudkan perkotaan yang lebih baik.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section31;
