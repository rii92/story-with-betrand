import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import color from "../themes/Color";
import "../css/Hero.css";

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
    <>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "585px" },
          paddingX: { xs: "16px", md: "40px", xl: "0px" },
          position: { xs: "fixed" },
          display: { xs: "flex" },
          justifyContent: { xs: "center", lg: "start" },
          alignItems: { xs: "start" },
          backgroundImage: {
            xs: `linear-gradient(to top right, ${color.darkGreen}, ${color.green})`,
          },
          overflow: { xs: "hidden" },
          zIndex: { xs: -1 },
        }}
      >
        <Box
          sx={{
            width: { xs: "fit-content", xl: "1200px" },
            padding: { xs: "16px", lg: "0px" },
            position: { xs: "absolute" },
            top: { xs: "50%", lg: "auto" },
            bottom: { xs: "none", lg: "40px" },
            transform: { xs: "translateY(-50%)", lg: "none" },
            backgroundColor: { xs: "rgb(0,0,0,0.2)", lg: "transparent" },
            borderRadius: { xs: "16px", lg: "32px" },
            backdropFilter: { xs: "blur(5px)" },
            zIndex: { xs: 110 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "26px", sm: "36px" },
              textAlign: { xs: "center", lg: "left" },
              color: color.white,
            }}
          >
            Menata Lingkungan,{" "}
            <span style={{ fontWeight: "bold" }}>Aksi Nyata</span> <br />{" "}
            Wujudkan{" "}
            <span style={{ fontWeight: "bold" }}>Kota Berkelanjutan</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: { xs: "250px", sm: "350px" },
              marginTop: { xs: "16px" },
              marginX: { xs: "auto", lg: "0px" },
              fontSize: { xs: "12px", sm: "16px" },
              color: color.white,
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
            zIndex: { xs: 103 },
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
                backgroundColor: { xs: color.yellow },
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
              textShadow: {
                xs: `1px 0px 0px ${color.white},-1px 0px 0px ${color.white}, 0px 1px 0px ${color.white},0px -1px 0px ${color.white}`,
              },
              textAlign: { xs: "center" },
            }}
          >
            Gulir
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "1300px" },
            position: { xs: "absolute" },
          }}
        >
          <img
            src="assets/image/road.png"
            style={{ width: "100%" }}
            alt="Road"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "120px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(70px,38px)",
              lg: "translate(660px,38px)",
            },
            zIndex: { xs: 84 },
          }}
        >
          <img
            src="assets/image/building/building-1.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "120px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-20px,90px)",
              lg: "translate(570px,90px)",
            },
            zIndex: { xs: 85 },
          }}
        >
          <img
            src="assets/image/building/building-1.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-100px,190px)",
              lg: "translate(520px,180px)",
            },
            zIndex: { xs: 86 },
          }}
        >
          <img
            src="assets/image/tree/tree-1.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-45px,210px)",
              lg: "translate(585px,200px)",
            },
            zIndex: { xs: 86 },
          }}
        >
          <img
            src="assets/image/tree/tree-2.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-65px,245px)",
              lg: "translate(565px,240px)",
            },
            zIndex: { xs: 86 },
          }}
        >
          <img
            src="assets/image/tree/tree-3.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "170px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-148px,66px)",
              lg: "translate(418px,66px)",
            },
            zIndex: { xs: 86 },
          }}
        >
          <img
            src="assets/image/building/building-2.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-70px,280px)",
              lg: "translate(565px,280px)",
            },
            zIndex: { xs: 88 },
          }}
        >
          <img
            src="assets/image/tree/tree-4.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-110px,300px)",
              lg: "translate(520px,300px)",
            },
            zIndex: { xs: 88 },
          }}
        >
          <img
            src="assets/image/tree/tree-5.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-65px,350px)",
              lg: "translate(575px,345px)",
            },
            zIndex: { xs: 88 },
          }}
        >
          <img
            src="assets/image/tree/tree-6.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "196px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(34px,133px)",
              lg: "translate(583px,133px)",
            },
            zIndex: { xs: 87 },
          }}
        >
          <img
            src="assets/image/building/building-3.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "90px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-25px,305px)",
              lg: "translate(580px,305px)",
            },
            zIndex: { xs: 87 },
          }}
        >
          <img
            src="assets/image/building/field.png"
            style={{ width: "100%" }}
            alt="Field"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "105px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(185px,248px)",
              lg: "translate(780px,248px)",
            },
            zIndex: { xs: 91 },
          }}
        >
          <img
            src="assets/image/building/building-4.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "105px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(125px,283px)",
              lg: "translate(720px,283px)",
            },
            zIndex: { xs: 92 },
          }}
        >
          <img
            src="assets/image/building/building-4.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "105px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(65px,318px)",
              lg: "translate(660px,318px)",
            },
            zIndex: { xs: 93 },
          }}
        >
          <img
            src="assets/image/building/building-4.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "115px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(160px,65px)",
              lg: "translate(750px,65px)",
            },
            zIndex: { xs: 88 },
          }}
        >
          <img
            src="assets/image/building/building-5.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "115px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(235px, 107px)",
              lg: "translate(825px, 107px)",
            },
            zIndex: { xs: 89 },
          }}
        >
          <img
            src="assets/image/building/building-5.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "115px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(310px, 149px)",
              lg: "translate(900px, 149px)",
            },
            zIndex: { xs: 90 },
          }}
        >
          <img
            src="assets/image/building/building-5.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "80px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(323px, 7px)",
              lg: "translate(934px, 7px)",
            },
            zIndex: { xs: 87 },
          }}
        >
          <img
            src="assets/image/building/building-6.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "80px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(373px, -22px)",
              lg: "translate(984px, -22px)",
            },
            zIndex: { xs: 86 },
          }}
        >
          <img
            src="assets/image/building/building-6.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "150px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(435px, 70px)",
              lg: "translate(1020px, 70px)",
            },
            zIndex: { xs: 94 },
          }}
        >
          <img
            src="assets/image/building/building-1.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "170px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(435px, 210px)",
              lg: "translate(1000px,210px)",
            },
            zIndex: { xs: 95 },
          }}
        >
          <img
            src="assets/image/building/building-7.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "170px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(520px, 260px)",
              lg: "translate(1085px,260px)",
            },
            zIndex: { xs: 96 },
          }}
        >
          <img
            src="assets/image/building/building-7.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(225px, 395px)",
              lg: "translate(850px,400px)",
            },
            zIndex: { xs: 96 },
          }}
        >
          <img
            src="assets/image/tree/tree-1.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(305px, 360px)",
              lg: "translate(933px,360px)",
            },
            zIndex: { xs: 96 },
          }}
        >
          <img
            src="assets/image/tree/tree-4.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(340px, 400px)",
              lg: "translate(965px,395px)",
            },
            zIndex: { xs: 90 },
          }}
        >
          <img
            src="assets/image/tree/tree-2.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(370px, 410px)",
              lg: "translate(990px,410px)",
            },
            zIndex: { xs: 90 },
          }}
        >
          <img
            src="assets/image/tree/tree-5.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(290px, 400px)",
              lg: "translate(910px,400px)",
            },
            zIndex: { xs: 90 },
          }}
        >
          <img
            src="assets/image/tree/pool-2.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "70px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(315px, 430px)",
              lg: "translate(930px,430px)",
            },
            zIndex: { xs: 90 },
          }}
        >
          <img
            src="assets/image/tree/pool-1.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "215px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(232px, 371px)",
              lg: "translate(775px,371px)",
            },
            zIndex: { xs: 91 },
          }}
        >
          <img
            src="assets/image/building/building-8.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "252px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(393px, 420px)",
              lg: "translate(917px,420px)",
            },
            zIndex: { xs: 98 },
          }}
        >
          <img
            src="assets/image/building/building-9.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "200px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(-30px, 325px)",
              lg: "translate(517px, 325px)",
            },
            zIndex: { xs: 94 },
          }}
        >
          <img
            src="assets/image/building/building-10.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "220px" },
            position: { xs: "absolute" },
            transform: {
              xs: "translate(63px, 465px)",
              lg: "translate(600px, 465px)",
            },
            zIndex: { xs: 100 },
          }}
        >
          <img
            src="assets/image/building/building-11.png"
            style={{ width: "100%" }}
            alt="Building"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(170px, 530px)",
              lg: "translate(800px, 530px)",
            },
            zIndex: { xs: 101 },
          }}
        >
          <img
            src="assets/image/tree/tree-3.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          sx={{
            position: { xs: "absolute" },
            transform: {
              xs: "translate(145px, 530px)",
              lg: "translate(760px, 540px)",
            },
            zIndex: { xs: 101 },
          }}
        >
          <img
            src="assets/image/tree/tree-5.png"
            style={{ width: "100%" }}
            alt="Tree"
          />
        </Box>

        <Box
          className="vector-miniature yellow-car"
          sx={{
            width: { xs: "30px", lg: "35px" },
            position: { xs: "absolute" },
            transform: { lg: "translate(1300px,135px)" },
            zIndex: { xs: 94 },
          }}
        >
          <img
            src="assets/image/car-1.png"
            style={{ width: "100%" }}
            alt="Car"
          />
        </Box>

        <Box
          className="vector-miniature red-car"
          sx={{
            width: { xs: "30px", lg: "35px" },
            position: { xs: "absolute" },
            zIndex: { xs: 1 },
          }}
        >
          <img
            src="assets/image/car-2.png"
            style={{ width: "100%" }}
            alt="Car"
          />
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
            zIndex: { xs: 95 },
          }}
        >
          <img
            src="assets/image/car-3.png"
            style={{ width: "100%" }}
            alt="Car"
          />
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
            zIndex: { xs: 93 },
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
            zIndex: { xs: 104 },
          }}
        >
          <img
            src="assets/image/plane.png"
            style={{ width: "100%" }}
            alt="Plane"
          />
        </Box>

        <Box
          className="vector-miniature cloud-1"
          sx={{
            width: { xs: "100px" },
            position: { xs: "absolute" },
            transform: { lg: "translate(600px,100px)" },
            zIndex: { xs: 101 },
          }}
        >
          <img
            src="assets/image/cloud/cloud-isometric-1.png"
            style={{ width: "100%" }}
            alt="Plane"
          />
        </Box>

        <Box
          className="vector-miniature cloud-2"
          sx={{
            width: { xs: "70px" },
            position: { xs: "absolute" },
            transform: { lg: "translate(600px,100px)" },
            zIndex: { xs: 101 },
          }}
        >
          <img
            src="assets/image/cloud/cloud-isometric-1.png"
            style={{ width: "100%" }}
            alt="Plane"
          />
        </Box>

        <Box
          className="vector-miniature cloud-3"
          sx={{
            width: { xs: "100px" },
            position: { xs: "absolute" },
            transform: { lg: "translate(600px,100px)" },
            zIndex: { xs: 101 },
          }}
        >
          <img
            src="assets/image/cloud/cloud-isometric-2.png"
            style={{ width: "100%" }}
            alt="Plane"
          />
        </Box>

        <Box
          className="vector-miniature cloud-4"
          sx={{
            width: { xs: "60px" },
            position: { xs: "absolute" },
            transform: { lg: "translate(600px,100px)" },
            zIndex: { xs: 101 },
          }}
        >
          <img
            src="assets/image/cloud/cloud-isometric-2.png"
            style={{ width: "100%" }}
            alt="Plane"
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: { xs: "relative" },
          width: { xs: "100%" },
          height: { xs: "585px" },
          zIndex: { xs: -10 },
        }}
      ></Box>
    </>
  );
};

export default Hero;
