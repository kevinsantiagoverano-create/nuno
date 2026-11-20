import { z } from "zod";

export const projectTypes = [
  "Software personalizado",
  "Aplicación web",
  "Automatización",
  "Sistema empresarial",
  "Integración",
  "Modernización",
  "Otro",
] as const;

export const budgetRanges = [
  "Aún no lo sé",
  "Menos de USD 2.000",
  "USD 2.000 – 5.000",
  "USD 5.000 – 15.000",
  "Más de USD 15.000",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre (mínimo 2 caracteres).").max(80, "Máximo 80 caracteres."),
  company: z.string().trim().max(100, "Máximo 100 caracteres.").optional(),
  email: z.string().trim().email("Escribe un correo válido, por ejemplo nombre@empresa.com.").max(120),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s().-]{7,20}$/, "Escribe un teléfono válido (solo números, espacios o +)."),
  projectType: z
    .string()
    .refine((v) => (projectTypes as readonly string[]).includes(v), "Selecciona un tipo de proyecto."),
  budget: z.string().max(40).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más (mínimo 20 caracteres).")
    .max(2000, "Máximo 2000 caracteres."),
  /** Honeypot: debe permanecer vacío. */
  website: z.string().max(0).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
