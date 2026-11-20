"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

const ease = [0.22, 1, 0.36, 1] as const;
const item = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.08 * i, ease },
});

const bars = [38, 56, 44, 70, 62, 88, 76];

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px] pb-10 pt-4 sm:pb-14"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
      aria-hidden="true"
    >
      {/* Ventana principal: panel de operación */}
      <div className="card float-slow overflow-hidden" style={{ boxShadow: "var(--shadow-lift)" }}>
        <div className="flex items-center gap-1.5 border-b border-line bg-mist px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 font-display text-xs font-semibold text-slate">Panel de operación</span>
        </div>
        <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr]">
          <div className="flex flex-col items-center gap-3 border-r border-line bg-white py-4">
            <LogoMark className="h-6 w-6" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-2 w-7 rounded-full ${i === 0 ? "bg-blue" : "bg-line"}`} />
            ))}
          </div>
          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[["Órdenes", "128"], ["Pendientes", "14"], ["Cumplimiento", "96%"]].map(([l, v]) => (
                <div key={l} className="rounded-md border border-line bg-white p-2.5 sm:p-3">
                  <p className="truncate text-[10px] text-slate sm:text-xs">{l}</p>
                  <p className="font-display text-base font-extrabold text-deep sm:text-xl">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-28 items-end gap-2 rounded-md border border-line bg-mist/60 p-3 sm:mt-4 sm:h-36 sm:gap-3">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === 5 ? "bg-blue" : "bg-deep/15"}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.7, delay: 0.7 + i * 0.05, ease }}
                />
              ))}
            </div>
            <div className="mt-3 space-y-2">
              {[78, 62].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  <span className="h-2 rounded-full bg-line" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fragmento de código */}
      <div
        className="float-slower absolute -bottom-0 -left-1 w-[62%] overflow-hidden rounded-lg bg-deep p-4 font-mono text-[10px] leading-relaxed text-white/80 shadow-lift sm:-left-8 sm:text-xs"
      >
        <p><span className="text-coral">const</span> <span className="text-white">proceso</span> = <span className="text-blue">automatizar</span>({"{"}</p>
        <p className="pl-3">fuente: <span className="text-white">&quot;hojas&quot;</span>,</p>
        <p className="pl-3">destino: <span className="text-white">&quot;sistema&quot;</span></p>
        <p>{"}"});</p>
      </div>

      {/* Chip flotante */}
      <div className="absolute -top-1 right-0 flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 font-display text-xs font-bold text-deep shadow-soft sm:-right-4">
        <span className="h-2 w-2 rounded-full bg-coral" /> Reporte generado
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[calc(var(--nav-h)_+_2.5rem)] pb-16 sm:pb-24 lg:pt-[calc(var(--nav-h)_+_4.5rem)]">
      {/* Cuadrícula geométrica de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(rgb(var(--line) / 0.55) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.55) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 70% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 70% 30%, #000 20%, transparent 75%)",
        }}
      />
      <div className="container-nuno grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p className="eyebrow" {...item(0)}>Software Engineering &amp; Digital Solutions</motion.p>
          <motion.h1 className="h-display mt-6" {...item(1)}>
            Construimos software que hace{" "}
            <span className="text-blue">avanzar tu negocio.</span>
          </motion.h1>
          <motion.p className="lead mt-6 max-w-xl" {...item(2)}>
            Transformamos procesos complejos en soluciones digitales simples, creando software a la medida que ayuda a las empresas a trabajar mejor, crecer y tomar decisiones con mayor claridad.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" {...item(3)}>
            <Button href="#contacto">Cuéntanos tu proyecto <ArrowRight size={18} aria-hidden="true" /></Button>
            <Button href="#servicios" variant="secondary">Explorar soluciones</Button>
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
