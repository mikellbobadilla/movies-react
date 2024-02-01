/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'cruise': {
          '50': '#f1fcf9',
          '100': '#d1f6ee',
          '200': '#baf1e7',
          '300': '#6ddbcb',
          '400': '#3ec3b4',
          '500': '#25a79b',
          '600': '#1b867d',
          '700': '#1a6b66',
          '800': '#195653',
          '900': '#194846',
          '950': '#082b2a',
      },
      "piano-black": '#1D1D1D',
      "piano-white": '#FDFBF6',
      }
    },
  },
  plugins: [],
}

