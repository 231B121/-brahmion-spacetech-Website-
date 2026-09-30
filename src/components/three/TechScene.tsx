import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import Thruster from './Thruster'
import ExhaustParticles from './ExhaustParticles'
import { parts } from '../../data/technology'

function Sway({ reduced, children }: { reduced: boolean; children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null!)
  useFrame((s) => { if (!reduced) g.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.3) * 0.35 + s.pointer.x * 0.25 })
  return <group ref={g}>{children}</group>
}
export default function TechScene({ selected, onSelect, mobile, reduced }: { selected: string | null; onSelect: (id: string) => void; mobile: boolean; reduced: boolean }) {
  return (
    <Canvas dpr={[1, mobile ? 1.5 : 2]} camera={{ position: [0, 0, 7.5], fov: 38 }} gl={{ antialias: !mobile, alpha: true }} style={{ touchAction: 'pan-y' }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 5]} intensity={1.6} color="#bfe9ff" />
      <pointLight position={[0, -3, 2]} intensity={2} color="#ff7a3d" />
      <Sway reduced={reduced}>
        <Thruster selected={selected} />
        <ExhaustParticles count={mobile ? 120 : 320} reduced={reduced} />
        {parts.map((p) => (
          <Html key={p.id} position={p.position} center zIndexRange={[10, 0]}>
            <button
              onClick={() => onSelect(p.id)}
              aria-label={`Show ${p.label} details`}
              aria-pressed={selected === p.id}
              className={`flex h-8 w-8 items-center justify-center rounded-full border font-sans text-xs font-bold transition shadow-xs backdrop-blur-xs ${
                selected === p.id
                  ? 'border-[#0284c7] bg-[#0284c7] text-white shadow-md scale-110'
                  : 'border-[#cfe0f2] bg-white/95 text-slate-800 hover:border-[#0284c7] hover:text-[#0284c7]'
              }`}
            >
              +
            </button>
          </Html>
        ))}
      </Sway>
    </Canvas>
  )
}
