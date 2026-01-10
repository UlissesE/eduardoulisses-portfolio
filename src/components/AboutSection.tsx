import Section from "./Section";
import image from "../assets/images/image.png";
import { Gamepad2Icon, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <Section titulo="Hello," tituloDestacado="world! 👋" id="sobre" className="">
      <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start py-12">
        <div className="space-y-4">
          <div className="relative group">
            {/* background brilhante atrás da imagem */}
            <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition"></div>
            {/* Área da imagem */}
            <div className="relative w-full aspect-square bg-primary/20 rounded-2xl border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              <img
                src={image}
                alt=""
                className="h-full object-cover rounded-lg pointer-events-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="pointer-events-auto">
            <p className="text-2xl text-foreground leading-relaxed mb-4">
              Sou um estudante apaixonado por{" "}
              <strong className="text-primary">tecnologia</strong> e
              <strong className="text-primary"> inovação</strong>, cursando
              Engenharia de Software na{" "}
              <a
                href="https://www.fiap.com.br/"
                className="text-primary font-bold"
              >
                FIAP
              </a>
              . Minha jornada começou com a curiosidade de entender como as
              coisas funcionam "por trás dos panos".
            </p>
            <p className="text-2xl text-foreground leading-relaxed">
              Atualmente estou no{" "}
              <strong className="text-primary">3º semestre</strong>, focado em
              desenvolvimento full stack. Acredito que a melhor forma de
              aprender é colocando a mão na massa, por isso estou sempre
              trabalhando em projetos pessoais e buscando novos desafios.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all">
        <h4 className="text-lg mb-4 flex items-center gap-2">
          <span>Atualmente estudando:</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Next.js & TypeScript",
            "Java & Python",
            "Node.js & Express",
            "PostgreSQL",
            "AWS Cloud",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background border border-primary/30 rounded-full text-sm hover:bg-primary/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Gamepad2Icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg">Jogos</h4>
          </div>
          <p className="text-muted-foreground">
            No meu tempo livre, gosto de experimentar jogos. Me ajuda a
            trabalhar raciocínio e até mesmo a criatividade :D
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg">Leitura</h4>
          </div>
          <p className="text-muted-foreground">
            Um escape das telas. Depois de um dia de programação, nada como uma
            leitura para descansar o cérebro e a vista.
          </p>
        </div>
      </div>
    </Section>
  );
}
