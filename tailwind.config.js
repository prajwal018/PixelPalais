/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.gray, // Equivalent to gray-200
      secondary: colors.emerald, // Equivalent to gray
      accent: colors.indigo, // Equivalent to emerald
      ...colors,
    },
  },
  plugins: [],
};
