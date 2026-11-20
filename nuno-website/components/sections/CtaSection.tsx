import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/utils";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="section">
      <div className="container-nuno">
        <div className="relative overflow-hidden rounded-lg bg-deep px-6 py-14 text-white sm:px-14 sm:py-20">
          {/* Símbolo geométrico decorativo */}
          <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="pointer-events-none absolute -right-10 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.12] md:block">
            <path d="M19 11 5 24l14 13" stroke="#0A72FD" strokeWidth="3" />
            <path d="M29 6l14 18-14 18" stroke="#FFFFFF" strokeWidth="3" />
            <rect x="21" y="21" width="6" height="6" fill="#F94044" />
          </svg>
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="font-extrabold text-white" style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.1rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Tu próximo proyecto puede empezar aquí.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Cuéntanos qué necesitas mejorar en tu empresa. Analizamos tu idea y te ayudamos a encontrar una solución tecnológica que tenga sentido para tu negocio.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contacto" variant="light">Hablemos de tu proyecto</Button>
              <Button href={whatsappLink()} external variant="outline-light"><MessageCircle size={18} aria-hidden="true" /> Contactar por WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
