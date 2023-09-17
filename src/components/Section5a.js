import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import PetaContext from "../context/PetaContext";
import color from "../themes/Color";

const Section5a = () => {
  const { posisiAtasElementPengenalan, setPosisiAtasElementPengenalan } =
    useContext(PetaContext);
  const slideAwalPeta = useRef();

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
    const posisiPengenalan = getCoords(slideAwalPeta);
    setPosisiAtasElementPengenalan(posisiPengenalan.top);
  }, [posisiAtasElementPengenalan]);

  return (
    <Box
      sx={{
        width: { xs: "center" },
        height: { xs: "100vh" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        display: { xs: "flex" },
        justifyContent: { xs: "start" },
        alignItems: { xs: "center" },
      }}
      ref={slideAwalPeta}
    >
      <Typography
        variant="body1"
        sx={{
          width: { xs: "100%", md: "450px" },
          textAlign: { xs: "left" },
          fontSize: { xs: "12px", sm: "16px" },
          color: color.white,
        }}
      >
        <span style={{ backgroundColor: color.black, padding: "2px 3px" }}>
          Oleh karenanya, strategi pembangunan perkotaan Indonesia ke depan akan
          menitikberatkan pada aglomerasi perkotaan atau wilayah metropolitan
          sebagai alat pertumbuhan ekonomi.
        </span>
      </Typography>
    </Box>
  );
};

export default Section5a;
