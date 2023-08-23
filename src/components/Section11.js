import { Box, Typography } from "@mui/material";
import color from "../themes/Color";

const Section11 = () => {
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
        Menilik berbagai permasalahan yang dihadapi, tidak sedikit pihak yang
        pesimistis terhadap masa depan perkotaan di Indonesia.{" "}
        <span style={{ fontWeight: "bold" }}>Namun bagaimana pun</span>, kita
        harus terus melakukan perubahan untuk mewujudkan perkotaan yang lebih
        baik.
      </Typography>
    </Box>
  );
};

export default Section11;
