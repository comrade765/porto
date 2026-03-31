/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'grey-0': '#0a0a0a',
        'grey-1': '#111111',
        'grey-2': '#1a1a1a',
        'grey-3': '#222222',
        'grey-4': '#2a2a2a',
        'grey-5': '#333333',
        'grey-6': '#3a3a3a',
        'grey-text': '#888888',
        'grey-muted': '#666666',
        'grey-dark': '#444444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
      },
      keyframes: {
        grain: {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2px, -1px)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '30%': { transform: 'translate(2px, -2px)' },
          '40%': { transform: 'translate(2px, 1px)' },
          '50%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(-1px, 2px)' },
          '70%': { transform: 'translate(1px, -2px)' },
          '80%': { transform: 'translate(1px, 1px)' },
          '90%': { transform: 'translate(-2px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
};
