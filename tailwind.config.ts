import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1A56C4',
        'primary-light': '#4B86E0',
        'dark-navy': '#0A1628',
        'light-gray': '#F4F8FD',
        'dark-overlay': 'rgba(17, 17, 17, 0.55)',
        'text-body': '#555555',
        'text-dark': '#1A1A1A',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'count-up': 'countUp 1.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { '--tw-content': '0' },
          '100%': { '--tw-content': '100%' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
