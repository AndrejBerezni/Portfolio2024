import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#6E06F2',
        primary: '#24262F',
        secondary: '#4E525A',
        background: '#FCFCFD',
      },
    },
  },
  plugins: [],
}
export default config
