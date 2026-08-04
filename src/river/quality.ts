/**
 * One place to decide how much scene a device should be asked to draw.
 *
 * Resolved once at module load: these inputs do not meaningfully change
 * mid-session, and re-deciding per frame would mean rebuilding geometry.
 */

const coarse =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const narrow = typeof window !== 'undefined' && window.innerWidth < 820

// navigator.deviceMemory is Chromium-only; absent elsewhere, so treat
// "unknown" as capable rather than punishing Safari and Firefox.
const lowMemory =
  typeof navigator !== 'undefined' &&
  typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === 'number' &&
  (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4

export const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const lite = coarse || narrow || lowMemory

/**
 * Scene clock. Under reduced motion it stops at a settled pose: the camera
 * still answers the scroll, because that is the visitor driving it, but
 * nothing moves on its own.
 */
export const sceneTime = (elapsed: number) => (reducedMotion ? 6 : elapsed)

export const quality = {
  /** Water plane subdivisions. The single biggest vertex cost in the scene. */
  waterSegments: lite ? 96 : 220,
  waterSize: lite ? 200 : 260,
  motes: lite ? 220 : 700,
  stars: lite ? 900 : 2600,
  /** Retina phones gain nothing from rendering this at 3x. */
  dpr: (lite ? [1, 1.4] : [1, 1.75]) as [number, number],
  /** Otters cost little each, but fewer keeps fill rate down on mobile. */
  surfaceOtters: lite ? 2 : 3,
  driftOtters: lite ? 2 : 3,
}
