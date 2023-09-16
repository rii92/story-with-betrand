import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";
import { useLayoutEffect } from "react";

const SectionHorizontalScroll = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <Box ref={component}>
      <Box
        ref={slider}
        sx={{
          width: { xs: "500%" },
          height: { xs: "100vh" },
          display: { xs: "flex" },
          overflow: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "150px" },
            position: { xs: "absolute" },
            left: { xs: "16px" },
            bottom: { xs: "32px" },
            zIndex: { xs: 1 },
          }}
        >
          <img
            src="assets/image/satria-naik-sepeda.png"
            alt="Satria naik sepeda"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <Box
            sx={{
              width: { xs: "80vw" },
              padding: { xs: "8px" },
              position: "absolute",
              top: { xs: "30%" },
              left: { xs: "20%" },
              zIndex: { xs: 10 },
              backgroundColor: { xs: color.white },
            }}
          >
            <Typography variant="body1" sx={{ fontSize: { xs: "14px" } }}>
              Jakarta merupakan salah satu kota yang sering terjadi kemacetan.
              Menurut data BPS, pada tahun 2022 kendaraan bermotor mencapai
              26 juta unit kendaraan.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "0%" },
              bottom: { xs: "96px" },
              zIndex: { xs: 1 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "40%" },
              bottom: { xs: "96px" },
              zIndex: { xs: 1 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "13%" },
              bottom: { xs: "96px" },
              zIndex: { xs: 1 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "5%" },
              bottom: { xs: "72px" },
              zIndex: { xs: 2 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "30%" },
              bottom: { xs: "72px" },
              zIndex: { xs: 2 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "10%" },
              bottom: { xs: "48px" },
              zIndex: { xs: 4 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "30%" },
              bottom: { xs: "48px" },
              zIndex: { xs: 4 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "180px" },
              position: { xs: "absolute" },
              left: { xs: "50%" },
              bottom: { xs: "48px" },
              zIndex: { xs: 4 },
            }}
          >
            <img
              src="assets/image/motorcycle.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "480px" },
              position: { xs: "absolute" },
              left: { xs: "20%" },
              bottom: { xs: "96px" },
              zIndex: { xs: 1 },
            }}
          >
            <img
              src="assets/image/section9/car-right.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "480px" },
              position: { xs: "absolute" },
              left: { xs: "10%" },
              bottom: { xs: "72px" },
              zIndex: { xs: 2 },
            }}
          >
            <img
              src="assets/image/section9/car-right.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "480px" },
              position: { xs: "absolute" },
              left: { xs: "30%" },
              bottom: { xs: "48px" },
              zIndex: { xs: 3 },
            }}
          >
            <img
              src="assets/image/section9/car-right.png"
              alt="Mobil"
              style={{ width: "100%" }}
            />
          </Box>
          <img
            src="assets/image/city.jpg"
            alt="City"
            style={{ height: "100%" }}
          />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <img
            src="assets/image/city.jpg"
            alt="City"
            style={{ height: "100%" }}
          />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <img
            src="assets/image/city.jpg"
            alt="City"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "100vh" },
          backgroundColor: { xs: color.lightBlue },
        }}
      ></Box>
    </Box>
  );
};

export default SectionHorizontalScroll;
