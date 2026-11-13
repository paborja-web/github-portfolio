import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navar";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Borja | Web Developer Portfolio",
  description:
    "Computer Science student & Web Developer specializing in Next.js, React, TypeScript, and modern Tailwind CSS UI design.",
  keywords: [
    "Patrick Borja",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Patrick Borja" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-black text-white antialiased selection:bg-red-600 selection:text-white overflow-x-hidden`}
      >
        {/* Ambient Red Glow Effect sa Likod ng Buong Website */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-900/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[150px]" />
        </div>

        {/* Main Content Container with Shared Navbar */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}