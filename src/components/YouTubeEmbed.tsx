interface YouTubeEmbedProps {
  youtubeId: string
  title: string
  description: string
}

export default function YouTubeEmbed({ youtubeId, title, description }: YouTubeEmbedProps) {
  return (
    <div className="card group animate-slide-up flex flex-col gap-3 p-4">
      <div className="aspect-video overflow-hidden rounded-lg">
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
        <h3 className="text-sm font-semibold text-text mb-1">{title}</h3>
        <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
