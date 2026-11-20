"use client";
import { useCallback, useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="proyectos" className="section">
      <div className="container-nuno">
        <SectionHeading
          eyebrow="Portafolio"
          title="Demos que muestran cómo podría verse tu sistema."
          description="Proyectos conceptuales con datos ilustrativos para que explores la experiencia y las funcionalidades que podemos construir. No son clientes ni resultados reales."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={(proj) => setSelected(proj)} />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
