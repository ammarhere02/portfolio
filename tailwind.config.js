/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'caret': 'typewriter 2s steps(11) forwards, blink 1s steps(1) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%'
          }
        },
        blink: {
          '0%': {
            opacity: '0'
          },
          '0.1%': {
            opacity: '1'
          },
          '50%': {
            opacity: '1'
          },
          '50.1%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
};