import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "First Launch" palette — deep-space indigo base, dawn-amber action
        // color, with ember (sunrise) and aurora (atmosphere) support hues.
        navy: '#070b16',
        navyLight: '#111a30',
        gold: '#f5b942',
        goldDark: '#cf9118',
        starwhite: '#eef1f8',
        muted: '#95a1ba',
        ember: '#ff8e5e',
        aurora: '#6fe3c1',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-pan': 'slowPan 20s ease-in-out infinite alternate',
        twinkle: 'twinkle 5s ease-in-out infinite',
        'drift-up': 'driftUp 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translateX(0)' },
          '100%': { transform: 'scale(1.1) translateX(-2%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        driftUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-12px)' },
        },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
