import { NavItem, Project, ExperienceItem, SocialLink, Certificate, Education } from './types';
import { Zap, Target, Rocket, Code2, Database, Settings, Users, Home, User, Wrench, FolderOpen, Briefcase, Linkedin, Github, Mail, ChartPie } from "lucide-react";

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
  FastAPIIcon,
  PHPIcon,
  MySQLIcon,
  AngularIcon,
  LaravelIcon,
  ExpressIcon,
  ElectronIcon,
  ApacheIcon,
  FedoraIcon,
  BootstrapIcon,
} from "@/components/ui/icons/TechIcons";

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'acerca', label: 'Acerca', icon: User },
  { id: 'skills', label: 'Habilidades', icon: Wrench },
  { id: 'proyectos', label: 'Proyectos', icon: FolderOpen },
  { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
];

export const HERO_ANIMATED_TEXTS = [
  "const developer = new BackendDev();",
  "import { Innovation } from 'creativity';",
  "console.log('Building the future...');",
  "const stack = Python + React + PostgreSQL;",
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/afortizdev/', label: 'LinkedIn' },
  { id: 'github', icon: Github, url: 'https://github.com/AndwSX', label: 'GitHub' },
  { id: 'email', icon: Mail, url: 'mailto:ortiz.andw@gmail.com', label: 'Email' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Diventracker',
    description: 'Sistema de gestión de ventas y servicios técnicos para negocios de tecnología.',
    longDescription: 'Aplicación web completa para gestión de ventas y seguimiento de servicios técnicos. Incluye autenticación con roles (administrador/técnico), CRUD de clientes, usuarios y productos, dashboard con métricas, gestión de imágenes, y sistema de seguimiento de estados del servicio técnico (en progreso, finalizado, completado, en revisión).',
    icon: Wrench,
    gradient: 'from-green-400 to-cyan-500',
    //1920x1080 debe ser la resolucion para que se vea bien
    image: '/images/diventracker.webp',
    tags: ['FastAPI', 'Jinja2', 'Bootstrap', 'REST API', 'MySQL', 'JavaScript', 'AJAX / Fetch', 'Chart.js', 'DataTables', 'Data Analysis', 'Reports'],
    github: 'https://github.com/Diventracker/Diven',
    demo: '#'
  },
  {
    id: 2,
    title: 'Survey Analytics Dashboard',
    description: 'Sistema de encuestas con autenticación y dashboard de análisis de resultados.',
    longDescription: 'Aplicación web orientada a la gestión de encuestas de satisfacción. Permite el registro de usuarios con validación de habeas data, autenticación de usuarios registrados y envío de encuestas personalizadas. Incluye un dashboard interactivo para el análisis de resultados con métricas visuales, gráficos dinámicos y exportación de datos a Excel. Diseñado para facilitar la toma de decisiones basada en datos.',
    icon: ChartPie,
    gradient: 'from-blue-400 to-indigo-500',
    image: '/images/survey.webp',
    tags: ['PHP', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'Chart.js', 'ExcelJS', 'REST API', 'AJAX / Fetch', 'Remix Icon', 'Data Analysis', 'Mobile First'],
    github: 'https://github.com/AndwSX/SurveyAnalytics-Dashboard',
    demo: '#'
  }
  // {
  //   id: 3,
  //   title: 'Entropy Evolve',
  //   description: 'Sistema de automejora para agentes de IA, diseñado para dominios complejos con ingeniería de software.',
  //   longDescription: 'Framework experimental de ML que permite a los agentes optimizar sus propios algoritmos mediante técnicas de meta-aprendizaje y evolución de arquitecturas.',
  //   icon: 'ri-robot-fill',
  //   gradient: 'from-cyan-400 to-blue-500',
  //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  //   tags: ['Python', 'AI', 'Machine Learning'],
  //   github: '#',
  //   demo: '#'
  // },
  // {
  //   id: 4,
  //   title: 'Portfolio Web',
  //   description: 'Sitio web personal moderno con animaciones fluidas y diseño responsive.',
  //   longDescription: 'Portfolio interactivo construido con las últimas tecnologías web, featuring smooth scrolling, dark mode, y animaciones personalizadas.',
  //   icon: 'ri-global-line',
  //   gradient: 'from-purple-400 to-pink-500',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  //   tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
  //   github: '#',
  //   demo: '#'
  // }
];

export const SKILLS = {
  "BACKEND (Experiencia Profesional)": [
    { name: "Python", icon: PythonIcon, color: "207 51% 52%" },
    { name: "FastAPI", icon: FastAPIIcon, color: "174 100% 29%" },
    { name: "PHP", icon: PHPIcon, color: "236 29% 59%" },
    { name: "Node.js", icon: NodeIcon, color: "120 25% 45%" },
    { name: "PostgreSQL", icon: PostgreSQLIcon, color: "211 60% 48%" },
    { name: "MySQL", icon: MySQLIcon, color: "206 41% 45%" },
  ],
  "FRONTEND (Experiencia Profesional)": [
    { name: "JavaScript", icon: JavaScriptIcon, color: "50 100% 50%" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "211 60% 48%" },
    { name: "React", icon: ReactIcon, color: "193 95% 68%" },
    { name: "Vue.js", icon: VueIcon, color: "153 47% 49%" },
    { name: "Tailwind CSS", icon: TailwindIcon, color: "193 95% 68%" },
    { name: "Bootstrap", icon: BootstrapIcon, color: "264 39% 51%" },
  ],
  "FRAMEWORKS Y TOOLS": [
    { name: "Next.js", icon: NextJSIcon, color: "0 0% 80%" },
    { name: "Angular", icon: AngularIcon, color: "0 100% 50%" },
    { name: "Laravel", icon: LaravelIcon, color: "0 70% 50%" },
    { name: "Express", icon: ExpressIcon, color: "0 0% 50%" },
    { name: "Electron", icon: ElectronIcon, color: "189 34% 42%" },
  ],
  "DEVOPS E INFRAESTRUCTURA": [
    { name: "Docker", icon: DockerIcon, color: "201 91% 59%" },
    { name: "Git", icon: GitIcon, color: "14 100% 57%" },
    { name: "Fedora", icon: FedoraIcon, color: "206 63% 59%" },
    { name: "Apache", icon: ApacheIcon, color: "357 72% 48%" },
  ],
};

export const HIGHLIGHTS = [
  { icon: Code2, title: "Aplicaciones reales en entorno productivo" },
  { icon: Zap, title: "APIs REST con FastAPI y Express" },
  { icon: Database, title: "Gestión de PostgreSQL en producción" },
  { icon: Settings, title: "Automatización con Python y PHP" },
  { icon: Rocket, title: "Integración FTP y procesamiento de PDFs" },
  { icon: Target, title: "Desarrollo de Software (Backend + Frontend)" },
  { icon: Users, title: "Dashboards con Chart.js y DataTables" },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Construcción de Bases de Datos con MySQL",
    institution: "SENA",
    year: "2024",
    topics: ["MySQL", "Bases de Datos", "SQL"]
  },
  {
    title: "Variables y Estructuras de Control en Python",
    institution: "SENA",
    year: "2024",
    topics: ["Python", "Programación", "Algoritmos"]
  },
  {
    title: "Aplicación de la Calidad del Software",
    institution: "SENA",
    year: "2025",
    topics: ["Testing", "QA", "Buenas Prácticas"]
  },
  {
    title: "Despliegue de Aplicaciones en Docker",
    institution: "SENA",
    year: "2025",
    topics: ["Docker", "Contenedores", "DevOps"]
  },
  {
    title: "Bootcamp Agentes IA: Chatbots Inteligentes",
    institution: "Udemy",
    year: "2025",
    topics: ["IA", "Chatbots", "Python", "AgentsAI"]
  },
  {
    title: "Introduction to C#",
    institution: "SoloLearn",
    year: "2025",
    topics: ["C#", ".NET", "POO"]
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Análisis y Desarrollo de Software",
    institution: "SENA Centro de Diseño y Metrología",
    period: "2023 - 2026",
    description: "Enfoque en desarrollo de software y arquitectura de sistemas",
    //status: "En formación - Etapa práctica",
  },
  // {
  //   degree: "Ingeniería en Sistemas",
  //   institution: "Universidad Tecnológica",
  //   period: "2020 - 2024",
  //   description: "Enfoque en desarrollo de software y arquitectura de sistemas",
  // },
  // {
  //   degree: "Certificación Backend Development",
  //   institution: "Platzi / Udemy",
  //   period: "2023",
  //   description:
  //     "Node.js, APIs REST, bases de datos y arquitectura de microservicios",
  // },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: 'SIMETRIC S.A.',
    position: 'Practicante Sistemas',
    period: 'Oct - 2025 - Abr - 2026',
    location: 'Presencial',
    description: 'Soporte técnico y desarrollo de aplicaciones web internas. Mi rol principal es brindar soporte remoto (TeamViewer, AnyDesk) y gestión de bases de datos, desarrollando soluciones web cuando surgen necesidades específicas en las diferentes áreas de la empresa. Trabajo con múltiples tecnologías backend (Python, PHP, C#) y frontend (React, Vue.js).',
    achievements: [
      'Desarrollé y mantuve aplicaciones web internas, automatizando procesos críticos del negocio',
      'Creé sistema de procesamiento automático de PDFs con integración FTP, insertando imágenes de huellas digitales dinámicamente usando Python y Paramiko',
      'Implementé aplicación de encuestas de satisfacción con dashboard analítico usando PHP, PostgreSQL, Chart.js y Tailwind CSS',
      'Desarrollé aplicación Electron que integra múltiples APIs (FastAPI + Express) con bases de datos PostgreSQL, usando React y Vue.js',
      'Construí sistema de descarga de certificados con conversión HTML a PDF y manejo de Base64, optimizando la distribución de documentos',
      'Mejoré interfaz de agendamiento empresarial con Bootstrap, aumentando la usabilidad del sistema',
      'Participe en el desarrollo de un sistema de pausas activas obligatorias con C#, API en PHP y PostgreSQL'
    ],
    technologies: ['Python', 'FastAPI', 'PHP', 'C#', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Electron', 'Express', 'Node.js', 'PostgreSQL', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'Chart.js', 'DataTables', 'Docker', 'Git', 'Linux', 'FTP', 'Paramiko', 'Tkinter', 'AJAX'],
    icon: Code2,
    color: 'from-cyan-500 to-blue-500'
  },
  // {
  //   id: 2,
  //   company: 'StartupLab',
  //   position: 'Frontend Developer',
  //   period: '2020 - 2022',
  //   location: 'Híbrido',
  //   description: 'Construcción de interfaces de usuario innovadoras y experiencias interactivas para productos SaaS.',
  //   achievements: [
  //     'Desarrollé 15+ componentes reutilizables',
  //     'Mejoré UX basado en analytics',
  //     'Implementé testing automatizado'
  //   ],
  //   technologies: ['Vue.js', 'TypeScript', 'Tailwind'],
  //   icon: 'ri-palette-line',
  //   color: 'from-purple-500 to-pink-500'
  // },
  // {
  //   id: 3,
  //   company: 'Digital Agency',
  //   position: 'Junior Developer',
  //   period: '2019 - 2020',
  //   location: 'Presencial',
  //   description: 'Desarrollo de sitios web y aplicaciones para clientes diversos, enfoque en performance y SEO.',
  //   achievements: [
  //     'Entregué 20+ proyectos exitosos',
  //     'Optimicé SEO alcanzando top 3',
  //     'Colaboré con equipos multidisciplinarios'
  //   ],
  //   technologies: ['JavaScript', 'PHP', 'WordPress'],
  //   icon: 'ri-rocket-line',
  //   color: 'from-green-500 to-cyan-500'
  // }
];