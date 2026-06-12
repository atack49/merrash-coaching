# Merrash Coaching 🌿

Plataforma web **premium y minimalista** para la marca personal de la **Dra. Lulú**. Diseñada para convertir visitantes en clientes de programas de coaching holístico y médico, con un enfoque en la experiencia de usuario de alto valor.

---

## ✨ Tecnologías Principales

| Tecnología | Rol en el proyecto |
|---|---|
| **Next.js 16 (App Router)** | Framework principal — SSR, routing y optimización |
| **Tailwind CSS v4** | Sistema de estilos — tokens y utilidades |
| **Framer Motion** | Animaciones de entrada y transiciones fluidas |
| **Lucide React** | Librería de íconos limpios y consistentes |
| **Plus Jakarta Sans** | Tipografía principal vía `next/font/google` |
| **TypeScript** | Tipado estricto en todo el proyecto |

---

## 🚀 Configuración para Desarrollo

Sigue estos pasos para levantar el proyecto localmente:

```bash
# 1. Clonar el repositorio
git clone https://github.com/atack49/merrash-coaching.git

# 2. Entrar a la carpeta del proyecto
cd merrash-coaching

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **[http://localhost:3000](http://localhost:3000)**.

---

## 📁 Estructura del Proyecto

```
merrash-coaching/
├── src/
│   └── app/
│       ├── layout.tsx      # Layout raíz (fuente, metadata global)
│       ├── page.tsx        # Landing page principal
│       └── globals.css     # Design tokens y estilos globales
├── public/                 # Activos estáticos
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🗺️ Mapa de Ruta — Próximas Integraciones

- [ ] **Pasarela de Pagos** — Integración con Stripe y/o PayPal para cobro de programas directamente desde la web.
- [ ] **Sistema de Agendamiento** — Módulo de videollamadas y citas con Cal.com o Calendly embebido.
- [ ] **Blog Médico** — Sistema de artículos y contenido educativo con MDX o CMS headless (Sanity/Contentful).
- [ ] **Autenticación de Clientes** — Área privada para pacientes activos con seguimiento de su programa.
- [ ] **Notificaciones por Email** — Confirmaciones y recordatorios automáticos de sesión vía Resend.

---

## 📄 Licencia

Proyecto privado. Todos los derechos reservados © Merrash Coaching.
