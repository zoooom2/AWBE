/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      smallMobile: '300px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        awobe: {
          white: '#F0F3F5',
          DEFAULT: '#FFFF5C',
          black: '#090909',
          rose: '#B64B5F',
        },
      },
      fontFamily: {
        awobeVerdana: ['verdana', ...defaultTheme.fontFamily.sans],
        roboto: ['roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
