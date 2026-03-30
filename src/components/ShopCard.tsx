import { useNavigate } from 'react-router-dom'

export interface ShopCardProps {
  id: string
  title: string
  price: number
  image: string
}

export default function ShopCard({ id, title, price, image }: ShopCardProps) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/shop/${id}`)}
      className="card group cursor-pointer overflow-hidden animate-slide-up"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text">{title}</h3>
        <span className="text-sm font-semibold text-text-secondary">${price}</span>
      </div>
    </div>
  )
}
