import { ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="servicios" className="section bg-mist">
      <div className="container-nuno">
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Ingeniería de software para cada etapa de tu operación."
            description="Desde un sistema nuevo hasta la mejora de uno existente: diseñamos y desarrollamos según cómo trabaja tu empresa."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, name, description, examples, icon: Icon }, i) => (
            <article key={id} className="group flex flex-col bg-white p-7 transition-colors hover:bg-white sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-deep text-white transition group-hover:bg-blue">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-bold text-slate/70">Servicio {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-snug text-deep">{name}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Ejemplos de ${name}`}>
                {examples.map((e) => (
                  <li key={e} className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-deep/80">{e}</li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-auto inline-flex items-center gap-1.5 rounded-sm pt-6 font-display text-sm font-semibold text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                Consultar este servicio <ArrowRight size={16} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
