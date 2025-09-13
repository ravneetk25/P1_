export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0A0A12',
        'primary-blue': '#29A8FF',
        'primary-purple': '#6C63FF',
        'light-gray': '#B0B0B0',
      },
    },
  },
  plugins: [],
}