/** Eclipse do hero (corona, borda iluminada e "diamante"). Decorativo; ids prefixados para não colidir com outros SVGs da página. */
export default function Eclipse({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 1200 1000"
      fill="none"
    >
      <defs>
        <radialGradient id="eclipse-corona">
          <stop offset=".62" stopColor="#ffb968" stopOpacity="0" />
          <stop offset=".72" stopColor="#ffba77" stopOpacity=".06" />
          <stop offset=".79" stopColor="#ffc486" stopOpacity=".28" />
          <stop offset=".83" stopColor="#ffdcb2" stopOpacity=".65" />
          <stop offset=".86" stopColor="#eaaa66" stopOpacity=".15" />
          <stop offset="1" stopColor="#c57639" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="eclipse-rim"
          x1="340"
          y1="180"
          x2="850"
          y2="900"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff2d6" />
          <stop offset=".35" stopColor="#ffc88e" />
          <stop offset=".7" stopColor="#af6d38" stopOpacity=".5" />
          <stop offset="1" stopColor="#784829" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="eclipse-diamond">
          <stop stopColor="#fffdf1" />
          <stop offset=".12" stopColor="#fff1cc" />
          <stop offset=".3" stopColor="#ffc17d" stopOpacity=".6" />
          <stop offset="1" stopColor="#f6a454" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="eclipse-disk" cx=".42" cy=".25" r=".8">
          <stop stopColor="#0c0c0f" />
          <stop offset=".7" stopColor="#08090b" />
          <stop offset="1" stopColor="#08090b" />
        </radialGradient>
        <linearGradient id="eclipse-fade" x2="0" y2="1">
          <stop offset=".55" stopColor="white" />
          <stop offset="1" stopColor="black" />
        </linearGradient>
        <mask id="eclipse-horizon">
          <path fill="url(#eclipse-fade)" d="M0 0h1200v1000H0z" />
        </mask>
        <filter id="eclipse-blur">
          <feGaussianBlur stdDeviation="17" />
        </filter>
        <filter id="eclipse-soft">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <g mask="url(#eclipse-horizon)">
        <ellipse cx="600" cy="580" rx="530" ry="530" fill="url(#eclipse-corona)" />
        <circle
          cx="600"
          cy="580"
          r="390"
          stroke="#f6b574"
          strokeWidth="12"
          opacity=".35"
          filter="url(#eclipse-blur)"
        />
        <circle cx="600" cy="580" r="390" fill="url(#eclipse-disk)" />
        <circle
          cx="600"
          cy="580"
          r="391"
          stroke="url(#eclipse-rim)"
          strokeWidth="3"
        />
        <path
          d="M209 580a391 391 0 0 1 782 0"
          stroke="#ffe0b6"
          strokeWidth="3"
          opacity=".7"
          filter="url(#eclipse-soft)"
        />
        <circle cx="337" cy="291" r="90" fill="url(#eclipse-diamond)" />
        <ellipse cx="337" cy="291" rx="45" ry="2" fill="url(#eclipse-diamond)" />
        <circle cx="337" cy="291" r="4" fill="#fff8df" />
      </g>
    </svg>
  );
}
