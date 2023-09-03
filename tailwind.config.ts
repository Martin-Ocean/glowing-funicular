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
        secondaryRed: {
          DEFAULT: "#d0581c",
        },
        secondaryPink: {
          DEFAULT: "#f1ac88",
        }
      },
      height: {
        "1vh": "1vh",
				"2vh": "2vh",
				"3vh": "3vh",
				"4vh": "4vh",
				"5vh": "5vh",
				"6vh": "6vh",
				"7vh": "7vh",
				"8vh": "8vh",
				"9vh": "9vh",
        "10vh": "10vh",
				"20vh": "20vh",
				"30vh": "30vh",
				"40vh": "40vh",
				"50vh": "50vh",
				"60vh": "60vh",
				"70vh": "70vh",
				"80vh": "80vh",
				"90vh": "90vh",
				"100vh": "100vh",
      },
      width: {
        "1vw": "1vw",
				"2vw": "2vw",
				"3vw": "3vw",
				"4vw": "4vw",
				"5vw": "5vw",
				"6vw": "6vw",
				"7vw": "7vw",
				"8vw": "8vw",
				"9vw": "9vw",
        "10vw": "10vw",
				"20vw": "20vw",
				"30vw": "30vw",
				"40vw": "40vw",
				"50vw": "50vw",
				"60vw": "60vw",
				"70vw": "70vw",
				"80vw": "80vw",
				"90vw": "90vw",
				"100vw": "100vw",
      }
    },
  },
  plugins: [],
};

export default config;
