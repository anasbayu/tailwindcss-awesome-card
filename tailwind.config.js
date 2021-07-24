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
      },
      backgroundImage: {
        'empty-table': "url('/img/pexels-sarah-chai-7262799.jpg')"
      },
      colors:{
        card1: {
          accent: '#cca43b',
          DEFAULT: '#242f40',
          brown: '#363636',
          text: '#e5e5e5'
        },
        grass: {DEFAULT: '#457b9d'},
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
