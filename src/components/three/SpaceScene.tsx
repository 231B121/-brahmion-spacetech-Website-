import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import ParticleField from './ParticleField'
import Thruster from './Thruster'
import ExhaustParticles from './ExhaustParticles'

function Rig({ reduced }: { reduced: boolean }) {
  const tilt = useRef<THREE.Group>(null!)
  const spin = useRef<THREE.Group>(null!)
  useFrame((s, dt) => {
    if (reduced) return
    tilt.current.rotation.x += (s.pointer.y * -0.3 + 0.15 - tilt.current.rotation.x) * Math.min(1, dt * 2)
    tilt.current.rotation.z += (s.pointer.x * 0.2 - tilt.current.rotation.z) * Math.min(1, dt * 2)
    spin.current.rotation.y += dt * 0.25
  })
  return (
    <group ref={tilt} position={[0, 0.2, 0]}>
      <group ref={spin}>
        <Thruster />
        <ExhaustParticles count={0 + 260} reduced={reduced} y0={-0.9} />
      </group>
    </group>
  )
}

export default function SpaceScene({ mobile, reduced }: { mobile: boolean; reduced: boolean }) {
  return (
    <Canvas
      dpr={[1, mobile ? 1.5 : 2]}
      camera={{ position: [0, 0.4, 6.2], fov: 38 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      style={{ touchAction: 'pan-y' }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 6, 5]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[-4, 2, -2]} intensity={0.9} color="#dbeafe" />
      <pointLight position={[0, -3, 2]} intensity={2.2} color="#0284c7" />
      <ParticleField count={mobile ? 300 : 700} reduced={reduced} />
      <Rig reduced={reduced} />
    </Canvas>
  )
}
