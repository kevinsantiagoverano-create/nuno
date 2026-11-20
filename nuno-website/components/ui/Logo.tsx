import { cn } from "@/lib/utils";

type Variant = "light" | "dark" | "mono";

const palette: Record<Variant, { left: string; right: string; dot: string; text: string }> = {
  light: { left: "#0A72FD", right: "#081F43", dot: "#F94044", text: "#081F43" },
  dark: { left: "#0A72FD", right: "#FFFFFF", dot: "#F94044", text: "#FFFFFF" },
  mono: { left: "currentColor", right: "currentColor", dot: "currentColor", text: "currentColor" },
};

/** Símbolo NUNO: dos chevrones de código desplazados + nodo central. */
export function LogoMark({ variant = "light", className }: { variant?: Variant; className?: string }) {
  const c = palette[variant];
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M19 11 5 24l14 13" stroke={c.left} strokeWidth="6" strokeLinejoin="miter" />
      <path d="M29 6l14 18-14 18" stroke={c.right} strokeWidth="6" strokeLinejoin="miter" />
      <rect x="21" y="21" width="6" height="6" fill={c.dot} />
    </svg>
  );
}

export function Logo({ variant = "light", className }: { variant?: Variant; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} style={{ color: palette[variant].text }}>
      <LogoMark variant={variant} className="h-8 w-8" />
      <span className="font-display text-[1.6rem] font-extrabold leading-none" style={{ letterSpacing: "0.04em" }}>
        NUNO
      </span>
      <span className="sr-only">Software engineering</span>
    </span>
  );
}
