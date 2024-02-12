/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        'btn': '0 12px 35px 0'
      }
    },
    colors: {
      "primary": "#FF8A00",
      "primary-400": "#FFC000",
      "default": "#5C5C5C",
      "white": "#FFFFFF",
      "black": "#000000",
      "dark-gray": "#212121",
      "field-border": "#EFEFEF"
    }
  },
  plugins: [],
}

