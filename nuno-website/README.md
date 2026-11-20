# NUNO — Sitio web corporativo

**NUNO** es una firma de desarrollo de software que crea soluciones a la medida para empresas. Este proyecto es su sitio web: una landing multisección con portafolio de demos interactivas, formulario de contacto funcional y manual de identidad.

## Tecnologías
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React · React Hook Form + Zod.

## Requisitos
- **Node.js 18.18 o superior** (recomendado 20 LTS). Descárgalo en https://nodejs.org (versión LTS) y verifica con `node -v`.
- Conexión a internet para `npm install` y para cargar las fuentes de Google en `npm run dev` / `npm run build`.

## Cómo empezar
1. Descomprime `NUNO_Website.zip` y abre la carpeta `nuno-website` en Visual Studio Code (*Archivo → Abrir carpeta*).
2. Abre la terminal integrada (`Ctrl + ñ` o *Terminal → Nueva terminal*).
3. Ejecuta:

```bash
npm install
cp .env.example .env.local     # en Windows PowerShell: copy .env.example .env.local
npm run dev
```
4. Abre http://localhost:3000

Otros comandos (todos definidos en `package.json`):

```bash
npm run build       # compilación de producción
npm run start       # sirve la compilación (requiere build previo)
npm run typecheck   # revisa TypeScript
```

## Configuración (variables de entorno)
Edita `.env.local` (ver `.env.example`). Lo que quede vacío se oculta o usa una alternativa segura.

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública (SEO, sitemap, Open Graph) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número internacional solo dígitos, ej. `573001234567` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo visible en el sitio |
| `NEXT_PUBLIC_LINKEDIN_URL`, `_INSTAGRAM_URL`, `_GITHUB_URL` | Redes (solo se muestran si tienen valor) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Envío real del formulario (solo servidor) |

Reinicia `npm run dev` después de cambiar variables. Mensaje inicial de WhatsApp y textos globales: `lib/config.ts`.

### Cambiar WhatsApp / email
Define `NEXT_PUBLIC_WHATSAPP_NUMBER` y `NEXT_PUBLIC_CONTACT_EMAIL`. Sin número, el botón de WhatsApp abre WhatsApp sin destinatario (el usuario elige el chat): **debes configurarlo antes de publicar**.

### Activar el envío real del formulario
1. Crea una cuenta en https://resend.com y genera una API key.
2. En `.env.local`: `RESEND_API_KEY=...`, `CONTACT_TO_EMAIL=tu@correo.com` y, si verificaste un dominio, `CONTACT_FROM_EMAIL="NUNO <hola@tudominio.com>"`.
3. Reinicia el servidor. Mientras no esté configurado, el formulario valida y muestra el mensaje ya redactado con botones para enviarlo por WhatsApp o correo.

Protecciones incluidas: validación Zod en cliente y servidor, honeypot, tiempo mínimo de envío, límite por IP en memoria (en producción con varias instancias usa un almacén compartido como Upstash/Redis) y escape de HTML en el correo. No incluye CAPTCHA.

## Personalizar contenido
- **Servicios, problemas, sectores, proceso, diferenciales, tecnologías:** `data/content.ts`.
- **Agregar un proyecto al portafolio:** copia un objeto en `data/projects.ts`, cambia `slug`, `name`, `features` y sus `modules` (KPIs, gráfico, tabla con estados). Aparece automáticamente en tarjetas, modal y footer. Todos los datos son ilustrativos y se muestran con la etiqueta «Demo conceptual».
- **Logo:** componente `components/ui/Logo.tsx` y archivos en `public/logo/`. El favicon es `app/icon.svg`.
- **Colores:** tokens RGB en `app/globals.css` (`:root`); se consumen vía `tailwind.config.ts`.
- **Manual de marca:** carpeta `brand/`.

## Estructura
```
app/            layout, página, API (/api/contact), SEO (sitemap, robots, OG), privacidad
components/     layout/ · sections/ · ui/ · projects/ · forms/
data/           contenido y proyectos
lib/            config central, validación, utilidades
public/logo/    logos SVG
brand/          manual de identidad
types/          tipos compartidos
```

## Despliegue
- **Vercel (recomendado):** sube el repositorio a GitHub, impórtalo en https://vercel.com y carga las variables de entorno en *Settings → Environment Variables*.
- **Servidor propio:** `npm run build` y `npm run start` (puerto 3000), detrás de Nginx/Caddy con HTTPS.

## Solución de errores comunes
- `npm: command not found` → instala Node.js y reabre la terminal.
- `Unsupported engine` → actualiza a Node ≥ 18.18.
- El puerto 3000 está ocupado → `npm run dev -- -p 3001`.
- Fuentes no cargan / falla `next build` por Google Fonts → revisa tu conexión o proxy.
- Cambié `.env.local` y no se refleja → reinicia el servidor.
- Error raro tras actualizar → borra `.next` y `node_modules` y ejecuta `npm install` de nuevo.

## Decisiones y límites
- Los proyectos del portafolio son **demos conceptuales**; no hay clientes, testimonios ni métricas reales.
- La sección de tecnologías indica con qué se *pueden* construir soluciones, no afirma uso en producción.
- La página de privacidad es un texto base: revísalo con asesoría legal.
