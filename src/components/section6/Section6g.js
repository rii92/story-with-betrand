import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import PetaContext from "../../context/PetaContext";

const Section6g = () => {
  const {
    posisiAtasElementMetropolitanKetujuh,
    setPosisiAtasElementMetropolitanKetujuh,
  } = useContext(PetaContext);
  const metropolitanKetujuh = useRef();

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
    const posisiMetropolitanKetujuh = getCoords(metropolitanKetujuh);
    setPosisiAtasElementMetropolitanKetujuh(posisiMetropolitanKetujuh.left);
  }, [posisiAtasElementMetropolitanKetujuh]);

  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "1200px" },
        height: { xs: "100vh" },
        marginX: { xs: "auto" },
        marginBottom: { xs: "100px" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        display: { xs: "flex" },
        justifyContent: { xs: "start" },
        alignItems: { xs: "center" },
      }}
      ref={metropolitanKetujuh}
    >
      <Box
        sx={{
          position: { xs: "relative" },
          width: { xs: "100%", sm: "470px" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          backgroundColor: { xs: "white" },
          border: { xs: "4px solid #E1EBF1", sm: "5px solid #E1EBF1" },
          borderRadius: { xs: "8px", sm: "16px" },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "18px" } }}
        >
          Kota Banjarmasin, Kota Banjarbaru, Kabupaten Banjar, Kabupaten Barito
          Kuala, dan Kabupaten Tanah Laut
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: { xs: "bold" },
          }}
        >
          Banjar Bakula
        </Typography>
        <Box
          sx={{
            width: { xs: "90px" },
            position: { xs: "absolute" },
            bottom: { xs: "-40px", sm: "-50px" },
            right: { xs: "-20px", sm: "-50px" },
          }}
        >
          <img
            src="assets/image/city-icon/banjar-bakula.png"
            alt="Icon Banjar Bakula"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section6g;
