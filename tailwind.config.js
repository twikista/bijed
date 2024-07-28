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
        saira: ['var(--font-saira)', fontFamily.sans],
        cairo: ['var(--font-cairo)', fontFamily.sans],
        ibmPlex: ['var(--font-ibmPlex)', fontFamily.sans],
        barlow: ['var(--font-barlow)', fontFamily.sans],
      },
      colors: {
        primary: '#800080',
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
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        dropdown: 'dropdown 2s  linear',
        'spin-slow': 'spin 8s linear infinite',
      },
      listStyleType: {
        'lower-alpha': 'lower-alpha',
        'upper-alpha': 'upper-alpha',
        'upper-roman': 'upper-roman',
        'lower-roman': 'lower-roman',
      },
    },
  },
  plugins: [],
}
