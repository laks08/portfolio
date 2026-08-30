/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // `<alpha-value>` keeps opacity modifiers working (bg-bg/80,
      // text-paper-ink/70); the CSS vars hold raw RGB channels.
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--color-surface-2) / <alpha-value>)",
        line: "rgb(var(--color-border) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        paper: "rgb(var(--color-inverse-bg) / <alpha-value>)",
        "paper-ink": "rgb(var(--color-inverse-text) / <alpha-value>)",
      },
      fontFamily: {
        mono: ['"Fira Code"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ['"Open Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
        card: "18px",
      },
      letterSpacing: {
        tightest: "-0.02em",
        label: "0.1em",
      },
      maxWidth: {
        content: "1140px",
      },
    },
  },
  plugins: [],
};
