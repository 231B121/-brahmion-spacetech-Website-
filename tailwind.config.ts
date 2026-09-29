import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0e1626',
        navy: '#141f36',
        surface: '#192640',
        card: '#162238',
        line: 'rgba(180,215,255,0.12)',
        cyan: {
          DEFAULT: '#38bdf8',
          alt: '#0284c7',
        },
        ember: '#fb923c',
        violet: '#818cf8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
