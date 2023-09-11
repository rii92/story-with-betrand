import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PetaContext from "../../context/PetaContext";
import color from "../../themes/Color";

const Section6b = () => {
  const {
    posisiAtasElementMetropolitanKedua,
    setPosisiAtasElementMetropolitanKedua,
  } = useContext(PetaContext);
  const metropolitanKedua = useRef();

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
    const posisiMetropolitanKedua = getCoords(metropolitanKedua);
    setPosisiAtasElementMetropolitanKedua(posisiMetropolitanKedua.top);
  }, [posisiAtasElementMetropolitanKedua]);

  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "1200px" },
        height: { xs: "100vh" },
        marginX: { xs: "auto" },
        padding: { xs: "16px", md: "40px", xl: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 10 },
      }}
      ref={metropolitanKedua}
    >
      <Typography
        variant="h4"
        sx={{
          width: { xs: "fit-content" },
          paddingX: { xs: "16px" },
          paddingY: { xs: "8px" },
          backgroundColor: { xs: color.white },
          fontWeight: { xs: "bold" },
        }}
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        Patungraya Agung
      </Typography>
      <Typography
        variant="h6"
        sx={{
          width: { xs: "fit-content" },
          marginTop: { xs: "8px" },
          paddingX: { xs: "8px" },
          paddingY: { xs: "4px" },
          backgroundColor: { xs: color.white },
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Kota Palembang
      </Typography>
      <Typography
        variant="h6"
        sx={{
          width: { xs: "fit-content" },
          marginTop: { xs: "8px" },
          paddingX: { xs: "8px" },
          paddingY: { xs: "4px" },
          backgroundColor: { xs: color.white },
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Kabupaten Banyuasin
      </Typography>
      <Typography
        variant="h6"
        sx={{
          width: { xs: "fit-content" },
          marginTop: { xs: "8px" },
          paddingX: { xs: "8px" },
          paddingY: { xs: "4px" },
          backgroundColor: { xs: color.white },
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Kabupaten Ogan Ilir
      </Typography>
      <Typography
        variant="h6"
        sx={{
          width: { xs: "fit-content" },
          marginTop: { xs: "8px" },
          paddingX: { xs: "8px" },
          paddingY: { xs: "4px" },
          backgroundColor: { xs: color.white },
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Kabupaten Ogan Komering Ilir
      </Typography>
    </Box>
  );
};

export default Section6b;
