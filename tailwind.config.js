/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        kocok: 'kocok 1s ease-in-out',
      },
      keyframes: {
        kocok: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(7rem)' },
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

