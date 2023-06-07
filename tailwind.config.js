
export default {
  content: [
    "./index.html",
    "./src/**/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4800BE',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

