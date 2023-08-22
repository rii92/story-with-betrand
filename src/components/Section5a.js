import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section5a = () => {
  return (
    <Box
      sx={{
        height: { xs: "100vh" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 10 },
      }}
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
          Oleh karenanya, strategi pembangunan perkotaan Indonesia ke depan akan
          menitikberatkan pada aglomerasi perkotaan atau wilayah metropolitan
          sebagai alat pertumbuhan ekonomi.
        </span>
      </Typography>
    </Box>
  );
};

export default Section5a;
