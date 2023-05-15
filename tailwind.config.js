/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      spacing: {
        big: "48rem",
      },
    },
  },
  plugins: [],
};
