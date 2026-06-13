import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        card: "#FFFFFF",
        "card-warm": "#F5F4F2",
        accent: "#CA8A04",
        "accent-light": "#FEF3C7",
        text: "#0C0A09",
        muted: "#78716C",
        border: "#E7E5E4",
        dark: "#1C1917",
        "dark-secondary": "#292524",
      },
      fontFamily: {
        heading: ["'Satoshi'", "system-ui", "sans-serif"],
        body: ["'General Sans'", "system-ui", "sans-serif"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
