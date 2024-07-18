/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5230',
        secondary: '#0C1315',
        tertiary: '#141A1C',
      },
      fontFamily: {
        primary: ['Epilogue'],
        secondary: ['Sora'],
      },
    },
  },
  plugins: [],
};
