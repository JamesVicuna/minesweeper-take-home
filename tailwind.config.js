/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'mobile-board' : '400px',
        'desktop-board' : '800px'
      },
      height: {
        'board' : '800px',
        'playArea': '640px'
      }
    },
  },
  plugins: [],
};