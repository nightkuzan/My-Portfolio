import * as THREE from 'three'

/**
 * Shared state for pointing at otters.
 *
 * Hit testing is done in screen space rather than with a Raycaster. The
 * targets are blobs a few units across and there are at most seven of them,
 * so projecting each centre to NDC and comparing distances costs a handful
 * of vector ops — where raycasting would mean either walking a dozen
 * primitive meshes per otter or maintaining invisible proxy geometry.
 *
 * A module singleton rather than context: there is exactly one canvas, the
 * values change every frame, and routing them through React state would
 * re-render the scene sixty times a second to move a number.
 */

export type OtterProbe = {
  id: number
  /** World position, refreshed each frame by the otter itself. */
  pos: THREE.Vector3
  /** World-space hit radius, including whatever scale the parent applied. */
  radius: number
  /** True while this is the otter under the pointer. */
  hovered: boolean
  /** sceneTime of the last click on this otter. */
  poked: number
  /** Set false while an otter is not worth testing (off screen, faded out). */
  active: boolean
}

let nextId = 1
const probes = new Map<number, OtterProbe>()

export function addProbe(): OtterProbe {
  const p: OtterProbe = {
    id: nextId++,
    pos: new THREE.Vector3(),
    radius: 1,
    hovered: false,
    poked: -999,
    active: true,
  }
  probes.set(p.id, p)
  return p
}

export function removeProbe(id: number) {
  probes.delete(id)
}

export function eachProbe(fn: (p: OtterProbe) => void) {
  probes.forEach(fn)
}

/** Read by the DOM cursor so the ring can swell over an otter. */
export { pointerState } from '../pointer-state'

/**
 * Queue of bubble bursts waiting to be spawned, drained once per frame by
 * <Bubbles/>. Queued rather than emitted directly so the click handler does
 * not need a reference into the particle system.
 */
export const burstQueue: THREE.Vector3[] = []

export function burstAt(v: THREE.Vector3) {
  // Bounded: a visitor holding the mouse button down should not be able to
  // grow this without limit if something ever stops draining it.
  if (burstQueue.length < 8) burstQueue.push(v.clone())
}
