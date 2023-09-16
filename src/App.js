import Hero from "./components/Hero";
import { useEffect } from "react";
import "./css/App.css";
import SectionPengenalanSatria from "./components/section8/SectionPengenalanSatria";
import SectionSatria from "./components/section8/SectionSatria";
import SectionSatriaBermainHP from "./components/SectionSatriaBermainHP";
import SectionHP from "./components/SectionHP";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <Hero />
      <SectionSatria />
      <SectionPengenalanSatria />
      <SectionSatriaBermainHP />
      <SectionHP />
      {/* <Box className="box-scroll" ref={app}> */}
      {/* <Box
        sx={{
          height: { xs: "100vh" },
          display: { xs: "inline-block" },
        }}
      >
        <img
          src="assets/image/city.jpg"
          style={{ height: "100%" }}
          alt="Hero"
        />
      </Box> */}
      {/* <Box
          sx={{
            height: { xs: "100vh" },
            display: { xs: "inline-block" },
          }}
        >
          <img
            src="assets/image/city.jpg"
            style={{ height: "100%" }}
            alt="Hero"
          />
        </Box>
        <Box
          sx={{
            height: { xs: "100vh" },
            display: { xs: "inline-block" },
          }}
        >
          <img
            src="assets/image/city.jpg"
            style={{ height: "100%" }}
            alt="Hero"
          />
        </Box>
        <Box
          sx={{
            height: { xs: "100vh" },
            display: { xs: "inline-block" },
          }}
        >
          <img
            src="assets/image/city.jpg"
            style={{ height: "100%" }}
            alt="Hero"
          />
        </Box>
        <Box
          sx={{
            height: { xs: "100vh" },
            display: { xs: "inline-block" },
          }}
        >
          <img
            src="assets/image/city.jpg"
            style={{ height: "100%" }}
            alt="Hero"
          />
        </Box>
        <Box
          sx={{
            height: { xs: "100vh" },
            display: { xs: "inline-block" },
          }}
        >
          <img
            src="assets/image/city.jpg"
            style={{ height: "100%" }}
            alt="Hero"
          />
        </Box>
      </Box> */}
    </div>
  );
}

export default App;
