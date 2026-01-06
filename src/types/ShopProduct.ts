import type { Product } from './Product'

export type ShopProduct = Pick<
  Product,
  'id' | 'title' | 'price' | 'image'
>
