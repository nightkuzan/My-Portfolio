import * as THREE from 'three'

/**
 * Caustics, patched into whatever material you hand it.
 *
 * three.js has no caustics of its own — real ones need photon transport
 * through the refracting surface, which is nowhere near worth it here. This
 * is the honest cheat: a ridged, animated interference pattern sampled in
 * world XZ and added to the lit colour, so every object shares one coherent
 * pattern instead of each carrying its own texture.
 *
 * The depth window matters more than the pattern does. Caustics come from
 * light bending through the surface, so they are brightest just underneath
 * it and gone by the time you are deep. Applied uniformly they read as a
 * texture bug rather than as light.
 */

export const causticTime = { value: 0 }

const PATTERN = /* glsl */ `
  float causticHash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float causticNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(causticHash(i), causticHash(i + vec2(1.0, 0.0)), f.x),
      mix(causticHash(i + vec2(0.0, 1.0)), causticHash(i + vec2(1.0, 1.0)), f.x),
      f.y);
  }

  /**
   * Two noise fields drifting against each other; the filaments are the
   * contour where they agree. Returns 0..1 and is mostly 0, which is the
   * whole point — caustics are thin bright lines on an otherwise unlit
   * surface.
   *
   * The obvious alternative (the folded-sine loop that circulates on
   * Shadertoy) sat pinned near its own maximum at this scale, so instead of
   * a pattern it painted a flat cyan wash over everything it touched.
   */
  float causticCell(vec2 p, float t) {
    float a = causticNoise(p + vec2(t * 0.60, t * 0.41));
    float b = causticNoise(p - vec2(t * 0.44, t * 0.71) + 3.7);
    float thin = pow(1.0 - clamp(abs(a - b) * 5.2, 0.0, 1.0), 8.0);

    // A second, finer pass so the cells have some internal structure and
    // do not all read at the same size.
    float a2 = causticNoise(p * 2.7 - vec2(t * 0.5, t * 0.33));
    float b2 = causticNoise(p * 2.7 + vec2(t * 0.61, t * 0.29) + 11.3);
    float fine = pow(1.0 - clamp(abs(a2 - b2) * 3.9, 0.0, 1.0), 9.0);

    return clamp(thin + fine * 0.55, 0.0, 1.0);
  }
`

/**
 * @param mat       material to patch (mutated)
 * @param intensity how hard the pattern is added on top of the shading
 */
export function applyCaustics(mat: THREE.Material, intensity = 0.55) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uCausticTime = causticTime
    shader.uniforms.uCausticAmt = { value: intensity }

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vCausticPos;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvCausticPos = (modelMatrix * vec4(transformed, 1.0)).xyz;',
      )

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
         varying vec3 vCausticPos;
         uniform float uCausticTime;
         uniform float uCausticAmt;
         ${PATTERN}`,
      )
      // Added after tone mapping and colour space so the pattern keeps its
      // bite; folded in earlier the tone mapper flattens it back out.
      .replace(
        '#include <dithering_fragment>',
        `#include <dithering_fragment>
         {
           float y = vCausticPos.y;
           // A narrow band in the middle of the water column, and nothing
           // at the surface. Opened up to the surface this washed the
           // floating otters to pale blue ghosts — caustics are additive,
           // so on a lit, sunlit subject they only ever destroy colour.
           // Closed off at the bottom too: past the murk there is no
           // surface left to refract anything.
           float band = smoothstep(-20.0, -9.0, y) * (1.0 - smoothstep(-4.0, -1.5, y));
           if (band > 0.001) {
             // Scale is set against the size of the subject, not the scene:
             // an otter is ~1.5 units long, so cells any coarser than this
             // land one blob per animal instead of a pattern across it.
             float c = causticCell(vCausticPos.xz * 2.9, uCausticTime * 0.5);
             gl_FragColor.rgb += vec3(0.45, 0.82, 0.95) * c * band * uCausticAmt;
           }
         }`,
      )
  }
  mat.needsUpdate = true
}
