/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        animasi2: 'animasi2 2s ease-in-out infinite',
      },
      keyframes: {
        animasi2: {
          '0%': { backgroundColor: 'pink' },
          '100%': { backgroundColor: 'salmon' },
        }
      },
      screens: {
        'xs': '360px',
        'sm': '576px',
      },
    },
  },
  plugins: [require("daisyui")],
}

