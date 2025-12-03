'use client'

import { Skill } from '@/lib/types'

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
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
}
