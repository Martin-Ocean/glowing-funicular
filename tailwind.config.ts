import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ["ZCOOLKuaiLe-Regular", "Calibri", "sans"],
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
        },
        secondary: {
          DEFAULT: "#F0D800",
        },
      },
    },
  },
  plugins: [],
};

export default config;
