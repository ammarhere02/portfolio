/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic tokens — defined in globals.css, flip automatically with .dark
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
        fg: {
          DEFAULT: 'rgb(var(--fg) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
          subtle: 'rgb(var(--fg-subtle) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#598eff',
          500: '#3366f2',
          600: '#1f47d8',
          700: '#1a37ae',
          800: '#1b318a',
          900: '#1c2f6e',
        },
        ink: {
          50: '#f7f8f8',
          100: '#f0f2f4',
          200: '#dcdfe3',
          300: '#b9bfc7',
          400: '#8b939e',
          500: '#656d78',
          600: '#4a515b',
          700: '#363b43',
          800: '#23262c',
          900: '#16181c',
          950: '#0e1013',
        },
        signal: '#3fb950',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid scale — no breakpoint jumps between 360px and 1440px
        '2xs': ['0.6875rem', { lineHeight: '1.45' }],
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.0625rem', { lineHeight: '1.7' }],
        xl: ['clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)', { lineHeight: '1.6' }],
        '2xl': ['clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)', { lineHeight: '1.35' }],
        '3xl': ['clamp(1.75rem, 1.45rem + 1.4vw, 2.375rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.125rem, 1.6rem + 2.4vw, 3.25rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(2.625rem, 1.8rem + 3.8vw, 4.25rem)', { lineHeight: '1.05' }],
        '6xl': ['clamp(3rem, 1.9rem + 5.4vw, 5.5rem)', { lineHeight: '1' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
        label: '0.14em',
      },
      spacing: {
        section: 'clamp(5rem, 3rem + 9vw, 9rem)',
        gutter: 'clamp(1.25rem, 0.6rem + 2.6vw, 2.5rem)',
      },
      maxWidth: {
        content: '78rem',
        prose: '38rem',
      },
      borderRadius: {
        card: '0.625rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        inout: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'accent-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        'accent-pulse': 'accent-pulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
