import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow, title, description, className, light,
}: { eyebrow?: string; title: string; description?: string; className?: string; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className={cn("eyebrow", light && "!text-white/80")}>{eyebrow}</p>}
      <h2 className={cn("h-section mt-4", light && "!text-white")}>{title}</h2>
      {description && <p className={cn("lead mt-5", light && "!text-white/70")}>{description}</p>}
    </div>
  );
}
