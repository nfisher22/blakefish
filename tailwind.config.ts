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
      },
    },
  },
  plugins: [],
};

export default config;
