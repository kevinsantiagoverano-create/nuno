import { processSteps } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="metodologia" className="section bg-mist">
      <div className="container-nuno grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Metodología"
            title="Un proceso claro, de la idea a la entrega."
            description="Trabajamos por etapas para que siempre sepas qué se está construyendo, por qué y cómo va."
          />
        </div>
        <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-line">
          {processSteps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 0.04}>
                <div className="card flex gap-5 p-5 sm:p-6">
                  <span className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-deep font-display text-base font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-deep">Etapa {String(i + 1).padStart(2, "0")} — {s.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
