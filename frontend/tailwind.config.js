/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#ff8400',
        'grey':'rgb(40, 40, 40)',
        'grey-light' : 'rgb(250, 248, 245)',
      },
    },
  },
  plugins: [],
}

