import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdca',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e', // Hot Pink
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Bright Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          orange: '#fb923c',
          yellow: '#fbbf24',
          green: '#34d399',
          purple: '#a78bfa',
          red: '#f87171',
          cyan: '#06b6d4',
          pink: '#f472b6',
        },
        neon: {
          pink: '#ff10f0',
          blue: '#10b3ff',
          green: '#39ff14',
          purple: '#bf00ff',
          yellow: '#ffff00',
          orange: '#ff6600',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #f43f5e 0%, #fb923c 50%, #fbbf24 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #ec4899 100%)',
        'gradient-neon': 'linear-gradient(135deg, #ff10f0 0%, #10b3ff 50%, #39ff14 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 20px #ff10f0, 0 0 40px #ff10f0, 0 0 60px #ff10f0',
        'neon-blue': '0 0 20px #10b3ff, 0 0 40px #10b3ff, 0 0 60px #10b3ff',
        'neon-green': '0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 60px #39ff14',
        'glow-pink': '0 0 15px rgba(255, 16, 240, 0.5)',
        'glow-blue': '0 0 15px rgba(16, 179, 255, 0.5)',
        'glow-yellow': '0 0 15px rgba(251, 191, 36, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
