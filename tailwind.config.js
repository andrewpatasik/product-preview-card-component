/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
      /* Primary */
        'darkcyan': '#3c8067',
        'cream': '#f2ebe3',
        /* Neutral */
        'verydarkblue': '	#1c232b',
        'darkgrayishblue': '#6c7289',
        'white': '#ffffff'

      },
      fontFamily: {
        'display': ['Fraunces'],
        'body': ['Montserrat']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}
