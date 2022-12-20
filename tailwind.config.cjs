/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      eigengrau: '#191D29',
      chartreuse: '#9DFE00',
      turquoise: '#14D9E6',
      white: '#FFFFFF'
    },
    fontFamily: {
      'tt-travels': 'TT Travels'
    },
    extend: {}
  },
  plugins: []
}
