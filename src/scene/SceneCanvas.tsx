import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'
import { useIsMobile } from '../hooks/useIsMobile'

export function SceneCanvas() {
  const mobile = useIsMobile()

  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, mobile ? 1.5 : 1.75]}
        camera={{ fov: 50, position: [0, 0, 6] }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <Scene mobile={mobile} />
      </Canvas>
    </div>
  )
}
