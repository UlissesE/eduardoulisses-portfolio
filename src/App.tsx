import AboutSection from "./components/AboutSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";
import Squares from "./components/reactBits/Squares.tsx";
import TechStack from "./components/TechStack.tsx";

function App() {
  return (
    <div className="relative">
      <Squares speed={0.3} direction="diagonal"/>
      <Navbar/>
      <Hero />
      <AboutSection/>
      <TechStack/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}


export default App;
