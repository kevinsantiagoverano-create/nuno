import {
  Boxes, Globe, Workflow, LayoutDashboard, Plug, RefreshCw,
  FileSpreadsheet, Repeat, Package, Users, Clock, Keyboard, Unplug, Eye, User, TrendingUp,
  Store, Stethoscope, HardHat, UtensilsCrossed, Wrench, GraduationCap,
} from "lucide-react";
import type { Problem, ProcessStep, Sector, Service, TechGroup } from "@/types";

export const capabilities = [
  "Software a medida",
  "Automatización",
  "Sistemas empresariales",
  "Aplicaciones web",
  "Integración de sistemas",
  "Analítica y datos",
];

export const problems: Problem[] = [
  { text: "Información dispersa en distintos archivos", icon: FileSpreadsheet },
  { text: "Procesos manuales repetitivos", icon: Repeat },
  { text: "Inventarios difíciles de controlar", icon: Package },
  { text: "Falta de seguimiento a clientes", icon: Users },
  { text: "Reportes que tardan demasiado", icon: Clock },
  { text: "Errores por digitación", icon: Keyboard },
  { text: "Herramientas que no se comunican entre sí", icon: Unplug },
  { text: "Poca visibilidad de las operaciones", icon: Eye },
  { text: "Procesos que dependen de una sola persona", icon: User },
  { text: "Sistemas que no se adaptan al crecimiento", icon: TrendingUp },
];

export const services: Service[] = [
  {
    id: "software-empresarial",
    name: "Software empresarial personalizado",
    description: "Desarrollamos sistemas adaptados a los procesos, necesidades y objetivos específicos de cada empresa.",
    examples: ["ERP personalizado", "CRM", "Gestión de operaciones", "Sistemas administrativos", "Gestión de empleados", "Control de procesos", "Plataformas internas"],
    icon: Boxes,
  },
  {
    id: "aplicaciones-web",
    name: "Aplicaciones web",
    description: "Construimos plataformas web modernas, rápidas, seguras y accesibles desde diferentes dispositivos.",
    examples: ["Portales", "Plataformas empresariales", "Aplicaciones web", "Paneles administrativos", "Sistemas de gestión", "Plataformas de usuarios"],
    icon: Globe,
  },
  {
    id: "automatizacion",
    name: "Automatización de procesos",
    description: "Reducimos tareas manuales y conectamos procesos para que tu empresa trabaje con mayor eficiencia.",
    examples: ["Automatización de tareas", "Generación de reportes", "Flujos de trabajo", "Alertas", "Integración de servicios", "Automatización de operaciones"],
    icon: Workflow,
  },
  {
    id: "informacion",
    name: "Gestión y control de información",
    description: "Transformamos datos dispersos en información organizada y útil para tu negocio.",
    examples: ["Dashboards", "Indicadores KPI", "Reportes", "Analítica", "Seguimiento de operaciones", "Visualización de información"],
    icon: LayoutDashboard,
  },
  {
    id: "integracion",
    name: "Integración de sistemas",
    description: "Conectamos herramientas y plataformas para que la información fluya de forma coherente.",
    examples: ["APIs", "Sistemas externos", "Bases de datos", "Plataformas empresariales", "Integraciones de servicios"],
    icon: Plug,
  },
  {
    id: "modernizacion",
    name: "Diseño y modernización de software",
    description: "Mejoramos sistemas existentes, optimizamos su funcionamiento y desarrollamos nuevas capacidades.",
    examples: ["Rediseño", "Optimización", "Migración", "Modernización", "Mejoras de rendimiento", "Mantenimiento evolutivo"],
    icon: RefreshCw,
  },
];

export const sectors: Sector[] = [
  { id: "retail", name: "Comercio y retail", icon: Store, headline: "Controla inventario, ventas y proveedores desde un solo lugar.",
    modules: ["Inventario", "Ventas", "Facturación", "Productos", "Clientes", "Proveedores", "Estadísticas"],
    software: ["Sistema de inventario y punto de venta", "Panel de ventas y márgenes", "Portal de pedidos a proveedores"] },
  { id: "salud", name: "Salud y clínicas", icon: Stethoscope, headline: "Organiza agendas, pacientes y seguimiento administrativo.",
    modules: ["Agenda", "Pacientes", "Historial administrativo", "Gestión de citas", "Recordatorios", "Reportes"],
    software: ["Gestor de citas con recordatorios", "Directorio administrativo de pacientes", "Panel de ocupación por profesional"] },
  { id: "construccion", name: "Construcción", icon: HardHat, headline: "Sigue presupuestos, materiales y avances de cada obra.",
    modules: ["Proyectos", "Presupuestos", "Personal", "Materiales", "Avances", "Costos"],
    software: ["Control de obra y presupuesto", "Seguimiento de materiales y bodegas", "Reporte de avance por proyecto"] },
  { id: "restaurantes", name: "Restaurantes", icon: UtensilsCrossed, headline: "Coordina pedidos, cocina, reservas e inventario.",
    modules: ["Pedidos", "Menú", "Inventario", "Reservas", "Ventas", "Control operativo"],
    software: ["Sistema de pedidos y comandas", "Gestor de reservas", "Control de insumos y costos de plato"] },
  { id: "servicios", name: "Servicios y empresas operativas", icon: Wrench, headline: "Asigna trabajos, técnicos y seguimiento sin hojas sueltas.",
    modules: ["Clientes", "Órdenes de trabajo", "Técnicos", "Agenda", "Seguimiento", "Reportes"],
    software: ["Gestor de órdenes de trabajo", "Agenda y despacho de técnicos", "Historial de servicios por cliente"] },
  { id: "educacion", name: "Educación", icon: GraduationCap, headline: "Administra estudiantes, cursos y matrículas con claridad.",
    modules: ["Estudiantes", "Cursos", "Matrículas", "Seguimiento", "Administración"],
    software: ["Plataforma de matrículas", "Seguimiento académico y asistencia", "Panel administrativo de cursos"] },
];

export const processSteps: ProcessStep[] = [
  { title: "Descubrimiento", description: "Entendemos tu negocio, tus procesos, tus necesidades y los problemas que quieres solucionar." },
  { title: "Análisis y planificación", description: "Definimos alcance, funcionalidades, prioridades, estructura técnica y objetivos del proyecto." },
  { title: "Diseño de solución", description: "Construimos una arquitectura y experiencia de usuario pensadas para tu operación." },
  { title: "Desarrollo", description: "Convertimos el diseño y los requisitos en una solución funcional, utilizando tecnologías adecuadas para cada proyecto." },
  { title: "Pruebas y validación", description: "Evaluamos funcionalidades, corregimos errores y validamos que el sistema cumpla con los requisitos definidos." },
  { title: "Entrega y evolución", description: "Implementamos la solución y acompañamos su evolución mediante mejoras y soporte acordado." },
];

export const differentials = [
  { title: "Soluciones personalizadas", text: "Software que se adapta a tu empresa, no software genérico impuesto." },
  { title: "Procesos antes que código", text: "Entendemos cómo trabajas antes de empezar a desarrollar." },
  { title: "Diseño intuitivo", text: "Interfaces claras que tu equipo aprende a usar rápidamente." },
  { title: "Arquitectura escalable", text: "Bases técnicas preparadas para crecer con tu operación." },
  { title: "Código mantenible", text: "Estructura ordenada que facilita mejoras y relevo futuro." },
  { title: "Seguridad desde el desarrollo", text: "Validación de datos y buenas prácticas desde el primer módulo." },
  { title: "Comunicación transparente", text: "Sabes qué se está construyendo, por qué y en qué estado va." },
  { title: "Desarrollo por etapas", text: "Entregas progresivas que permiten validar y ajustar el rumbo." },
  { title: "Enfoque en resultados", text: "Cada funcionalidad responde a un problema real de tu negocio." },
  { title: "Pensado para el usuario final", text: "La experiencia de quien usa el sistema a diario es prioridad." },
];

export const techGroups: TechGroup[] = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "APIs REST", "Python (cuando aplica)", "Arquitecturas backend modernas"] },
  { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB (según el proyecto)"] },
  { title: "Infraestructura", items: ["Docker", "Git", "GitHub", "Despliegue en la nube"] },
];
