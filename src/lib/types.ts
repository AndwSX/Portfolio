import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  gradient: string;
  /** Array de rutas de imágenes para el carrusel */
  images: string[];
  /** @deprecated Usar `images`. Se mantiene por compatibilidad. */
  image?: string;
  /** Características destacadas que se muestran en el modal (2 columnas) */
  features: string[];
  tags: string[];
  github: string;
  demo: string;
}


export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string;
  technologies: string[];
  icon: any;
  color: string;
}

export interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: any;
}

export interface SocialLink {
  id: string;
  icon: any;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: any;
  color: string; // HSL values
}

export interface Certificate {
  title: string;
  institution: string;
  year: string;
  topics: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  description?: string;
}