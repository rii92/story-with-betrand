import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import color from "../../themes/Color";

const SectionSatriaMauMendaki = () => {
  const trees = [
    {
      image: "tree-1.png",
      left: "-5%",
      bottom: { xs: "60px", sm: "100px", md: "50px" },
      delay: "600",
      zIndex: -2,
    },
    {
      image: "tree-3.png",
      left: "11%",
      bottom: { xs: "75px", sm: "120px", md: "65px" },
      delay: "1200",
      zIndex: -1,
    },
    {
      image: "tree-5.png",
      left: "25%",
      bottom: { xs: "90px", sm: "150px", md: "80px" },
      delay: "1800",
      zIndex: 0,
    },
    {
      image: "tree-6.png",
      left: "45%",
      bottom: { xs: "90px", sm: "150px", md: "80px" },
      delay: "1800",
      zIndex: 0,
    },
    {
      image: "tree-4.png",
      left: "67%",
      bottom: { xs: "75px", sm: "120px", md: "65px" },
      delay: "1200",
      zIndex: -1,
    },
    {
      image: "tree-2.png",
      left: "90%",
      bottom: { xs: "60px", sm: "100px", md: "50px" },
      delay: "600",
      zIndex: -2,
    },
  ];

  useEffect(() => {
    AOS.init();
  });

  return (
    <Box
      sx={{
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        backgroundColor: color.lightBlue,
        overflow: { xs: "hidden" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "650px" },
          marginX: { xs: "auto" },
          paddingX: { xs: "16px", xl: "0px" },
          paddingY: { xs: "40px" },
          display: { xs: "flex" },
          position: { xs: "relative" },
          zIndex: { xs: 4 },
          gap: { xs: "16px", md: "32px" },
          flexDirection: { xs: "column", sm: "row-reverse" },
          justifyContent: { xs: "space-between", sm: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box data-aos="fade-down" data-aos-duration="1000">
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
              Untuk mengisi waktu liburannya, ia bersama teman klub Mapala
              kampusnya melakukan kegiatan pendakian di sekitar wilayah Bandung.
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "135px", sm: "150px", md: "160px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(1px,200px)",
              sm: "translate(-208px, -90px)",
              md: "translate(-265px, -100px)",
            },
          }}
        >
          <img
            src="assets/image/satria/bag-1.png"
            alt="Satria"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100px", sm: "120px", md: "140px" },
            position: { xs: "absolute" },
            zIndex: { xs: 1 },
            transform: {
              xs: "translate(1px,240px)",
              sm: "translate(-208px, -100px)",
              md: "translate(-265px, -100px)",
            },
          }}
        >
          <img
            src="assets/image/satria/bag-2.png"
            alt="Satria"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            height: { xs: "400px", sm: "450px", md: "500px" },
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img
            src="assets/image/satria/satria-2.png"
            alt="Satria"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>

      {trees.map((tree) => (
        <Box
          sx={{
            height: { xs: "300px", sm: "350px", md: "450px" },
            position: { xs: "absolute" },
            left: { xs: tree.left },
            bottom: {
              xs: tree.bottom.xs,
              sm: tree.bottom.sm,
              md: tree.bottom.md,
            },
            zIndex: { xs: tree.zIndex },
          }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={tree.delay}
        >
          <img
            src={`assets/image/section-satria-mendaki/${tree.image}`}
            alt="Building"
            style={{ height: "100%" }}
          />
        </Box>
      ))}

      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "120px", sm: "170px", md: "130px" },
          position: { xs: "absolute" },
          backgroundColor: { xs: "#8CB348" },
          bottom: { xs: -1 },
          borderRadius: { xs: "100% 100% 0 0" },
        }}
      ></Box>
    </Box>
  );
};

export default SectionSatriaMauMendaki;
