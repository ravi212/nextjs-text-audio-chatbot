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
        background: "rgba(var(--background-color))",
        primaryTextColor: "rgba(var(--primary-text-color))",
        secondaryTextColor: "rgba(var(--secondary-text-color))"
      },
    },
  },
  plugins: [],
};
export default config;
