interface YouTubeEmbedProps {
  youtubeId: string
  title: string
  description: string
}

export default function YouTubeEmbed({ youtubeId, title, description }: YouTubeEmbedProps) {
  return (
    <div className="card group animate-slide-up">
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&showinfo=0&autoplay=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
} 