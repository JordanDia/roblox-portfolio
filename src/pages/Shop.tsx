import ShopCard from '../components/ShopCard'
import type { ShopProduct } from '../types/ShopProduct'
import { products } from '../data/Products'

export default function Shop() {
  // Convert full Product to ShopProduct for the grid
  const shopProducts: ShopProduct[] = products.map(({ id, title, price, image }) => ({
    id,
    title,
    price,
    image
  }))

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Shop
        </h1>

        <p className="text-gray-400 mb-10">
          Ready-to-use Roblox systems. High quality, optimized, and documented.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {shopProducts.map(product => (
            <ShopCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
