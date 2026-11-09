import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/** Botão primário (dourado claro). É um link de âncora, então renderiza `<a>`. */
export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <a className={["btn-primary", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}
