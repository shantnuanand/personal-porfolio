/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headingColor:"#24292f",
        HomeColor:"#0d1117",
        smallColor:"#474e57",
      },
    },
  },
  plugins: [],
}