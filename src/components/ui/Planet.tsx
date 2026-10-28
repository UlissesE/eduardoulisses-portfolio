export type PlanetName =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

type PlanetProps = {
  name: PlanetName;
};

/** Planeta decorativo em CSS puro (gradientes em styles/planets.css). */
export default function Planet({ name }: PlanetProps) {
  return (
    <div className={`planet planet--${name}`} aria-hidden="true">
      <div className="planet__orbit" />
      <div className="planet__sphere" />
    </div>
  );
}
