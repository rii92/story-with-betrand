import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import "../css/Bridging1.css";

const Bridging1 = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "600px" },
        paddingX: { xs: "16px" },
        paddingY: { xs: "8px", sm: "16px" },
        position: { xs: "relative" },
        backgroundImage:
          "url('assets/image/bridging/street-house-while-night.png')",
        overflow: { xs: "hidden" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "100%" },
          marginX: { xs: "auto" },
          display: { xs: "flex" },
          gap: { xs: "32px" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "end", sm: "center" },
          alignItems: { xs: "center", sm: "end" },
        }}
      >
        <Box
          sx={{ height: { xs: "fit-content", sm: "50%" } }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Typography
            variant="body1"
            sx={{
              width: { xs: "100%", sm: "400px", md: "500px" },
              marginBottom: { xs: "8px" },
              color: { xs: color.black },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <span style={{ backgroundColor: color.white, padding: "1px 2px" }}>
              Setelah membaca dan mencari beberapa fakta yang ada. Satria
              berencana ke Bandung bersama temannya yang memang asli orang
              Bandung menggunakan motor masing-masing. Dia memilih waktu malam
              hari untuk menghindari macet dan polusi.
            </span>
          </Typography>
        </Box>

        <Box
          sx={{
            position: { xs: "relative" },
            height: { xs: "300px", sm: "400px", md: "500px" },
            transform: "translateX(100px)",
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              width: { xs: "300px", sm: "400px", md: "500px" },
              position: { xs: "absolute" },
              transform: {
                xs: "translate(-100px,50px)",
                sm: "translate(-70px, 80px)",
                md: "translate(-40px, 100px)",
              },
            }}
          >
            <img
              src="assets/image/bridging/motorcycle.png"
              alt="Motor"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "105px", sm: "145px", md: "175px" },
              position: { xs: "absolute" },
              transform: {
                xs: "translate(-3px,20px)",
                sm: "translate(-7px,25px)",
                md: "translate(-7px,40px)",
              },
            }}
          >
            <img
              src="assets/image/satria/bag-1.png"
              alt="Tas"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "90px", sm: "110px", md: "130px" },
              position: { xs: "absolute" },
              transform: {
                xs: "translate(3px,50px)",
                sm: "translate(10px,65px)",
                md: "translate(17px,93px)",
              },
              zIndex: { xs: 2 },
            }}
          >
            <img
              src="assets/image/satria/bag-2.png"
              alt="Tas"
              style={{ width: "100%" }}
            />
          </Box>
          <img
            className="tangan-satria-di-bridging"
            src="assets/image/satria/tangan-satria.png"
            alt="Tangan"
            style={{ zIndex: 1 }}
          />
          <img
            src="assets/image/bridging/satria.png"
            alt="Satria"
            style={{ height: "100%", position: "relative", zIndex: 1 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bridging1;
