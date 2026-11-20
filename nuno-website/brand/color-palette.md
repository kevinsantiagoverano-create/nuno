# Paleta oficial NUNO

| Nombre | HEX | RGB | Token CSS | Uso |
|---|---|---|---|---|
| Azul principal | `#0A72FD` | 10, 114, 253 | `--blue` | Botones principales, enlaces, elementos interactivos, detalles del logo |
| Rojo coral | `#F94044` | 249, 64, 68 | `--coral` | Acento puntual: nodo del logo, indicadores, microdetalles. Nunca como color dominante |
| Azul profundo | `#081F43` | 8, 31, 67 | `--deep` | Logo, títulos, fondos oscuros, alto contraste |
| Blanco | `#FFFFFF` | 255, 255, 255 | — | Fondos, tarjetas |
| Fondo neutro | `#F5F7FA` | 245, 247, 250 | `--mist` | Secciones alternas, fondos suaves |
| Gris texto secundario | `#64748B` | 100, 116, 139 | `--slate` | Descripciones, textos auxiliares |
| Bordes | `#E2E8F0` | 226, 232, 240 | `--line` | Bordes, separadores, inputs |

Los tokens se definen en `app/globals.css` como canales RGB, de modo que se pueden usar con opacidad (`bg-blue/10`).
Se permiten transparencias y variaciones de opacidad de esta paleta; no se agregan colores principales nuevos.

> Excepción funcional: el botón flotante de WhatsApp usa el verde de la marca WhatsApp (`#25D366`) para ser reconocible. No forma parte de la identidad NUNO.
