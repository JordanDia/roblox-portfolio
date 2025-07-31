import { useState, useRef, useEffect } from 'react'
import { SpeakerWaveIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid'

const CustomPlayButton = () => (
    <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.8)" />
        <polygon points="22,18 40,28 22,38" fill="rgba(0,0,0,0.7)" />
    </svg>
);

const CustomPauseButton = () => (
    <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.8)" />
        <rect
            x="20"
            y="18"
            width="6"
            height="20"
            rx="2"
            fill="rgba(0,0,0,0.7)"
        />
        <rect
            x="30"
            y="18"
            width="6"
            height="20"
            rx="2"
            fill="rgba(0,0,0,0.7)"
        />
    </svg>
);

interface CustomVideoPlayerProps {
  src: string
  title: string
  description: string
}

export default function CustomVideoPlayer({ src, title, description }: CustomVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [showCenterButton, setShowCenterButton] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const centerButtonTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      if (centerButtonTimeoutRef.current) {
        clearTimeout(centerButtonTimeoutRef.current)
      }
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
      
      // Show center button and set timeout to hide it
      setShowCenterButton(true)
      if (centerButtonTimeoutRef.current) {
        clearTimeout(centerButtonTimeoutRef.current)
      }
      centerButtonTimeoutRef.current = setTimeout(() => {
        setShowCenterButton(false)
      }, 2000)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const newTime = percentage * duration
      videoRef.current.currentTime = newTime
    }
  }

  const handleControlClick = (e: React.MouseEvent<HTMLButtonElement>, action: () => void) => {
    e.stopPropagation()
    action()
  }

  return (
    <div className="card group animate-slide-up">
      <div 
        ref={containerRef}
        className="custom-video-player aspect-video mb-4"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button Overlay */}
        {showCenterButton && (
          <div className="play-button-overlay">
            <button
              onClick={(e) => handleControlClick(e, togglePlay)}
              className="transition-all duration-300 transform hover:scale-110"
            >
              {isPlaying ? <CustomPauseButton /> : <CustomPlayButton />}
            </button>
          </div>
        )}

        {/* Controls Overlay */}
        {showControls && (
          <div className="video-controls">
            {/* Progress Bar */}
            <div 
              className="progress-bar mb-3"
              onClick={handleProgressClick}
            >
              <div 
                className="progress-fill"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="flex items-center space-x-3">
                <button
                  onClick={(e) => handleControlClick(e, toggleMute)}
                  className="control-button"
                >
                  <SpeakerWaveIcon className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={(e) => handleControlClick(e, toggleFullscreen)}
                  className="control-button"
                >
                  <ArrowsPointingOutIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
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