"use client";

import SkillCard from '@/components/ui/SkillCard'
import { SKILLS } from '@/lib/constants'


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
            {SKILLS.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
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
