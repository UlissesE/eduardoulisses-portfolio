import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import logo from "/logo.png";
import { GrTechnology } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { LuRocket, LuUserRound } from "react-icons/lu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#sobre", icon: <LuUserRound /> },
    { name: "Tecnologias", href: "#tecnologias", icon: <GrTechnology /> },
    { name: "Projetos", href: "#projetos", icon: <LuRocket /> },
    { name: "Contato", href: "#contato", icon: <BsTelephone /> },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-100 px-5 md:px-0 ${
        isScrolled ? "shadow-md backdrop-blur-sm border-b" : ""
      } ${isOpen ? "bg-black" : ""}`}
    >
      <div className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </a>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className="flex items-center gap-3 text-xl text-foreground hover:text-primary transition-colors duration-200 nav-line"
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-0 w-full bg-background shadow-md border-b">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative border p-4 rounded">
                <a
                  href={item.href}
                  className="flex items-center gap-3 text-xl text-foreground hover:text-primary transition-colors duration-200 nav-line"
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
