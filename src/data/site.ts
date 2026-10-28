export type NavLink = {
  label: string;
  href: `#${string}`;
  /** Seta decorativa (aria-hidden), separada do rótulo acessível. */
  suffix?: string;
};

export const navLinks: NavLink[] = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetória", href: "#trajetoria" },
  // Âncora interna: seta para baixo (correção conhecida), não "↗".
  { label: "Contato", href: "#contato", suffix: "↓" },
];

export const availability = "Disponível para novas órbitas";

export const footerContent = {
  copyright: "© 2026 Eduardo Ulisses · Feito com curiosidade e código.",
  backToTop: "De volta ao Sol ↑",
};
