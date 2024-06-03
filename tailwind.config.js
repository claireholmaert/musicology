/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      white: "#ffffff",
      gray: "#2c2c2c",
      orange: "#ff6408",
    },
    fontFamily: {
      oswald: ["Oswald"],
      roboto: ["Roboto Condensed"],
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
}

