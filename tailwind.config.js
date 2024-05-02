/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px", // Extra small screens and up
      sm: "660px", // Small screens and up
      md: "768px", // Medium screens and up
      lg: "1020px", // Large screens and up
      xl: "1250px", // Extra large screens and up
      "2xl": "1440px", // 2 Extra large screens and up

      //addons
      "xs1": "350px",
    },
  },
  plugins: [],
};
