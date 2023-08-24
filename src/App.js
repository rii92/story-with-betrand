import { Box } from "@mui/material";
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
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";

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
    </div>
  );
}

export default App;
