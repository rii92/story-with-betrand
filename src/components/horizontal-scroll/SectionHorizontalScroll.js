import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";
import color from "../../themes/Color";
import { useLayoutEffect } from "react";
import SectionKemacetanJakarta from "./SectionKemacetanJakarta";
import SectionTPASarimukti from "./SectionTPASarimukti";
import SectionPenangananSampah from "./SectionPenangananSampah";
import SectionSungaiKotor from "./SectionSungaiKotor";
import SectionPenyumbangSampah from "./SectionPenyumbangSampah";
import SectionPenyumbangSampahLanjutan from "./SectionPenyumbangSampahLanjutan";
import SectionSanitasiDiBandung from "./SectionSanitasiDiBandung";
import SectionSanitasiDiBandungLanjutan from "./SectionSanitasiDiBandungLanjutan";
import SectionSungaiKotorLanjutan from "./SectionSungaiKotorLanjutan";
import SectionSungaiKotorLanjutan2 from "./SectionSungaiKotorLanjutan2";

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
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <Box
      ref={component}
      sx={{ width: { xs: "100%" }, backgroundColor: { xs: color.white } }}
    >
      <Box
        ref={slider}
        sx={{
          width: { xs: "1000%", md: "fit-content" },
          height: { xs: "100vh" },
          display: { xs: "flex" },
          overflow: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "150px", sm: "250px", md: "160px" },
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
          }}
        >
          <SectionKemacetanJakarta />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionTPASarimukti />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionPenangananSampah />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionPenyumbangSampah />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionPenyumbangSampahLanjutan />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionSanitasiDiBandung />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionSanitasiDiBandungLanjutan />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionSungaiKotor />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionSungaiKotorLanjutan />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
          }}
        >
          <SectionSungaiKotorLanjutan2 />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionHorizontalScroll;
