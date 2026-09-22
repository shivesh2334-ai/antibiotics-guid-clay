import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "#F4F5F1",
        ink: "#171E1B",
        teal: {
          50: "#EEF4F1",
          100: "#D7E5DE",
          300: "#8FB6A6",
          500: "#3E7C68",
          600: "#2F6152",
          700: "#254D42",
          900: "#12241F",
        },
        amber: {
          400: "#C99A46",
          500: "#B8842B",
          600: "#966920",
        },
        rule: "#DDDED6",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
