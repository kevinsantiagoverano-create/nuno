"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { sectors } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Solutions() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const sector = sectors.find((s) => s.id === activeId) ?? sectors[0];

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + sectors.length) % sectors.length;
    setActiveId(sectors[next].id);
    tabRefs.current[sectors[next].id]?.focus();
  };

  return (
    <section id="soluciones" className="section">
      <div className="container-nuno">
        <SectionHeading
          eyebrow="Soluciones por sector"
          title="Elige tu sector y mira qué podríamos construir."
          description="Son ejemplos ilustrativos de soluciones que podemos desarrollar; no corresponden a clientes ni proyectos contratados."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Sectores" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {sectors.map((s, i) => {
              const selected = s.id === activeId;
              return (
                <button
                  key={s.id}
                  ref={(el) => { tabRefs.current[s.id] = el; }}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${s.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(s.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "flex min-h-[52px] shrink-0 items-center gap-3 rounded-md border px-4 text-left font-display text-[0.95rem] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                    selected ? "border-deep bg-deep text-white" : "border-line bg-white text-deep hover:border-deep/40",
                  )}
                >
                  <s.icon size={20} aria-hidden="true" className={selected ? "text-white" : "text-blue"} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{s.name}</span>
                </button>
              );
            })}
          </div>

          <div className="card min-h-[340px] p-6 sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={sector.id}
                role="tabpanel"
                id={`panel-${sector.id}`}
                aria-labelledby={`tab-${sector.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold leading-tight text-deep sm:text-3xl">{sector.headline}</h3>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-display text-sm font-bold text-deep">Módulos habituales</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {sector.modules.map((m) => (
                        <li key={m} className="rounded-full border border-line bg-mist px-3 py-1.5 text-sm text-deep/85">{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-deep">Software que podríamos construir</p>
                    <ul className="mt-3 space-y-3">
                      {sector.software.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-[0.95rem] text-deep/85">
                          <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-blue" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <Button href="#contacto">Quiero una solución así <ArrowRight size={18} aria-hidden="true" /></Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
