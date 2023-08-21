import { Box, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import color from "../themes/Color";

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        paddingX: { xs: "16px" },
        paddingY: { xs: "48px" },
        display: { xs: "flex" },
        flexDirection: { xs: "column" },
        gap: { xs: "32px" },
        backgroundColor: color.blue,
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "100%" },
            fontSize: { xs: "12px" },
            textAlign: { xs: "center" },
            color: { xs: color.white },
          }}
        >
          Sekitar <span style={{ fontWeight: "bold" }}>3,5 miliar orang</span>{" "}
          atau setengah dari populasi manusia di{" "}
          <span style={{ fontWeight: "bold" }}>dunia</span> kini tinggal di
          perkotaan. Di masa mendatang, jumlah ini diperkirakan akan terus
          meningkat.
        </Typography>
      </Box>
      <Box
        sx={{ display: { xs: "flex" }, justifyContent: { xs: "space-around" } }}
      >
        <Box
          sx={{
            width: { xs: "200px" },
            display: { xs: "flex" },
            flexWrap: { xs: "wrap" },
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              sx={{
                position: "relative",
                zIndex: 10 - index,
                backgroundColor: color.blue,
              }}
              data-aos="fade-right"
              data-aos-duration="100"
              data-aos-delay={100 * index}
            >
              <AccessibilityNewIcon
                sx={
                  index > 4
                    ? { fontSize: { xs: "40px" }, color: color.black }
                    : { fontSize: { xs: "40px" }, color: color.white }
                }
              />
            </Box>
          ))}
        </Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: { xs: "bolder" }, color: { xs: color.white } }}
        >
          50%
        </Typography>
      </Box>
    </Box>
  );
};

export default Section2;
