/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../public/shubham-dhage-R2HtYWs5-QA-unsplash.jpg')",
        'pattern': "url('../public/shubham-dhage-UxDU0Gg5pqQ-unsplash.jpg')",
        'card': "url('../public/shubham-dhage-Sj-HVUI8zSA-unsplash.jpg')",
       
      }
    },
  },
  plugins: [],
}
