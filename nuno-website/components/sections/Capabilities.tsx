import { capabilities } from "@/data/content";

export function Capabilities() {
  return (
    <section aria-label="Capacidades de NUNO" className="border-y border-line bg-mist">
      <ul className="container-nuno flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
        {capabilities.map((c) => (
          <li key={c} className="flex items-center gap-2.5 font-display text-sm font-semibold text-deep/80 sm:text-[0.95rem]">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-coral" />
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
