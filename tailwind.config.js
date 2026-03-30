/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0a0a',
        'surface': '#111111',
        'surface-2': '#191919',
        'border': '#222222',
        'border-hover': '#333333',
        'text': '#f0f0f0',
        'text-secondary': '#888888',
        'text-muted': '#555555',
        'accent': '#e0e0e0',
        'accent-dim': '#aaaaaa',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-up-delay-1': 'slideUp 0.5s ease-out 0.1s forwards',
        'slide-up-delay-2': 'slideUp 0.5s ease-out 0.2s forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
