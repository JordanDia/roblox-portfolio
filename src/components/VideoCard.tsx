import { useRef, useState } from 'react'

interface VideoCardProps {
  src: string
  title?: string
}

export default function VideoCard({ src, title }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-2xl hover:shadow-black/40 animate-slide-up">
      <div
        className="relative aspect-video overflow-hidden bg-black cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={src}
          playsInline
          loop
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Gradient scrim — only when not playing, so the title stays readable */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Play button */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Title overlaid on the video */}
        {title && (
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 ${
              playing ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h3 className="text-sm font-semibold tracking-tight text-white drop-shadow">
              {title}
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}
