import { SiGithub, SiLinkedin } from "react-icons/si";
import logo from "/logo.png";

interface Media {
  name?: string;
  icon?: React.ReactElement;
  link?: string;
}

export default function Footer() {
  const actualDate = new Date().getFullYear();

  const socialMedia: Media[] = [
    {
      name: "Linkedin",
      icon: <SiLinkedin />,
      link: "https://linkedin.com/in/eduardo-ulisses",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      link: "https://github.com/UlissesE",
    },
  ];

  return (
    <footer className="flex flex-col items-center py-6 px-4 gap-6 border-t border-border bg-black relative z-10">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-12 h-12" />
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        {socialMedia.map((media) => (
          <a
            key={media.name}
            href={media.link}
            title={media.name}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
          >
            {media.icon}
            <span>{media.name}</span>
          </a>
        ))}
      </div>
      <p className="text-muted-foreground">
        © {actualDate} Eduardo Ulisses. Todos os direitos reservados.
      </p>
    </footer>
  );
}
