import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import PetaContext from "../../context/PetaContext";
import color from "../../themes/Color";

const Section6c = () => {
  const {
    posisiAtasElementMetropolitanKetiga,
    setPosisiAtasElementMetropolitanKetiga,
  } = useContext(PetaContext);
  const metropolitanKetiga = useRef();

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
    const posisiMetropolitanKetiga = getCoords(metropolitanKetiga);
    setPosisiAtasElementMetropolitanKetiga(posisiMetropolitanKetiga.top);
  }, [posisiAtasElementMetropolitanKetiga]);

  return (
    <Box
      sx={{
        height: { xs: "100vh" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 10 },
      }}
      ref={metropolitanKetiga}
    >
      <Typography
        variant="body1"
        sx={{
          width: { xs: "100%", md: "450px" },
          marginLeft: { xs: "auto" },
          textAlign: { xs: "left", md: "right" },
          fontSize: { xs: "12px", sm: "16px" },
          color: color.white,
        }}
      >
        <span style={{ backgroundColor: color.black, padding: "2px 3px" }}>
          Jabodetabekpunjur (DKI Jakarta, Kabupaten Bogor, Kota Bogor, Kota
          Depok, Kabupaten Tangerang, Kota Tangerang, Kota Tangerang Selatan,
          Kabupaten Bekasi, Kota Bekasi, Kabupaten Cianjur).
        </span>
      </Typography>
    </Box>
  );
};

export default Section6c;