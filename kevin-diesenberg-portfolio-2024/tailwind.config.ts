import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "sections/**/*.{ts,tsx}",
    "ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        primary: {
          DEFAULT: "var(--color-primary)",
          start: "var(--color-primary-start)",
          end: "var(--color-primary-end)",
        },
        text: "var(--color-text)",
        textMuted: "var(--color-text-muted)",
        textDim: "var(--color-text-dim)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, var(--color-primary-start) 0%, var(--color-primary-end) 100%)",
      },

      // Typography using CSS variables
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },

      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        // Keep the responsive clamp sizes for specific use cases
        h1: [
          "clamp(2.25rem, 5vw + 1rem, 3.5rem)",
          { lineHeight: "var(--leading-tight)", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.875rem, 4vw + 0.75rem, 2.5rem)",
          { lineHeight: "var(--leading-tight)", letterSpacing: "-0.02em" },
        ],
        h3: ["var(--text-xl)", { lineHeight: "var(--leading-snug)" }],
      },

      lineHeight: {
        tight: "var(--leading-tight)",
        snug: "var(--leading-snug)",
        normal: "var(--leading-normal)",
        relaxed: "var(--leading-relaxed)",
      },

      fontWeight: {
        normal: "var(--font-normal)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
      },
    },
  },
  plugins: [],
};

export default config;
