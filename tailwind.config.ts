import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F5D62",   // deep teal for headings, accents
        secondary: "#ECE1D3", // warmer section background for contrast
        foreground: "#1F2A24", // main text
        accent: "#C98E4A",    // warm accent for highlights
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "Times New Roman", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
