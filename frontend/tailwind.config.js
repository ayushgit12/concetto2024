/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orangee':'#d1512d',
        'maroon':'#411530',
        'peach':'#f5c7a9',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

