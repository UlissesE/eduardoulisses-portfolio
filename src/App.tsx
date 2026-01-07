import Hero from "./components/Hero";
import Squares from "./components/reactBits/Squares.tsx";

function App() {
  return (
    <div className="relative">
      <Squares speed={0.3} direction="diagonal"/>
      <Hero />
    </div>
  );
}


export default App;
