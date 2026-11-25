/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oma: {
          bg: "var(--oma-bg)",
          s1: "var(--oma-surface-1)",
          s2: "var(--oma-surface-2)",
          s3: "var(--oma-surface-3)",
          text: "var(--oma-text)",
          text2: "var(--oma-text-2)",
          text3: "var(--oma-text-3)",
          line: "var(--oma-line)",
          lineStrong: "var(--oma-line-strong)",
          crimson: "var(--oma-crimson)",
          crimsonHover: "var(--oma-crimson-hover)",
          onCrimson: "var(--oma-on-crimson)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#FAF7F2",
        customGrey: "#0F1729",
        paragraphColor: "#475569",
        editorial: {
          ivory: "#FAF7F2",
          paper: "#FFFFFF",
          navy: "#0F1729",
          navyLight: "#162038",
          gold: "#C59B27",
          goldDark: "#9A7418",
          goldTint: "#FAF4E4",
          goldBorder: "#E8D7B0",
          border: "#E5DEC9",
          borderStrong: "#DFD3BC",
          slate: "#475569",
          muted: "#64748B",
        },
      },
      letterSpacing: {
        title: "-0.03em",
      },
      borderRadius: {
        oma: "12px",
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "ui-sans-serif", "system-ui", "sans-serif"],
        editorial: ["Georgia", "'Times New Roman'", "serif"],
        santa: ["FagoWeb W04 ExtdIta"],
        lato: ["Lato"],
        jost: ["Jost"],
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        "pulse-slow": "customPulse 7s ease-in-out infinite",
      },
      keyframes: {
        customPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(0.95)" },
        },
      },
      screens: {
        "max-920": { max: "920px" },
      },
    },
  },
  plugins: [],
};
