import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        accent: '#c8893a',
        'accent-light': '#e8a855',
        bg: '#0a0f1a',
        'bg-2': '#0d1525',
        'muted': 'rgba(255,255,255,0.45)',
        'muted-2': 'rgba(255,255,255,0.25)',
      },
      textColor: {
        'white-50': 'rgba(255,255,255,0.50)',
        'white-40': 'rgba(255,255,255,0.40)',
        'white-30': 'rgba(255,255,255,0.30)',
        'white-20': 'rgba(255,255,255,0.20)',
        'white-60': 'rgba(255,255,255,0.60)',
      },
    },
  },
  plugins: [],
};

export default config;
