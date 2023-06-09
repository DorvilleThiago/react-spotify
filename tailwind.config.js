
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4800BE',
        lighter: '#5200D7',
        secundary: '#FCAF3C',
        black_transparent: '#00000099'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

