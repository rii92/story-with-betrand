import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PetaContext from "../../context/PetaContext";
import color from "../../themes/Color";

const Section6a = () => {
  const {
    posisiAtasElementMetropolitanPertama,
    setPosisiAtasElementMetropolitanPertama,
  } = useContext(PetaContext);
  const metropolitanPertama = useRef();
  const regions = [
    "Kota Medan",
    "Kota Binjai",
    "Kabupaten Deli Serdang",
    "Kabupaten Karo",
  ];

  const getCoords = (elem) => {
    // crossbrowser version
    var box = elem.current.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
  };

  useEffect(() => {
    AOS.init();
    const posisiMetropolitanPertama = getCoords(metropolitanPertama);
    setPosisiAtasElementMetropolitanPertama(posisiMetropolitanPertama.top);
  }, [posisiAtasElementMetropolitanPertama]);

  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "1200px" },
        height: { xs: "100vh" },
        marginX: { xs: "auto" },
        marginBottom: { xs: "100px" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 10 },
      }}
      ref={metropolitanPertama}
    >
      <Typography
        variant="h4"
        sx={{
          width: { xs: "fit-content" },
          paddingX: { xs: "16px" },
          paddingY: { xs: "8px" },
          backgroundColor: { xs: color.white },
          fontWeight: { xs: "bold" },
          fontSize: { xs: "24px", sm: "34px" },
        }}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        Mebidangro
      </Typography>
      {regions.map((region, index) => (
        <Typography
          variant="h6"
          sx={{
            width: { xs: "fit-content" },
            marginTop: { xs: "8px" },
            paddingX: { xs: "8px" },
            paddingY: { xs: "4px" },
            backgroundColor: { xs: color.white },
            fontSize: { xs: "16px", sm: "20px" },
          }}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay={index * 300}
        >
          {region}
        </Typography>
      ))}
    </Box>
  );
};

export default Section6a;
