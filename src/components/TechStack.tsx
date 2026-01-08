import { Code2, Server } from "lucide-react";
import { AiOutlineTool } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { PiFileSql } from "react-icons/pi";
import {
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Section from "./Section";

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  technologies: Array<{ name: string; icon: React.ReactNode | string }>;
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-primary/20 to primary/5 ",
      technologies: [
        { name: "React", icon: <SiReact color="cyan"/> },
        { name: "TypeScript", icon: <SiTypescript color="#3179c6"/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#46afb3"/> },
        { name: "HTML", icon: <SiHtml5 color="orange"/> },
        { name: "JavaScript", icon: <SiJavascript color="yellow"/> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500/20 to-green-500/5",
      technologies: [
        { name: "Python", icon: <SiPython color="yellow"/> },
        { name: "REST APIs", icon: "🔌" },
        { name: "Node.js", icon: <SiNodedotjs color="darkgreen"/> },
      ],
    },
    {
      title: "Database",
      icon: <GoDatabase className="w-6 h-6" />,
      color: "from-blue-500/20 to-blue-500/5",
      technologies: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#326790"/> },
        { name: "SQL", icon: <PiFileSql /> },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <AiOutlineTool className="w-6 h-6" />,
      color: "from-orange-500/20 to-orange-500/5",
      technologies: [
        { name: "Git", icon: <SiGit color="#f05133"/> },
        { name: "Linux", icon: <SiLinux color="black"/> },
        { name: "VS Code", icon: <VscCode color="cyan"/> },
        { name: "Postman", icon: <SiPostman color="#fe6c34"/> },
      ],
    },
  ];

  return (
    <Section
      titulo="Tecnologias &"
      tituloDestacado="Stack"
      descricao="Ferramentas e tecnologias que utilizo para construir soluções"
      id="tecnologias"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all group pointer-events-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 bg-gradient-to-br ${category.color} rounded-lg border border-primary/20 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>
              <h3 className="text-2xl group-hover:text-primary transition-colors">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               {category.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center bg-secondary/50 border border-border rounded-lg p-4 hover:border-primary hover:bg-primary/10 transition-all hover:scale-105 cursor-pointer group/item">
                     <div className="text-3xl mb-2 group-hover/item:scale-125 transition-transform">
                        {tech.icon}
                     </div>
                     <p className="text-sm text-foreground group-hover/item:text-primary transition-colors">
                        {tech.name}
                     </p>
                  </div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
