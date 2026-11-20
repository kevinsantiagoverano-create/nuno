import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  name: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
}

export interface Problem {
  text: string;
  icon: LucideIcon;
}

export interface Sector {
  id: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  modules: string[];
  software: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface TechGroup {
  title: string;
  items: string[];
}

export interface DemoModule {
  id: string;
  label: string;
  kpis: { label: string; value: string; delta?: string }[];
  chartTitle: string;
  d7: number[];
  m6: number[];
  columns: string[];
  rows: string[][];
  statusCol: number;
  statuses: string[];
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  accent: "blue" | "coral" | "deep";
  modules: DemoModule[];
}
