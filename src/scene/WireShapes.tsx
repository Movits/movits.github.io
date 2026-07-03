import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { scroll, weightAt } from './scrollStore'
import { damp } from './util'

const HERO_INDEX = 0
const PROJECTS_INDEX = 3
const MORE_PROJECTS_INDEX = 4

interface WireShapesProps {
  mobile: boolean
}

/** Sólidos wireframe do hero — dissolvem (falloff quadrático) ao sair da primeira seção. */
export function HeroShapes({ mobile }: WireShapesProps) {
  const groupRef = useRef<THREE.Group>(null)
  const icoMat = useRef<THREE.MeshBasicMaterial>(null)
  const knotMat = useRef<THREE.MeshBasicMaterial>(null)
  const octaMat = useRef<THREE.MeshBasicMaterial>(null)

  const floatFactor = mobile ? 0.5 : 1
  const knotSegments: [number, number] = mobile ? [64, 8] : [128, 16]
  // Aproxima as formas do centro em telas estreitas para não sumirem do quadro.
  const spread = mobile ? 0.7 : 1

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return
    const w = weightAt(HERO_INDEX)
    const fade = w * w * w

    const scale = damp(group.scale.x, 0.55 + 0.55 * fade, 4, delta)
    group.scale.setScalar(scale)
    group.rotation.x = damp(group.rotation.x, scroll.pointer.y * 0.15, 4, delta)
    group.rotation.y = damp(group.rotation.y, scroll.pointer.x * 0.25, 4, delta)

    if (icoMat.current) {
      icoMat.current.opacity = damp(icoMat.current.opacity, fade * 0.9, 4, delta)
    }
    if (knotMat.current) {
      knotMat.current.opacity = damp(knotMat.current.opacity, fade * 0.8, 4, delta)
    }
    if (octaMat.current) {
      octaMat.current.opacity = damp(octaMat.current.opacity, fade * 0.4, 4, delta)
    }
  })

  return (
    <group ref={groupRef}>
      <Float
        speed={1.2 * floatFactor}
        rotationIntensity={0.6 * floatFactor}
        floatIntensity={0.8 * floatFactor}
      >
        <mesh position={[2.9 * spread, 0.1, -1]}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshBasicMaterial
            ref={icoMat}
            color="#22d3ee"
            wireframe
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Float>
      <Float
        speed={1.5 * floatFactor}
        rotationIntensity={0.8 * floatFactor}
        floatIntensity={0.6 * floatFactor}
      >
        <mesh position={[-3.5 * spread, 2.2, -2.5]}>
          <torusKnotGeometry args={[0.55, 0.16, ...knotSegments]} />
          <meshBasicMaterial
            ref={knotMat}
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Float>
      <Float
        speed={1 * floatFactor}
        rotationIntensity={0.5 * floatFactor}
        floatIntensity={0.9 * floatFactor}
      >
        <mesh position={[-3.1 * spread, -2.3, -1.5]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshBasicMaterial
            ref={octaMat}
            color="#ffffff"
            wireframe
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Float>
    </group>
  )
}

const RING_CONFIG = [
  { radius: 1.0, speed: 0.12, tilt: 0.3 },
  { radius: 1.4, speed: -0.09, tilt: -0.2 },
  { radius: 1.8, speed: 0.06, tilt: 0.1 },
]

/** Anéis concêntricos que acendem na área de projetos e apagam rápido fora dela. */
export function ProjectRings() {
  const groupRef = useRef<THREE.Group>(null)
  const materials = useRef<(THREE.MeshBasicMaterial | null)[]>([])
  const rings = useRef<(THREE.Mesh | null)[]>([])

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return
    const w = Math.min(1, weightAt(PROJECTS_INDEX) + weightAt(MORE_PROJECTS_INDEX))
    const fade = w * w * w

    const scale = damp(group.scale.x, 0.7 + 0.3 * fade, 4, delta)
    group.scale.setScalar(scale)

    rings.current.forEach((ring, i) => {
      if (ring) ring.rotation.z += delta * RING_CONFIG[i].speed
    })
    materials.current.forEach((material) => {
      if (material) material.opacity = damp(material.opacity, fade * 0.45, 4, delta)
    })
  })

  return (
    <group ref={groupRef} position={[3.4, -0.5, -2]} rotation={[0.5, -0.4, 0]}>
      {RING_CONFIG.map((config, i) => (
        <mesh
          key={config.radius}
          ref={(el) => {
            rings.current[i] = el
          }}
          rotation={[config.tilt, 0, 0]}
        >
          <torusGeometry args={[config.radius, 0.02, 8, 64]} />
          <meshBasicMaterial
            ref={(el) => {
              materials.current[i] = el
            }}
            color={i % 2 === 0 ? '#22d3ee' : '#8b5cf6'}
            wireframe
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}
