/**
 * A small diagram per project, showing the thing rather than describing it.
 *
 * All six are hand-authored SVG with CSS animation. No canvas, no library:
 * these are a dozen shapes each, and the whole set costs less than one
 * screenshot would. Everything animates off `currentColor` and CSS custom
 * properties so they inherit the card's palette rather than carrying their
 * own.
 *
 * Animation is paused until the card is revealed and runs slowly by
 * default, stepping up on hover — a grid of six looping animations all
 * going at once is a slot machine, not a portfolio.
 */

function Broadcast() {
  // Nine message types filling in sequence, and a quota arc that stops
  // short of full — the point of the feature is that it cannot oversend.
  const R = 26
  const C = 2 * Math.PI * R
  return (
    <svg viewBox="0 0 200 90" className="art" aria-hidden="true">
      <g className="art-types">
        {Array.from({ length: 9 }, (_, i) => (
          <rect
            key={i}
            x={8 + (i % 5) * 17}
            y={20 + Math.floor(i / 5) * 20}
            width="12"
            height="12"
            rx="2.5"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </g>
      <g transform="translate(152 45)">
        <circle className="art-track" r={R} />
        <circle
          className="art-quota"
          r={R}
          strokeDasharray={C}
          transform="rotate(-90)"
        />
        <text className="art-num" y="4" textAnchor="middle">
          281
        </text>
      </g>
    </svg>
  )
}

function Pipeline() {
  // A queue that piles up and then drains. The bars are the backlog; the
  // line under them is the p95 falling as it clears.
  return (
    <svg viewBox="0 0 200 90" className="art" aria-hidden="true">
      <g className="art-queue">
        {Array.from({ length: 16 }, (_, i) => (
          <rect
            key={i}
            x={8 + i * 11.5}
            width="7"
            rx="1.5"
            style={{ animationDelay: `${i * 0.07}s` }}
          />
        ))}
      </g>
      <path className="art-p95" d="M8 20 C 60 20, 70 66, 192 70" pathLength={1} />
    </svg>
  )
}

function Amed() {
  // Records syncing between the platform and an external clinical API:
  // a pulse leaving one side and arriving at the other.
  return (
    <svg viewBox="0 0 200 90" className="art" aria-hidden="true">
      <rect className="art-box" x="8" y="24" width="52" height="42" rx="6" />
      <rect className="art-box" x="140" y="24" width="52" height="42" rx="6" />
      <path className="art-wire" d="M60 45 H140" />
      <path className="art-wire art-wire-b" d="M60 58 H140" />
      {/* animateMotion offsets the element, so the circle's own cy supplies
          the height and the path only has to carry the horizontal run. */}
      <circle className="art-packet" r="3.5" cy="45">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M60 0 H140" />
      </circle>
      <circle className="art-packet art-packet-b" r="3" cy="58">
        <animateMotion
          dur="2.6s"
          begin="1.3s"
          repeatCount="indefinite"
          path="M140 0 H60"
        />
      </circle>
      <g className="art-ecg">
        <path d="M14 45 h10 l4-9 l5 18 l4-9 h11" />
      </g>
      <g className="art-rows">
        <rect x="148" y="34" width="36" height="3.5" rx="1.75" />
        <rect x="148" y="43" width="28" height="3.5" rx="1.75" />
        <rect x="148" y="52" width="32" height="3.5" rx="1.75" />
      </g>
    </svg>
  )
}

function Consent() {
  // The node-edge data-flow view: where personal data came from, where it
  // went. The edges trace themselves in.
  const nodes: [number, number][] = [
    [24, 45],
    [72, 22],
    [72, 68],
    [124, 34],
    [124, 62],
    [174, 45],
  ]
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [1, 4],
  ]
  return (
    <svg viewBox="0 0 200 90" className="art" aria-hidden="true">
      {/* Paths rather than <line>: pathLength is honoured far more evenly
          on <path>, and without it the dash trick that draws the edge in
          silently does nothing. */}
      <g className="art-edges">
        {edges.map(([a, b], i) => (
          <path
            key={i}
            d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`}
            pathLength={1}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </g>
      <g className="art-nodes">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </g>
    </svg>
  )
}

function Dga() {
  // Real-time notifications over a socket: pings radiating from the
  // server to everyone connected.
  return (
    <svg viewBox="0 0 200 90" className="art" aria-hidden="true">
      <g className="art-ping" transform="translate(100 45)">
        <circle r="10" style={{ animationDelay: '0s' }} />
        <circle r="10" style={{ animationDelay: '0.9s' }} />
        <circle r="10" style={{ animationDelay: '1.8s' }} />
      </g>
      <circle className="art-hub" cx="100" cy="45" r="8" />
      {[
        [26, 24],
        [26, 66],
        [174, 24],
        [174, 66],
      ].map(([x, y], i) => (
        <g key={i}>
          <path className="art-wire" d={`M100 45 L${x} ${y}`} />
          <rect
            className="art-client"
            x={x - 9}
            y={y - 7}
            width="18"
            height="14"
            rx="3"
            style={{ animationDelay: `${0.4 + i * 0.22}s` }}
          />
        </g>
      ))}
    </svg>
  )
}

function R2() {
  // The problem and the fix side by side: a signed URL whose clock runs
  // out and the image breaks, next to a proxied one that does not.
  return (
    <svg viewBox="0 0 200 90" className="art" aria-hidden="true">
      <g className="art-expire">
        <rect className="art-box" x="10" y="20" width="72" height="50" rx="6" />
        <path className="art-photo" d="M18 62 l16-18 l12 12 l10-11 l18 17 z" />
        <circle className="art-sun" cx="64" cy="34" r="5" />
        <g className="art-cross">
          <path d="M30 34 l22 22 M52 34 l-22 22" />
        </g>
      </g>
      <text className="art-tick" x="46" y="82" textAnchor="middle">
        15:00
      </text>

      <g className="art-durable">
        <rect className="art-box" x="118" y="20" width="72" height="50" rx="6" />
        <path className="art-photo" d="M126 62 l16-18 l12 12 l10-11 l18 17 z" />
        <circle className="art-sun" cx="172" cy="34" r="5" />
      </g>
      <text className="art-tick art-tick-ok" x="154" y="82" textAnchor="middle">
        ∞
      </text>
    </svg>
  )
}

const ART: Record<string, () => JSX.Element> = {
  broadcast: Broadcast,
  pipeline: Pipeline,
  amed: Amed,
  consent: Consent,
  dga: Dga,
  r2: R2,
}

export default function ProjectArt({ id }: { id: string }) {
  const Art = ART[id]
  return Art ? <Art /> : null
}
