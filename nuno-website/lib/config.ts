/**
 * CONFIGURACIÓN CENTRAL DE NUNO
 * Cambia aquí (o en .env.local) número de WhatsApp, correo, redes y URL del sitio.
 * Lo que quede vacío se oculta automáticamente: no se muestran enlaces rotos.
 */
const social = [
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "" },
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "" },
  { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "" },
].filter((s) => s.href);

export const siteConfig = {
  name: "NUNO",
  title: "NUNO | Desarrollo de Software y Soluciones Digitales",
  description:
    "Desarrollamos software personalizado, aplicaciones web, sistemas empresariales y soluciones de automatización para ayudar a las empresas a mejorar sus procesos.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tudominio.com",
  // ⚠️ REEMPLAZAR: número internacional solo dígitos. Vacío = WhatsApp abre sin destinatario.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  whatsappMessage: "Hola NUNO, me gustaría conversar sobre un proyecto de software para mi empresa.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  social,
} as const;

export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "soluciones", label: "Soluciones" },
  { id: "proyectos", label: "Proyectos" },
  { id: "metodologia", label: "Metodología" },
  { id: "contacto", label: "Contacto" },
] as const;
