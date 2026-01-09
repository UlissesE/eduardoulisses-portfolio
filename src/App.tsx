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
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 6/10,
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <Squares speed={0.3} direction="diagonal" />
      </div>
      <Navbar />
      <Hero />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
