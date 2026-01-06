import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface Props {
  onClick: () => void
}

export default function CartButton({ onClick }: Props) {
  const { totalItems } = useCart()

  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-lg hover:bg-gray-700 transition"
    >
      <ShoppingBag className="w-6 h-6 text-white" />

      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  )
}
