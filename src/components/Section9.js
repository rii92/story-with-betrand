import { Box, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import color from "../themes/Color";

const Section9 = () => {
  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={"assets/image/jakarta.jpg"}
      bgImageAlt="the dog"
      strength={400}
    >
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100vh" },
          position: { xs: "relative" },
          zIndex: { xs: 15 },
          display: { xs: "grid" },
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          placeItems: { xs: "center" },
        }}
      >
        <Typography
          sx={{
            width: { xs: "fit-content" },
            padding: { xs: "8px 16px" },
            color: { xs: color.black },
            backgroundColor: { xs: color.white },
            borderRadius: { xs: "8px" },
          }}
        >
          Di Jakarta
        </Typography>
        <Box sx={{ width: { xs: "300px", sm: "350px", md: "400px" } }}>
          <img
            src="assets/image/didin.png"
            alt="Didin"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Parallax>
  );
};

export default Section9;
