import AboutSection from "./components/AboutSection.tsx";
import Hero from "./components/Hero";
import Squares from "./components/reactBits/Squares.tsx";
import TechStack from "./components/TechStack.tsx";

function App() {
  return (
    <div className="relative">
      <Squares speed={0.3} direction="diagonal"/>
      <Hero />
      <AboutSection/>
      <TechStack/>
    </div>
  );
}


export default App;
