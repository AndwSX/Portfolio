"use client";

import { Code2, Database, Palette, LucideIcon } from "lucide-react";
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

interface Skill {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  color: string; // HSL values
}

const allSkills: Skill[] = [
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

const SkillIcon = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;

  return (
    <div
      className="
        group relative flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        bg-card border border-border/50 rounded-xl cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-110 hover:border-primary/50 hover:shadow-lg
        animate-skill-pop animate-float-subtle
      "
      style={{
        animationDelay: `${index * 50}ms`,
        ["--float-delay" as string]: `${index * 0.2}s`,
        ["--glow-color" as string]: `hsl(${skill.color} / 0.4)`,
      }}
    >
      <Icon
        className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-110"
        style={{ color: `hsl(${skill.color})` }}
      />

      {/* Tooltip */}
      <span
        className="
          absolute -bottom-8 left-1/2 -translate-x-1/2
          px-2 py-1 text-xs font-medium whitespace-nowrap
          bg-card border border-border rounded-md
          opacity-0 scale-90 pointer-events-none
          transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100
        "
      >
        {skill.name}
      </span>

      {/* Glow */}
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          -z-10 blur-xl
        "
        style={{ background: `hsl(${skill.color} / 0.3)` }}
      />
    </div>
  );
};


export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-stagger">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4 gradient-text">
            Mis <span className="text-cyan-500">Habilidades</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {allSkills.map((skill, index) => (
                <SkillIcon key={skill.name} skill={skill} index={index} />
            ))}
        </div>


        {/* Decorative Glow */}
        <div
          className="
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px] rounded-full pointer-events-none -z-10 opacity-30
          "
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>
    </section>
  );
}
