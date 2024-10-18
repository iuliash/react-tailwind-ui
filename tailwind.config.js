/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: ['postcss-import'],
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif']
    },
  }
}

