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
      },
      fontFamily: {
        'star-eagle': ['Star Eagle Expand Bold', 'sans-serif']

    },

    keyframes: {
      moveRight: {
        '0%': { backgroundPosition: '200% 0%' },
        '100%': { backgroundPosition: '0% 0%' },
      },
      moveLeft: {
        '0%': { backgroundPosition: '0% 0%' },
        '100%': { backgroundPosition: '200% 0%' },
      },
    },
    animation: {
      'move-right': 'moveRight 1s ease-in-out forwards',
      'move-left': 'moveLeft 1s ease-in-out forwards',
    },
  },
},
  plugins: [
    require('daisyui'),
  ],
}


