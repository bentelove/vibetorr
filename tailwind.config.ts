import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { cream: '#F7F4EE', sand: '#D9C8B4', terra: '#B86D52', sage: '#879481', ink: '#2E302D' },
      fontFamily: { serif: ['Georgia', 'serif'], sans: ['Arial', 'sans-serif'] },
      boxShadow: { soft: '0 14px 34px rgba(66, 55, 42, .10)' }
    }
  },
  plugins: []
};
export default config;
