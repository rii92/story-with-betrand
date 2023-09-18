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
        height: { xs: "300vh" },
        display: { xs: "block" },
        justifyContent: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          width: { xs: "100%", sm: "400px", md: "800px" },
          color: { xs: color.black },
          textAlign: { xs: "center" },
          marginX: { xs: "auto" },
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Meskipun berkembang secara pesat, wilayah metropolitan kemudian{" "}
        <strong>menghadapi berbagai permasalahan</strong> yang beragam, termasuk
        juga terkait isu lingkungan. Beberapa kota di atas, merupakan hanya
        sebagian dari wilayah metropolitan di Indonesia.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          color: { xs: color.black },
          textAlign: { xs: "center" },
          marginX: { xs: "auto" },
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Tren perkotaan global menunjukkan perubahan signifikan dalam beberapa dekade terakhir. Dalam upaya mencapai Tujuan 11 Sustainable Development Goals (SDGs), kebijakan perkotaan di seluruh dunia tak terkecuali Indonesia, berfokus pada pembangunan perkotaan berkelanjutan. 
      </Typography>
    </Box>
  );
};

export default Section29;
