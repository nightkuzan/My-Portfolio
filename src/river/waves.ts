/**
 * Gerstner wave field, defined once and shared two ways:
 *   - as GLSL, injected into the water's vertex shader
 *   - as TypeScript, so anything floating on the river (otters, lily pads)
 *     samples the *same* surface and never drifts through it
 *
 * Four waves at deliberately non-harmonic wavelengths — harmonic ratios
 * produce a visibly repeating pattern, which is what makes cheap water
 * look cheap.
 */

export type Wave = {
  dir: [number, number]
  steepness: number
  wavelength: number
  speed: number
}

// Steepness sums to well under 1 — past that, Gerstner crests fold over
// themselves and the surface self-intersects.
export const WAVES: Wave[] = [
  { dir: [1.0, 0.35], steepness: 0.3, wavelength: 9.5, speed: 1.0 },
  { dir: [-0.7, 0.9], steepness: 0.22, wavelength: 5.1, speed: 1.25 },
  { dir: [0.45, -1.0], steepness: 0.14, wavelength: 2.9, speed: 1.6 },
  { dir: [-0.2, -0.6], steepness: 0.08, wavelength: 1.5, speed: 2.1 },
]

/** Surface point + normal at world (x, z) and time t. */
export function sampleWater(x: number, z: number, t: number) {
  let px = x
  let py = 0
  let pz = z
  let tx = 0
  let tz = 0
  let bx = 0
  let bz = 0

  for (const w of WAVES) {
    const len = Math.hypot(w.dir[0], w.dir[1])
    const dx = w.dir[0] / len
    const dz = w.dir[1] / len
    const k = (2 * Math.PI) / w.wavelength
    const a = w.steepness / k
    const c = Math.sqrt(9.8 / k) * w.speed
    const f = k * (dx * x + dz * z - c * t)
    const cosF = Math.cos(f)
    const sinF = Math.sin(f)

    px += dx * a * cosF
    py += a * sinF
    pz += dz * a * cosF

    tx += -dx * dx * w.steepness * sinF
    tz += -dx * dz * w.steepness * sinF
    bx += dx * dz * w.steepness * cosF * -1
    bz += -dz * dz * w.steepness * sinF
  }

  return { x: px, y: py, z: pz, tiltX: tx + bx, tiltZ: tz + bz }
}

/** GLSL twin of sampleWater — same constants, same result. */
export const WAVE_GLSL = /* glsl */ `
struct Wave { vec2 dir; float steepness; float wavelength; float speed; };

vec3 gerstner(Wave w, vec3 p, float t, inout vec3 tangent, inout vec3 binormal) {
  vec2 d = normalize(w.dir);
  float k = 6.28318530718 / w.wavelength;
  float a = w.steepness / k;
  float c = sqrt(9.8 / k) * w.speed;
  float f = k * (dot(d, p.xz) - c * t);
  float cf = cos(f);
  float sf = sin(f);

  tangent  += vec3(-d.x * d.x * w.steepness * sf, d.x * w.steepness * cf, -d.x * d.y * w.steepness * sf);
  binormal += vec3(-d.x * d.y * w.steepness * sf, d.y * w.steepness * cf, -d.y * d.y * w.steepness * sf);

  return vec3(d.x * a * cf, a * sf, d.y * a * cf);
}
`
