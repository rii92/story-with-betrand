import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section5a from "./components/Section5a";
import {
  Section6a,
  Section6b,
  Section6c,
  Section6d,
  Section6e,
  Section6f,
  Section6g,
  Section6h,
  Section6i,
  Section6j,
} from "./components/section6";
import Section8 from "./components/section8/Section8";
import Section9 from "./components/section9/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section13 from "./components/Section13";
import Section14 from "./components/Section14";
import Section15 from "./components/Section15";
import Section16 from "./components/Section16";
import Section17 from "./components/Section17";
import Bridging1 from "./components/Bridging1";
import SectionPenangananSampah from "./components/SectionPenangananSampah";
import SectionPenangananSampahPie from "./components/SectionPenangananSampahPie";
import SectionMasalahAirLayak from "./components/SectionMasalahAirLayak";
import SectionPeta from "./components/SectionPeta";
import SectionPeta2 from "./components/SectionPeta2";

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <SectionPeta />
      <Section5a />
      <Section6a />
      <Section6b />
      <Section6c />
      <Section6d />
      <Section6e />
      <Section6f />
      <Section6g />
      <Section6h />
      <Section6i />
      <Section6j />
      {Array.from({ length: 20 }).map(() => (
        <br />
      ))}
      <Section8 />
      <Section9 />
      <Bridging1 />
      <Section10 />
      <SectionPenangananSampah />
      <SectionPenangananSampahPie />
      <SectionMasalahAirLayak />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
    </div>
  );
}

export default App;
