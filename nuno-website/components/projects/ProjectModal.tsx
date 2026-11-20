"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Project } from "@/types";
import { DemoBadge } from "./ProjectCard";
import { DemoWorkspace } from "./DemoWorkspace";
import { Button } from "@/components/ui/Button";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-deep/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-lg bg-white shadow-lift sm:rounded-lg"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-white/95 p-5 backdrop-blur sm:p-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 id="project-title" className="text-2xl font-extrabold text-deep">{project.name}</h3>
                  <DemoBadge />
                </div>
                <p className="mt-1.5 max-w-2xl text-[0.95rem] text-slate">{project.description}</p>
              </div>
              <button ref={closeRef} type="button" onClick={onClose} aria-label="Cerrar" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line text-deep hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              <DemoWorkspace key={project.slug} project={project} />
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="font-display text-sm font-bold text-deep">Funcionalidades principales</p>
                  <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[0.95rem] text-deep/85"><Check size={16} aria-hidden="true" className="text-blue" /> {f}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-slate">Demo conceptual con datos ilustrativos. No corresponde a un sistema en uso por clientes reales.</p>
                </div>
                <Button href="#contacto" onClick={onClose}>Quiero un sistema así</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
