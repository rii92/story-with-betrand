import { Box, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import color from "../../themes/Color";

const Section9c = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const motorcycles = [
    // Atas
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "13%", sm: "-10%", md: "-13%" },
      left: { xs: "5%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "13%", sm: "-10%", md: "-13%" },
      left: { xs: "60%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "13%", sm: "-10%", md: "-13%" },
      left: { xs: "90%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "23%", sm: "2%", md: "3%" },
      left: { xs: "20%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "23%", sm: "2%", md: "3%" },
      left: { xs: "55%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "23%", sm: "2%", md: "3%" },
      left: { xs: "55%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "23%", sm: "2%", md: "3%" },
      left: { xs: "95%" },
      image: "motorcycle-left.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "33%", sm: "15%", md: "17%" },
      left: { xs: "15%" },
      image: "motorcycle-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "33%", sm: "15%", md: "17%" },
      left: { xs: "40%" },
      image: "motorcycle-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "33%", sm: "15%", md: "17%" },
      left: { xs: "68%" },
      image: "motorcycle-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "33%", sm: "15%", md: "17%" },
      left: { xs: "100%" },
      image: "motorcycle-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "43%", sm: "25%", md: "30%" },
      left: { xs: "0%" },
      image: "motorcycle-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "43%", sm: "25%", md: "30%" },
      left: { xs: "55%" },
      image: "motorcycle-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "43%", sm: "25%", md: "30%" },
      left: { xs: "87%" },
      image: "motorcycle-right.png",
    },
  ];

  const cars = [
    // Atas
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "15%", sm: "5%", md: "0%" },
      left: { xs: "5%" },
      image: "car-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "15%", sm: "5%", md: "0%" },
      left: { xs: "50%" },
      image: "car-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "25%", sm: "15%", md: "12%" },
      left: { xs: "15%" },
      image: "car-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "25%", sm: "15%", md: "12%" },
      left: { xs: "65%" },
      image: "car-left.png",
    },
    // Bawah
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "35%", sm: "25%", md: "24%" },
      left: { xs: "10%" },
      image: "car-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "35%", sm: "25%", md: "24%" },
      left: { xs: "70%" },
      image: "car-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "45%", sm: "35%", md: "37%" },
      left: { xs: "0%" },
      image: "car-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "45%", sm: "35%", md: "37%" },
      left: { xs: "55%" },
      image: "car-right.png",
    },
  ];

  const trucks = [
    // Atas
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "0%", sm: "0%" },
      left: { xs: "5%" },
      image: "truck-left.png",
    },
    {
      translateParallax: ["100px", "-100px"],
      top: { xs: "8%", sm: "8%" },
      left: { xs: "40%" },
      image: "truck-left.png",
    },
    // Bawah
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "16%", sm: "16%" },
      left: { xs: "55%" },
      image: "truck-right.png",
    },
    {
      translateParallax: ["-100px", "100px"],
      top: { xs: "25%", sm: "24%" },
      left: { xs: "-30%" },
      image: "truck-right.png",
    },
  ];

  return (
    <Box sx={{ marginTop: { xs: "0px", sm: "200px" } }}>
      <Typography
        variant="body1"
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          paddingX: { xs: "16px" },
        }}
      >
        Jakarta merupakan salah satu kota yang sering terjadi kemacetan. Menurut
        data BPS, pada tahun 2022 kendaraan bermotor mencapai 26 juta unit
        kendaraan.
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "fit-content" },
          paddingTop: { xs: "13%", sm: "6%" },
          paddingBottom: { xs: "16px", sm: "40px" },
          marginTop: { xs: "50px" },
          position: { xs: "relative" },
          overflowX: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            position: { xs: "relative" },
            zIndex: { xs: -1 },
          }}
        >
          <img
            src="assets/image/section9/road.png"
            alt="Road"
            style={{ width: "100%" }}
          />
        </Box>

        <Typography
          sx={{
            padding: { xs: "4px 8px" },
            position: "absolute",
            zIndex: { xs: 1 },
            backgroundColor: { xs: color.black },
            color: { xs: color.white },
            top: { xs: 0 },
            left: { xs: "16px" },
            borderRadius: { xs: "4px" },
          }}
        >
          Motor memenuhi 55.9% jalan
        </Typography>

        {motorcycles.map((motorcycle) => (
          <Parallax
            translateX={motorcycle.translateParallax}
            style={
              md
                ? {
                    width: "15%",
                    position: "absolute",
                    top: motorcycle.top.md,
                    left: motorcycle.left.xs,
                  }
                : sm
                ? {
                    width: "15%",
                    position: "absolute",
                    top: motorcycle.top.sm,
                    left: motorcycle.left.xs,
                  }
                : {
                    width: "15%",
                    position: "absolute",
                    top: motorcycle.top.xs,
                    left: motorcycle.left.xs,
                  }
            }
          >
            <Box sx={{ width: { xs: "100%" } }}>
              <img
                src={`assets/image/section9/${motorcycle.image}`}
                alt="Motorcycle"
                style={{ width: "100%" }}
              />
            </Box>
          </Parallax>
        ))}
      </Box>

      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "fit-content" },
          paddingTop: { xs: "15%", sm: "9%" },
          paddingBottom: { xs: "16px", sm: "40px" },
          position: { xs: "relative" },
          overflowX: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            position: { xs: "relative" },
            zIndex: { xs: -1 },
          }}
        >
          <img
            src="assets/image/section9/road.png"
            alt="Road"
            style={{ width: "100%" }}
          />
        </Box>

        <Typography
          sx={{
            padding: { xs: "4px 8px" },
            position: "absolute",
            zIndex: { xs: 1 },
            backgroundColor: { xs: color.black },
            color: { xs: color.white },
            top: { xs: 0 },
            left: { xs: "16px" },
            borderRadius: { xs: "4px" },
          }}
        >
          Mobil memenuhi 93.3% jalan
        </Typography>

        {cars.map((car) => (
          <Parallax
            translateX={car.translateParallax}
            style={
              md
                ? {
                    width: "40%",
                    position: "absolute",
                    top: car.top.md,
                    left: car.left.xs,
                  }
                : sm
                ? {
                    width: "40%",
                    position: "absolute",
                    top: car.top.sm,
                    left: car.left.xs,
                  }
                : {
                    width: "40%",
                    position: "absolute",
                    top: car.top.xs,
                    left: car.left.xs,
                  }
            }
          >
            <Box sx={{ width: { xs: "100%" } }}>
              <img
                src={`assets/image/section9/${car.image}`}
                alt="Car"
                style={{ width: "100%" }}
              />
            </Box>
          </Parallax>
        ))}
      </Box>

      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "fit-content" },
          paddingTop: { xs: "20%" },
          paddingBottom: { xs: "16px", sm: "40px" },
          position: { xs: "relative" },
          overflowX: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            position: { xs: "relative" },
            zIndex: { xs: -1 },
          }}
        >
          <img
            src="assets/image/section9/road.png"
            alt="Road"
            style={{ width: "100%" }}
          />
        </Box>

        <Typography
          sx={{
            padding: { xs: "4px 8px" },
            position: "absolute",
            zIndex: { xs: 1 },
            backgroundColor: { xs: color.black },
            color: { xs: color.white },
            top: { xs: 0 },
            left: { xs: "16px" },
            borderRadius: { xs: "4px" },
          }}
        >
          Truk memenuhi 68.5% jalan
        </Typography>

        {trucks.map((truck) => (
          <Parallax
            translateX={truck.translateParallax}
            style={
              md
                ? {
                    width: "60%",
                    position: "absolute",
                    top: truck.top.sm,
                    left: truck.left.xs,
                  }
                : sm
                ? {
                    width: "60%",
                    position: "absolute",
                    top: truck.top.sm,
                    left: truck.left.xs,
                  }
                : {
                    width: "60%",
                    position: "absolute",
                    top: truck.top.xs,
                    left: truck.left.xs,
                  }
            }
          >
            <Box sx={{ width: { xs: "100%" } }}>
              <img
                src={`assets/image/section9/${truck.image}`}
                alt="Car"
                style={{ width: "100%" }}
              />
            </Box>
          </Parallax>
        ))}
      </Box>

      <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          height: { xs: "fit-content" },
          paddingTop: { xs: "50px", sm: "100px", md: "150px" },
          paddingBottom: { xs: "16px", sm: "40px" },
          position: { xs: "relative" },
          overflowX: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            position: { xs: "relative" },
            zIndex: { xs: -1 },
          }}
        >
          <img
            src="assets/image/section9/road.png"
            alt="Road"
            style={{ width: "100%" }}
          />
        </Box>

        <Typography
          sx={{
            padding: { xs: "4px 8px" },
            position: "absolute",
            zIndex: { xs: 1 },
            backgroundColor: { xs: color.black },
            color: { xs: color.white },
            top: { xs: 0 },
            left: { xs: "16px" },
            borderRadius: { xs: "4px" },
          }}
        >
          Bus memenuhi 3.4% jalan
        </Typography>

        <Parallax
          translateX={["-100px", "100px"]}
          style={{
            width: "80%",
            position: "absolute",
            top: "-13%",
            left: "-50%",
          }}
        >
          <Box sx={{ width: { xs: "100%" } }}>
            <img
              src="assets/image/section9/bus.png"
              alt="Car"
              style={{ width: "100%" }}
            />
          </Box>
        </Parallax>
      </Box>
    </Box>
  );
};

export default Section9c;
