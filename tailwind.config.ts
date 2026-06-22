import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#07111F",
          800: "#0D1B2A",
          700: "#13283F",
          600: "#1B3552",
        },
        electric: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        cyan: {
          accent: "#22D3EE",
          light: "#67E8F9",
          dark: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        "glow": "0 0 40px rgba(59, 130, 246, 0.35)",
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.35)",
        "premium": "0 20px 60px -15px rgba(3, 7, 18, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
