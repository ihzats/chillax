/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#38bdf8',
        dark: '#0f172a'
      },
      fontFamily: {
        'chillax': ['Chillax']
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}