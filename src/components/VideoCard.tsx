import { useRef, useState } from 'react'

interface VideoCardProps {
  src: string
  title?: string
}

function formatTime(sec: number) {
  if (!isFinite(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function VideoCard({ src, title }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0–100
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play()
    else v.pause()
  }

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setCurrent(v.currentTime)
    setProgress((v.currentTime / v.duration) * 100)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current
    if (!v || !v.duration) return
    const pct = Number(e.target.value)
    v.currentTime = (pct / 100) * v.duration
    setProgress(pct)
  }

  const restart = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play()
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
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
        />

        {/* Top gradient for title readability */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/70 to-transparent transition-opacity duration-300 ${
            playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
        />

        {/* Center play button — hidden while playing */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Title — top left */}
        {title && (
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 p-4 transition-opacity duration-300 ${
              playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            <h3 className="text-sm font-semibold tracking-tight text-white drop-shadow">
              {title}
            </h3>
          </div>
        )}

        {/* Controls bar — bottom. Visible on hover, or always while playing */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-2.5 pt-6 transition-opacity duration-300 ${
            playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Seek slider */}
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={handleSeek}
            className="video-seek h-1 w-full cursor-pointer appearance-none rounded-full"
            style={{
              background: `linear-gradient(to right, #f0f0f0 ${progress}%, rgba(255,255,255,0.25) ${progress}%)`,
            }}
          />

          <div className="mt-2 flex items-center gap-3 text-white">
            {/* Play / pause */}
            <button onClick={togglePlay} className="transition-opacity hover:opacity-80" aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Restart */}
            <button onClick={restart} className="transition-opacity hover:opacity-80" aria-label="Restart">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                <path d="M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
              </svg>
            </button>

            <span className="ml-auto font-mono text-[11px] tabular-nums text-white/80">
              {formatTime(current)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
