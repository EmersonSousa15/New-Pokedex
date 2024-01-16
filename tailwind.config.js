/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.5rem',
      },
      colors: {
        'bgCard': '#F2250A',
        'colorId': '#81BAC3'
      }
    },
  },
  plugins: [],
}

