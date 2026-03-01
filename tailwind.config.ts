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
        ink: '#1a1410',
        'ink-light': '#3d3128',
        'ink-muted': '#7a6a58',
        paper: '#f5f0e8',
        'paper-dark': '#ede6d6',
        'paper-darker': '#e0d6c0',
        accent: '#8b1a1a',
        gold: '#b8860b',
        'gold-light': '#d4a017',
        green: '#2d5016',
        'green-light': '#4a7c2f',
        rule: '#c8b89a',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-source-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
