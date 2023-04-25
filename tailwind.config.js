/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
    },
  },
  plugins: [require("daisyui")],
}

