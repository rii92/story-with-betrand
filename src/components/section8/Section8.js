import { Box } from "@mui/material";
import SectionPengenalanSatria from "./SectionPengenalanSatria";
import color from "../../themes/Color";
import SectionSatriaMauMendaki from "./SectionSatriaMauMendaki";
import Section8c from "./Section8c";

const Section8 = () => {
  return (
    <Box
      sx={{ backgroundColor: color.white, position: "relative", zIndex: 15 }}
    >
      <SectionPengenalanSatria />
      <SectionSatriaMauMendaki />
      <Section8c />
    </Box>
  );
};

export default Section8;
