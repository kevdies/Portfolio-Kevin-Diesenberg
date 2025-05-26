/** @type {import('tailwindcss').Config} */
module.exports = {
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

      // <<< TYPOGRAPHY >>>
      fontFamily: {
        // body text will resolve to var(--font-sans)
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        // headings will resolve to var(--font-heading)
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
      },

      fontSize: {
        base: ["clamp(1rem, 1.5vw + 0.75rem, 1.125rem)", { lineHeight: "1.6" }],
        h1: [
          "clamp(2.25rem, 5vw + 1rem, 3.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(2rem, 4vw + 0.75rem, 2.5rem)",
          { lineHeight: "1.3", letterSpacing: "-0.02em" },
        ],
        h3: ["1.75rem", { lineHeight: "1.3", letterSpacing: "0" }],
      },
    },
  },
  plugins: [],
};
