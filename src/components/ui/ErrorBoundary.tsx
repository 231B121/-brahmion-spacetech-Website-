import { Component, type ReactNode } from 'react'
export default class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { /* handled by fallback */ }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}
export function SceneFallback() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Thruster schematic">
      <g fill="none" stroke="#5ad1e6" strokeOpacity=".6" strokeWidth="1.5">
        <rect x="165" y="60" width="70" height="30" /><rect x="150" y="90" width="100" height="110" />
        <path d="M170 200 L190 260 L150 340 M230 200 L210 260 L250 340" />
      </g>
      <g fill="#ff7a3d" opacity=".5"><circle cx="200" cy="350" r="4" /><circle cx="190" cy="370" r="3" /><circle cx="212" cy="376" r="2" /></g>
    </svg>
  )
}
