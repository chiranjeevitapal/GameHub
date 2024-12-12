/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // Include all React files inside src/
    "./public/index.html",          // Include the main index.html file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};