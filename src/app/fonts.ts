import { Poppins, Inter } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
})
