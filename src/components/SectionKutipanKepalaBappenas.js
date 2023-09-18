import { Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import color from "../themes/Color";

const SectionKutipanKepalaBappenas = () => {
  return (
    <>
      <Box
        sx={{
          paddingX: "16px",
          paddingY: "48px",
          backgroundColor: color.orange,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "500px", md: "650px" },
            position: "relative",
            marginX: { xs: "auto" },
            padding: { xs: "16px", sm: "24px", md: "32px" },
            display: { xs: "block", sm: "flex" },
            flexDirection: { sm: "row-reverse" },
            justifyContent: { sm: "center" },
            alignItems: { xs: "center" },
            gap: { md: "40px" },
            backgroundColor: "#FAE0AD",
            borderRadius: { xs: "16px", sm: "24px" },
            boxShadow: { xs: `12px 12px 0 ${color.yellow}` },
          }}
        >
          <FormatQuoteIcon
            sx={{
              position: "absolute",
              top: "-60px",
              right: "30px",
              fontSize: { xs: "96px", md: "128px" },
            }}
          />
          <Box
            sx={{
              width: { xs: "130px", sm: "170px", md: "250px" },
              position: "absolute",
              left: { xs: 0, md: "-30px" },
              bottom: { xs: "-50px", sm: "-20px" },
            }}
          >
            <img
              src="assets/image/bambang-brodjonegoro.png"
              alt="Bambang Brodjonegoro"
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "500px" } }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "16px" },
                fontStyle: { xs: "italic" },
                color: { xs: color.black },
                fontWeight: { xs: "bolder" },
              }}
            >
              “Mengingat sumber pertumbuhan akan berada di perkotaan, maka
              konsentrasi penduduk di perkotaan harus diurus dengan strategi
              pengelolaan metropolitan berkelanjutan dengan sebaik-baiknya,”
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: { xs: "8px" },
                fontSize: { xs: "12px", sm: "16px" },
                color: { xs: color.black },
                fontWeight: { xs: "bolder" },
              }}
            >
              Menteri PPN/Kepala Bappenas Periode 2016-2019, Bambang
              Brodjonegoro
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "0px", sm: "200px" },
              height: { xs: "50px", sm: "0px" },
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default SectionKutipanKepalaBappenas;
