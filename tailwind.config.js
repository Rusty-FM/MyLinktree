/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      'asap': ['Asap', 'sans-serif'],
    },
    extend: {
      colors: {
        'colorsInstagram': '#d6249f',
      },
      screens: {
        'mobile': {'min': '320px', 'max': '428px'},
        'desktop': '1280px',
      },
    },
  },
  plugins: [require("rippleui")],
}

