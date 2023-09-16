import Hero from "./components/Hero";
import SectionPengenalanSatria from "./components/section8/SectionPengenalanSatria";
import SectionSatriaBermainHP from "./components/SectionSatriaBermainHP";
import SectionHP from "./components/SectionHP";
import SectionHorizontalScroll from "./components/horizontal-scroll/SectionHorizontalScroll";
import SectionHobiSatria from "./components/section8/SectionHobiSatria";
import SectionJumlahOrangDiKota from "./components/SectionJumlahOrangDiKota";
import SectionProyeksiJumlahOrangDiKota from "./components/SectionProyeksiJumlahOrangDiKota";
import SectionKutipanKepalaBappenas from "./components/SectionKutipanKepalaBappenas";
import SectionPeta from "./components/SectionPeta";
import Section5a from "./components/Section5a";
import {
  Section6a,
  Section6b,
  Section6c,
  Section6d,
} from "./components/section6";

function App() {
  return (
    <div>
      <Hero />
      <SectionPengenalanSatria />
      <SectionHobiSatria />
      <SectionSatriaBermainHP />
      <SectionHP />
      <SectionHorizontalScroll />
      <SectionJumlahOrangDiKota />
      <SectionProyeksiJumlahOrangDiKota />
      <SectionKutipanKepalaBappenas />
      <SectionPeta />
      <Section5a />
      <Section6a />
      <Section6b />
      <Section6c />
      <Section6d />
    </div>
  );
}

export default App;
