import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll, weightAt } from './scrollStore'
import { damp } from './util'

const CONTACT_INDEX = 6

interface ParticleFieldProps {
  count: number
}

export function ParticleField({ count }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.PointsMaterial>(null)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const cyan = new THREE.Color('#22d3ee')
    const violet = new THREE.Color('#8b5cf6')
    const color = new THREE.Color()
    for (let i = 0; i < count; i++) {
      const x = (Math.random() * 2 - 1) * 7
      const y = (Math.random() * 2 - 1) * 5
      const z = -4 + Math.random() * 5
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      // Mais perto da câmera → mais ciano; ao fundo → violeta.
      const t = (z + 4) / 5
      color.copy(violet).lerp(cyan, t)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    return { positions, colors }
  }, [count])

  useFrame((_, delta) => {
    const points = pointsRef.current
    if (!points) return
    points.rotation.y += delta * 0.02

    const targetX = scroll.pointer.x * 0.4
    const targetY = scroll.pointer.y * 0.25 + scroll.progress * 2.2
    points.position.x = damp(points.position.x, targetX, 4, delta)
    points.position.y = damp(points.position.y, targetY, 4, delta)

    const material = materialRef.current
    if (material) {
      const targetOpacity = 0.55 + weightAt(CONTACT_INDEX) * 0.35
      material.opacity = damp(material.opacity, targetOpacity, 4, delta)
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.025}
        vertexColors
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}
