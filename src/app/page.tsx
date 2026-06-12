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
  X
} from "lucide-react";

// Interfaces para los datos de la página
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Efecto para gestionar el modo oscuro en el document element
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Variantes de animación Framer Motion
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  // Datos
  const services: ServiceCardProps[] = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Coaching Integral 1 a 1",
      description: "Sesiones personalizadas de medicina holística y estilo de vida para tratar de raíz tus bloqueos físicos y emocionales.",
      features: ["Videollamadas integradas", "Plan personalizado de hábitos", "Soporte vía chat privado"],
      badge: "Más Demandado"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Programas Grupales",
      description: "Grupos reducidos orientados a metas de salud específicas. Aprende en comunidad con guía médica continua.",
      features: ["Sesiones grupales semanales", "Comunidad de apoyo privada", "Material educativo descargable"]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Talleres y Cursos Online",
      description: "Aprende a tu propio ritmo sobre nutrición consciente, gestión del estrés y medicina preventiva holística.",
      features: ["Acceso de por vida", "Certificado de participación", "Recetarios y guías prácticas"]
    }
  ];

  const steps: StepProps[] = [
    {
      number: "01",
      title: "Descubrimiento",
      description: "Analizamos tu historial médico, estilo de vida y metas emocionales en una primera sesión profunda de valoración."
    },
    {
      number: "02",
      title: "Plan de Acción",
      description: "Diseñamos un mapa de ruta holístico y personalizado con pasos prácticos, nutrición clínica y mentoría."
    },
    {
      number: "03",
      title: "Transformación",
      description: "Implementamos los cambios con un seguimiento cercano para consolidar tus nuevos hábitos y recuperar tu vitalidad."
    }
  ];

  const testimonials: TestimonialProps[] = [
    {
      quote: "La Dra. Lulú combinó su conocimiento médico con un enfoque tan humano y espiritual que transformó mi digestión y mi paz mental en menos de 3 meses. Una guía excepcional.",
      author: "Mariana Silva",
      role: "Emprendedora y Madre",
      rating: 5
    },
    {
      quote: "Llegué buscando bajar de peso y encontré una sanación profunda. Su enfoque de coaching médico me ayudó a entender la conexión entre mi estrés de trabajo y mi salud física.",
      author: "Dr. Carlos Mendoza",
      role: "Cardiólogo",
      rating: 5
    },
    {
      quote: "El programa grupal fue un antes y un después. La Dra. Lulú tiene una forma de explicar la ciencia médica de forma tan cálida y digerible que es inspirador.",
      author: "Sofía Ruiz",
      role: "Diseñadora de Interiores",
      rating: 5
    }
  ];

  const pricingPlans: PricingCardProps[] = [
    {
      title: "Sesión de Valoración",
      price: "$85",
      period: "único pago",
      description: "Sesión inicial de 60 minutos para diagnosticar tus necesidades principales y trazar tus primeros objetivos.",
      features: [
        "Evaluación médica inicial de estilo de vida",
        "Sesión de 60 minutos por videollamada",
        "Entrega de recomendaciones preliminares",
        "Abonable a cualquier programa completo"
      ]
    },
    {
      title: "Programa Vitalidad Total",
      price: "$299",
      period: "mes",
      description: "Acompañamiento premium de 3 meses enfocado en redefinir tu salud física, metabólica y mental.",
      features: [
        "4 Sesiones 1 a 1 al mes (Videollamada)",
        "Plan médico-nutricional holístico adaptado",
        "Resolución de dudas por WhatsApp 24/7",
        "Acceso gratuito a la biblioteca de cursos",
        "Monitoreo semanal de avances"
      ],
      isPopular: true
    },
    {
      title: "Inmersión Grupal",
      price: "$149",
      period: "programa",
      description: "Programa intensivo de 6 semanas con un grupo exclusivo de personas compartiendo los mismos objetivos de salud.",
      features: [
        "6 Sesiones de coaching grupal en vivo",
        "Grupo de soporte en comunidad privada",
        "Acceso a materiales y cuadernos de trabajo",
        "Descuento especial en consultas 1 a 1"
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col font-sans transition-colors duration-300">
      
      {/* HEADER DE NAVEGACIÓN */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-wide text-primary">
              Merrash <span className="font-sans font-light text-sm tracking-widest uppercase opacity-75">Coaching</span>
            </span>
          </a>

          {/* Menú de escritorio */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo Funciona</a>
            <a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a>
            <a href="#precios" className="hover:text-primary transition-colors">Programas</a>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-card border border-border transition-colors text-primary"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a 
              href="#precios" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md"
            >
              Agendar Sesión
            </a>
          </nav>

          {/* Botón de menú móvil */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-card border border-border/40 transition-colors text-primary"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="md:hidden border-b border-border bg-background transition-colors duration-300"
            >
              <div className="px-6 py-6 flex flex-col space-y-4 text-center">
                <a href="#sobre-mi" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary font-medium transition-colors">Sobre Mí</a>
                <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary font-medium transition-colors">Servicios</a>
                <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary font-medium transition-colors">Cómo Funciona</a>
                <a href="#testimonios" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary font-medium transition-colors">Testimonios</a>
                <a href="#precios" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary font-medium transition-colors">Programas</a>
                <a 
                  href="#precios" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all shadow-md w-full inline-block"
                >
                  Agendar Sesión
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SECCIÓN HERO */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Contenido Izquierdo */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <motion.div 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary dark:text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase w-max"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coaching Médico y de Vida Premium</span>
            </motion.div>

            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]"
            >
              Transformación <span className="italic font-normal text-primary">holística</span> desde la ciencia médica y el ser.
            </motion.h1>

            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-base sm:text-lg opacity-85 leading-relaxed max-w-xl"
            >
              Hola, soy la <strong>Dra. Lulú</strong>. Te acompaño a fusionar la medicina integrativa con el coaching estratégico para sanar de raíz, recuperar tu energía natural y crear un estilo de vida pleno y sostenible.
            </motion.p>

            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <a 
                href="#precios" 
                className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8 py-4 rounded-full text-sm text-center tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Agendar Sesión de Valoración</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#servicios" 
                className="border border-border hover:bg-card text-foreground font-semibold px-8 py-4 rounded-full text-sm text-center tracking-wider uppercase transition-all flex items-center justify-center"
              >
                Conoce mis Programas
              </a>
            </motion.div>

            {/* Metas/Autoridad Rápidas */}
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-4 border-t border-border/80 pt-8 mt-4 text-xs font-medium uppercase tracking-widest opacity-75"
            >
              <div>
                <span className="block font-serif text-2xl font-normal text-primary lowercase">15+</span>
                <span>años de exp. médica</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-primary lowercase">1k+</span>
                <span>vidas transformadas</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-primary lowercase">100%</span>
                <span>enfoque holístico</span>
              </div>
            </motion.div>
          </div>

          {/* Espacio para Fotografía (Contenido Derecho) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-border/40 shadow-xl bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent flex items-center justify-center p-8 group"
            >
              {/* Círculos de Diseño abstractos detrás de la foto */}
              <div className="absolute inset-4 rounded-2xl border border-primary/10 border-dashed pointer-events-none group-hover:scale-102 transition-transform duration-700" />
              <div className="absolute -inset-2 rounded-3xl border border-primary/5 pointer-events-none" />

              {/* Contenedor del avatar/imagen abstracta */}
              <div className="text-center z-10 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mb-6 shadow-inner">
                  <Award className="w-14 h-14 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-light text-foreground mb-2">Dra. Lulú</h3>
                <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">Medicina & Life Coaching</p>
                <div className="bg-background/90 dark:bg-card/90 backdrop-blur border border-border rounded-xl p-3.5 max-w-[240px] text-center shadow-lg">
                  <p className="text-xs italic opacity-85">{"\"Un espacio clínico y humano para reconectar con tu bienestar genuino.\""}</p>
                </div>
              </div>

              {/* Pequeño tag flotante */}
              <div className="absolute bottom-6 right-6 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-full shadow-sm">
                Sesiones 100% Online
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="py-24 md:py-36 bg-card/10 border-y border-border/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-border/40 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center p-12">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <span className="font-serif text-lg italic opacity-80 block max-w-[280px] mx-auto text-foreground">
                  {"\"Un puente entre la medicina basada en evidencia y el despertar del potencial de cada paciente.\""}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-primary/15 rounded-full pointer-events-none -z-10" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-primary font-semibold text-xs tracking-widest uppercase">Autoridad y Calidez</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Mi Misión como tu Coach de Salud</h2>
            <div className="space-y-4 opacity-85 leading-relaxed text-sm sm:text-base">
              <p>
                Como médica con más de 15 años de trayectoria en el sector clínico, aprendí rápidamente que tratar únicamente los síntomas físicos de un paciente es solo la mitad del camino. La verdadera salud surge cuando abordamos el estilo de vida, las emociones y los bloqueos mentales.
              </p>
              <p>
                Esta convicción me impulsó a certificarme como Coach de Vida y Salud Integral. A través de Merrash Coaching, he fusionado el rigor médico científico con metodologías de transformación personal, ofreciendo un enfoque holístico que empodera a las personas a convertirse en agentes activos de su propio bienestar.
              </p>
            </div>
            
            {/* Cita destacada en Cormorant */}
            <div className="border-l-2 border-primary pl-6 py-2 my-6">
              <span className="font-serif text-xl sm:text-2xl font-light italic text-primary block">
                {"\"No solo buscamos la ausencia de malestar, sino un estado vibrante de energía, propósito y balance.\""}
              </span>
            </div>

            <div className="pt-2">
              <a 
                href="#precios"
                className="text-primary font-semibold tracking-wider uppercase text-xs inline-flex items-center space-x-2 group"
              >
                <span>Descubre cómo puedo ayudarte</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="text-primary font-semibold text-xs tracking-widest uppercase">Nuestros Servicios</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Programas Diseñados para tu Evolución</h2>
            <p className="text-sm sm:text-base opacity-80">
              Elige el formato que mejor se adapte a tu momento actual de transformación. Todos nuestros programas cuentan con bases médicas y holísticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-service-card rounded-2xl p-8 text-left flex flex-col justify-between group hover:scale-[1.01] hover:shadow-lg transition-all duration-500 border border-border/40"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <span className="bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide">{service.title}</h3>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm opacity-85">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a 
                    href="#precios" 
                    className="w-full bg-primary/5 hover:bg-primary text-primary hover:text-primary-foreground font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase text-center block transition-all border border-primary/10 hover:border-transparent"
                  >
                    Ver detalles e inversión
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 md:py-36 bg-card/5 border-y border-border/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="text-primary font-semibold text-xs tracking-widest uppercase">El Camino</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Tu Proceso de Transformación en 3 Pasos</h2>
            <p className="text-sm sm:text-base opacity-80">
              Un método estructurado pero flexible, pensado para que consigas resultados desde la primera sesión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 text-center group relative">
                {/* Conectores decorativos en Desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[65%] w-[70%] border-t border-dashed border-border/30 pointer-events-none -z-10" />
                )}
                
                <div className="w-20 h-20 rounded-full border border-primary/20 bg-background flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                  <span className="font-serif text-2xl font-light text-primary">{step.number}</span>
                </div>
                
                <h3 className="font-serif text-xl font-medium tracking-wide">{step.title}</h3>
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN TESTIMONIOS */}
      <section id="testimonios" className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <div className="text-primary font-semibold text-xs tracking-widest uppercase">Casos de Éxito</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Vidas en Pleno Bienestar</h2>
          </div>

          {/* Carrusel interactivo */}
          <div className="relative min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="bg-service-card rounded-3xl p-8 md:p-12 text-center border border-border/40 shadow-sm max-w-3xl w-full"
              >
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-foreground opacity-90 mb-8">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>
                <h4 className="font-semibold text-sm tracking-wider uppercase text-primary">
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="text-xs opacity-75 mt-1">
                  {testimonials[activeTestimonial].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots del Carrusel */}
          <div className="flex justify-center space-x-2.5 pt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? "bg-primary w-6" 
                    : "bg-border hover:bg-primary/40"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PRECIOS E INTEGRACIONES */}
      <section id="precios" className="py-24 md:py-36 bg-card/5 border-t border-border/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="text-primary font-semibold text-xs tracking-widest uppercase">Inversión en ti</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Elige tu Plan de Crecimiento</h2>
            <p className="text-sm sm:text-base opacity-80">
              Pagos 100% seguros y opciones de financiamiento disponibles. Tu transformación inicia hoy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 flex flex-col justify-between text-left transition-all duration-500 border ${
                  plan.isPopular 
                    ? "bg-service-card border-primary relative shadow-lg scale-[1.02] lg:scale-[1.03]" 
                    : "bg-service-card border-border/40 opacity-95"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 rounded-full shadow-md">
                    Recomendado
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold">{plan.title}</h3>
                    <p className="text-xs opacity-75 mt-1.5">{plan.description}</p>
                  </div>

                  <div className="py-2">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-primary">{plan.price}</span>
                    <span className="text-xs opacity-75 ml-2">/ {plan.period}</span>
                  </div>

                  <hr className="border-border" />

                  <ul className="space-y-3.5 text-xs sm:text-sm opacity-85">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase text-center transition-all shadow-md">
                    Comenzar Programa
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Integraciones y soporte de checkout en línea */}
          <div className="max-w-2xl mx-auto border border-border/30 bg-background/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 text-xs sm:text-sm font-medium opacity-85">
            <div className="flex items-center space-x-2.5">
              <Video className="w-5 h-5 text-primary" />
              <span>Videollamadas integradas (Zoom/Meet)</span>
            </div>
            <div className="hidden sm:block text-border">|</div>
            <div className="flex items-center space-x-2.5">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Cobro seguro con Stripe y PayPal</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border/30 py-16 md:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-wide text-primary">
              Merrash <span className="font-sans font-light text-sm tracking-widest uppercase opacity-75">Coaching</span>
            </span>
            <p className="text-xs opacity-75 leading-relaxed">
              Un enfoque de coaching de salud y estilo de vida diseñado para reconectar la ciencia con el bienestar interior.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-primary">Navegación</h4>
            <ul className="space-y-2.5 text-xs opacity-80">
              <li><a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios de Coaching</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Cómo Funciona</a></li>
              <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2.5 text-xs opacity-80">
              <li>Coaching 1 a 1 de Salud</li>
              <li>Planes de Nutrición Holística</li>
              <li>Gestión del Estrés & Mindset</li>
              <li>Programas de Transformación</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-primary">Contacto</h4>
            <ul className="space-y-2.5 text-xs opacity-80">
              <li>info@merrashcoaching.com</li>
              <li>Consultorio: Mérida, México</li>
              <li className="pt-2">
                <span className="inline-flex space-x-3">
                  <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-border/30 mt-10 pt-6 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Merrash Coaching. Todos los derechos reservados. Marca matriz Merrash.</p>
        </div>
      </footer>
    </div>
  );
}
