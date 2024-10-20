const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...fontFamily.sans],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        // white - blakc
        'white': '#ffffff',
        'light-gray': '#EEEEEE',
        'primary-gray': '#D1D1D1',
        'dark-gray': '#727272',
        'black': '#121212',
        
        // blue
        'light-blue': '#89CAFF',
        'primary-blue': '#008CFF',
        'dark-blue': '#005DA9',
        'verydark-blue': '#002C51',

        // yellow
        'light-yellow': '#FBFF89',
        'primary-yellow': '#EEFF00',
        'dark-yellow': '#A99500',
        'verydark-yellow': '#514A00',

        // green
        'light-green': '#93FF89',
        'primary-green': '#00FF00',
        'dark-green': '#00A900',
        'verydark-green': '#045100',

        // red
        'light-red': '#FF8989',
        'primary-red': '#FF0000',
        'dark-red': '#A90000',
        'verydark-red': '#510000',
      }
    },
  },
  plugins: [],
};
