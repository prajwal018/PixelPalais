/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        light: colors.gray[100], // global variant
        dark: colors.gray[900], // global variant

        lightPrimary: colors.gray[200], // Lightest variant
        darkPrimary: colors.gray[800], // Darkest variant

        lightSecondary: colors.gray[300], // Lighter variant
        darkSecondary: colors.gray[700], // Darker variant

        lightTertiary: colors.gray[400], // Light variant
        darkTertiary: colors.gray[600], // Dark variant
      },
    },
  },
  plugins: [],
};
