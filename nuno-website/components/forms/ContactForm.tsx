"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { budgetRanges, contactSchema, projectTypes, type ContactValues } from "@/lib/validation";
import { buildMessage } from "@/lib/contact";
import { siteConfig } from "@/lib/config";
import { whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "fallback" | "error";

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-display text-sm font-semibold text-deep">
        {label} {optional && <span className="font-sans font-normal text-slate">(opcional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-coral">
          <AlertCircle size={15} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [sent, setSent] = useState<ContactValues | null>(null);
  const startedAt = useRef(Date.now());

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", projectType: "", budget: "", message: "", website: "" },
  });

  const aria = (name: keyof ContactValues) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${String(name)}-error` : undefined,
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("sending");
    setErrorMsg("");
    setSent(values);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, elapsed: Date.now() - startedAt.current }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        return;
      }
      if (res.status === 501) {
        setStatus("fallback");
        return;
      }
      const data = (await res.json().catch(() => null)) as { message?: string } | null;
      setErrorMsg(data?.message ?? "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.");
      setStatus("error");
    } catch {
      setErrorMsg("No hay conexión con el servidor. Revisa tu internet o escríbenos por WhatsApp.");
      setStatus("error");
    }
  };

  const message = sent ? buildMessage(sent) : "";

  if (status === "success") {
    return (
      <div role="status" className="py-8 text-center">
        <CheckCircle2 size={44} className="mx-auto text-blue" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-deep">Mensaje enviado</h3>
        <p className="mx-auto mt-2 max-w-sm text-slate">Gracias por escribirnos. Revisaremos tu solicitud y te responderemos pronto.</p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>Enviar otro mensaje</Button>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div role="status" className="py-4">
        <h3 className="text-2xl font-bold text-deep">Tu mensaje está listo</h3>
        <p className="mt-2 text-slate">
          El envío automático aún no está activado en este sitio. Elige cómo quieres enviarnos tu mensaje ya preparado:
        </p>
        <pre className="mt-5 max-h-56 overflow-auto whitespace-pre-wrap rounded-md border border-line bg-mist p-4 font-sans text-sm text-deep">{message}</pre>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink(message)} external><MessageCircle size={18} aria-hidden="true" /> Enviar por WhatsApp</Button>
          {siteConfig.email && (
            <Button variant="secondary" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Consulta de proyecto — NUNO")}&body=${encodeURIComponent(message)}`}>
              <Mail size={18} aria-hidden="true" /> Enviar por correo
            </Button>
          )}
        </div>
        <button type="button" className="mt-5 text-sm font-semibold text-blue underline underline-offset-4" onClick={() => setStatus("idle")}>Volver al formulario</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulario de contacto" className="relative space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nombre" error={errors.name?.message}>
          <input id="name" className="field" autoComplete="name" {...aria("name")} {...register("name")} />
        </Field>
        <Field id="company" label="Empresa" optional error={errors.company?.message}>
          <input id="company" className="field" autoComplete="organization" {...aria("company")} {...register("company")} />
        </Field>
        <Field id="email" label="Correo electrónico" error={errors.email?.message}>
          <input id="email" type="email" inputMode="email" className="field" autoComplete="email" {...aria("email")} {...register("email")} />
        </Field>
        <Field id="phone" label="Teléfono / WhatsApp" error={errors.phone?.message}>
          <input id="phone" type="tel" inputMode="tel" className="field" autoComplete="tel" placeholder="+57 300 000 0000" {...aria("phone")} {...register("phone")} />
        </Field>
        <Field id="projectType" label="Tipo de proyecto" error={errors.projectType?.message}>
          <select id="projectType" className="field" {...aria("projectType")} {...register("projectType")}>
            <option value="">Selecciona una opción</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field id="budget" label="Presupuesto estimado" optional error={errors.budget?.message}>
          <select id="budget" className="field" {...aria("budget")} {...register("budget")}>
            <option value="">Prefiero no indicarlo</option>
            {budgetRanges.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </div>
      <Field id="message" label="Describe tu necesidad" error={errors.message?.message}>
        <textarea id="message" rows={5} className="field resize-y" placeholder="¿Qué proceso quieres mejorar o qué sistema necesitas?" {...aria("message")} {...register("message")} />
      </Field>

      {/* Honeypot anti-spam: oculto para personas, visible para bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">No completar este campo</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-md border border-coral/40 bg-coral/5 p-4 text-sm text-deep">
          <p className="flex items-start gap-2"><AlertCircle size={18} className="mt-0.5 shrink-0 text-coral" aria-hidden="true" /> {errorMsg}</p>
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-blue underline underline-offset-4">Enviar por WhatsApp</a>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Enviando…</> : <><Send size={18} aria-hidden="true" /> Enviar mensaje</>}
        </Button>
        <p className="text-xs text-slate">Usamos tus datos solo para responder tu consulta. <a href="/privacidad" className="underline">Privacidad</a></p>
      </div>
    </form>
  );
}
