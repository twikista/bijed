import {
  Saira_Condensed,
  Cairo,
  Barlow,
  IBM_Plex_Sans,
  Barlow_Condensed,
} from 'next/font/google'

export const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
  display: 'swap',
  adjustFontFallback: false,
})

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
  adjustFontFallback: false,
})

// export const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   adjustFontFallback: false,
// })

// export const lato = Lato({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '700', '900'],
//   display: 'swap',
//   adjustFontFallback: false,
// })

export const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo',
  display: 'swap',
  adjustFontFallback: false,
})

export const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
  adjustFontFallback: false,
})
