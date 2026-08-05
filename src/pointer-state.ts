/**
 * Is the pointer over an otter?
 *
 * Its own module, free of any three.js import, precisely so the DOM cursor
 * can read it. Living in the river folder it dragged the whole of three
 * into the entry chunk — 844 kB before the scene had even been asked for.
 */
export const pointerState = { overOtter: false }
