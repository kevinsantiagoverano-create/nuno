import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outline-light";

interface Props {
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({ variant = "primary", href, external, className, children, onClick, type = "button", disabled }: Props) {
  const cls = cn("btn", `btn-${variant}`, className);
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
