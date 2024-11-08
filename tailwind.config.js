/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        main:"#FAD6D6",
        secondary:"#A02035",
      },
      fontFamily: {
        viga: ['Viga', 'sans-serif'],
        font:["Felipa", 'serif']
      },
    },
  },
  plugins: [],
}