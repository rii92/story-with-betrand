import Hero from "./components/Hero";
import SectionPengenalanSatria from "./components/section8/SectionPengenalanSatria";
import SectionSatriaBermainHP from "./components/SectionSatriaBermainHP";
import SectionHP from "./components/SectionHP";
import SectionHorizontalScroll from "./components/horizontal-scroll/SectionHorizontalScroll";
import SectionHobiSatria from "./components/section8/SectionHobiSatria";
import SectionJumlahOrangDiKota from "./components/SectionJumlahOrangDiKota";
import SectionProyeksiJumlahOrangDiKota from "./components/SectionProyeksiJumlahOrangDiKota";
import SectionKutipanKepalaBappenas from "./components/SectionKutipanKepalaBappenas";
import SectionHorizontalScrollPeta from "./components/horizontal-scroll/peta/SectionPeta";
import BridginSetelahPeta from "./components/BridginSetelahPeta";

function App() {
  return (
    <div>
      {/* <Hero />
      <SectionPengenalanSatria />
      <SectionHobiSatria />
      <SectionSatriaBermainHP />
      <SectionHP /> */}
      <SectionHorizontalScroll />
      {/* <SectionJumlahOrangDiKota />
      <SectionProyeksiJumlahOrangDiKota />
      <SectionKutipanKepalaBappenas />
      <SectionHorizontalScrollPeta />
      <BridginSetelahPeta /> */}
    </div>
  );
}

export default App;
