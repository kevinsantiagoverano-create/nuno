import type { Metadata } from "next";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Política de privacidad", alternates: { canonical: "/privacidad" } };

export default function Privacidad() {
  return (
    <main className="container-nuno max-w-3xl py-16">
      <a href="/" aria-label="Volver al inicio"><Logo /></a>
      <h1 className="h-section mt-10">Política de privacidad</h1>
      <div className="mt-6 space-y-5 leading-relaxed text-deep/85">
        <p>NUNO utiliza los datos que envías por el formulario de contacto (nombre, empresa, correo, teléfono, tipo de proyecto, presupuesto opcional y descripción) únicamente para responder tu consulta y evaluar una posible propuesta.</p>
        <p>No vendemos ni compartimos tus datos con terceros con fines comerciales. Si el envío automático está activado, el mensaje se transmite mediante un proveedor de correo (Resend) solo para entregarlo a NUNO. Este sitio no almacena los mensajes en una base de datos propia.</p>
        <p>Puedes solicitar la corrección o eliminación de tus datos escribiéndonos{siteConfig.email ? <> a <a className="text-blue underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></> : " por los canales de contacto del sitio"}.</p>
        <p className="text-sm text-slate">Texto base: revísalo con asesoría legal antes de publicarlo, según la normativa de protección de datos que aplique a tu empresa.</p>
      </div>
      <a href="/" className="btn btn-primary mt-10">Volver al inicio</a>
    </main>
  );
}
