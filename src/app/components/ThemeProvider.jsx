"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  isDark: true,
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

const applyTheme = (next) => {
  document.documentElement.classList.toggle("dark", next === "dark");
};

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("oma-theme");
      const initial = stored === "light" || stored === "dark" ? stored : "dark";
      setThemeState(initial);
      applyTheme(initial);
    } catch {
      // Ignore storage errors
    }
  }, []);

  const setTheme = (next) => {
    const root = document.documentElement;
    root.classList.add("theme-fade");
    setThemeState(next);
    applyTheme(next);
    window.setTimeout(() => root.classList.remove("theme-fade"), 450);
    try {
      localStorage.setItem("oma-theme", next);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-grid h-10 w-10 place-items-center rounded-oma border border-oma-line text-oma-text transition-colors duration-150 hover:border-oma-lineStrong ${className}`}
    >
      {/* Moon */}
      <svg
        className={`absolute h-[18px] w-[18px] transition-[opacity,transform] duration-300 ${isDark ? "opacity-0 rotate-45" : "opacity-100 rotate-0"}`}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* Sun */}
      <svg
        className={`absolute h-[18px] w-[18px] transition-[opacity,transform] duration-300 ${isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"}`}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
