import { useFrame } from '@react-three/fiber'
import { scroll } from './scrollStore'
import { damp } from './util'
import { ParticleField } from './ParticleField'
import { HeroShapes, ProjectRings } from './WireShapes'

interface SceneProps {
  mobile: boolean
}

export function Scene({ mobile }: SceneProps) {
  useFrame((state, delta) => {
    const camera = state.camera
    const targetX = scroll.pointer.x * 0.3
    const targetY = scroll.pointer.y * 0.2 - scroll.progress * 1.6
    camera.position.x = damp(camera.position.x, targetX, 3, delta)
    camera.position.y = damp(camera.position.y, targetY, 3, delta)
    camera.lookAt(0, -scroll.progress * 1.6, 0)
  })

  return (
    <>
      <ParticleField count={mobile ? 1200 : 2500} />
      <HeroShapes mobile={mobile} />
      <ProjectRings />
    </>
  )
}
