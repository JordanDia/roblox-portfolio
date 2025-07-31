import { useState } from 'react'

interface CustomVideoPlayerProps {
  youtubeId: string
  title: string
  description: string
}

export default function CustomVideoPlayer({ youtubeId, title, description }: CustomVideoPlayerProps) {
  const [showOverlay, setShowOverlay] = useState(true)

  const handlePlay = () => {
    setShowOverlay(false)
  }

  return (
    <div className="card group animate-slide-up">
      <div 
        className="custom-video-player aspect-video mb-4 relative"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Custom Play Button Overlay */}
        {showOverlay && (
          <div className="play-button-overlay">
            <button
              onClick={handlePlay}
              className="transition-all duration-300 transform hover:scale-110"
            >
              <CustomPlayButton />
            </button>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

const CustomPlayButton = () => (
    <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.8)" />
        <polygon points="22,18 40,28 22,38" fill="rgba(0,0,0,0.7)" />
    </svg>
); 