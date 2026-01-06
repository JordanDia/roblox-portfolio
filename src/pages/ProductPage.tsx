import { useParams } from 'react-router-dom'
import { products } from '../data/Products'
import ProductVideoCard from '../components/ProductVideoCard'
import type { Product } from '../types/Product'
import { useCart } from '../context/CartContext'


export default function ProductPage() {
  const { productId } = useParams()
  const { addToCart } = useCart()

  const product: Product | undefined = products.find(
    p => p.id === productId
  )

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <ProductVideoCard
            youtubeId={product.youtubeId}
            title={product.title}
          />

          {/* Right */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-white">
              {product.title}
            </h1>

            <p className="text-2xl font-semibold text-blue-400">
              ${product.price}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                Add to Cart
              </button>
              <button className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 transition">
                Buy Now
              </button>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
