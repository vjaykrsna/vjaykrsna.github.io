/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        base: {
          950: "hsl(240, 6%, 5%)",
          900: "hsl(240, 5%, 8%)",
          850: "hsl(240, 5%, 11%)",
          800: "hsl(240, 5%, 13%)",
          700: "hsl(240, 4%, 19%)",
          600: "hsl(240, 4%, 28%)",
          500: "hsl(240, 5%, 42%)",
          400: "hsl(240, 5%, 62%)",
          300: "hsl(240, 6%, 76%)",
          200: "hsl(240, 7%, 88%)",
          100: "hsl(240, 8%, 96%)",
        },
        accent: {
          DEFAULT: "hsl(48, 96%, 53%)",
          hover: "hsl(48, 96%, 58%)",
          muted: "hsla(48, 96%, 53%, 0.12)",
        },
        support: {
          teal: "hsl(172, 40%, 50%)",
        },
      },
      boxShadow: {
        glow: "0 0 30px -5px hsla(48, 96%, 53%, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

