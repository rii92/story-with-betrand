import { Box } from "@mui/material";

const SectionSatriaBermainHP = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { xs: "100vh" },
        paddingX: { xs: "16px" },
        position: { xs: "sticky" },
        top: { xs: 0 },
        backgroundColor: { xs: "#C8D9EB" },
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        overflowX: { xs: "hidden" },
      }}
    >
      <Box
        sx={{
          width: { xs: "700px" },
          position: { xs: "relative" },
          zIndex: { xs: 1 },
        }}
      >
        <img
          src="assets/image/satria-bermain-hp.png"
          alt="Satria bermain HP"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          height: { xs: "10px" },
          position: { xs: "absolute" },
          bottom: { xs: "41vh" },
          left: { xs: 0 },
          right: { xs: 0 },
          backgroundColor: { xs: "#8A9EDD" },
          zIndex: { xs: 0 },
        }}
      ></Box>
      <Box
        sx={{
          height: { xs: "41vh" },
          position: { xs: "absolute" },
          bottom: { xs: 0 },
          left: { xs: 0 },
          right: { xs: 0 },
          backgroundColor: { xs: "#B1D3EF" },
          zIndex: { xs: 0 },
        }}
      ></Box>
    </Box>
  );
};

export default SectionSatriaBermainHP;
