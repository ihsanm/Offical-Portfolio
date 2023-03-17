/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "ihsan-blue": "#202046",
        "ihsan-lighterblue":"#444464",
        "percent-bar":"#c7c7d0",
      }
    },
  },
  plugins: [],
}