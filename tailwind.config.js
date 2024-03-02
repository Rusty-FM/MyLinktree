/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'mobile': '320px',
      'desktop': '1280px',
    },
    fontFamily: {
      'asap': ['Asap', 'sans-serif'],
    },
    extend: {
      colors: {
        'colorsInstagram': '#d6249f',
      },
    },
  },
  plugins: [],
}

