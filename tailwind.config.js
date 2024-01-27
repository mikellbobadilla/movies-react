/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'brick-red': {
          '50': '#fdf4f3',
          '100': '#fce7e7',
          '200': '#f8d3d4',
          '300': '#f3aeb1',
          '400': '#eb8188',
          '500': '#df5460',
          '600': '#be3144',
          '700': '#aa263b',
          '800': '#8e2337',
          '900': '#7a2134',
          '950': '#440d18',
        },
      }
    },
  },
  plugins: [],
}

