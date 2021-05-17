module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      alpha: 'upper-alpha'
    },
    extend: {
      outline: {
        green: '1px solid #A0FC6F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
