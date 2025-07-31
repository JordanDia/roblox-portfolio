/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cursor-like dark theme colors
        'cursor-bg': '#0d1117',
        'cursor-surface': '#161b22',
        'cursor-surface-hover': '#21262d',
        'cursor-border': '#30363d',
        'cursor-border-hover': '#484f58',
        'cursor-text': '#f0f6fc',
        'cursor-text-secondary': '#8b949e',
        'cursor-text-muted': '#6e7681',
        'cursor-accent': '#58a6ff',
        'cursor-accent-hover': '#79c0ff',
        'cursor-success': '#238636',
        'cursor-warning': '#d29922',
        'cursor-error': '#da3633',
        'cursor-purple': '#bc8cff',
        'cursor-purple-hover': '#d2a8ff',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
        },
      },
    },
  },
  plugins: [],
} 