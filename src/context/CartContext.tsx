import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Product } from '../types/Product'
import type { CartItem } from '../types/Cart'

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  checkout: () => Promise<void>
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) =>
    setItems(prev => prev.filter(item => item.id !== id))

  const clearCart = () => setItems([])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // ---------------------------
  // Checkout function
  // ---------------------------
  const checkout = async () => {
    if (items.length === 0) return alert('Your cart is empty')

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      })

      if (!res.ok) {
        // server returned an error status
        const text = await res.text()
        console.error('Checkout server error:', text)
        return alert('Checkout failed on server')
      }

      // parse JSON safely
      const data = await res.json()
      if (data?.url) {
        window.location.href = data.url
      } else {
        console.error('Invalid response from server:', data)
        alert('Failed to start checkout')
      }
    } catch (err) {
      console.error('Checkout error', err)
      alert('Checkout failed')
    }
  }

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, totalItems, totalPrice, checkout }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
