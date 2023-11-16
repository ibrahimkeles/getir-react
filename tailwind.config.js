/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
      },
      spacing: {
        '0.1': '0.063rem'
      },
      backgroundImage: {
        'mobile-app': "url('./assets/images/doodle.png')"
      }
    },

  },
  plugins: [],
}

