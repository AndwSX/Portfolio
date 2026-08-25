//types
import { NavItem, Project, ExperienceItem, SocialLink, Certificate, Education } from './types';
//lucide-react
import { Zap, Trees, Target, Rocket, Code2, Database, Settings, Users, Home, User, Wrench, FolderOpen, Briefcase, Linkedin, Wallet, Github, Mail, ChartPie } from "lucide-react";
//TechIcons
import { JavaScriptIcon, CSharpIcon, TypeScriptIcon, ReactIcon, VueIcon, NodeIcon, PostmanIcon, LinuxIcon, PythonIcon, TailwindIcon, GitIcon, DockerIcon, FigmaIcon, NextJSIcon, PostgreSQLIcon, AWSIcon, MongoDBIcon, GraphQLIcon, RedisIcon, FastAPIIcon, PHPIcon, MySQLIcon, AngularIcon, LaravelIcon, ExpressIcon, ElectronIcon, ApacheIcon, FedoraIcon, BootstrapIcon } from "@/components/ui/icons/TechIcons";

//Navigation Section

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'acerca', label: 'Acerca', icon: User },
  { id: 'skills', label: 'Habilidades', icon: Wrench },
  { id: 'proyectos', label: 'Proyectos', icon: FolderOpen },
  { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
  { id: 'contacto', label: 'Contacto', icon: Mail },
];

//Hero Section

export const HERO_ANIMATED_TEXTS = [
  "const developer = new FullStackDev();",
  "import { Innovation } from 'creativity';",
  "console.log('Building the future...');",
  "const stack = Python + React + PostgreSQL;",
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/afortizdev/', label: 'LinkedIn' },
  { id: 'github', icon: Github, url: 'https://github.com/AndwSX', label: 'GitHub' },
];

//About Section

export const HIGHLIGHTS = [
  { icon: Code2, title: "Aplicaciones reales en entorno productivo" },
  { icon: Zap, title: "APIs REST con FastAPI y Express,js" },
  { icon: Database, title: "Gestión de Bases de Datos en producción" },
  { icon: Settings, title: "Automatización de Workflows con IA" },
  { icon: Rocket, title: "Integración de sistemas y servicios" },
  { icon: Users, title: "Dashboards con métricas y KPIs" },
];

export const EDUCATION: Education[] = [
  {
    degree: "Tecnólogo en Análisis y Desarrollo de Software",
    institution: "SENA | Centro de Diseño y Metrología",
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

export const CERTIFICATES: Certificate[] = [
  {
    title: "Bootcamp Agentes IA: Chatbots Inteligentes",
    institution: "Udemy",
    year: "2025",
    topics: ["IA", "Chatbots", "Python", "AgentsAI"]
  },
  {
    title: "Aplicación de la Calidad del Software",
    institution: "SENA",
    year: "2025",
    topics: ["Testing", "QA", "Buenas Prácticas"]
  },
  {
    title: "Introduction to C#",
    institution: "SoloLearn",
    year: "2025",
    topics: ["C#", ".NET", "POO"]
  },
  {
    title: "Despliegue de Aplicaciones en Docker",
    institution: "SENA",
    year: "2025",
    topics: ["Docker", "Contenedores", "DevOps"]
  },
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
];

//Skills Section

export const SKILLS = {
  "BACKEND (Experiencia Profesional)": [
    { name: "Python", icon: PythonIcon, color: "207 51% 52%" },
    { name: "FastAPI", icon: FastAPIIcon, color: "174 100% 29%" },
    { name: "PHP", icon: PHPIcon, color: "236 29% 59%" },
    { name: "C#", icon: CSharpIcon, color: "294 40% 38%" },
    { name: "Node.js", icon: NodeIcon, color: "120 25% 45%" },
    { name: "Express.js", icon: ExpressIcon, color: "0 0% 50%" },
    { name: "Laravel", icon: LaravelIcon, color: "0 70% 50%" },
    { name: "PostgreSQL", icon: PostgreSQLIcon, color: "211 60% 48%" },
    { name: "MySQL", icon: MySQLIcon, color: "206 41% 45%" },
  ],

  "FRONTEND (Experiencia Profesional)": [
    { name: "JavaScript", icon: JavaScriptIcon, color: "50 100% 50%" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "211 60% 48%" },
    { name: "React", icon: ReactIcon, color: "193 95% 68%" },
    { name: "Vue.js", icon: VueIcon, color: "153 47% 49%" },
    { name: "Next.js", icon: NextJSIcon, color: "0 0% 80%" },
    { name: "Angular", icon: AngularIcon, color: "0 100% 50%" },
    { name: "Tailwind CSS", icon: TailwindIcon, color: "193 95% 68%" },
    { name: "Bootstrap", icon: BootstrapIcon, color: "264 39% 51%" },
  ],

  "DEVOPS E INFRAESTRUCTURA": [
    { name: "Docker", icon: DockerIcon, color: "201 91% 59%" },
    { name: "Git", icon: GitIcon, color: "14 100% 57%" },
    { name: "Linux", icon: LinuxIcon, color: "45 97% 57%" },
    { name: "Fedora", icon: FedoraIcon, color: "206 63% 59%" },
    { name: "Apache", icon: ApacheIcon, color: "357 72% 48%" },
    { name: "Postman", icon: PostmanIcon, color: "17 100% 60%" },
  ],

  // "DESARROLLO DESKTOP": [
  //   { name: "Electron", icon: ElectronIcon, color: "189 34% 42%" },
  // ],
};

//Projects Section

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Mortincho',
    description: 'Sistema web de gestión de inventario, ventas y control financiero para pequeños negocios.',
    longDescription: 'Aplicación web full stack desarrollada para la administración de inventario, ventas y movimientos financieros de un negocio. Incluye autenticación segura con JWT, control de usuarios, gestión de productos, inventario, ventas, pagos y módulos financieros como ingresos, gastos, préstamos y deudas. El sistema permite llevar trazabilidad de movimientos de saldo y control del capital del negocio en tiempo real. Desplegado con Angular en Vercel, FastAPI en Render y PostgreSQL en Supabase.',
    icon: Wallet,
    gradient: 'from-orange-400 to-red-500',
    images: [
      '/images/mortincho/1.webp',
      '/images/mortincho/2.webp',
      '/images/mortincho/3.webp',
      '/images/mortincho/4.webp',
    ],
    tags: ['Angular', 'FastAPI', 'TypeScript', 'Python', 'PostgreSQL', 'Supabase', 'Render', 'Vercel', 'SQLAlchemy', 'JWT Authentication', 'REST API', 'TailwindCSS', 'JavaScript', 'Financial Management', 'Inventory System'],
    features: [
      'Autenticación segura con JWT y control de roles',
      'Gestión de inventario y productos en tiempo real',
      'Módulo financiero: ingresos, gastos, préstamos y deudas',
      'Trazabilidad de movimientos de saldo y capital',
      'Dashboard con métricas y KPIs del negocio',
      'Desplegado en Vercel, Render y Supabase',
    ],
    github: 'https://github.com/AndwSX/mortincho',
    demo: 'https://mortincho.vercel.app/auth/login'
  },
  {
    id: 2,
    title: 'Diventracker',
    description: 'Sistema de gestión de ventas y servicios técnicos para negocios de tecnología.',
    longDescription: 'Aplicación web completa para gestión de ventas y seguimiento de servicios técnicos. Incluye autenticación con roles (administrador/técnico), CRUD de clientes, usuarios y productos, dashboard con métricas, gestión de imágenes, y sistema de seguimiento de estados del servicio técnico (en progreso, finalizado, completado, en revisión).',
    icon: Wrench,
    gradient: 'from-green-400 to-cyan-500',
    //1920x1080 debe ser la resolucion para que se vea bien
    images: [
      '/images/diventracker/1.webp',
      // '/images/diventracker/2.webp', // agrega aquí más capturas cuando las tengas
    ],
    tags: ['FastAPI', 'Jinja2', 'Bootstrap', 'REST API', 'MySQL', 'JavaScript', 'AJAX / Fetch', 'Chart.js', 'DataTables', 'Data Analysis', 'Reports'],
    features: [
      'Autenticación con roles: administrador y técnico',
      'CRUD completo de clientes, usuarios y productos',
      'Gestión de imágenes de productos',
      'Dashboard con métricas y gráficos (Chart.js)',
      'Seguimiento de estados del servicio técnico',
      'Reportes y tablas interactivas con DataTables',
    ],
    github: 'https://github.com/Diventracker/Diven',
    demo: '#'
  },
  {
    id: 3,
    title: 'Survey Analytics Dashboard',
    description: 'Sistema de encuestas con autenticación y dashboard de análisis de resultados.',
    longDescription: 'Aplicación web orientada a la gestión de encuestas de satisfacción. Permite el registro de usuarios con validación de habeas data, autenticación de usuarios registrados y envío de encuestas personalizadas. Incluye un dashboard interactivo para el análisis de resultados con métricas visuales, gráficos dinámicos y exportación de datos a Excel. Diseñado para facilitar la toma de decisiones basada en datos.',
    icon: ChartPie,
    gradient: 'from-blue-400 to-indigo-500',
    images: [
      '/images/survey/1.webp',
      '/images/survey/2.webp',
      '/images/survey/3.webp',
    ],
    tags: ['PHP', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'Chart.js', 'ExcelJS', 'REST API', 'AJAX / Fetch', 'Remix Icon', 'Data Analysis', 'Mobile First'],
    features: [
      'Registro de usuarios con validación de habeas data',
      'Autenticación segura de usuarios registrados',
      'Envío de encuestas de satisfacción personalizadas',
      'Dashboard interactivo con métricas y gráficos',
      'Exportación de resultados a Excel con ExcelJS',
      'Diseño Mobile First y responsive',
    ],
    github: 'https://github.com/AndwSX/SurveyAnalytics-Dashboard',
    demo: '#'
  },  
];

//Experience Section

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: 'SIMETRIC S.A.',
    position: 'Software Developer Jr',
    period: 'Oct - 2025 - Abr - 2026',
    location: 'Bogotá, Colombia - Presencial',
    description: 'Desempeñar y controlar funciones relacionadas con los procesos de desarrollo de software y aplicaciones web, así como brindar soporte técnico IT. Efectuar procesos de desarrollo conforme a los requerimientos del usuario final, cumpliendo con sus necesidades; presentar avances y reportes del proyecto; realizar pruebas de funcionalidad y las actualizaciones requeridas; además de apoyar labores de soporte en sistemas y software de forma presencial y remota, instalando, actualizando y ejecutando los procedimientos complementarios requeridos.',
    achievements: 'Identifiqué y analicé oportunidades de mejora en la gestión y seguridad de la información, por lo que planteé e implementé controles de seguridad de la información, así como soluciones de desarrollo que permitieron optimizar procesos y generar mayor eficiencia en la operación.',
    technologies: ['Python', 'FastAPI', 'PHP', 'C#', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Electron', 'Express', 'Node.js', 'PostgreSQL', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'Chart.js', 'DataTables', 'Docker', 'Git', 'Linux', 'FTP', 'Paramiko', 'Tkinter', 'AJAX', 'DBeaver', 'FileZilla', 'Postman', 'GLPI'],
    icon: Code2,
    color: 'from-red-500 to-blue-500'
  },
  {
    id: 2,
    company: 'AKRON D&F S.A.S.',
    position: 'Junior Web Developer',
    period: 'Jul - 2022 - Ago - 2023',
    location: 'Bogotá, Colombia - Presencial',
    description: 'Desempeñar funciones relacionadas con el desarrollo y mantenimiento de aplicaciones web, atendiendo los requerimientos y necesidades de los usuarios. Diseñar, desarrollar y actualizar soluciones web orientadas a la optimización de procesos internos, efectuar pruebas de funcionalidad, identificar y corregir errores, así como apoyar procesos de automatización y mejora de servicios tecnológicos internos.',
    achievements: 'Identifiqué y analicé oportunidades de mejora en el proceso de control de ingresos y egresos de caja, por lo que planteé y desarrollé una solución web automatizada e intuitiva que reemplazó el registro manual, optimizando la gestión de la información, reduciendo errores operativos y mejorando la eficiencia del proceso.',
    technologies: ['HTML', 'JavaScript', 'PHP', 'CSS', 'Bootstrap', 'MySQL', 'Trello', 'Git', 'AJAX'],
    icon: Trees,
    color: 'from-red-500 to-green-500'
  },
];