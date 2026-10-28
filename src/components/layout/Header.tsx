import { useEffect, useRef, useState } from "react";
import { availability, navLinks } from "../../data/site";

const NAV_ID = "site-nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Com o menu aberto: Esc fecha (devolvendo o foco ao botão), clique fora fecha,
  // e voltar para a largura de desktop fecha.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 801px)");
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <a
        href="#inicio"
        className="logo"
        aria-label="Eduardo Ulisses, início"
        onClick={() => setOpen(false)}
      >
        eu<span>.</span>
      </a>

      <nav
        id={NAV_ID}
        className="site-header__nav"
        aria-label="Navegação principal"
        data-open={open}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
            {link.suffix && <span aria-hidden="true"> {link.suffix}</span>}
          </a>
        ))}
      </nav>

      <span className="site-header__avail">
        <i aria-hidden="true" /> {availability}
      </span>

      <button
        type="button"
        ref={toggleRef}
        className="site-header__toggle"
        aria-expanded={open}
        aria-controls={NAV_ID}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
