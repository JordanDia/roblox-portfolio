import { X } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface Props {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, totalPrice, removeFromCart, checkout } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-96 bg-gray-900 border-l border-gray-700 transform transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 && (
            <p className="text-gray-400 text-center">Your cart is empty</p>
          )}

          {items.map(item => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-gray-400 text-sm">
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
        <div className="flex justify-between mb-4 text-white font-semibold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button
            onClick={() => checkout()} // <-- call checkout from context
            disabled={items.length === 0} // optional: disable if cart is empty
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
            Checkout
        </button>
        </div>

      </div>
    </div>
  )
}
