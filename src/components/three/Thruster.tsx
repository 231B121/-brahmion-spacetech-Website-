import { useMemo } from 'react'
import * as THREE from 'three'
const metal = { color: '#8d9db3', metalness: 0.85, roughness: 0.32 }
export default function Thruster({ selected = null }: { selected?: string | null }) {
  const nozzle = useMemo(() => new THREE.LatheGeometry([[0.5, 0.35], [0.24, -0.1], [0.3, -0.55], [0.72, -1.5]].map(([x, y]) => new THREE.Vector2(x, y)), 40), [])
  const em = (id: string) => (selected === id ? '#5ad1e6' : '#000000')
  const ei = (id: string) => (selected === id ? 0.7 : 0)
  return (
    <group>
      <mesh position={[0, 1.7, 0]}><cylinderGeometry args={[0.32, 0.4, 0.35, 32]} /><meshStandardMaterial {...metal} emissive={em('injector')} emissiveIntensity={ei('injector')} /></mesh>
      <mesh position={[0, 1.15, 0]}><cylinderGeometry args={[0.62, 0.62, 0.9, 40, 1, true]} /><meshStandardMaterial {...metal} side={THREE.DoubleSide} transparent opacity={0.45} emissive={em('chamber')} emissiveIntensity={ei('chamber')} /></mesh>
      <mesh position={[0, 1.0, 0]}><cylinderGeometry args={[0.5, 0.5, 0.4, 32]} /><meshStandardMaterial color="#c99a5b" metalness={0.6} roughness={0.5} emissive={selected === 'catalyst' ? '#ff7a3d' : '#000'} emissiveIntensity={ei('catalyst')} /></mesh>
      <mesh geometry={nozzle} position={[0, 0.7, 0]}><meshStandardMaterial {...metal} side={THREE.DoubleSide} emissive={em('thruster')} emissiveIntensity={ei('thruster')} /></mesh>
      <mesh position={[0, 0.75, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.66, 0.025, 8, 48]} /><meshStandardMaterial color="#5ad1e6" emissive="#5ad1e6" emissiveIntensity={0.6} /></mesh>
    </group>
  )
}
