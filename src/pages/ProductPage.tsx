import { useParams } from 'react-router-dom'
import { products } from '../data/Products'
import ProductVideoCard from '../components/ProductVideoCard'
import type { Product } from '../types/Product'

export default function ProductPage() {
  const { productId } = useParams()

  const product: Product | undefined = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-bg text-text px-6 py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    )
  }

  const handleBuyNow = () => {
    const payhip = (window as any).Payhip
    if (payhip?.Checkout?.open) {
      payhip.Checkout.open({
        product: product.payhipId,
        message: 'Thanks for buying! Your download will start after checkout.',
      })
    } else {
      window.location.href = `https://payhip.com/b/${product.payhipId}`
    }
  }

  return (
    <div className="min-h-screen bg-bg px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Video */}
          <ProductVideoCard youtubeId={product.youtubeId} title={product.title} />

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Product</p>
              <h1 className="text-3xl font-bold text-text">{product.title}</h1>
            </div>

            <p className="text-3xl font-bold text-text">${product.price}</p>

            <button
              onClick={handleBuyNow}
              className="btn-primary w-full text-center"
            >
              Buy Now
            </button>

            <div className="border-t border-border pt-6">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-3">Description</p>
              <p className="text-text-secondary text-sm leading-relaxed">{product.description}</p>
            </div>

            <div className="border border-border rounded-xl p-4 text-xs text-text-muted leading-relaxed">
              💡 Payment via Payhip — secure checkout, instant download after purchase.
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
