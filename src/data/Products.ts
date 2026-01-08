import type { Product } from '../types/Product'
import combatThumbnail from '../assets/combat_system_thumbnail.png'


export const products: Product[] = [
  {
    id: 'combat-system',
    title: 'Combat System',
    price: 20,
    image: combatThumbnail,
    youtubeId: 'vvPVIgnU3q0',
    description:
      'A full-featured Roblox combat system including combos, hit detection, animations, and modular weapon support.',
    fileUrl: 'files/example.txt'
  },
]
