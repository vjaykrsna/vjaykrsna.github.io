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
          900: "hsl(240, 5%, 8%)",
          800: "hsl(240, 5%, 12%)",
          700: "hsl(240, 4%, 16%)",
          600: "hsl(240, 4%, 24%)",
          500: "hsl(240, 5%, 34%)",
          400: "hsl(240, 5%, 45%)",
          300: "hsl(240, 6%, 58%)",
          200: "hsl(240, 7%, 70%)",
          100: "hsl(240, 8%, 82%)",
        },
        accent: "hsl(48, 96%, 53%)",
        support: {
          teal: "hsl(172, 35%, 50%)",
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px hsla(48, 96%, 53%, 0.4)",
      },
    },
  },
  plugins: [],
};
