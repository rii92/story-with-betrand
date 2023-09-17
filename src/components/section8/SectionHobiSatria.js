import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";
import { useLayoutEffect } from "react";

const SectionHobiSatria = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel-section-hobi-satria");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current.offsetWidth,
          // markers: true,
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
          width: { xs: "400%", sm: "300%" },
          height: { xs: "100vh" },
          display: { xs: "flex" },
          overflow: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "200px", sm: "300px" },
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
          className="panel-section-hobi-satria"
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
              left: { xs: "20%", sm: "10%" },
              zIndex: { xs: 10 },
              backgroundColor: { xs: color.white },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "14px", sm: "16px" } }}
            >
              Satria adalah seorang yang hobi bersepeda. Saat ia bersepeda dalam
              kegiatan Car Free Day (CFD), dia mulai melihat dampak polusi udara
              yang buruk di jalanan kota. Meskipun merupakan “Hari Bebas
              Kendaraan”, langit Jakarta tetap tampak gelap gulita dipenuhi
              kabut polusi.
            </Typography>
          </Box>

          <img
            src="assets/image/car-free-day.png"
            alt="City"
            style={{ height: "100%" }}
          />
        </Box>
        <Box
          className="panel-section-hobi-satria"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <Box
            sx={{
              width: { xs: "80vw", sm: "50vw" },
              padding: { xs: "8px" },
              position: "absolute",
              top: { xs: "30%" },
              zIndex: { xs: 10 },
              backgroundColor: { xs: color.white },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "14px", sm: "16px" } }}
            >
              Dengan rasa ingin tahu yang tinggi, Satria mencari informasi
              terkait fenomena ini.
            </Typography>
          </Box>

          <img
            src="assets/image/house.png"
            alt="City"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionHobiSatria;
