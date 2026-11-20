import type { ContactValues } from "./validation";

export function buildMessage(v: ContactValues) {
  return [
    "Hola NUNO, quiero conversar sobre un proyecto.",
    "",
    `Nombre: ${v.name}`,
    v.company ? `Empresa: ${v.company}` : "",
    `Correo: ${v.email}`,
    `Teléfono: ${v.phone}`,
    `Tipo de proyecto: ${v.projectType}`,
    v.budget ? `Presupuesto estimado: ${v.budget}` : "",
    "",
    "Necesidad:",
    v.message,
  ]
    .filter((l, i, arr) => l !== "" || arr[i - 1] !== "")
    .join("\n");
}
