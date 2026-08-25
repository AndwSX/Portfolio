'use client'

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Send, Download, Linkedin, Github, CheckCircle2,
  XCircle, Loader2, MessageSquare, User, Mail, FileText,
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
};

export default function ContactSection() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formState, setFormState] = useState<FormState>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.from_name.trim()) newErrors.from_name = 'El nombre es requerido';
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Ingresa un email válido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    else if (formData.message.trim().length < 10) newErrors.message = 'Mínimo 10 caracteres';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setFormState('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const resetForm = () => setFormState('idle');

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20';

  return (
    <section
      ref={targetRef}
      id="contacto"
      className={`min-h-screen flex items-center justify-center px-4 py-24 transition-all duration-700 ${
        isIntersecting ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text pb-2">
            ¿<span className="text-cyan-500">Hablamos</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Cuéntame sobre tu proyecto o propuesta. Respondo en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">

          {/* ── Left column: info ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Availability badge */}
            <div className="glass-strong rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-green-500">Disponible para proyectos</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Estoy abierto a nuevas oportunidades laborales, freelance y colaboraciones interesantes.
              </p>
            </div>

            {/* CV download */}
            <a
              href="/docs/CV_Andres_Ortiz_2026.pdf"
              download
              className="flex items-center gap-3 glass-strong rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/50 hover:scale-[1.02] group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Download size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Descargar CV</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Andres Ortiz — 2026.pdf</p>
              </div>
            </a>

            {/* Social links */}
            <div className="glass-strong rounded-2xl p-6 space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Encuéntrame en</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = ICON_MAP[social.id] ?? Github;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-cyan-500 hover:border-cyan-500/50"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="lg:col-span-3 glass-strong rounded-3xl p-8 relative overflow-hidden">

            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">

              {/* ── SUCCESS ── */}
              {formState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Gracias por contactarme. Te responderé pronto.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl glass text-sm font-medium hover:border-cyan-500/50 transition-all duration-300"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}

              {/* ── ERROR ── */}
              {formState === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center shadow-lg">
                    <XCircle size={40} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display">Algo salió mal</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      No se pudo enviar el mensaje. Intenta de nuevo.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:scale-105 transition-all duration-300"
                  >
                    Intentar de nuevo
                  </button>
                </motion.div>
              )}

              {/* ── FORM ── */}
              {(formState === 'idle' || formState === 'loading') && (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 relative z-10"
                  noValidate
                >
                  <h3 className="text-xl font-bold font-display mb-6">Envíame un mensaje</h3>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <User size={12} /> Nombre
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={`${inputBase} ${errors.from_name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      />
                      {errors.from_name && (
                        <p className="text-xs text-red-500">{errors.from_name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <Mail size={12} /> Email
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`${inputBase} ${errors.from_email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      />
                      {errors.from_email && (
                        <p className="text-xs text-red-500">{errors.from_email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <FileText size={12} /> Asunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿En qué te puedo ayudar?"
                      className={`${inputBase} ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <MessageSquare size={12} /> Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto, propuesta o lo que necesitas..."
                      className={`${inputBase} resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message ? (
                        <p className="text-xs text-red-500">{errors.message}</p>
                      ) : <span />}
                      <span className="text-xs text-gray-400">{formData.message.length} / 1000</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
