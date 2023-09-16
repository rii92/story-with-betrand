import { Box } from "@mui/material";
import SectionPengenalanSatria from "./SectionPengenalanSatria";
import SectionHobiSatria from "./SectionHobiSatria";
import color from "../../themes/Color";
import SectionSatriaMauMendaki from "./SectionSatriaMauMendaki";
import Section8c from "./Section8c";

const Section8 = () => {
  return (
    <Box
      sx={{ backgroundColor: color.white, position: "relative", zIndex: 15 }}
    >
      <SectionPengenalanSatria />
      <SectionHobiSatria />
      <SectionSatriaMauMendaki />
      <Section8c />
    </Box>
  );
};

export default Section8;
