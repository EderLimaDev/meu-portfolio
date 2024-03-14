/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#181823',
        'm-dark-blue': '#111827',
        'grid-blue': '#1D2432',
        'medium-blue': '#537FE7',
        'light-blue': '#C0EEF2',
        'font-blue': '#E9F8F9'
      }
    },
  },
  plugins: [],
}