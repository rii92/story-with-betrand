import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section15 = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        padding: { xs: "16px", sm: "0px" },
        position: { xs: "relative" },
        zIndex: { xs: 15 },
        display: { xs: "grid" },
        placeItems: { xs: "center" },
        backgroundColor: { xs: color.white },
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", sm: "400px", md: "500px" },
          marginX: { xs: "auto" },
          color: { xs: color.black },
        }}
      >
        Dari sudut pandang sosial, pembangunan perkotaan berkelanjutan antara lain bercirikan adanya konsistensi penegakan hukum, termasuk dalam penegakan rencana tata ruang. 

        Selain itu terbangun kondisi etika/moral dalam pelaksanaan pembangunan, adanya keadilan dan kesetaraan hak masyarakat, keamanan dan kenyamanan lingkungan kehidupan. 
      </Typography>
    </Box>
  );
};

export default Section15;
