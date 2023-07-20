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
          500: '#adadad',
          700: '#9ca3af',
        },
        'nav-black': '#0f0f0f',
      },
    },
  },
  plugins: [],
};
