"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
       // initialize resolvedTheme correctly based on system
       setResolvedTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.add("transition-colors");
    root.classList.add("duration-300");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setResolvedTheme(systemTheme);
      if (systemTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.removeItem("theme");
    } else {
      setResolvedTheme(theme);
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        setResolvedTheme(systemTheme);
        const root = window.document.documentElement;
        if (systemTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
  };

  return { theme, setTheme, resolvedTheme, mounted };
}
