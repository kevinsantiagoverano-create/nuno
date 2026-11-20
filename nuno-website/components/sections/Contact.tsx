import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { whatsappLink } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contacto" className="section bg-mist">
      <div className="container-nuno grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de lo que necesitas."
            description="Escríbenos con el contexto que tengas. Respondemos para entender tu caso y proponerte un siguiente paso."
          />
          <ul className="mt-8 space-y-4">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-sm font-display font-semibold text-deep hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue/10 text-blue"><MessageCircle size={20} aria-hidden="true" /></span>
                Escribir por WhatsApp
              </a>
            </li>
            {siteConfig.email && (
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-3 rounded-sm font-display font-semibold text-deep hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue/10 text-blue"><Mail size={20} aria-hidden="true" /></span>
                  {siteConfig.email}
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="card p-6 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
