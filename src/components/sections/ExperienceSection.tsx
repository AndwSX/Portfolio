import { useState } from 'react';

import { EXPERIENCES } from "@/lib/constants";
import { ExperienceTimeline } from "@/components/ui/ExperienceCard";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';


export default function ExperienceSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      ref={targetRef}
      id="experiencia"
      className={`min-h-screen flex items-center justify-center px-4 pb-24 pt-80 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text">
            Mi <span className="text-cyan-500">Trayectoria</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Experiencia profesional y logros destacados
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceTimeline
              key={experience.id}
              experience={experience}
              index={index}
              isActive={activeId === experience.id}
              onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}