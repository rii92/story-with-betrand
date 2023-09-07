import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import "../css/Hero.css";
import { blue } from "@mui/material/colors";

const Hero = () => {
  const blueCarFirst = useRef();
  const blueCarSecond = useRef();
  const blueCarThird = useRef();

  useEffect(() => {
    let secondBlueCar = 0;
    const interval = setInterval(() => {
      if (secondBlueCar >= 1 && secondBlueCar <= 9) {
        blueCarFirst.current.classList.add("blue-car-first");
      } else {
        blueCarFirst.current.classList.remove("blue-car-first");
      }

      if (secondBlueCar >= 10 && secondBlueCar <= 16) {
        blueCarSecond.current.classList.add("blue-car-second");
      } else {
        blueCarSecond.current.classList.remove("blue-car-second");
      }

      if (secondBlueCar >= 17 && secondBlueCar <= 21) {
        blueCarThird.current.classList.add("blue-car-third");
      } else {
        blueCarThird.current.classList.remove("blue-car-third");
      }

      if (secondBlueCar !== 21) {
        secondBlueCar++;
      } else {
        secondBlueCar = 0;
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        paddingX: { xs: "16px", md: "40px", xl: "0px" },
        position: { xs: "relative" },
        display: { xs: "flex" },
        justifyContent: { xs: "center", lg: "start" },
        alignItems: { xs: "start" },
        backgroundColor: { xs: color.white },
        overflow: { xs: "hidden" },
      }}
    >
      {/* <Box
        sx={{
          width: { xs: "100%", xl: "1200px" },
          marginTop: { xs: "40px" },
          position: { xs: "relative" },
          zIndex: { xs: 1 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "40px" },
            textAlign: { xs: "center", lg: "left" },
            color: color.black,
          }}
        >
          Transformasi <span style={{ fontWeight: "bold" }}>Metropolitan</span>{" "}
          <br /> Menuju{" "}
          <span style={{ fontWeight: "bold" }}>Kota Berkelanjutan</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "250px", sm: "350px" },
            marginTop: { xs: "16px" },
            marginX: { xs: "auto", lg: "0px" },
            fontSize: { xs: "12px", sm: "16px" },
            color: color.black,
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          Sesuaikan gaya membaca yang kamu suka, tombol kiri untuk membaca
          dengan musik dan tombol kanan untuk membaca tanpa musik.
        </Typography>
      </Box>

      <Box
        sx={{
          position: { xs: "absolute" },
          bottom: { xs: "16px" },
          left: { xs: "50%" },
          transform: { xs: "translateX(-50%)" },
          zIndex: { xs: 2 },
        }}
      >
        <Box
          sx={{
            width: { xs: "fit-content" },
            height: { xs: "60px" },
            marginTop: { xs: "16px" },
            marginX: { xs: "auto" },
            padding: { xs: "4px" },
            border: { xs: `3px solid ${color.black}` },
            borderRadius: "100px",
          }}
        >
          <Box
            className="icon-gulir"
            sx={{
              width: { xs: "10px" },
              height: { xs: "10px" },
              marginX: { xs: "auto" },
              backgroundColor: { xs: color.blue },
              borderRadius: { xs: "50px" },
            }}
          ></Box>
        </Box>
        <Typography
          sx={{
            marginTop: { xs: "8px" },
            marginX: { xs: "auto" },
            fontSize: { xs: "12px" },
            fontWeight: { xs: "bolder" },
            color: color.black,
            textAlign: { xs: "center" },
          }}
        >
          Gulir
        </Typography>
      </Box> */}

      <Box
        sx={{
          width: { xs: "1300px" },
          position: { xs: "absolute" },
        }}
      >
        <img src="assets/image/road.png" style={{ width: "100%" }} alt="Car" />
      </Box>

      <Box
        sx={{
          width: { xs: "120px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(70px,38px)" },
        }}
      >
        <img
          src="assets/image/building/building-1.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "120px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(-20px,90px)" },
        }}
      >
        <img
          src="assets/image/building/building-1.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "170px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(-148px,66px)" },
        }}
      >
        <img
          src="assets/image/building/building-2.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "196px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(34px,133px)" },
        }}
      >
        <img
          src="assets/image/building/building-3.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "105px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(185px,248px)" },
        }}
      >
        <img
          src="assets/image/building/building-4.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "105px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(125px,283px)" },
        }}
      >
        <img
          src="assets/image/building/building-4.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "105px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(65px,318px)" },
        }}
      >
        <img
          src="assets/image/building/building-4.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "115px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(160px,65px)" },
        }}
      >
        <img
          src="assets/image/building/building-5.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "115px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(235px, 107px)" },
        }}
      >
        <img
          src="assets/image/building/building-5.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "115px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(310px, 149px)" },
        }}
      >
        <img
          src="assets/image/building/building-5.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "80px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(323px, 7px)" },
        }}
      >
        <img
          src="assets/image/building/building-6.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "80px" },
          position: { xs: "absolute" },
          transform: { xs: "translate(373px, -22px)" },
        }}
      >
        <img
          src="assets/image/building/building-6.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        className="vector-miniature yellow-car"
        sx={{
          width: { xs: "30px", lg: "35px" },
          position: { xs: "absolute" },
          transform: { lg: "translate(1300px,135px)" },
        }}
      >
        <img src="assets/image/car-1.png" style={{ width: "100%" }} alt="Car" />
      </Box>

      <Box
        className="vector-miniature red-car"
        sx={{
          width: { xs: "30px", lg: "35px" },
          position: { xs: "absolute" },
          zIndex: { xs: 1 },
        }}
      >
        <img src="assets/image/car-2.png" style={{ width: "100%" }} alt="Car" />
      </Box>

      <Box
        className="vector-miniature bus-car"
        sx={{
          width: { xs: "50px", lg: "55px" },
          position: { xs: "absolute" },
          transform: {
            xs: "translate(550px, 343px)",
            lg: "translate(1250px, 383px)",
          },
        }}
      >
        <img src="assets/image/bus.png" style={{ width: "100%" }} alt="Car" />
      </Box>

      <Box
        className="vector-miniature truck-car"
        sx={{
          width: { xs: "30px", lg: "35px" },
          position: { xs: "absolute" },
          transform: { lg: "translate(500px, 605px)" },
        }}
      >
        <img src="assets/image/car-3.png" style={{ width: "100%" }} alt="Car" />
      </Box>

      <Box
        ref={blueCarFirst}
        className="vector-miniature"
        sx={{
          width: { xs: "30px", lg: "35px" },
          position: { xs: "absolute" },
          transform: {
            xs: "translate(300px, 580px)",
            lg: "translate(930px, 575px)",
          },
        }}
      >
        <img
          src="assets/image/blue-car-top.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        ref={blueCarSecond}
        className="vector-miniature"
        sx={{
          width: { xs: "30px", lg: "35px" },
          position: { xs: "absolute" },
          transform: {
            xs: "translate(-240px, 263px)",
            lg: "translate(400px, 254px)",
          },
          opacity: { xs: 0 },
        }}
      >
        <img
          src="assets/image/blue-car-right.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        ref={blueCarThird}
        className="vector-miniature"
        sx={{
          width: { xs: "30px", lg: "35px" },
          position: { xs: "absolute" },
          transform: {
            xs: "translate(80px, 70px)",
            lg: "translate(710px, 65px)",
          },
          opacity: { xs: 0 },
        }}
      >
        <img
          src="assets/image/blue-car-top.png"
          style={{ width: "100%" }}
          alt="Car"
        />
      </Box>

      <Box
        className="vector-miniature plane"
        sx={{
          width: { xs: "180px", lg: "200px" },
          position: { xs: "absolute" },
          transform: { lg: "translate(1300px,135px)" },
          zIndex: { xs: 2 },
        }}
      >
        <img
          src="assets/image/plane.png"
          style={{ width: "100%" }}
          alt="Plane"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "180px", lg: "200px" },
          position: { xs: "absolute" },
          transform: {
            xs: "translate(500px, -100px)",
            lg: "translate(1100px, -200px)",
          },
        }}
      >
        <img
          src="assets/image/plane.png"
          style={{ width: "100%" }}
          alt="Plane"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "180px", lg: "200px" },
          position: { xs: "absolute" },
          transform: {
            xs: "translate(-600px,500px)",
            lg: "translate(-200px, 590px)",
          },
        }}
      >
        <img
          src="assets/image/plane.png"
          style={{ width: "100%" }}
          alt="Plane"
        />
      </Box>

      {/* <Box
        sx={{
          backgroundColor: color.white,
          opacity: { xs: ".5", lg: "0" },
          position: { xs: "absolute" },
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></Box> */}
    </Box>
  );
};

export default Hero;
