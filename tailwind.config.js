module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    colors: {
      'red': 'rgba(206, 13, 21, 1)',
      'red-75': 'rgba(206, 13, 21, 0.75)',
      'red-50': 'rgba(206, 13, 21, 0.5)',
      'red-25': 'rgba(206, 13, 21, 0.25)',
      'grey': 'rgba(48, 34, 35, 1)',
      'grey-75': 'rgba(62, 38, 40, 0.75)',
      'grey-50': 'rgba(69, 41, 43, 0.5)',
      'grey-25': 'rgba(62, 35, 36, 0.25)',
      'grey-10': 'rgba(58, 36, 37, 0.10)',
      'grey-light': '#f7f8fa',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Roboto Condensed', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
