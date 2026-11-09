import Starfield from "../components/layout/Starfield";
import Button from "../components/ui/Button";
import Eclipse from "../components/ui/Eclipse";
import { heroContent } from "../data/site";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Starfield />
      <div
        className="hero__orbit"
        aria-hidden="true"
        style={{ width: 1180, height: 1180, margin: "-590px 0 0 -590px", opacity: 0.6 }}
      />
      <div
        className="hero__orbit"
        aria-hidden="true"
        style={{
          width: 1500,
          height: 1500,
          margin: "-750px 0 0 -750px",
          borderStyle: "dashed",
          opacity: 0.4,
        }}
      />
      <Eclipse className="hero__eclipse" />
      <div className="hero__fade" aria-hidden="true" />

      <div className="hero__topline">
        <span>
          <span className="hero__path">{heroContent.path}</span>
          {heroContent.pathSuffix}
        </span>
        <span>
          <span className="hero__sysdot" aria-hidden="true" />
          {heroContent.status}
        </span>
      </div>

      <div className="hero__code" aria-hidden="true">
        <span>// mission.init</span>
        <code>
          <b>const</b> horizonte = <em>"além"</em>;
        </code>
        <code>explorar(horizonte);</code>
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow rise r1">
          <i aria-hidden="true" />
          {heroContent.eyebrow}
        </p>
        <h1 id="hero-title" className="rise r2">
          {heroContent.name}
          <span>.</span>
        </h1>
        <p className="hero__role hero__caret rise r3">
          <span>&lt;/&gt;</span> {heroContent.role}
        </p>
        <Button href="#projetos" className="rise r4 hero__cta">
          <span className="btn-primary__cmd">
            {heroContent.cta}
            <span>()</span>
          </span>{" "}
          <span aria-hidden="true">↓</span>
        </Button>
      </div>

      <a href="#sobre" className="hero__cue">
        ↓ {heroContent.cue}
      </a>
      <span className="hero__vlabel" aria-hidden="true">
        {heroContent.verticalLabel}
      </span>
    </section>
  );
}
