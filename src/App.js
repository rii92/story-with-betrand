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
import Section23 from "./components/Section23";
import Section29 from "./components/Section29";
import Section30 from "./components/Section30";
import Section31 from "./components/Section31";
import Section32 from "./components/Section32";

function App() {
  return (
    <div>
      <Hero />
      <SectionPengenalanSatria />
      <SectionHobiSatria />
      <SectionSatriaBermainHP />
      <SectionHP />
      <SectionHorizontalScroll />
      <Section23 /> {/* Section 23 */}
      <SectionJumlahOrangDiKota />
      <SectionProyeksiJumlahOrangDiKota />
      <SectionKutipanKepalaBappenas />
      <SectionHorizontalScrollPeta />
      {/* <Section29 /> Section 29 */}
      {/* <Section30 /> Section 30 */}
      <Section31 /> {/* Section 31 */}
      <Section32 /> {/* Section 32Section32 */}
    </div>
  );
}

export default App;
