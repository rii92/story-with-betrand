import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section7 = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        backgroundColor: { xs: color.white },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          marginX: { xs: "auto" },
          color: { xs: color.black },
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
  );
};

export default Section7;
