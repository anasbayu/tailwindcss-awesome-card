module.exports = {
  purge: [ 
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': '"Roboto Condensed"'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
