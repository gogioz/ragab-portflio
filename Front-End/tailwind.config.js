/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Amiri-Bold": ["Amiri-Bold", "sans-serif"],
        "Amiri-Regular": ["Amiri-Regular", "sans-serif"],
        "Droid-Bold": ["Droid-Bold", "sans-serif"],
        "Droid-Regular": ["Droid-Regular", "sans-serif"],
      },
    },
    screens: {
      sm: { min: "340px" },
      md: { min: "430px" },
      lg: { min: "768px" },
      xl: { min: "1024px" },
      "2xl": { min: "1280px" },
      "3xl": { min: "1400px" },
      "4xl": { min: "1730px" },
      "5xl": { min: "1920px" },
    },
  },
  plugins: [],
};
