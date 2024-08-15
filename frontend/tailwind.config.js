/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #BC3CD8, #C54B8C)',
        
      },
      colors:{
        'orangee':'#d1512d',
        'maroon':'#411530',
        'peach':'#f5c7a9',
      },
      fontFamily: {
        'star-eagle': ['Star Eagle Expand Bold', 'sans-serif'],
        'aclonica': ['Aclonica', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
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


