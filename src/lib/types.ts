export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  tags: string[];
  delay?: string;
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