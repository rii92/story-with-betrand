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
import Section7 from "./components/Section7";
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
import Section18 from "./components/Section18";

function App() {
  return (
    <div className="App">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
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
      {Array.from({ length: 30 }).map(() => (
        <br />
      ))}
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      {/* {Array.from({ length: 100 }).map(() => (
        <br />
      ))} */}
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
      <Section18 />
    </div>
  );
}

export default App;
