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
  colors:{
    extend:{
      aqua: {
        light: '#80d8ff',
        DEFAULT: '#80d8ff',
        dark: '#80d8ff'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
