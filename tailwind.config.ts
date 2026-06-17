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
        green: {
          50:  '#EAF3EC',
          100: '#d4eddf',
          600: '#2d7a52',
          700: '#1F5C3B',
          800: '#163d28',
          900: '#0f3320',
        },
        gold: {
          50:  '#FBF3DD',
          100: '#f7e9b8',
          500: '#C9A227',
          600: '#a07800',
          700: '#7a5c00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
