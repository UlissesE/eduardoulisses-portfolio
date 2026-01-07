interface SectionProps {
  titulo?: string;
  tituloDestacado?: string;
  descricao?: string;
  id?: string;
  classname?: string;
  children?: React.ReactNode;
}

export default function Section({
  titulo,
  tituloDestacado,
  descricao,
  id,
  classname,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${classname}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-16 text-center">{titulo} <span className="text-primary">{tituloDestacado}</span></h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {descricao}
        </p>
        {children}
      </div>
    </section>
  );
}
