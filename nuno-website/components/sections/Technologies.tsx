import { techGroups } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Technologies() {
  return (
    <section id="tecnologias" className="section bg-mist">
      <div className="container-nuno">
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologías"
            title="La tecnología se elige según el proyecto."
            description="Estas son las tecnologías con las que podemos construir soluciones, según lo que cada necesidad requiera."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((g) => (
            <div key={g.title} className="card p-6">
              <h3 className="font-display text-base font-bold text-deep">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[0.95rem] text-deep/85">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-blue" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
