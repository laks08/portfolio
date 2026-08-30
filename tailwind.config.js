/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        line: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        paper: "var(--color-inverse-bg)",
        "paper-ink": "var(--color-inverse-text)",
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
