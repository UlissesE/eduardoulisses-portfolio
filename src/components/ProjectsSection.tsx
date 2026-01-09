import { SiGithub } from "react-icons/si";
import data from "../data/data.json";
import Section from "./Section";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectsSection() {
  const projects = data.projects;
  console.log(projects);
  return (
    <Section
      id="projetos"
      titulo="Meus"
      tituloDestacado="projetos"
      descricao="Seleção dos meus melhores trabalhos. Cada projeto representa um desafio superado e aprendizado consolidado."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group flex flex-col"
          >
            {/* Imagem do Projeto */}
            <div className="relative h-48 overflow-hidden bg-secondary">
              <img
                src={project.media.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                {project.shortDescription}
              </p>

              {/* Tecnologias */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                  Tecnologias:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full group/tech hover:bg-primary/20 transition-all"
                    >
                      <span className="text-xs text-primary">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3">
                <a
                  href={project.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all group/btn"
                >
                  <SiGithub className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                  <span className="text-sm group-hover/btn:text-primary transition-colors">
                    Código
                  </span>
                </a>
                {project.links.liveDemo &&
                  typeof project.links.liveDemo === "string" && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
