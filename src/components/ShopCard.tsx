import { useNavigate } from 'react-router-dom'

// Only need a subset for the grid
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
      className="card group cursor-pointer animate-slide-up"
    >
      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      <p className="text-blue-400 font-semibold">${price}</p>
    </div>
  )
}
