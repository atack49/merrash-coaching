"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Users,
  Check,
  ChevronRight,
  ArrowRight,
  Sun,
  Moon,
  Video,
  CreditCard,
  Star,
  Award,
  Heart,
  Menu,
  X,
} from "lucide-react";

// ──────────────────────────────────────────────────────────────
// Interfaces
// ──────────────────────────────────────────────────────────────
interface ServiceCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

interface StepData {
  number: string;
  title: string;
  description: string;
}

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface PricingPlanData {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

// ──────────────────────────────────────────────────────────────
// Variantes de animación reutilizables
// ──────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.12,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

// ──────────────────────────────────────────────────────────────
// Datos estáticos
// ──────────────────────────────────────────────────────────────
const SERVICES: ServiceCardData[] = [
  {
    icon: <Heart className="w-5 h-5 text-primary" />,
    title: "Coaching Integral 1 a 1",
    description:
      "Sesiones personalizadas que fusionan medicina holística y estilo de vida para tratar de raíz tus bloqueos físicos y emocionales.",
    features: [
      "Videollamadas integradas",
      "Plan personalizado de hábitos",
      "Soporte vía chat privado",
    ],
    badge: "Más Demandado",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Programas Grupales",
    description:
      "Grupos reducidos orientados a metas de salud específicas. Aprende en comunidad con guía médica continua.",
    features: [
      "Sesiones grupales semanales",
      "Comunidad de apoyo privada",
      "Material educativo descargable",
    ],
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: "Talleres y Cursos Online",
    description:
      "Aprende a tu ritmo sobre nutrición consciente, gestión del estrés y medicina preventiva holística.",
    features: [
      "Acceso de por vida",
      "Certificado de participación",
      "Recetarios y guías prácticas",
    ],
  },
];

const STEPS: StepData[] = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tu historial médico, estilo de vida y metas emocionales en una primera sesión profunda de valoración.",
  },
  {
    number: "02",
    title: "Plan de Acción",
    description:
      "Diseñamos un mapa de ruta holístico y personalizado con pasos prácticos, nutrición clínica y mentoría.",
  },
  {
    number: "03",
    title: "Transformación",
    description:
      "Implementamos los cambios con un seguimiento cercano para consolidar tus nuevos hábitos y recuperar tu vitalidad.",
  },
];

const TESTIMONIALS: TestimonialData[] = [
  {
    quote:
      "La Dra. Lulú combinó su conocimiento médico con un enfoque tan humano y espiritual que transformó mi digestión y mi paz mental en menos de 3 meses.",
    author: "Mariana Silva",
    role: "Emprendedora y Madre",
    rating: 5,
  },
  {
    quote:
      "Llegué buscando bajar de peso y encontré una sanación profunda. Su enfoque de coaching médico me ayudó a entender la conexión entre mi estrés y mi salud física.",
    author: "Dr. Carlos Mendoza",
    role: "Cardiólogo",
    rating: 5,
  },
  {
    quote:
      "El programa grupal fue un antes y un después. La Dra. Lulú tiene una forma de explicar la ciencia médica de forma tan cálida y digerible que es inspirador.",
    author: "Sofía Ruiz",
    role: "Diseñadora de Interiores",
    rating: 5,
  },
];

const PRICING: PricingPlanData[] = [
  {
    title: "Sesión de Valoración",
    price: "$85",
    period: "único pago",
    description:
      "Sesión inicial de 60 minutos para diagnosticar tus necesidades y trazar tus primeros objetivos.",
    features: [
      "Evaluación médica inicial de estilo de vida",
      "Sesión de 60 minutos por videollamada",
      "Entrega de recomendaciones preliminares",
      "Abonable a cualquier programa completo",
    ],
  },
  {
    title: "Programa Vitalidad Total",
    price: "$299",
    period: "mes",
    description:
      "Acompañamiento premium de 3 meses enfocado en redefinir tu salud física, metabólica y mental.",
    features: [
      "4 Sesiones 1 a 1 al mes (Videollamada)",
      "Plan médico-nutricional holístico adaptado",
      "Resolución de dudas por WhatsApp 24/7",
      "Acceso gratuito a la biblioteca de cursos",
      "Monitoreo semanal de avances",
    ],
    isPopular: true,
  },
  {
    title: "Inmersión Grupal",
    price: "$149",
    period: "programa",
    description:
      "Programa intensivo de 6 semanas con un grupo exclusivo que comparte los mismos objetivos de salud.",
    features: [
      "6 Sesiones de coaching grupal en vivo",
      "Grupo de soporte en comunidad privada",
      "Acceso a materiales y cuadernos de trabajo",
      "Descuento especial en consultas 1 a 1",
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// Componentes internos
// ──────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-primary font-semibold text-xs tracking-widest uppercase">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
      {children}
    </h2>
  );
}

// ──────────────────────────────────────────────────────────────
// Página principal
// ──────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  useEffect(() => {
    const prefersDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDarkMode(next);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex-1 flex flex-col font-sans transition-colors duration-300 overflow-x-hidden">

      {/* ── HEADER ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Inicio">
            <span className="text-xl font-bold tracking-tight text-primary">
              Merrash
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Coaching
            </span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {["Sobre Mí", "Servicios", "Cómo Funciona", "Testimonios", "Programas"].map(
              (item, i) => {
                const href = [
                  "#sobre-mi",
                  "#servicios",
                  "#como-funciona",
                  "#testimonios",
                  "#precios",
                ][i];
                return (
                  <a
                    key={item}
                    href={href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                );
              }
            )}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/60 hover:bg-card transition-colors text-muted-foreground hover:text-primary"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#precios"
              id="cta-header-desktop"
              className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all hover:bg-primary/90 shadow-sm"
            >
              Agendar Sesión
            </a>
          </nav>

          {/* Controles Móvil */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/60 hover:bg-card transition-colors text-muted-foreground"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-border bg-background"
            >
              <div className="px-6 py-8 flex flex-col gap-5 text-center text-sm font-medium">
                {["Sobre Mí", "Servicios", "Cómo Funciona", "Testimonios", "Programas"].map(
                  (item, i) => {
                    const href = [
                      "#sobre-mi",
                      "#servicios",
                      "#como-funciona",
                      "#testimonios",
                      "#precios",
                    ][i];
                    return (
                      <a
                        key={item}
                        href={href}
                        onClick={closeMobileMenu}
                        className="py-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    );
                  }
                )}
                <a
                  href="#precios"
                  onClick={closeMobileMenu}
                  className="bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full text-xs tracking-wider uppercase transition-all hover:bg-primary/90 w-full text-center"
                >
                  Agendar Sesión
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-24 md:py-32 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[35vw] h-[35vw] rounded-full bg-primary/8 blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[160px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Contenido */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-primary/8 text-primary border border-primary/15 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase w-max"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coaching Médico Premium</span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Transformación{" "}
              <span className="text-primary">holística</span>{" "}
              desde la ciencia médica y el ser.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Hola, soy la <strong className="text-foreground font-semibold">Dra. Lulú</strong>. Te acompaño a fusionar la medicina integrativa con el coaching estratégico para sanar de raíz, recuperar tu energía y crear un estilo de vida pleno.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#precios"
                id="cta-hero-primary"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Agendar Sesión de Valoración</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                id="cta-hero-secondary"
                className="border border-border hover:border-primary/40 hover:bg-card text-foreground font-semibold px-8 py-4 rounded-full text-sm tracking-wide uppercase transition-all flex items-center justify-center"
              >
                Conoce mis Programas
              </a>
            </motion.div>

            {/* Métricas de autoridad */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8"
            >
              {[
                { stat: "15+", label: "años de exp. médica" },
                { stat: "1k+", label: "vidas transformadas" },
                { stat: "100%", label: "enfoque holístico" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <span className="block text-2xl font-bold text-primary">{stat}</span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tarjeta visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-3xl border border-border/40 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent flex items-center justify-center p-10"
            >
              <div className="absolute inset-5 rounded-2xl border border-primary/10 border-dashed pointer-events-none" />

              <div className="text-center z-10 flex flex-col items-center gap-5">
                <div className="w-28 h-28 rounded-full bg-primary/12 border border-primary/20 flex items-center justify-center">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Dra. Lulú</h3>
                  <p className="text-xs text-primary uppercase tracking-widest font-semibold mt-1">
                    Medicina &amp; Life Coaching
                  </p>
                </div>
                <div className="bg-background/90 backdrop-blur border border-border rounded-2xl px-5 py-4 max-w-[220px] text-center shadow-sm">
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    &ldquo;Un espacio clínico y humano para reconectar con tu bienestar genuino.&rdquo;
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-full">
                100% Online
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SOBRE MÍ ─────────────────────────────────────────── */}
      <section id="sobre-mi" className="py-24 md:py-36 bg-card/20 border-y border-border/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Cita visual */}
          <div className="lg:col-span-5">
            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center p-12">
              <div className="text-center flex flex-col items-center gap-5">
                <Sparkles className="w-10 h-10 text-primary" />
                <p className="text-lg text-muted-foreground italic leading-relaxed max-w-[260px]">
                  &ldquo;Un puente entre la medicina basada en evidencia y el despertar del potencial de cada paciente.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionLabel>Autoridad y Calidez</SectionLabel>
            <SectionHeading>Mi Misión como tu Coach de Salud</SectionHeading>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Como médica con más de 15 años de trayectoria clínica, aprendí que tratar únicamente los síntomas físicos es solo la mitad del camino. La verdadera salud surge cuando abordamos el estilo de vida, las emociones y los bloqueos mentales.
              </p>
              <p>
                Esta convicción me impulsó a certificarme como Coach de Vida y Salud Integral. A través de Merrash Coaching, he fusionado el rigor médico científico con metodologías de transformación personal, empodernando a las personas a ser agentes activos de su propio bienestar.
              </p>
            </div>

            {/* Cita destacada */}
            <blockquote className="border-l-2 border-primary pl-6 py-1 my-2">
              <p className="text-xl font-semibold text-primary leading-snug">
                &ldquo;No solo buscamos la ausencia de malestar, sino un estado vibrante de energía, propósito y balance.&rdquo;
              </p>
            </blockquote>

            <a
              href="#precios"
              className="text-primary font-semibold tracking-wider uppercase text-xs inline-flex items-center gap-1.5 group w-max"
            >
              <span>Descubre cómo puedo ayudarte</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ────────────────────────────────────────── */}
      <section id="servicios" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <SectionLabel>Nuestros Servicios</SectionLabel>
            <SectionHeading>Programas Diseñados para tu Evolución</SectionHeading>
            <p className="text-muted-foreground leading-relaxed">
              Elige el formato que mejor se adapte a tu momento actual de transformación. Todos nuestros programas cuentan con bases médicas y holísticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-service-card rounded-2xl p-8 flex flex-col justify-between group hover:scale-[1.015] transition-transform duration-500 border border-border/40"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <span className="bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="#precios"
                    className="w-full bg-primary/6 hover:bg-primary text-primary hover:text-primary-foreground font-semibold py-3 px-4 rounded-xl text-xs tracking-wider uppercase text-center block transition-all border border-primary/15 hover:border-transparent"
                  >
                    Ver detalles e inversión
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <section id="como-funciona" className="py-24 md:py-36 bg-card/20 border-y border-border/30">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <SectionLabel>El Camino</SectionLabel>
            <SectionHeading>Tu Proceso en 3 Pasos</SectionHeading>
            <p className="text-muted-foreground leading-relaxed">
              Un método estructurado pero flexible, pensado para que consigas resultados desde la primera sesión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="flex flex-col gap-5 group"
              >
                <div className="w-16 h-16 rounded-full border border-primary/25 bg-background flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-400">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────────── */}
      <section id="testimonios" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <SectionLabel>Casos de Éxito</SectionLabel>
            <SectionHeading>Vidas en Pleno Bienestar</SectionHeading>
          </div>

          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setActiveTestimonial(index)}
                className={`bg-service-card rounded-2xl p-8 flex flex-col gap-5 border transition-all duration-300 cursor-pointer ${
                  activeTestimonial === index
                    ? "border-primary/40 shadow-md"
                    : "border-border/40 hover:border-border/80"
                }`}
              >
                {/* Estrellas */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ───────────────────────────────────────────── */}
      <section id="precios" className="py-24 md:py-36 bg-card/20 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <SectionLabel>Inversión en ti</SectionLabel>
            <SectionHeading>Elige tu Plan de Crecimiento</SectionHeading>
            <p className="text-muted-foreground leading-relaxed">
              Pagos 100% seguros y opciones de financiamiento disponibles. Tu transformación inicia hoy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {PRICING.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative bg-service-card rounded-2xl p-8 flex flex-col gap-6 border transition-all duration-300 ${
                  plan.isPopular
                    ? "border-primary/40 shadow-lg ring-1 ring-primary/15"
                    : "border-border/40"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 rounded-full">
                    Recomendado
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                <div>
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xs text-muted-foreground ml-2">/ {plan.period}</span>
                </div>

                <hr className="border-border/60" />

                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  id={`cta-pricing-${index}`}
                  className={`w-full font-semibold py-4 px-4 rounded-xl text-sm tracking-wide uppercase text-center transition-all ${
                    plan.isPopular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                      : "border border-border/60 hover:border-primary/40 hover:bg-card text-foreground"
                  }`}
                >
                  Comenzar Programa
                </button>
              </motion.div>
            ))}
          </div>

          {/* Métodos de pago e integraciones */}
          <div className="max-w-xl border border-border/30 bg-background/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-5 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2.5">
              <Video className="w-5 h-5 text-primary" />
              <span>Videollamadas integradas</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Cobro seguro con Stripe</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-card border-t border-border/30 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">Merrash</span>
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Coaching
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Un enfoque de coaching de salud y estilo de vida diseñado para reconectar la ciencia con el bienestar interior.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5 text-foreground">Navegación</h4>
            <ul className="flex flex-col gap-3 text-xs text-muted-foreground">
              {[
                ["#sobre-mi", "Sobre Mí"],
                ["#servicios", "Servicios de Coaching"],
                ["#como-funciona", "Cómo Funciona"],
                ["#testimonios", "Testimonios"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5 text-foreground">Servicios</h4>
            <ul className="flex flex-col gap-3 text-xs text-muted-foreground">
              {[
                "Coaching 1 a 1 de Salud",
                "Planes de Nutrición Holística",
                "Gestión del Estrés & Mindset",
                "Programas de Transformación",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5 text-foreground">Contacto</h4>
            <ul className="flex flex-col gap-3 text-xs text-muted-foreground">
              <li>info@merrashcoaching.com</li>
              <li>Consultorio: Mérida, México</li>
              <li className="flex gap-3 pt-1">
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 border-t border-border/30 mt-12 pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Merrash Coaching — Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
