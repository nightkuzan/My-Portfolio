/**
 * Whether the visitor has asked for sound.
 *
 * A three.js-free module for the same reason as pointer-state: the toggle
 * lives in the nav, which is in the entry bundle, while the audio engine
 * runs alongside the scene in the lazy chunk. Importing across that line
 * through anything that touches three would drag the whole library
 * forward.
 *
 * A tiny store with subscribers rather than React state threaded from App
 * down through Experience, Stage and Scene — four components that have no
 * other reason to know about audio.
 */

const KEY = 'sound'

let enabled = false
try {
  enabled = window.localStorage.getItem(KEY) === 'on'
} catch {
  // Storage blocked; sound simply starts off.
}

const subscribers = new Set<() => void>()

export const audioState = {
  get enabled() {
    return enabled
  },
  set(next: boolean) {
    if (next === enabled) return
    enabled = next
    try {
      window.localStorage.setItem(KEY, next ? 'on' : 'off')
    } catch {
      // As above.
    }
    subscribers.forEach((fn) => fn())
  },
  subscribe(fn: () => void) {
    subscribers.add(fn)
    return () => {
      subscribers.delete(fn)
    }
  },
}
