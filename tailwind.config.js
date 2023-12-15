const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ms: '480px',
      },
      fontFamily: {
        // nanum: ['var(--font-nanum-gothic)', fontFamily.sans],
        saira: ['var(--font-saira)', fontFamily.sans],
      },
      colors: {
        primary: '#993264',
        secondary: '#e4c97a',
      },
      keyframes: {
        slidedown: {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: 'fit-content',
            display: 'none',
            backgroundColor: 'red',
          },
        },
      },
      animation: {
        dropdown: 'dropdown 2s  linear',
      },
    },
  },
  plugins: [],
}
