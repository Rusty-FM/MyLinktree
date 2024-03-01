/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
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

