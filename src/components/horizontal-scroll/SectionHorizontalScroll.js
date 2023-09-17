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
    <Box ref={component}>
      <Box
        ref={slider}
        sx={{
          width: { xs: "500%", md: "fit-content" },
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
            backgroundColor: color.black,
          }}
        >
          <SectionKemacetanJakarta />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <SectionTPASarimukti />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <SectionPenangananSampah />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <SectionPenyumbangSampah />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <SectionPenyumbangSampahLanjutan />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            backgroundColor: color.black,
          }}
        >
          <SectionSungaiKotor />
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
            src="assets/image/dirty-river.png"
            alt="City"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionHorizontalScroll;
