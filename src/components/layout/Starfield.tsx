/** Campo de estrelas do hero: estrelas fixas + camada em drift lento. Posicionar dentro de um pai `position: relative; isolation: isolate`. */
export default function Starfield() {
  return (
    <>
      <div className="stars" aria-hidden="true" />
      <div className="drift" aria-hidden="true" />
    </>
  );
}
