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
      {Array.from({ length: 50 }).map(() => (
        <br />
      ))}
    </div>
  );
}

export default App;
