import Section from "./Section";
import { GraduationCap, Briefcase, Code2, Terminal } from "lucide-react";

interface Milestone {
  date: string;
  title: string;
  desc: string;
  img?: string;
  tag: string;
  icon: React.ReactNode;
}

export default function CareerTimeline() {
  const milestones: Milestone[] = [
{
  date: "Março de 2025",
  title: "Entrada na FIAP",
  desc: "Conquistei uma bolsa de estudos de 100% pelo Prouni para cursar Engenharia de Software na FIAP.",
  img: "/images/career/college.png",
  tag: "Educação",
  icon: <GraduationCap className="w-5 h-5" />,
},
{
  date: "Abril de 2026",
  title: "Estágio na bp bioenergy",
  desc: "Iniciei meu estágio em Tecnologia na bp bioenergy, atuando em demandas internas com automações, desenvolvimento de aplicações low-code e ETL de dados, aplicando meus conhecimentos em um ambiente corporativo.",
  img: "/images/career/bp_internship.png",
  tag: "Carreira",
  icon: <Briefcase className="w-5 h-5" />,
}
  ];

  return (
    <Section
      titulo="Minha"
      tituloDestacado="Trajetória"
      id="carreira"
      descricao="Uma linha do tempo da minha jornada acadêmica e profissional."
    >
      <div className="relative max-w-5xl mx-auto px-4 py-8 mt-4">
        {/* Central Spine Line */}
        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/30 to-transparent rounded-full" />

        {/* Milestones list */}
        <div className="space-y-12 md:space-y-20">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Milestone Node Badge on Line */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,255,136,0.3)] z-10 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2">
                  {item.icon}
                </div>

                {/* Left side empty space or right side spacing for alignment */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                  {/* Outer card shell */}
                  <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-lg hover:border-primary/80 transition-all duration-300 group hover:-translate-y-1">
                    {/* Image header if available */}
                    {item.img && (
                      <div className="h-48 sm:h-56 overflow-hidden relative">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="p-6 text-left space-y-4 relative z-10 -mt-10">
                      <div className="inline-flex items-center justify-between gap-2 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {item.tag}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/50 mx-1" />
                        <span className="text-xs font-medium text-muted-foreground font-mono">
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty column placeholder to balance the grid on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
