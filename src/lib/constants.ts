import { NavItem, Project, Service, SocialLink, Skill } from './types';
import { Code2, Database, Palette } from "lucide-react";
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  VueIcon,
  NodeIcon,
  PythonIcon,
  TailwindIcon,
  GitIcon,
  DockerIcon,
  FigmaIcon,
  NextJSIcon,
  PostgreSQLIcon,
  AWSIcon,
  MongoDBIcon,
  GraphQLIcon,
  RedisIcon,
} from "@/components/ui/icons/TechIcons";

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: 'ri-home-line' },
  { id: 'acerca', label: 'Acerca', icon: 'ri-user-line' },
  { id: 'skills', label: 'Habilidades', icon: 'ri-tools-line' },
  { id: 'proyectos', label: 'Proyectos', icon: 'ri-folder-line' },
  { id: 'servicios', label: 'Experiencia', icon: 'ri-briefcase-line' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'instagram', icon: 'ri-instagram-line', url: '#', label: 'Instagram' },
  { id: 'linkedin', icon: 'ri-linkedin-line', url: '#', label: 'LinkedIn' },
  { id: 'github', icon: 'ri-github-line', url: '#', label: 'GitHub' },
  { id: 'email', icon: 'ri-mail-line', url: '#', label: 'Email' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Diventracker',
    description: 'Plataforma educativa especializada en Inteligencia Artificial, programación y matemáticas aplicadas.',
    icon: 'ri-graduation-cap-fill',
    gradient: 'from-green-400 to-cyan-500',
    tags: ['Python', 'FastAPI', 'AJAX', 'Tailwind'],
    delay: '0s'
  },
  {
    id: 2,
    title: 'TREEJS',
    description: 'Aplicación web interactiva con animaciones 3D creadas con Three.JS.',
    icon: 'ri-box-3-fill',
    gradient: 'from-blue-400 to-purple-500',
    tags: ['Three.js', 'JavaScript', 'WebGL', '3D'],
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Entropy Evolve',
    description: 'Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software.',
    icon: 'ri-robot-fill',
    gradient: 'from-cyan-400 to-blue-500',
    tags: ['Python', 'AI', 'Machine Learning'],
    delay: '0.2s'
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creación de aplicaciones web modernas, responsivas y optimizadas usando las últimas tecnologías.',
    icon: 'ri-code-s-slash-line',
    features: ['React & Next.js', 'TypeScript', 'TailwindCSS', 'APIs REST'],
    delay: '0s'
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Desarrollo e implementación de modelos de IA para resolver problemas complejos.',
    icon: 'ri-brain-line',
    features: ['Deep Learning', 'PyTorch', 'Data Science', 'Computer Vision'],
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Diseño de interfaces intuitivas y atractivas con enfoque en la experiencia del usuario.',
    icon: 'ri-palette-line',
    features: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    delay: '0.2s'
  }
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", icon: JavaScriptIcon, color: "50 100% 50%" },
  { name: "TypeScript", icon: TypeScriptIcon, color: "211 60% 48%" },
  { name: "Python", icon: PythonIcon, color: "207 51% 52%" },
  { name: "React", icon: ReactIcon, color: "193 95% 68%" },
  { name: "Next.js", icon: NextJSIcon, color: "0 0% 80%" },
  { name: "Vue.js", icon: VueIcon, color: "153 47% 49%" },
  { name: "Node.js", icon: NodeIcon, color: "120 25% 45%" },
  { name: "Tailwind", icon: TailwindIcon, color: "193 95% 68%" },
  { name: "PostgreSQL", icon: PostgreSQLIcon, color: "211 60% 48%" },
  { name: "MongoDB", icon: MongoDBIcon, color: "120 35% 45%" },
  { name: "Redis", icon: RedisIcon, color: "0 68% 52%" },
  { name: "GraphQL", icon: GraphQLIcon, color: "319 100% 44%" },
  { name: "Docker", icon: DockerIcon, color: "201 91% 59%" },
  { name: "AWS", icon: AWSIcon, color: "33 100% 50%" },
  { name: "Git", icon: GitIcon, color: "14 100% 57%" },
  { name: "Figma", icon: FigmaIcon, color: "302 59% 65%" },
  { name: "HTML/CSS", icon: Code2, color: "14 100% 57%" },
  { name: "SQL", icon: Database, color: "199 89% 48%" },
  { name: "UI/UX", icon: Palette, color: "280 80% 60%" },
];