import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const pixelyfySans = localFont({
  src: "./fonts/PixelifySans-Bold.ttf",
  variable: "--font-pixelify-sans",
  weight: "100 900"
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Imaginary.IA",
  description: "Imagina un cuento, vive una aventura. ¡Todo empieza con una idea!",
  keywords: ["Imaginary", "IA", "Cuentos", "Historias", "Aventuras", "Imaginación", "Herramientas", "Creatividad", "Digital", "Innovacion"],
};

const bodyClassName = "bg-gradient-to-br from-[#110033] to-slate-900"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelyfySans.variable} antialiased ${bodyClassName}`}
      >
        {children}
      </body>
    </html>
  );
}
