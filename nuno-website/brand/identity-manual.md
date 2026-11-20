# Manual de identidad visual — NUNO

Este manual describe la identidad **tal como está implementada** en el sitio (`app/globals.css`, `tailwind.config.ts`, `components/ui`).

## 1. Concepto
NUNO representa la unión entre lógica, creatividad, tecnología y soluciones. La identidad es minimalista, geométrica y contemporánea, con mucho espacio en blanco y la tipografía como protagonista.

## 2. Logotipo
**Símbolo:** dos chevrones de código (`<` y `>`) de trazo grueso y esquinas rectas, desplazados verticalmente (el derecho es más alto, sugiere avance), con un nodo cuadrado coral en el centro que representa conexión y lógica. Se construye en SVG (viewBox 48×48).
**Wordmark:** `NUNO` en Manrope 800, interletrado +0.04em.

| Versión | Archivo | Uso |
|---|---|---|
| Horizontal, fondo claro | `public/logo/logo-horizontal-light.svg` | Web, documentos, cotizaciones |
| Horizontal, fondo oscuro | `public/logo/logo-horizontal-dark.svg` | Footer, presentaciones oscuras |
| Símbolo | `public/logo/logo-symbol.svg` | Avatares, redes, app icon |
| Monocromática | `public/logo/logo-mono.svg` | Sellos, impresión a 1 tinta (usa `currentColor`) |
| Favicon | `public/logo/favicon.svg` (`app/icon.svg`) | Pestaña del navegador |

En el sitio el logo se renderiza con el componente `components/ui/Logo.tsx` (variantes `light`, `dark`, `mono`).
> Los SVG estáticos con texto usan la fuente Manrope; para entregas a imprenta conviene convertir el texto a curvas en un editor vectorial.

**Reglas de uso**
- Espacio libre mínimo alrededor: la altura del nodo central ×2 (≈ 12 % del alto del símbolo).
- Tamaño mínimo: símbolo 16 px; logo horizontal 96 px de ancho.
- No deformar, rotar, añadir sombras, cambiar colores fuera de las versiones oficiales ni colocar sobre fondos de bajo contraste.

## 3. Color
Ver `color-palette.md`. Proporción orientativa: 70 % blanco/neutros, 20 % azul profundo y azul principal, ≤ 5 % coral.

## 4. Tipografía
- **Manrope** (400–800): logo, titulares, navegación, botones.
- **Inter** (400–600): texto largo, formularios, descripciones.
- Titulares con `clamp()` fluido: `.h-display` (2.3–4.1 rem) y `.h-section` (1.75–2.75 rem), interletrado negativo (-0.03em / -0.025em).
- Longitud de línea de lectura ≤ 70 caracteres.

## 5. Espaciado y forma
- Contenedor máx. 1200 px, padding lateral fluido `clamp(1rem, 4vw, 2rem)`.
- Secciones: `padding-block: clamp(4rem, 9vw, 7rem)`.
- Radios: `--radius-sm` 8 px, `--radius-md` 12 px (botones, inputs), `--radius-lg` 20 px (tarjetas, contenedores).
- Sombras: `--shadow-soft` (reposo) y `--shadow-lift` (elevación). Sin sombras exageradas.

## 6. Iconografía
Lucide (trazo 2 px, esquinas redondeadas), tamaño 18–22 px, color azul principal o azul profundo. Un único set de iconos; nunca mezclar estilos.

## 7. Componentes
- **Botón primario** `.btn .btn-primary`: fondo azul, texto blanco, alto mínimo 48 px.
- **Botón secundario** `.btn .btn-secondary`: borde `--line`, texto azul profundo.
- **Sobre fondo oscuro:** `.btn-light` y `.btn-outline-light`.
- **Tarjeta** `.card`: fondo blanco, borde `--line`, radio 20 px, `--shadow-soft`. Para listas de contenido se prefiere la grilla de celdas separadas por líneas finas antes que tarjetas aisladas.
- **Inputs** `.field`: borde `--line`, foco azul con anillo; error en coral con mensaje en texto.
- **Etiqueta "Demo conceptual":** obligatoria en cualquier proyecto del portafolio.

## 8. Animación
- Duraciones 0.2–0.6 s, curva `cubic-bezier(0.22, 1, 0.36, 1)`.
- Una secuencia de entrada en el hero; aparición suave en bloques clave; hover y microinteracciones solo como respuesta a la acción del usuario.
- Movimiento ambiental limitado al visual del hero y al botón de WhatsApp.
- Se respeta `prefers-reduced-motion` (CSS global y `MotionConfig reducedMotion="user"`).

## 9. Voz y tono
Profesional, claro, cercano y sin exageraciones. Se habla del resultado, la ingeniería y la calidad. Frases cortas, verbos activos, español neutro. Prohibido: promesas imposibles, testimonios, clientes o métricas inventadas, "somos los mejores".

## 10. Aplicaciones de marca
Documentos y cotizaciones (logo horizontal claro, títulos en Manrope, acento coral en una sola línea de detalle), presentaciones (fondo azul profundo con logo oscuro), redes sociales (símbolo sobre azul profundo), firma de correo (logo horizontal + datos en Inter 13 px, gris `#64748B`), futuros productos digitales (mismos tokens y componentes).

## 11. Versión PDF
No se generó en esta entrega. Para obtenerla: abrir este archivo en VS Code con la extensión «Markdown PDF» o imprimir a PDF desde cualquier visor de Markdown.
