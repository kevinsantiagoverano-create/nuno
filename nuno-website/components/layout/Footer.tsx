import { Logo } from "@/components/ui/Logo";
import { projects } from "@/data/projects";
import { services } from "@/data/content";
import { navLinks, siteConfig } from "@/lib/config";
import { whatsappLink } from "@/lib/utils";

const linkCls = "rounded-sm text-sm text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep text-white">
      <div className="container-nuno grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo variant="dark" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Firma de desarrollo de software que crea soluciones a la medida para que las empresas trabajen con más orden, eficiencia y claridad.
          </p>
        </div>
        <Col title="Navegación">
          {navLinks.map((l) => <li key={l.id}><a className={linkCls} href={`#${l.id}`}>{l.label}</a></li>)}
        </Col>
        <Col title="Servicios">
          {services.map((s) => <li key={s.id}><a className={linkCls} href="#servicios">{s.name}</a></li>)}
        </Col>
        <Col title="Proyectos">
          {projects.map((p) => <li key={p.slug}><a className={linkCls} href="#proyectos">{p.name}</a></li>)}
        </Col>
        <Col title="Contacto">
          <li><a className={linkCls} href="#contacto">Formulario de contacto</a></li>
          <li><a className={linkCls} href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          {siteConfig.email && <li><a className={linkCls} href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>}
          {siteConfig.social.map((s) => (
            <li key={s.label}><a className={linkCls} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
          ))}
        </Col>
      </div>
      <div className="border-t border-white/10">
        <div className="container-nuno flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NUNO. Todos los derechos reservados.</p>
          <a className={linkCls} href="/privacidad">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}
