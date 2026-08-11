import Section from "./Section";
import image from "../assets/images/image.png";
import { Gamepad2Icon, Trophy } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      titulo="Hello,"
      tituloDestacado="world!"
      id="sobre"
      tituloAnimacao="world"
    >
      <motion.div
        className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start py-12"
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <motion.div
          className="space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="pointer-events-auto">
            <p className="text-lg md:text-2xl text-foreground leading-relaxed mb-4">
              Sou um estudante apaixonado por{" "}
              <strong className="text-primary">tecnologia</strong> e
              <strong className="text-primary"> inovação</strong>, cursando
              Engenharia de Software na{" "}
              <a
                href="https://www.fiap.com.br/"
                className="text-primary font-bold underline"
              >
                FIAP
              </a> (4º semestre) e estagiando na <strong className="text-primary font-bold">BP Bioenergy</strong>, onde trabalho com desenvolvimento, automação e dados.
            </p>
            <p className="text-lg md:text-2xl text-foreground leading-relaxed mb-4">
              Minha jornada começou com a curiosidade de entender como as
              coisas funcionam "por trás dos panos", e até hoje me fascino vendo as engrenagens girarem.</p>
            <p className="text-lg md:text-2xl text-foreground leading-relaxed">
              Busco minha primeira oportunidade como desenvolvedor backend em um time que valorize boas práticas e evolução técnica constante.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all"
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h4 className="text-lg mb-4 flex items-center gap-2">
          <span>Atualmente estudando:</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Java & SpringBoot",
            "Banco de Dados Oracle",
            "Cloud & IA AWS Certification",
            "Metodologias Ágeis",
            "Dynamic Programming"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background border border-primary/30 rounded-full text-sm hover:bg-primary/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <motion.div
          className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
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
        </motion.div>
      </div>
    </Section>
  );
}
