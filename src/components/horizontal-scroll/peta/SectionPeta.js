import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";
import { useLayoutEffect } from "react";
import SectionIntroPeta from "../../SectionIntroPeta";
import {
  Section6a,
  Section6b,
  Section6c,
  Section6d,
  Section6e,
  Section6f,
  Section6g,
  Section6h,
  Section6i,
  Section6j,
} from "../../section6";
import SectionPeta from "../../SectionPeta";

const SectionHorizontalScrollPeta = () => {
  const componentMetropolitan = [
    <Section6a />,
    <Section6b />,
    <Section6c />,
    <Section6d />,
    <Section6e />,
    <Section6f />,
    <Section6g />,
    <Section6h />,
    <Section6i />,
    <Section6j />,
  ];
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
          width: { xs: "1100%" },
          height: { xs: "100vh" },
          display: { xs: "flex" },
          overflow: { xs: "hidden" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            position: { xs: "absolute" },
            zIndex: { xs: 1 },
          }}
        >
          <SectionPeta />
        </Box>
        <Box
          className="panel"
          sx={{
            width: { xs: "100%" },
            height: { xs: "100vh" },
            position: { xs: "relative" },
            zIndex: 2,
          }}
        >
          <SectionIntroPeta />
        </Box>
        {componentMetropolitan.map((metropolitan) => (
          <Box
            className="panel"
            sx={{
              width: { xs: "100%" },
              height: { xs: "100vh" },
              position: { xs: "relative" },
              zIndex: 2,
            }}
          >
            {metropolitan}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SectionHorizontalScrollPeta;
