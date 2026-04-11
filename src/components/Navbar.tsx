"use client";

import * as React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  dict: any;
  currentLang: "en" | "id";
}

export function Navbar({ dict, currentLang }: NavbarProps) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const closeMenu = () => setIsMenuOpen(false);

  const toggleLang = () => {
    const newLang = currentLang === "en" ? "id" : "en";
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    window.location.href = newPath || `/${newLang}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <Link href={`/${currentLang}`} className="font-bold text-xl tracking-tight" onClick={closeMenu}>
          Rotibowifdev.
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${currentLang}#experience`} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.experience}
          </Link>
          <Link href={`/${currentLang}#projects`} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.projects}
          </Link>
          <Link href={`/${currentLang}#skills`} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.skills}
          </Link>
          <Link href={`/${currentLang}/projects`} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.otherProjects}
          </Link>

          <div className="flex items-center gap-2 border-l border-zinc-200 dark:border-zinc-700 pl-4 ml-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-bold uppercase"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {currentLang}
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle theme"
              >
                {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-bold uppercase"
            aria-label="Toggle language"
          >
            {currentLang}
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button 
            className="p-2 ml-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 flex flex-col px-6 py-4 gap-4 shadow-lg">
          <Link href={`/${currentLang}#experience`} onClick={closeMenu} className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.experience}
          </Link>
          <Link href={`/${currentLang}#projects`} onClick={closeMenu} className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.projects}
          </Link>
          <Link href={`/${currentLang}#skills`} onClick={closeMenu} className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.skills}
          </Link>
          <Link href={`/${currentLang}/projects`} onClick={closeMenu} className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {dict.otherProjects}
          </Link>
        </div>
      )}
    </header>
  );
}
