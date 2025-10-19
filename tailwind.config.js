const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fce7f3',
          DEFAULT: '#f472b6',
          dark: '#be185d',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const glassUtilities = {
        '.glass-surface': {
          backdropFilter: 'blur(24px)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)',
        },
        '.glass-border': {
          border: '1px solid rgba(255, 255, 255, 0.35)',
        },
        '.glass-text': {
          color: theme('colors.slate.100'),
          textShadow: '0 1px 2px rgba(15, 23, 42, 0.3)',
        },
      };

      addUtilities(glassUtilities, ['responsive', 'hover']);
    }),
  ],
};
