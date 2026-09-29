import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
export default function ExhaustParticles({ count = 300, reduced = false, y0 = -1.5 }: { count?: number; reduced?: boolean; y0?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const { pos, s1, s2 } = useMemo(() => ({
    pos: new Float32Array(count * 3),
    s1: Float32Array.from({ length: count }, () => Math.random()),
    s2: Float32Array.from({ length: count }, () => Math.random()),
  }), [count])
  useFrame(({ clock }) => {
    const attr = ref.current?.geometry.getAttribute('position') as THREE.BufferAttribute | undefined
    if (!attr) return
    const t = clock.elapsedTime * (reduced ? 0.15 : 0.7)
    for (let i = 0; i < count; i++) {
      const p = (t + s1[i]) % 1, a = s1[i] * 6.283 * 7, r = (0.08 + p * 0.55) * (0.3 + s2[i])
      pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = y0 - p * 2.6; pos[i * 3 + 2] = Math.sin(a) * r
    }
    attr.needsUpdate = true
  })
  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry><bufferAttribute attach="attributes-position" count={count} array={pos} itemSize={3} /></bufferGeometry>
      <pointsMaterial size={0.05} color="#ff9a5c" transparent opacity={0.7} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}
