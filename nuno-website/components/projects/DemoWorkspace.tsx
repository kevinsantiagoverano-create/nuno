"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const WEEK = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];
const badge = ["bg-blue/10 text-blue", "bg-slate/15 text-deep", "bg-coral/10 text-coral"];
type Range = "d7" | "m6";

/** Demo interactiva con datos ilustrativos: módulos, rango del gráfico, búsqueda, filtro y cambio de estados. */
export function DemoWorkspace({ project }: { project: Project }) {
  const [moduleId, setModuleId] = useState(project.modules[0].id);
  const [range, setRange] = useState<Range>("d7");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [rows, setRows] = useState<Record<string, string[][]>>(() =>
    Object.fromEntries(project.modules.map((m) => [m.id, m.rows])),
  );

  const mod = project.modules.find((m) => m.id === moduleId) ?? project.modules[0];
  const data = mod[range];
  const labels = range === "d7" ? WEEK : MONTHS;
  const max = Math.max(...data, 1);
  const q = query.trim().toLowerCase();

  const view = rows[mod.id]
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => (filter === "Todos" || r[mod.statusCol] === filter) && (!q || r.join(" ").toLowerCase().includes(q)));

  const changeModule = (id: string) => {
    setModuleId(id);
    setQuery("");
    setFilter("Todos");
  };

  const cycle = (rowIndex: number) => {
    const current = rows[mod.id][rowIndex][mod.statusCol];
    const next = mod.statuses[(mod.statuses.indexOf(current) + 1) % mod.statuses.length];
    setRows((prev) => ({
      ...prev,
      [mod.id]: prev[mod.id].map((r, j) => (j === rowIndex ? r.map((c, k) => (k === mod.statusCol ? next : c)) : r)),
    }));
  };

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex items-center gap-1.5 border-b border-line bg-mist px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 font-display text-xs font-semibold text-slate">{project.name} · datos ilustrativos</span>
      </div>

      <div className="grid md:grid-cols-[170px_1fr]">
        <div role="tablist" aria-label={`Módulos de ${project.name}`} className="flex gap-2 overflow-x-auto border-b border-line p-3 md:flex-col md:border-b-0 md:border-r">
          {project.modules.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={m.id === mod.id}
              onClick={() => changeModule(m.id)}
              className={cn(
                "min-h-[44px] shrink-0 rounded-md px-3.5 text-left font-display text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
                m.id === mod.id ? "bg-deep text-white" : "text-deep/75 hover:bg-mist",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="min-w-0 space-y-5 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {mod.kpis.map((k) => (
              <div key={k.label} className="rounded-md border border-line p-3">
                <p className="text-[11px] leading-tight text-slate sm:text-xs">{k.label}</p>
                <p className="mt-1 font-display text-lg font-extrabold text-deep sm:text-2xl">{k.value}</p>
                {k.delta && <p className={cn("text-[11px] font-semibold", k.delta === "alerta" ? "text-coral" : "text-blue")}>{k.delta === "alerta" ? "Requiere atención" : k.delta}</p>}
              </div>
            ))}
          </div>

          <div className="rounded-md border border-line p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-display text-sm font-bold text-deep">{mod.chartTitle}</p>
              <div className="inline-flex rounded-md border border-line p-0.5" role="group" aria-label="Rango del gráfico">
                {([["d7", "7 días"], ["m6", "6 meses"]] as const).map(([v, l]) => (
                  <button key={v} aria-pressed={range === v} onClick={() => setRange(v)}
                    className={cn("min-h-[36px] rounded px-3 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue", range === v ? "bg-blue text-white" : "text-slate hover:text-deep")}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 flex h-40 items-end gap-2" role="img" aria-label={`${mod.chartTitle}: ${data.join(", ")}`}>
              {data.map((v, i) => (
                <div key={`${mod.id}-${range}-${i}`} className="flex h-full flex-1 flex-col justify-end gap-1.5" title={`${labels[i]}: ${v}`}>
                  <motion.div className={cn("w-full rounded-t-sm", i === data.length - 1 ? "bg-blue" : "bg-deep/15")} initial={{ height: 0 }} animate={{ height: `${(v / max) * 100}%` }} transition={{ duration: 0.45, delay: i * 0.03 }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-2" aria-hidden="true">
              {labels.slice(0, data.length).map((l) => <span key={l} className="flex-1 text-center text-[10px] text-slate">{l}</span>)}
            </div>
          </div>

          <div>
            <div className="mb-3 flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Search size={16} aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar en la tabla" aria-label="Buscar en la tabla" className="field !py-2.5 pl-9" />
              </div>
              <select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filtrar por estado" className="field !py-2.5 sm:w-48">
                <option>Todos</option>
                {mod.statuses.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="overflow-x-auto rounded-md border border-line">
              <table className="w-full min-w-[460px] text-left text-sm">
                <thead className="bg-mist text-xs text-slate">
                  <tr>{mod.columns.map((c) => <th key={c} scope="col" className="px-3 py-2.5 font-semibold">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {view.length === 0 && (
                    <tr><td colSpan={mod.columns.length} className="px-3 py-6 text-center text-slate">Sin resultados. Prueba con otra búsqueda o filtro.</td></tr>
                  )}
                  {view.map(({ r, i }) => (
                    <tr key={`${mod.id}-${i}`} className="border-t border-line">
                      {r.map((cell, k) =>
                        k === mod.statusCol ? (
                          <td key={k} className="px-3 py-2">
                            <button
                              onClick={() => cycle(i)}
                              title="Clic para cambiar el estado"
                              className={cn("min-h-[32px] rounded-full px-3 text-xs font-semibold transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue", badge[mod.statuses.indexOf(cell) % 3])}
                            >
                              {cell}
                            </button>
                          </td>
                        ) : (
                          <td key={k} className={cn("px-3 py-2.5", k === 0 ? "font-semibold text-deep" : "text-deep/80")}>{cell}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate">Interactúa: cambia de módulo, rango, filtros o haz clic en un estado para modificarlo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
