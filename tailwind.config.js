/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'light_bg': '#f6f8fa',
          'dark': '#242424',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], 
        }
      },
    },
    plugins: [],
}