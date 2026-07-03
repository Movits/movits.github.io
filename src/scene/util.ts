import * as THREE from 'three'

/** Amortecimento exponencial independente de frame-rate. */
export const damp = THREE.MathUtils.damp

export function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
  } catch {
    return false
  }
}
