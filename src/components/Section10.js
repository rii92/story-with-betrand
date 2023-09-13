import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section10 = () => {
  return (
    <Box
      sx={{
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        backgroundColor: { xs: color.white },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100vh" },
          paddingX: { xs: "16px" },
          display: { xs: "flex" },
          flexDirection: { xs: "column-reverse" },
          gap: { xs: "24px" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Typography
          sx={{
            width: { xs: "100%", sm: "400px", md: "500px" },
            color: { xs: color.black },
          }}
        >
          Mendengar kabar terkait asap dari TPA Sarimukti yang terbakar, satria
          khawatir karena asap tersebut dapat menutupi pandangan pengendara.
          Namun, Asep meyakinkannya untuk tetap melanjutkan perjalanan.
        </Typography>
        <Box
          sx={{
            height: { xs: "300px", sm: "350px", md: "400px" },
            position: { xs: "relative" },
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Box
            sx={{
              width: { xs: "80px" },
              position: { xs: "absolute" },
              left: { xs: "-40px" },
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <img
              src="assets/image/bubble-question-mark-left.png"
              alt="Didin"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100px" },
              position: { xs: "absolute" },
              top: { xs: "20px" },
              right: { xs: "-50px" },
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <img
              src="assets/image/bubble-question-mark-right.png"
              alt="Didin"
              style={{ width: "100%" }}
            />
          </Box>
          <img
            src="assets/image/satria/satria-is-thinking.png"
            alt="Didin"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section10;
