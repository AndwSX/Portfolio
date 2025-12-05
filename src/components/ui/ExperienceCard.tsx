import { ExperienceItem } from "@/lib/types";
import { EXPERIENCES } from "@/lib/constants";

interface ExperienceTimelineProps {
  experience: ExperienceItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function ExperienceTimeline({experience, index, isActive, onClick}: ExperienceTimelineProps) {
  return (
    <div 
      className={`
        relative cursor-pointer transition-all duration-500
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60 hover:opacity-80'}
      `}
      onClick={onClick}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <div className={`
          w-4 h-4 rounded-full transition-all duration-500 border-2
          ${isActive 
            ? 'bg-cyan-500 border-cyan-500 scale-150 shadow-lg shadow-cyan-500/50' 
            : 'bg-gray-300 dark:bg-gray-700 border-gray-300 dark:border-gray-700'
          }
        `}></div>
        {index < EXPERIENCES.length - 1 && (
          <div className={`
            w-0.5 h-full mt-2 transition-colors duration-500
            ${isActive ? 'bg-cyan-500/50' : 'bg-gray-300 dark:bg-gray-700'}
          `}></div>
        )}
      </div>

      {/* Card */}
      <div className="ml-12 mb-12">
        <div className={`
          glass-strong rounded-3xl p-6 transition-all duration-500
          ${isActive 
            ? 'border-cyan-500/50 shadow-glow' 
            : 'hover:border-cyan-500/30'
          }
        `}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`
                  w-12 h-12 rounded-xl bg-gradient-to-br ${experience.color} 
                  flex items-center justify-center transition-transform duration-300
                  ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                `}>
                  <i className={`${experience.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{experience.position}</h3>
                  <p className="text-cyan-500 font-semibold">{experience.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Period and location */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 glass rounded-lg text-xs font-medium flex items-center gap-1">
              <i className="ri-calendar-line"></i>
              {experience.period}
            </span>
            <span className="px-3 py-1 glass rounded-lg text-xs font-medium flex items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {experience.location}
            </span>
          </div>

          {/* Description - Always visible */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Expandable content */}
          <div className={`
            transition-all duration-500 overflow-hidden
            ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}>
            {/* Achievements */}
            <div className="space-y-3 mb-4">
              <h4 className="text-sm font-semibold text-cyan-500 flex items-center gap-2">
                <i className="ri-trophy-line"></i>
                Logros destacados
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <i className="ri-check-line text-cyan-500 mt-0.5"></i>
                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-cyan-500">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Expand indicator */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button className="text-xs font-medium text-cyan-500 flex items-center gap-1 hover:gap-2 transition-all">
              {isActive ? (
                <>
                  <span>Ver menos</span>
                  <i className="ri-arrow-up-s-line"></i>
                </>
              ) : (
                <>
                  <span>Ver más detalles</span>
                  <i className="ri-arrow-down-s-line"></i>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}