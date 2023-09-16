import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionPengenalanSatria = () => {
  return (
    <Box
      sx={{
        height: { xs: "180vh" },
        paddingX: { xs: "16px" },
        position: { xs: "relative" },
        zIndex: { xs: 1 },
      }}
    >
      
      <Box sx={{ width: { xs: "100%" }, height: { xs: "60vh" } }}>
        <Typography variant="body1" sx={{ fontSize: { xs: "14px" } }}>
          <span style={{ padding: "1px 2px", backgroundColor: color.white }}>
            Satria adalah seorang yang hobi bersepeda. Saat ia bersepeda dalam
            kegiatan Car Free Day (CFD), dia mulai melihat dampak polusi udara
            yang buruk di jalanan kota. Meskipun merupakan “Hari Bebas
            Kendaraan”, langit Jakarta tetap tampak gelap gulita dipenuhi kabut
            polusi.
          </span>
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%" }, height: { xs: "60vh" } }}>
        <Typography variant="body1" sx={{ fontSize: { xs: "14px" } }}>
          <span style={{ padding: "1px 2px", backgroundColor: color.white }}>
            Dengan rasa ingin tahu yang tinggi, Satria mencari informasi terkait
            fenomena ini.
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionPengenalanSatria;
