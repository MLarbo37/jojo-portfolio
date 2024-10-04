/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' strategy for dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      
      colors: {
        primary: '#00000e', // Define your primary color
        'primary-dark': '#002244', // Optional: define a darker shade for hover effects
        'primary-light': '#00000e80'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textStrokeWidth: {
        '1': '1px',
      },
      textStrokeColor: {
        black: '#000',
        blue: '#00000e',
        white: '#fffff',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-stroke'), // A plugin to handle text stroke
  ],
}
