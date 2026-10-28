import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PlanetSection, { type Accent } from "./components/layout/PlanetSection";
import ScrollRocket from "./components/layout/ScrollRocket";
import Starfield from "./components/layout/Starfield";
import CodeLabel from "./components/ui/CodeLabel";
import type { PlanetName } from "./components/ui/Planet";

// Esqueleto temporário da Etapa 2: valida header, âncoras, planetas e responsivo.
// Cada seção é substituída pelo componente real nas Etapas 3–7.
const skeleton: {
  id: string;
  accent: Accent;
  planet: PlanetName;
  side: "left" | "right";
  label: string;
  file?: string;
}[] = [
  { id: "sobre", accent: "sobre", planet: "mercury", side: "right", label: "SOBRE MIM", file: "about.ts" },
  { id: "formacao", accent: "formacao", planet: "venus", side: "left", label: "FORMAÇÃO", file: "education.log" },
  { id: "experiencia", accent: "experiencia", planet: "earth", side: "right", label: "EXPERIÊNCIA", file: "experience.log" },
  { id: "habilidades", accent: "ferramentas", planet: "mars", side: "left", label: "FERRAMENTAS", file: "Stack.java" },
  { id: "projetos", accent: "projetos", planet: "jupiter", side: "right", label: "PROJETOS", file: "missions.ts" },
  { id: "trajetoria", accent: "trajetoria", planet: "saturn", side: "left", label: "TRAJETÓRIA", file: "journey.log" },
  { id: "certificados", accent: "certificacoes", planet: "uranus", side: "right", label: "CERTIFICADOS E CURSOS", file: "learning.md" },
  { id: "contato", accent: "contato", planet: "neptune", side: "left", label: "CONTATO" },
];

function App() {
  return (
    <>
      <ScrollRocket />
      <Header />
      <main>
        <section
          id="inicio"
          aria-labelledby="hero-title"
          className="relative isolate grid min-h-[60vh] place-items-center overflow-hidden"
        >
          <Starfield />
          <h1 id="hero-title">[hero em construção]</h1>
        </section>

        <div className="journey">
          {skeleton.map((section) => (
            <PlanetSection
              key={section.id}
              id={section.id}
              labelledBy={`h-${section.id}`}
              accent={section.accent}
              planet={section.planet}
              side={section.side}
            >
              <CodeLabel label={section.label} file={section.file} />
              <h2 id={`h-${section.id}`}>[seção em construção]</h2>
            </PlanetSection>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
