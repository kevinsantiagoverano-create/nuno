import { ImageResponse } from "next/og";

export const alt = "NUNO | Desarrollo de Software y Soluciones Digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#081F43", color: "#FFFFFF" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 48 48" fill="none">
            <path d="M19 11 5 24l14 13" stroke="#0A72FD" strokeWidth="6" />
            <path d="M29 6l14 18-14 18" stroke="#FFFFFF" strokeWidth="6" />
            <rect x="21" y="21" width="6" height="6" fill="#F94044" />
          </svg>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: 4 }}>NUNO</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>Construimos software que hace avanzar tu negocio.</div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#9FB3D1" }}>Software personalizado · Aplicaciones web · Automatización</div>
      </div>
    ),
    size,
  );
}
