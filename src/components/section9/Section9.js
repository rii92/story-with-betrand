import { Box } from "@mui/material";
import Section9a from "./Section9a";
import Section9b from "./Section9b";
import color from "../../themes/Color";
import Section9c from "./Section9c";

const Section9 = () => {
  return (
    <Box
      sx={{ backgroundColor: color.white, position: "relative", zIndex: 15 }}
    >
      <Section9a />
      <Section9b />
      <Section9c />
    </Box>
  );
};

export default Section9;
