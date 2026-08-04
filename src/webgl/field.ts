/**
 * Hand-written WebGL hero: a raymarched 3D lattice you fly through.
 * No three.js — one full-screen quad and a fragment shader, so the whole
 * effect costs a few KB instead of a few hundred.
 *
 * The lattice is an infinitely repeating grid of thin rods. Instead of
 * hard surface hits we accumulate an inverse-square glow along each ray,
 * which gives volumetric light for the price of a single loop.
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAG = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;   // -1..1, eased
uniform float uAccent;  // hue shift
uniform float uFade;    // 0..1 intro fade

// Distance to an infinite lattice of thin rods along x, y and z.
float lattice(vec3 p) {
  vec3 q = mod(p, 2.4) - 1.2;
  float dx = length(q.yz);
  float dy = length(q.xz);
  float dz = length(q.xy);
  return min(min(dx, dy), dz) - 0.035;
}

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

  // Camera drifts forward; the mouse tilts the ray, not the scene, so the
  // parallax stays cheap and never dizzies the viewer.
  vec3 ro = vec3(0.0, 0.0, uTime * 0.32);
  vec3 rd = normalize(vec3(uv + uMouse * 0.10, 1.15));
  rd.xy = rot(uTime * 0.035 + uMouse.x * 0.16) * rd.xy;
  rd.yz = rot(uMouse.y * 0.10) * rd.yz;

  float glow = 0.0;
  float t = 0.6;
  for (int i = 0; i < 56; i++) {
    vec3 p = ro + rd * t;
    float d = lattice(p);
    // Inverse-square falloff, attenuated with depth so the far field
    // dissolves instead of turning into noise.
    glow += (1.0 / (1.0 + d * d * 190.0)) * exp(-t * 0.13);
    t += 0.19;
  }
  glow /= 7.5;

  // Two-tone: cool indigo core, warmer rim where the glow is strongest.
  vec3 cool = vec3(0.22, 0.42, 1.00);
  vec3 warm = vec3(0.45, 0.92, 1.00);
  vec3 col = mix(cool, warm, clamp(glow * 1.5, 0.0, 1.0));
  col *= glow;

  // Lift the region under the cursor a touch — makes the field feel alive.
  float near = 1.0 - clamp(length(uv - uMouse * 0.5) * 1.3, 0.0, 1.0);
  col += cool * near * near * 0.055;

  // Vignette + film grain so flat areas never band.
  float vig = 1.0 - dot(uv, uv) * 0.45;
  col *= vig;
  float grain = fract(sin(dot(gl_FragCoord.xy + uTime, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.012;

  gl_FragColor = vec4(max(col, 0.0) * uFade, 1.0);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn('shader:', gl.getShaderInfoLog(sh))
    gl.deleteShader(sh)
    return null
  }
  return sh
}

export function mountField(canvas: HTMLCanvasElement) {
  const gl = (canvas.getContext('webgl', {
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
  }) || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null

  if (!gl) return () => {}

  const vs = compile(gl, gl.VERTEX_SHADER, VERT)
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) return () => {}

  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return () => {}
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const aPos = gl.getAttribLocation(prog, 'aPos')
  gl.enableVertexAttribArray(aPos)
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, 'uRes')
  const uTime = gl.getUniformLocation(prog, 'uTime')
  const uMouse = gl.getUniformLocation(prog, 'uMouse')
  const uFade = gl.getUniformLocation(prog, 'uFade')

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Cap the pixel ratio: a 3x retina phone does not need 3x raymarching.
  let dpr = Math.min(window.devicePixelRatio || 1, 1.75)
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    const w = Math.floor(canvas.clientWidth * dpr)
    const h = Math.floor(canvas.clientHeight * dpr)
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
    }
    gl.uniform2f(uRes, canvas.width, canvas.height)
  }
  resize()
  window.addEventListener('resize', resize)

  let targetX = 0
  let targetY = 0
  let mx = 0
  let my = 0
  const onMove = (e: PointerEvent) => {
    targetX = (e.clientX / window.innerWidth) * 2 - 1
    targetY = -((e.clientY / window.innerHeight) * 2 - 1)
  }
  window.addEventListener('pointermove', onMove, { passive: true })

  // Stop drawing when the hero scrolls away or the tab is hidden.
  let visible = true
  const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), {
    threshold: 0.01,
  })
  io.observe(canvas)
  const onVis = () => (visible = !document.hidden)
  document.addEventListener('visibilitychange', onVis)

  const start = performance.now()
  let raf = 0
  const frame = () => {
    raf = requestAnimationFrame(frame)
    if (!visible) return
    resize()

    // Critically damped-ish easing keeps the parallax smooth on a jumpy mouse.
    mx += (targetX - mx) * 0.045
    my += (targetY - my) * 0.045

    const elapsed = (performance.now() - start) / 1000
    gl.uniform1f(uTime, reduced ? 6 : elapsed)
    gl.uniform2f(uMouse, reduced ? 0 : mx, reduced ? 0 : my)
    gl.uniform1f(uFade, Math.min(1, elapsed / 1.4))
    gl.drawArrays(gl.TRIANGLES, 0, 3)

    // With reduced motion we render one settled frame and stop.
    if (reduced && elapsed > 1.6) cancelAnimationFrame(raf)
  }
  frame()

  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', onMove)
    document.removeEventListener('visibilitychange', onVis)
    io.disconnect()
    gl.deleteProgram(prog)
    gl.deleteShader(vs)
    gl.deleteShader(fs)
    gl.deleteBuffer(buf)
  }
}
