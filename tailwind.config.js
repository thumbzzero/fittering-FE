/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#8fb357',
        'bean-color': '#c5d778',
        'bean-head-color': '#e6ecbc',
        'custom-gray': {
          50: '#f7f7f7',
          100: '#efefef',
          400: '#B2B2B2',
          500: '#adadad',
          700: '#9ca3af',
          800: '#666666',
        },
        'border-gray': '#dddddd',
        'nav-black': '#111111',
        'button-black': '#333333',
      },
      screens: {
        'xs': '350px',
      }
    },
  },
  plugins: [],
};
