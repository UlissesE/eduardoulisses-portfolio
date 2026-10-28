import { footerContent } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="logo" href="#inicio" aria-label="Voltar ao início">
        eu<span>.</span>
      </a>
      <span>{footerContent.copyright}</span>
      <a href="#inicio">{footerContent.backToTop}</a>
    </footer>
  );
}
