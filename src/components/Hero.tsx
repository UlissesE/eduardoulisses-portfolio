import { ChevronRight, Github, Linkedin } from "lucide-react";
import TextType from "./reactBits/TextType";
import eups from "../assets/images/EUPS.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10 pointer-events-none">
      <div className="flex items-center absolute top-50">
       <ChevronRight/>
       <h3 className="text-primary">Hello, world! Eu sou</h3> 
      </div>
      <div className="flex flex-col items-center relative z-5">
        <h1 className="text-6xl md:text-8xl text-center font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent pointer-events-auto">
          Eduardo Ulisses
        </h1>
        <TextType
          text={[
            "Desenvolvedor Full Stack em formação",
            "Engenharia de Software",
            "Happy coding!",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-xl md:text-2xl text-muted-foreground pointer-events-auto"
        />

        <div className="flex gap-6 justify-center mt-12 pointer-events-auto">
          <a
            href="https://github.com/UlissesE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-secondary/70 hover:bg-primary/10 border-2 border-border rounded-lg transition-all hover:border-primary hover:scale-105 group"
          >
            <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/eduardo-ulisses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-secondary/70 hover:bg-primary/10 border-2 border-border rounded-lg transition-all hover:border-primary hover:scale-105 group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
      <img src={eups} alt="" className="absolute h-80 top-55 z-4 opacity-30" />
    </section>
  );
}
