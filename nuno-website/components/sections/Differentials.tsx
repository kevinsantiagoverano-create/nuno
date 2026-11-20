import { Check } from "lucide-react";
import { differentials } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Differentials() {
  return (
    <section id="nosotros" className="section">
      <div className="container-nuno">
        <Reveal>
          <SectionHeading
            eyebrow="Por qué NUNO"
            title="Software diseñado alrededor de tu forma de trabajar."
            description="Estos son los principios con los que abordamos cada proyecto."
          />
        </Reveal>
        <ul className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2">
          {differentials.map((d) => (
            <li key={d.title} className="flex gap-4 border-t border-line py-6">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-bold text-deep">{d.title}</h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-slate">{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
