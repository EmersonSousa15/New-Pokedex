/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: "0.5rem",
      },
      colors: {
        "orangeRed": "#f2250a",
        "lightseagreen": "#20cbb8",
        "gainsboro": "#d6dbde",
        "mediumaquamarine": "#81bac3",
        "darkslategray": "#24272e"
      }
    },
  },
  plugins: [],
}

