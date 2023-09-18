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
          width: { xs: "100%", sm: "400px", md: "450px" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          textAlign: { xs: "left" },
          fontSize: { xs: "12px", sm: "16px" },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
        }}
      >
        Oleh karenanya, strategi pembangunan perkotaan Indonesia ke depan akan{" "}
        <strong>menitikberatkan</strong> pada{" "}
        <strong>aglomerasi perkotaan</strong> atau{" "}
        <strong>wilayah metropolitan</strong> sebagai alat pertumbuhan ekonomi.
      </Typography>
    </Box>
  );
};

export default Section5a;
