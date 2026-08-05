import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { audioState } from '../audio-state'
import { reducedMotion } from './quality'

/**
 * The sound of the journey, synthesised rather than sampled.
 *
 * Three beds crossfade off exactly the values that drive the visuals, so
 * what you hear and what you see can never drift apart:
 *
 *   surface  — filtered noise, slowly swelling: water moving in daylight
 *   under    — the same noise through a closing low-pass, plus a rumble
 *   space    — a pair of detuned oscillators a few cents apart
 *
 * Generated in the Web Audio graph because the alternative is shipping
 * three ambient loops. Those would be a megabyte or two of MP3 with
 * licences to honour, for a bed that has no melody and no transients —
 * exactly the kind of sound synthesis is good at.
 *
 * Nothing is created until the visitor turns sound on. An AudioContext
 * built before a gesture starts life suspended and, in Safari, sometimes
 * never recovers.
 */

type Graph = {
  ctx: AudioContext
  master: GainNode
  surface: GainNode
  under: GainNode
  space: GainNode
  underFilter: BiquadFilterNode
  stop: () => void
}

/** Four seconds of noise, looped. Short enough to build instantly. */
function noiseBuffer(ctx: AudioContext) {
  const frames = ctx.sampleRate * 4
  const buffer = ctx.createBuffer(1, frames, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  // Brown-ish rather than white: integrating the noise tilts the spectrum
  // down, which is what moving water sounds like. White noise on its own
  // reads as radio hiss.
  let last = 0
  for (let i = 0; i < frames; i++) {
    const w = Math.random() * 2 - 1
    last = (last + 0.02 * w) / 1.02
    data[i] = last * 3.5
  }
  return buffer
}

function build(): Graph {
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  const ctx = new Ctor()

  const master = ctx.createGain()
  master.gain.value = 0
  master.connect(ctx.destination)

  const noise = ctx.createBufferSource()
  noise.buffer = noiseBuffer(ctx)
  noise.loop = true

  // --- surface: water in the open air --------------------------------
  const surfaceFilter = ctx.createBiquadFilter()
  surfaceFilter.type = 'bandpass'
  surfaceFilter.frequency.value = 900
  surfaceFilter.Q.value = 0.6

  const surface = ctx.createGain()
  surface.gain.value = 0

  // Two mismatched slow swells. One alone is a pulse you start counting.
  const swellA = ctx.createOscillator()
  swellA.frequency.value = 0.11
  const swellAmtA = ctx.createGain()
  swellAmtA.gain.value = 0.35
  swellA.connect(swellAmtA).connect(surface.gain)

  const swellB = ctx.createOscillator()
  swellB.frequency.value = 0.043
  const swellAmtB = ctx.createGain()
  swellAmtB.gain.value = 0.22
  swellB.connect(swellAmtB).connect(surface.gain)

  noise.connect(surfaceFilter).connect(surface).connect(master)

  // --- under: the same water, heard through it -----------------------
  const underFilter = ctx.createBiquadFilter()
  underFilter.type = 'lowpass'
  underFilter.frequency.value = 400
  underFilter.Q.value = 0.9

  const under = ctx.createGain()
  under.gain.value = 0
  noise.connect(underFilter).connect(under).connect(master)

  // --- space: a drone, deliberately almost nothing --------------------
  const space = ctx.createGain()
  space.gain.value = 0

  const droneFilter = ctx.createBiquadFilter()
  droneFilter.type = 'lowpass'
  droneFilter.frequency.value = 320
  droneFilter.connect(space)
  space.connect(master)

  // A few cents apart, so they beat against each other instead of sitting
  // as one dead tone.
  const droneFreqs = [55, 55.35, 82.5]
  const drones = droneFreqs.map((f, i) => {
    const osc = ctx.createOscillator()
    osc.type = i === 2 ? 'triangle' : 'sine'
    osc.frequency.value = f
    const g = ctx.createGain()
    g.gain.value = i === 2 ? 0.10 : 0.28
    osc.connect(g).connect(droneFilter)
    return osc
  })

  const sources = [noise, swellA, swellB, ...drones]
  sources.forEach((s) => s.start())

  return {
    ctx,
    master,
    surface,
    under,
    space,
    underFilter,
    stop: () => {
      sources.forEach((s) => {
        try {
          s.stop()
        } catch {
          // Already stopped.
        }
      })
      void ctx.close()
    },
  }
}

export default function Ambience({
  belowRef,
  spaceRef,
}: {
  belowRef: React.MutableRefObject<number>
  spaceRef: React.MutableRefObject<number>
}) {
  const graph = useRef<Graph | null>(null)

  useEffect(() => {
    if (reducedMotion) return

    const sync = () => {
      if (audioState.enabled && !graph.current) {
        try {
          graph.current = build()
        } catch {
          // No Web Audio, or the context was refused. Silence is a fine
          // outcome; nothing else on the page depends on this.
          return
        }
      }
      const g = graph.current
      if (!g) return
      if (audioState.enabled) void g.ctx.resume()
      // Ramped, not switched: cutting a running bed to zero is an audible
      // click, and on a bed this quiet the click is the loudest part.
      g.master.gain.setTargetAtTime(audioState.enabled ? 1 : 0, g.ctx.currentTime, 0.25)
    }

    sync()
    const unsub = audioState.subscribe(sync)

    // A tab left playing in the background is rude.
    const onVisibility = () => {
      const g = graph.current
      if (!g) return
      if (document.hidden) void g.ctx.suspend()
      else if (audioState.enabled) void g.ctx.resume()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      unsub()
      document.removeEventListener('visibilitychange', onVisibility)
      graph.current?.stop()
      graph.current = null
    }
  }, [])

  useFrame(() => {
    const g = graph.current
    if (!g || !audioState.enabled) return

    const below = belowRef.current
    const deep = spaceRef.current
    const t = g.ctx.currentTime

    // Same sequencing as the sky: you go under first, and only then does
    // it get dark. Mixing the three in parallel leaves daylight water
    // audible from the middle of the star field.
    const air = (1 - below) * 0.10
    const water = below * (1 - deep) * 0.30
    const void_ = deep * 0.22

    g.surface.gain.setTargetAtTime(air, t, 0.4)
    g.under.gain.setTargetAtTime(water, t, 0.4)
    g.space.gain.setTargetAtTime(void_, t, 0.6)

    // The low-pass closing as you sink is the whole trick — it is what the
    // ear reads as "submerged", far more than the level change is.
    g.underFilter.frequency.setTargetAtTime(900 - below * 620, t, 0.5)
  })

  return null
}
