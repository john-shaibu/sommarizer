/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Poppins', 'sans-serif'],
        inter: ['Poppins', 'sans-serif'],
        paytone: ['Paytone One', 'sans-serif']
      }
    },
  },
  plugins: [],
}