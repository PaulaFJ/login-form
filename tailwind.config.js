module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#FE8161',
          800: '#FF3A89',          
        },
        yellow: {
          500: '#FFE920',
        }
      },
      fontFamily: {
        'sans': 'Poppins',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}  