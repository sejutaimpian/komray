/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '576px',
      },
    },
  },
  plugins: [require("daisyui")],
}

