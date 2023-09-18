import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../themes/Color";
import { useEffect } from "react";

const Section29 = () => {
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
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          width: { xs: "100%", sm: "400px", md: "800px" },
          color: { xs: color.black },
          textAlign: { xs: "center" },
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Meskipun berkembang secara pesat, wilayah metropolitan kemudian{" "}
        <strong>menghadapi berbagai permasalahan</strong> yang beragam, termasuk
        juga terkait isu lingkungan. Beberapa kota di atas, merupakan hanya
        sebagian dari wilayah metropolitan di Indonesia.
      </Typography>
    </Box>
  );
};

export default Section29;
