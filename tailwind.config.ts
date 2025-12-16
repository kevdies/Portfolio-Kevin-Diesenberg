import type { Config, PluginAPI } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Mobile-first touch device detection
        'touch': { 'raw': '(hover: none)' },
        'no-touch': { 'raw': '(hover: hover)' },
      },
      colors: {
        brand: {
          primary: "#a855f7", // purple-500
          "primary-dark": "#9333ea", // purple-600
          "primary-light": "#c084fc", // purple-400
        },
        surface: {
          primary: "#0a0a0a", // Main background
          secondary: "#27272a", // zinc-800 - Cards
          tertiary: "#3f3f46", // zinc-700 - Image backgrounds
          border: "#52525b", // zinc-600 - Borders
          "border-light": "#71717a", // zinc-500 - Hover borders
        },
      },
      spacing: {
        content: "1rem", // 16px - Base content spacing (tightened)
        "content-sm": "0.75rem", // 12px - Small content spacing
        "content-lg": "1.5rem", // 24px - Large content spacing (tightened)
        "content-xl": "2rem", // 32px - Extra large content spacing (tightened)
        section: "3rem", // 48px - Section spacing (tightened)
        "section-sm": "2rem", // 32px - Small section spacing (tightened)
        "section-lg": "4rem", // 64px - Large section spacing (tightened)
        "section-xl": "5rem", // 80px - Extra large section spacing (tightened)
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.25" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "calc(200px + 100%) 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".gradient-brand": {
          background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
        },
        ".gradient-text-brand": {
          background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".focus-brand": {
          "&:focus": {
            outline: "none",
            "--tw-ring-shadow":
              "0 0 0 calc(2px + var(--tw-ring-offset-width)) #a855f7",
            "box-shadow":
              "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
          },
        },
        ".focus-brand-offset": {
          "&:focus": {
            outline: "none",
            "--tw-ring-offset-width": "2px",
            "--tw-ring-offset-color": "#0a0a0a",
            "--tw-ring-shadow":
              "0 0 0 calc(2px + var(--tw-ring-offset-width)) #a855f7",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow)",
          },
        },
        ".transition-smooth": {
          transition: "all 0.2s ease-out",
        },
        ".transition-colors-smooth": {
          transition:
            "color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out",
        },
        ".text-hierarchy-primary": {
          color: "#ffffff",
          fontWeight: "600",
        },
        ".text-hierarchy-secondary": {
          color: "#d4d4d8", // zinc-300
          fontWeight: "500",
        },
        ".text-hierarchy-tertiary": {
          color: "#a8a8b3", // zinc-400 lightened for WCAG AA (~6:1)
          fontWeight: "400",
        },
        ".text-hierarchy-muted": {
          color: "#8c8c96", // zinc-500 lightened for WCAG AA (4.5:1)
          fontWeight: "400",
        },
        ".border-subtle": {
          borderColor: "rgba(82, 82, 91, 0.3)", // surface-border with opacity
        },
        ".border-accent": {
          borderColor: "rgba(168, 85, 247, 0.2)", // brand-primary with opacity
        },
        ".shadow-card": {
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        ".shadow-card-hover": {
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
        ".hover-lift": {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
        ".hover-lift-subtle": {
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        ".hover-scale": {
          transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
        ".hover-scale-subtle": {
          transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.02)",
          },
        },
        ".animate-fade-in-up": {
          animation: "fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        },
        ".animate-pulse-slow": {
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
        ".animate-stagger-in": {
          "&:nth-child(1)": { animationDelay: "0ms" },
          "&:nth-child(2)": { animationDelay: "100ms" },
          "&:nth-child(3)": { animationDelay: "200ms" },
          "&:nth-child(4)": { animationDelay: "300ms" },
          "&:nth-child(5)": { animationDelay: "400ms" },
          "&:nth-child(6)": { animationDelay: "500ms" },
          "&:nth-child(7)": { animationDelay: "600ms" },
          "&:nth-child(8)": { animationDelay: "700ms" },
          "&:nth-child(9)": { animationDelay: "800ms" },
          "&:nth-child(10)": { animationDelay: "900ms" },
        },
        ".touch-target": {
          minHeight: "44px",
          minWidth: "44px",
        },
        ".touch-target-lg": {
          minHeight: "48px", 
          minWidth: "48px",
        },
        ".mobile-hover": {
          "@media (hover: hover)": {
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
          },
          "@media (hover: none)": {
            "&:active": {
              transform: "scale(0.98)",
              transition: "transform 0.1s ease-out",
            },
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;
