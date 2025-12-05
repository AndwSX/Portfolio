import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  gradient: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}


export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  delay?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  color: string; // HSL values
}