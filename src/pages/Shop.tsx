import ShopCard from '../components/ShopCard'
import type { ShopProduct } from '../types/ShopProduct'
import { products } from '../data/Products'

export default function Shop() {
  const shopProducts: ShopProduct[] = products.map(({ id, title, price, image }) => ({
    id,
    title,
    price,
    image,
  }))

  return (
    <div className="min-h-screen bg-bg px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Store</p>
        <h1 className="text-3xl font-bold text-text mb-3">Shop</h1>
        <p className="text-text-secondary text-sm mb-10">
          Ready-to-use Roblox systems. High quality, optimized, and documented.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {shopProducts.map((product) => (
            <ShopCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
