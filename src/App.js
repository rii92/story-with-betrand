import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
  return (
    <div className="App">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      {Array.from({ length: 20 }).map(() => (
        <br />
      ))}
    </div>
  );
}

export default App;
