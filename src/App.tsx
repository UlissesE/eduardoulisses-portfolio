import AboutSection from "./components/AboutSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";
import Squares from "./components/reactBits/Squares.tsx";
import CareerTimeline from "./components/CareerTimeline.tsx";
import TechStack from "./components/TechStack.tsx";

function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 w-screen h-screen opacity-6/10 z-1 overflow-hidden">
        <Squares speed={0.3} direction="diagonal" />
      </div>
      <Navbar />
      <Hero />
      <AboutSection />
      <TechStack />
      <CareerTimeline />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
