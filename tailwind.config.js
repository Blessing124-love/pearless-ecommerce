/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#9ca3af',
        accent: '#eab308',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 2s infinite',
        'shimmer': 'shimmer 2s infinite',
        'underline-expand': 'underlineExpand 0.6s ease-out',
        'character-reveal': 'characterReveal 0.1s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        underlineExpand: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'center' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'center' },
        },
        characterReveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
