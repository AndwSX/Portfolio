"use client";

import { useEffect, useState } from "react";
import { Terminal, ArrowRight, Download } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { HERO_ANIMATED_TEXTS } from "@/lib/constants";


export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    const currentText = HERO_ANIMATED_TEXTS[textIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Escribiendo
          if (charIndex < currentText.length) {
            setDisplayText(currentText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Terminó de escribir, espera y luego empieza a borrar
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Borrando
          if (charIndex > 0) {
            setDisplayText(currentText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Terminó de borrar, pasa al siguiente texto
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % HERO_ANIMATED_TEXTS.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      ref={targetRef}
      id="inicio"
      className={`min-h-screen flex items-center justify-center px-4 pt-24 pb-16 transition-all duration-700 ${isIntersecting ? 'section-visible' : 'section-hidden'
        }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-display">
                Hola, soy <span className="gradient-text">Andrés</span>
              </h1>

              {/* Terminal con efecto de escritura */}
              <div className="glass inline-flex items-center gap-2 font-mono text-sm px-4 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
                <Terminal size={16} className="text-cyan-500" />
                <span className="min-h-[20px]">
                  {displayText}
                  <span className="text-cyan-500 animate-[pulse_1s_ease-in-out_infinite]">
                    |
                  </span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Soy un{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Desarrollador de Software
              </span>{" "}
              con experiencia en desarrollo{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Full Stack, automatización de procesos e integración de sistemas.
              </span>{" "}
              <br></br>
              Diseño y desarrollo soluciones web y de escritorio, APIs y herramientas
              orientadas a resolver problemas reales, utilizando tecnologías como{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Python, FastAPI, JavaScript, Next.js, Node.js y PostgreSQL.
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="glass-strong group px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2">
                Hablemos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/docs/CV_Andres_Ortiz_2026.pdf"
                download
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center gap-2"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>

            <SocialLinks />
          </div>

          <div className="hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-3xl animate-pulse"></div>

              <div className="relative code-card overflow-hidden">
                {/* Header */}
                <div className="code-header">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full code-dot-red" />
                    <div className="h-3 w-3 rounded-full code-dot-yellow" />
                    <div className="h-3 w-3 rounded-full code-dot-green" />
                  </div>
                  <span className="code-filename  text-gray-900 dark:text-gray-100">server.js</span>
                </div>

                {/* Code */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="code-chart-3">{"// Developer Log"}</div>

                  <div>
                    <span className="code-primary">function</span> loop() {"{"}
                  </div>

                  <div className="pl-4">
                    <span className="code-chart-2">writeCode</span>();
                  </div>

                  <div className="pl-4">
                    <span className="code-chart-2">testCode</span>();
                  </div>

                  <div className="pl-4">
                    <span className="code-chart-2">debug</span>();
                  </div>

                  <div className="pl-4">
                    <span className="code-chart-2">keepLearning</span>();
                  </div>

                  <div>{"  return loop();"}</div>
                  <div>{"}"}</div>

                  <div className="pt-4 code-chart-3">{"// Current Status"}</div>

                  <div>
                    <span className="code-primary">developer</span>.
                    <span className="code-chart-2">status</span>() {"=>"}
                  </div>

                  <div className="pl-4 code-string">
                    "En loop infinito, mejorando cada día 🚀"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
