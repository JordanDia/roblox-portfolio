import type { Product } from '../types/Product'
import combatThumbnail from '../assets/combat_system_thumbnail.png'
import stealALimitedThumbnail from '../assets/steal-a-limited-product-thumbnail.png'
import runFrom67 from '../assets/run-from-67.png'

export const products: Product[] = [
  {
    id: 'combat-system',
    title: 'Combat System',
    price: 12,
    image: combatThumbnail,
    youtubeId: '6hfLVPK3F0g',
    description:
      'This asset package contains a Combat System',
    payhipId: 'v8OLq'
  },

  {
    id: 'steal-a-limited',
    title: 'Steal a Limited',
    price: 30,
    image: stealALimitedThumbnail,
    youtubeId: 'PSo1VSWzL-c',
    description:
      'This asset pack contains a Steal A Limited template',
    payhipId: 'GSnbF'
  },
]
