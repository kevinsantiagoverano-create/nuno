import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema, projectTypes } from "@/lib/validation";

export const runtime = "nodejs";

/** Límite simple en memoria (5 envíos / 10 min por IP). En producción con varias instancias usa Redis/Upstash. */
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX;
}

const clean = (s: string | undefined) => (s ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim();
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const serverSchema = contactSchema.extend({ elapsed: z.number().optional() });

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (limited(ip)) {
    return NextResponse.json({ ok: false, message: "Has enviado varios mensajes seguidos. Inténtalo de nuevo en unos minutos." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }

  const parsed = serverSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Revisa los campos del formulario e inténtalo de nuevo." }, { status: 400 });
  }
  const d = parsed.data;

  // Anti-spam: honeypot relleno o envío demasiado rápido → respuesta "ok" silenciosa.
  if (d.website || (typeof d.elapsed === "number" && d.elapsed < 2500)) {
    return NextResponse.json({ ok: true });
  }
  if (!(projectTypes as readonly string[]).includes(d.projectType)) {
    return NextResponse.json({ ok: false, message: "Tipo de proyecto no válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    // Envío real no configurado: el cliente ofrece WhatsApp / correo como alternativa.
    return NextResponse.json({ ok: false, code: "NOT_CONFIGURED" }, { status: 501 });
  }

  const fields: Array<[string, string]> = [
    ["Nombre", clean(d.name)],
    ["Empresa", clean(d.company)],
    ["Correo", clean(d.email)],
    ["Teléfono", clean(d.phone)],
    ["Tipo de proyecto", clean(d.projectType)],
    ["Presupuesto", clean(d.budget)],
    ["Necesidad", clean(d.message)],
  ];
  const html = fields.filter(([, v]) => v).map(([k, v]) => `<p><strong>${esc(k)}:</strong><br>${esc(v).replace(/\n/g, "<br>")}</p>`).join("");
  const text = fields.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "NUNO <onboarding@resend.dev>",
        to: [to],
        reply_to: clean(d.email),
        subject: `Nueva consulta web — ${clean(d.projectType)} — ${clean(d.name)}`.slice(0, 150),
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status);
      return NextResponse.json({ ok: false, message: "No pudimos enviar el mensaje en este momento. Inténtalo de nuevo o escríbenos por WhatsApp." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact error", err);
    return NextResponse.json({ ok: false, message: "Error inesperado al enviar. Inténtalo de nuevo." }, { status: 500 });
  }
}
