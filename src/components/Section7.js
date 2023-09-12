import { Box, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import color from "../themes/Color";

const Section7 = () => {
  return (
    <Parallax
      blur={{ min: -10, max: 10 }}
      bgImage={"assets/image/metropolitan.jpg"}
      bgImageAlt="the dog"
      strength={400}
    >
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100vh" },
          padding: { xs: "16px", sm: "0px" },
          position: { xs: "relative" },
          zIndex: { xs: 15 },
          display: { xs: "grid" },
          placeItems: { xs: "center" },
        }}
      >
        <Typography
          sx={{
            width: { xs: "100%", sm: "400px", md: "500px" },
            padding: { xs: "8px 16px", sm: "24px 32px" },
            color: { xs: color.black },
            backgroundColor: { xs: color.white },
            borderRadius: { xs: "10px" },
          }}
        >
          Meskipun berkembang secara pesat, wilayah metropolitan kemudian{" "}
          <span style={{ fontWeight: "bold" }}>
            menghadapi berbagai permasalahan
          </span>{" "}
          yang beragam dan rumit, baik dari sisi ekonomi, sosial, maupun
          lingkungan.
        </Typography>
      </Box>
    </Parallax>
  );
};

export default Section7;
