/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
    "index.html"
  ],
  theme: {
    extend: {
      height: {
        '128': '4rem',
      },
      colors: {
        "dark-purple": "#301934",
        "light-white": 'rgba(255.255.255.0.18)'
      }
    },
  },
  plugins: [],
}
