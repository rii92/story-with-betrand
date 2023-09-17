import { Box, Typography } from "@mui/material";
import color from "../../themes/Color";

const SectionSanitasiDiBandung = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "90vw", md: "40%" },
          padding: { xs: "8px 16px", sm: "16px 24px" },
          position: "absolute",
          top: { xs: "20%", sm: "30%", md: "25%" },
          left: { xs: "40%", md: "40%" },
          zIndex: { xs: 10 },
          backgroundColor: { xs: color.white },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "16px" } }}
        >
          Di perjalanan Satria juga melihat informasi dari baliho bahwa daerah
          perkotaan di Bandung masih menghadapi tantangan serius dalam hal
          sanitasi toilet yang layak.
        </Typography>
      </Box>

      <img
        src="assets/image/sanitasi-di-bandung.png"
        alt="City"
        style={{ height: "100%" }}
      />
    </>
  );
};

export default SectionSanitasiDiBandung;
