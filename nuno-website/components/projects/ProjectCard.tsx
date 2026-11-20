"use client";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const accentBar: Record<Project["accent"], string> = { blue: "bg-blue", coral: "bg-coral", deep: "bg-deep" };

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-slate", className)}>
      <span aria-hidden="true" className="h-1.5 w-1.5 bg-coral" /> Demo conceptual
    </span>
  );
}

function Thumb({ project }: { project: Project }) {
  const d = project.modules[0].m6;
  const max = Math.max(...d);
  return (
    <div className="relative h-44 overflow-hidden border-b border-line bg-mist p-4" aria-hidden="true">
      <div className="h-full rounded-md border border-line bg-white p-3 shadow-soft">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-coral" /><span className="h-2 w-2 rounded-full bg-line" /><span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-2 h-2 w-16 rounded-full bg-line" />
        </div>
        <div className="mt-3 flex h-[calc(100%-1.5rem)] items-end gap-1.5">
          {d.map((v, i) => (
            <span key={i} className={cn("flex-1 rounded-t-sm", i === d.length - 1 ? accentBar[project.accent] : "bg-deep/15")} style={{ height: `${Math.max(18, (v / max) * 82)}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project, trigger: HTMLElement) => void }) {
  return (
    <article className="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Thumb project={project} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="font-display text-xs font-semibold text-blue">{project.category}</p>
          <DemoBadge />
        </div>
        <h3 className="mt-3 text-xl font-bold text-deep">{project.name}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Funcionalidades de ${project.name}`}>
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-deep/80">{f}</li>
          ))}
          {project.features.length > 4 && <li className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-slate">+{project.features.length - 4}</li>}
        </ul>
        <button
          type="button"
          onClick={(e) => onOpen(project, e.currentTarget)}
          aria-label={`Ver proyecto ${project.name}`}
          className="btn btn-secondary mt-6 w-full justify-between"
        >
          Ver proyecto <ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}
