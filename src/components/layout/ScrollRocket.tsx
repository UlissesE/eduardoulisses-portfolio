/** Foguete fixo à direita que desce conforme a rolagem (animation-timeline: scroll(root), ver animations.css). Decorativo. */
export default function ScrollRocket() {
  return (
    <div className="scroll-track" aria-hidden="true">
      <svg className="rocket" viewBox="0 0 40 80" fill="none">
        <defs>
          <linearGradient
            id="rocket-metal"
            x1="11"
            y1="30"
            x2="30"
            y2="55"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f1e7d7" />
            <stop offset="1" stopColor="#858b98" />
          </linearGradient>
          <linearGradient
            id="rocket-fire"
            x1="20"
            y1="30"
            x2="20"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff1c9" />
            <stop offset=".45" stopColor="#e5ac70" />
            <stop offset="1" stopColor="#e5ac70" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="rocket__flame"
          d="M15 30Q13 16 20 1Q27 16 25 30Z"
          fill="url(#rocket-fire)"
        />
        <path
          d="M13 42L5 54V65L15 60M27 42L35 54V65L25 60"
          fill="#ac8665"
          stroke="#e3bd8b"
          strokeWidth=".7"
        />
        <path
          d="M14 29H26L27 49Q27 65 20 74Q13 65 13 49Z"
          fill="url(#rocket-metal)"
        />
        <path d="M13 56Q20 61 27 56Q25 68 20 74Q15 68 13 56Z" fill="#d3a173" />
        <circle
          cx="20"
          cy="44"
          r="4.5"
          fill="#101c2c"
          stroke="#dcc5a7"
          strokeWidth="1.3"
        />
        <circle cx="19" cy="43" r="1.5" fill="#7fa2b8" />
        <path d="M14 29H26M15 32H25" stroke="#d5c9b8" strokeWidth="2" />
      </svg>
    </div>
  );
}
