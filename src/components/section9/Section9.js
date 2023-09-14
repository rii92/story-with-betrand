import { Box } from "@mui/material";
import SectionISPUDanPM25 from "./SectionISPUDanPM25";
import SectionAkibatPolusi from "./SectionAkibatPolusi";
import color from "../../themes/Color";
import SectionKemacetanJalan from "./SectionKemacetanJalan";

const Section9 = () => {
  return (
    <Box
      sx={{ backgroundColor: color.white, position: "relative", zIndex: 15 }}
    >
      <SectionISPUDanPM25 />
      <SectionAkibatPolusi />
      <SectionKemacetanJalan />
    </Box>
  );
};

export default Section9;
