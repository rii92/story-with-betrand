import { Box } from "@mui/material";
import SectionPenjelasanISPUDanPM25 from "./SectionPenjelasanISPUDanPM25";
import Section9b from "./Section9b";
import color from "../../themes/Color";
import Section9c from "./Section9c";

const Section9 = () => {
  return (
    <Box
      sx={{ backgroundColor: color.white, position: "relative", zIndex: 15 }}
    >
      <SectionPenjelasanISPUDanPM25 />
      <Section9b />
      <Section9c />
    </Box>
  );
};

export default Section9;
