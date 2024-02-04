// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#ff8400',
        'grey': 'rgb(40, 40, 40)',
        'grey-mid': '#343432',
        'grey-light': 'rgb(250, 248, 245)',
      },
      textColor: {
        'primary': '#ff8400',
      },
      screens: {
        'xs': {'max': '412px'}
      },
      width: {
        '242': '242px',
        'mid' : '500px',
        'fit': '1280px',
        'wide': '1800px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add other plugins here if needed
  ],
};
