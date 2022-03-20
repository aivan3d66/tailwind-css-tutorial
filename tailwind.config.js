const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
      },
    },
  },
  variant: {
    extend: {},
  },
  plugins: [],
}
