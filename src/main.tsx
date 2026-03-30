// Load Payhip checkout script dynamically (avoids Vite import-analysis issues with external scripts in HTML)
const payhipScript = document.createElement('script')
payhipScript.src = 'https://payhip.com/payhip.js'
document.head.appendChild(payhipScript)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
