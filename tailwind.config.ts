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
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#64ffda',
        'text-primary': '#8892b0',
        'text-secondary': '#ccd6f6',
      },
    },
  },
  plugins: [],
}
export default config 