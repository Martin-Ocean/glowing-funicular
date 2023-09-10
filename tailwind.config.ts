/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        homeDefault: {
          DEFAULT: "hsl(var(--homePrimary))",
          foreground: "hsl(var(--homePrimary-foreground))",
        },
        homeSecondary: {
          DEFAULT: "hsl(var(--homeSecondary))",
          foreground: "hsl(var(--homeSecondary-foreground))",
        },
        snackHeader: {
          DEFAULT: "hsl(var(--snack-header))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
