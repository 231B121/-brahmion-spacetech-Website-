import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { void: '#05070b', navy: '#0a1020', line: 'rgba(160,200,255,0.14)', cyan: { DEFAULT: '#5ad1e6' }, ember: '#ff7a3d', violet: '#7c6cff' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'] },
    },
  },
  plugins: [],
} satisfies Config
