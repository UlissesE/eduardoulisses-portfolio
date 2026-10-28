type CodeLabelProps = {
  label: string;
  /** Nome do "arquivo" mostrado ao lado (decorativo). Ex.: about.ts */
  file?: string;
};

/** Rótulo de seção no formato `// SOBRE MIM  [about.ts]`. A cor do `// ` vem de `--a`. */
export default function CodeLabel({ label, file }: CodeLabelProps) {
  return (
    <span className="code-label">
      <span className="code-label__title">
        <span aria-hidden="true">// </span>
        {label}
      </span>
      {file && <code aria-hidden="true">{file}</code>}
    </span>
  );
}
