# 🎨 Portfolio - Andrés Ortiz

Portfolio profesional desarrollado con Next.js, TypeScript y TailwindCSS. Diseño moderno con glassmorphism, modo oscuro y animaciones fluidas.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Características

- 🎨 **Diseño Moderno**: Glassmorphism, gradientes animados y efectos visuales
- 🌓 **Modo Oscuro**: Sistema de temas con persistencia en localStorage
- 📱 **Responsive**: Adaptado para móviles, tablets y desktop
- ⚡ **Optimizado**: Carga rápida con Next.js 14 y optimización de imágenes
- 🎭 **Animaciones**: Transiciones suaves y efectos hover interactivos
- 🧩 **Componentes Modulares**: Código organizado y reutilizable
- 🎯 **SEO Optimizado**: Metadatos y estructura semántica

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/portfolio-nextjs.git
cd portfolio-nextjs
```

2. **Instala las dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecuta el servidor de desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abre tu navegador**

Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📁 Estructura del Proyecto

```
portfolio-nextjs/
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes del portfolio
├── src/
│   ├── app/               # App Router de Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página principal
│   │   └── globals.css   # Estilos globales
│   ├── components/        # Componentes React
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── sections/     # Secciones de la página
│   │   └── ui/           # Componentes reutilizables
│   ├── hooks/            # Custom hooks
│   │   ├── useTheme.ts
│   │   └── useActiveSection.ts
│   └── lib/              # Utilidades y constantes
│       ├── constants.ts
│       └── types.ts
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── next.config.js        # Configuración de Next.js
```

## 🎨 Personalización

### Cambiar información personal

Edita `src/lib/constants.ts`:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'instagram', icon: 'ri-instagram-line', url: 'TU_URL', label: 'Instagram' },
  { id: 'linkedin', icon: 'ri-linkedin-line', url: 'TU_URL', label: 'LinkedIn' },
  { id: 'github', icon: 'ri-github-line', url: 'TU_URL', label: 'GitHub' },
]
```

### Agregar proyectos

Modifica el array `PROJECTS` en `src/lib/constants.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    icon: 'ri-code-line',
    gradient: 'from-blue-400 to-purple-500',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
]
```

### Cambiar colores y tema

Edita `tailwind.config.ts` para personalizar la paleta de colores y animaciones.

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea la versión de producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 🧰 Tecnologías Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [TailwindCSS](https://tailwindcss.com/)
- **Iconos**: [RemixIcon](https://remixicon.com/)
- **Fuentes**: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Andrés Ortiz**

- Portfolio: [tu-portfolio.com](https://tu-portfolio.com)
- LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

Desarrollado con ❤️ y ☕ por Andrés Ortiz
