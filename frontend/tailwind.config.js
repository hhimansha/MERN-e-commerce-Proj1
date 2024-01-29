// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#ff8400',
        'grey': 'rgb(40, 40, 40)',
        'grey-light': 'rgb(250, 248, 245)',
      },
      textColor: {
        'primary': '#ff8400',
      },
      width: {
        '242': '242px',
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
