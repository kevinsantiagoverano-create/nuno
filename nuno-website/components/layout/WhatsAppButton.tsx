"use client";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a NUNO por WhatsApp"
        className="wa-pulse group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep focus-visible:ring-offset-2"
      >
        <MessageCircle size={26} aria-hidden="true" />
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-deep px-3 py-2 font-display text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
        >
          Escríbenos por WhatsApp
        </span>
      </a>
    </div>
  );
}
