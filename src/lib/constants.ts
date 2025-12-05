import { NavItem, Project, ExperienceItem, SocialLink } from './types';
import { Zap, Target, Rocket, Code2, Database, Palette } from "lucide-react";
import {  } from "lucide-react";
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
  { id: 'experiencia', label: 'Experiencia', icon: 'ri-briefcase-line' },
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
    longDescription: 'Sistema completo de gestión educativa con módulos de IA para análisis predictivo del rendimiento estudiantil, recomendaciones personalizadas y gamificación avanzada.',
    icon: 'ri-graduation-cap-fill',
    gradient: 'from-green-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    tags: ['Python', 'FastAPI', 'AJAX', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'TREEJS',
    description: 'Aplicación web interactiva con animaciones 3D creadas con Three.JS.',
    longDescription: 'Experiencia inmersiva 3D con física en tiempo real, partículas interactivas y shaders personalizados para crear visualizaciones impactantes.',
    icon: 'ri-box-3-fill',
    gradient: 'from-blue-400 to-purple-500',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tags: ['Three.js', 'JavaScript', 'WebGL', '3D'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Entropy Evolve',
    description: 'Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software.',
    longDescription: 'Framework experimental de ML que permite a los agentes optimizar sus propios algoritmos mediante técnicas de meta-aprendizaje y evolución de arquitecturas.',
    icon: 'ri-robot-fill',
    gradient: 'from-cyan-400 to-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'AI', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Portfolio Web',
    description: 'Sitio web personal moderno con animaciones fluidas y diseño responsive.',
    longDescription: 'Portfolio interactivo construido con las últimas tecnologías web, featuring smooth scrolling, dark mode, y animaciones personalizadas.',
    icon: 'ri-global-line',
    gradient: 'from-purple-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    github: '#',
    demo: '#'
  }
];

export const SKILLS = {
  "LANGUAGES": [
    { name: "JavaScript", icon: JavaScriptIcon, color: "50 100% 50%" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "211 60% 48%" },
    { name: "Python", icon: PythonIcon, color: "207 51% 52%" },
    { name: "HTML/CSS", icon: Code2, color: "14 100% 57%" },
    { name: "SQL", icon: Database, color: "199 89% 48%" },
  ],
  "RUNTIME & FRAMEWORKS": [
    { name: "React", icon: ReactIcon, color: "193 95% 68%" },
    { name: "Next.js", icon: NextJSIcon, color: "0 0% 80%" },
    { name: "Vue.js", icon: VueIcon, color: "153 47% 49%" },
    { name: "Node.js", icon: NodeIcon, color: "120 25% 45%" },
    { name: "Tailwind", icon: TailwindIcon, color: "193 95% 68%" },
  ],
  "DATABASES": [
    { name: "PostgreSQL", icon: PostgreSQLIcon, color: "211 60% 48%" },
    { name: "MongoDB", icon: MongoDBIcon, color: "120 35% 45%" },
    { name: "Redis", icon: RedisIcon, color: "0 68% 52%" },
    { name: "GraphQL", icon: GraphQLIcon, color: "319 100% 44%" },
  ],
  "DEVOPS & TOOLS": [
    { name: "Docker", icon: DockerIcon, color: "201 91% 59%" },
    { name: "Git", icon: GitIcon, color: "14 100% 57%" },
  ],
  "CLOUD & DEPLOY": [
    { name: "AWS", icon: AWSIcon, color: "33 100% 50%" },
  ],
  "DESIGN": [
    { name: "Figma", icon: FigmaIcon, color: "302 59% 65%" },
    { name: "UI/UX", icon: Palette, color: "280 80% 60%" },
  ],
};

export const HIGHLIGHTS = [
  { icon: Code2, title: "Clean Code" },
  { icon: Zap, title: "Performance" },
  { icon: Target, title: "Problem Solving" },
  { icon: Rocket, title: "Aprendizaje Continuo" },
];

export const EDUCATION = [
  {
    degree: "Análisis y Desarrollo de Software",
    institution: "SENA Centro de Diseño y Metrología",
    period: "2024",
    status: "En formación - Etapa práctica",
  },
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Tecnológica",
    period: "2020 - 2024",
    description: "Enfoque en desarrollo de software y arquitectura de sistemas",
  },
  {
    degree: "Certificación Backend Development",
    institution: "Platzi / Udemy",
    period: "2023",
    description:
      "Node.js, APIs REST, bases de datos y arquitectura de microservicios",
  },
];

export const EXPERIENCES : ExperienceItem[] = [
  {
    id: 1,
    company: 'Tech Innovations',
    position: 'Senior Full Stack Developer',
    period: '2022 - Presente',
    location: 'Remote',
    description: 'Desarrollo de aplicaciones web escalables utilizando tecnologías modernas como React, Node.js y AWS.',
    achievements: [
      'Lideré equipo de 5 desarrolladores',
      'Reduje tiempos de carga en 60%',
      'Implementé arquitectura microservicios'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker'],
    icon: 'ri-code-s-slash-line',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 2,
    company: 'StartupLab',
    position: 'Frontend Developer',
    period: '2020 - 2022',
    location: 'Híbrido',
    description: 'Construcción de interfaces de usuario innovadoras y experiencias interactivas para productos SaaS.',
    achievements: [
      'Desarrollé 15+ componentes reutilizables',
      'Mejoré UX basado en analytics',
      'Implementé testing automatizado'
    ],
    technologies: ['Vue.js', 'TypeScript', 'Tailwind'],
    icon: 'ri-palette-line',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    company: 'Digital Agency',
    position: 'Junior Developer',
    period: '2019 - 2020',
    location: 'Presencial',
    description: 'Desarrollo de sitios web y aplicaciones para clientes diversos, enfoque en performance y SEO.',
    achievements: [
      'Entregué 20+ proyectos exitosos',
      'Optimicé SEO alcanzando top 3',
      'Colaboré con equipos multidisciplinarios'
    ],
    technologies: ['JavaScript', 'PHP', 'WordPress'],
    icon: 'ri-rocket-line',
    color: 'from-green-500 to-cyan-500'
  }
];