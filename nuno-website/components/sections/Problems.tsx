import { problems } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Problems() {
  return (
    <section id="problemas" className="section">
      <div className="container-nuno">
        <Reveal>
          <SectionHeading
            eyebrow="Problemas que resolvemos"
            title="Tu operación no debería depender de procesos que te frenan."
            description="Si alguna de estas situaciones te resulta familiar, probablemente hay una forma más simple de trabajar."
          />
        </Reveal>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {problems.map(({ text, icon: Icon }) => (
            <li key={text} className="group flex flex-col gap-4 bg-white p-6 transition-colors hover:bg-mist">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue/10 text-blue transition group-hover:bg-blue group-hover:text-white">
                <Icon size={20} aria-hidden="true" />
              </span>
              <p className="font-display text-[0.95rem] font-semibold leading-snug text-deep">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
