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
          '200': '#efefef',
          '300': '#e5e7eb',
          '500': '#adadad',
          '700': '#9ca3af',
          
        }
      },
    },
  },
  plugins: [],
};
