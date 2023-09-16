import Hero from "./components/Hero";
import SectionPengenalanSatria from "./components/section8/SectionPengenalanSatria";
import SectionSatria from "./components/section8/SectionSatria";
import SectionSatriaBermainHP from "./components/SectionSatriaBermainHP";
import SectionHP from "./components/SectionHP";
import SectionHorizontalScroll from "./components/horizontal-scroll/SectionHorizontalScroll";

function App() {
  return (
    <div>
      <Hero />
      <SectionSatria />
      <SectionPengenalanSatria />
      <SectionSatriaBermainHP />
      <SectionHP />
      <SectionHorizontalScroll />
    </div>
  );
}

export default App;
