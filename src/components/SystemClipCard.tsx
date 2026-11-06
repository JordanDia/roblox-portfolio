import { useRef, useState } from 'react'
import type { SystemClip } from '../data/featuredWorks'

/**
 * Small card for the "More systems" grid. Nothing downloads until the viewer
 * asks: hover plays on desktop, tap toggles on touch.
 */
export default function SystemClipCard({ clip }: { clip: SystemClip }) {
  const v = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const el = v.current
    if (!el) return
    el.play().catch(() => {})
  }
  const stop = () => v.current?.pause()

  return (
    <div
      className="card group overflow-hidden flex flex-col"
      onPointerEnter={(e) => e.pointerType === 'mouse' && play()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && stop()}
    >
      <button
        type="button"
        className="relative aspect-video bg-black overflow-hidden"
        aria-label={playing ? `Pause ${clip.title}` : `Play ${clip.title}`}
        onClick={() => (v.current?.paused ? play() : stop())}
      >
        <video
          ref={v}
          src={clip.src}
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <span className="absolute bottom-2 right-2 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <span className="hidden [@media(hover:hover)]:inline">Hover to play</span>
            <span className="[@media(hover:hover)]:hidden">Tap to play</span>
          </span>
        )}
      </button>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-semibold text-text">{clip.title}</h3>
        <p className="text-xs text-text-secondary leading-relaxed">{clip.blurb}</p>
        <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
          {clip.tags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
