import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merrash Coaching | Dra. Lulú — Coaching Holístico y de Salud",
  description:
    "Agenda tu sesión de valoración con la Dra. Lulú. Programas de coaching holístico, médico y de transformación personal de la marca Merrash.",
  keywords: [
    "Coaching Holístico",
    "Dra. Lulú",
    "Merrash Coaching",
    "Coaching de Vida",
    "Salud",
    "Medicina Integrativa",
    "Desarrollo Personal",
  ],
  authors: [{ name: "Dra. Lulú" }],
  openGraph: {
    title: "Merrash Coaching | Dra. Lulú",
    description:
      "Transforma tu salud y tu vida con un enfoque médico y holístico personalizado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
