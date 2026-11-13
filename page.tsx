import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col justify-between selection:bg-red-600 selection:text-white">
      {/* Background Decorative Red Circles */}
      <div className="absolute top-12 right-24 w-28 h-28 bg-red-800/40 rounded-full blur-xs pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-red-700/40 rounded-full blur-xs pointer-events-none" />

      {/* Header / Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-12 py-8 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="relative flex items-center">
          <span className="absolute -left-3 w-9 h-9 bg-red-600 rounded-full z-0 opacity-90" />
          <Link href="/" className="relative z-10 text-2xl font-extrabold tracking-wide pl-1">
            Patrick.
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">
            About
          </Link>
          <Link href="/education" className="hover:text-red-500 transition-colors">
            Education
          </Link>
          <Link href="/projects" className="hover:text-red-500 transition-colors">
            Projects
          </Link>
        </nav>

        {/* Contact Button */}
        <Link href="/contact">
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2 text-sm font-semibold transition-all shadow-lg shadow-red-600/30">
            Contact
          </Button>
        </Link>
      </header>

      {/* Hero Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-6 flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full">
        {/* Left Column: Text & Buttons */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="font-serif italic font-normal tracking-wide text-white">
              Patrick Borja
            </span>
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 tracking-tight leading-tight">
            Web Developer
          </h2>

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
            Computer Science student passionate about building clean, responsive, and modern web applications with React, Next.js, and TypeScript.
          </p>

          {/* Social Links */}
          <div className="space-y-3 pt-2">
            <p className="text-xs sm:text-sm font-medium text-gray-300">
              Find Me on
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/paborja-web"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/patiexm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/patiexm_?cplk=MWttMmNua3Z1aDRtMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center lg:justify-start pt-4">
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-2xl px-10 py-6 text-base font-semibold shadow-lg shadow-red-600/40 transition-all">
                Hire me
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Red Circle Frame with Profile Picture */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0">
          <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-b from-red-600 via-red-700 to-red-950 shadow-2xl shadow-red-600/50 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative bg-zinc-900">
              <img
                src="/d05f9f48-0023-41a3-a564-bbb0c1c15da9.jpg"
                alt="Patrick Borja"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}