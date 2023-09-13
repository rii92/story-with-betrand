import { Box } from "@mui/material";
import Section8a from "./Section8a";
import color from "../../themes/Color";
import Section8b from "./Section8b";
import Section8c from "./Section8c";

const Section8 = () => {
  return (
    <Box
      sx={{ backgroundColor: color.white, position: "relative", zIndex: 15 }}
    >
      <Section8a />
      <Section8b />
      <Section8c />
    </Box>
  );
};

export default Section8;
