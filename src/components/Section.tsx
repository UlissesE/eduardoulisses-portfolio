interface SectionProps {
  titulo?: string;
  tituloDestacado?: string;
  descricao?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Section({
  titulo,
  tituloDestacado,
  descricao,
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center px-4 py-20 relative z-10 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center relative z-5">
          <h2 className="text-7xl mb-6 text-center pointer-events-auto">
            {titulo} <span className="text-primary">{tituloDestacado}</span>
          </h2>
          {descricao && (
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto pointer-events-auto">
              {descricao}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
