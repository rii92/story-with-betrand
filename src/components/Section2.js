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
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        paddingY: { xs: "56px" },

        backgroundColor: color.blue,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          marginX: { xs: "auto" },
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "inherit", md: "space-between" },
          gap: { xs: "32px" },
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              width: { xs: "100%", md: "470px" },
              fontSize: { xs: "12px", sm: "16px" },
              textAlign: { xs: "center", md: "left" },
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
          sx={{
            display: { xs: "flex" },
            justifyContent: { xs: "space-around" },
            gap: "16px",
          }}
        >
          <Box
            sx={{
              width: { xs: "fit-content", lg: "400px" },
              display: { xs: "flex" },
              flexWrap: { xs: "wrap" },
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <Box
                key={index}
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
                      ? {
                          fontSize: { xs: "40px", sm: "60px", lg: "80px" },
                          color: color.black,
                        }
                      : {
                          fontSize: { xs: "40px", sm: "60px", lg: "80px" },
                          color: color.white,
                        }
                  }
                />
              </Box>
            ))}
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "40px", sm: "48px", md: "56px", lg: "64px" },
              fontWeight: { xs: "bolder" },
              color: { xs: color.white },
            }}
          >
            50%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
