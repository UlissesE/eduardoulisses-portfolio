import type { CSSProperties, ReactNode } from "react";
import Planet, { type PlanetName } from "../ui/Planet";

export type Accent =
  | "sobre"
  | "formacao"
  | "experiencia"
  | "ferramentas"
  | "projetos"
  | "trajetoria"
  | "certificacoes"
  | "contato";

type PlanetSectionProps = {
  id: string;
  /** id do título (h2) que nomeia a seção para leitores de tela. */
  labelledBy: string;
  accent: Accent;
  planet: PlanetName;
  /** Lado do planeta no desktop. No celular o texto sempre vem primeiro. */
  side: "left" | "right";
  children: ReactNode;
};

/** Layout de duas colunas (texto + planeta) usado pela maioria das seções. */
export default function PlanetSection({
  id,
  labelledBy,
  accent,
  planet,
  side,
  children,
}: PlanetSectionProps) {
  const style = { "--a": `var(--acc-${accent})` } as CSSProperties;

  return (
    <section
      className="planet-section"
      id={id}
      aria-labelledby={labelledBy}
      style={style}
    >
      {side === "left" && <Planet name={planet} />}
      <div className="planet-section__content reveal">{children}</div>
      {side === "right" && <Planet name={planet} />}
    </section>
  );
}
