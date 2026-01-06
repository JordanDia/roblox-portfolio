interface ProductVideoCardProps {
    youtubeId: string
    title: string
  }
  
  export default function ProductVideoCard({
    youtubeId,
    title
  }: ProductVideoCardProps) {
    return (
      <div className="card">
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
  