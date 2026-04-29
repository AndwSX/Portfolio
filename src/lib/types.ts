import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
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
  achievements: string[];
  technologies: string[];
  icon: LucideIcon;
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
  icon: LucideIcon;
}

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
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