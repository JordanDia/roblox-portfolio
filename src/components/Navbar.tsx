import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartDrawer from './CartDrawer'

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            Jah Studios
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Contact
            </NavLink>

            {/* Cart Button */}
            {/* <CartButton onClick={() => setCartOpen(true)} /> */}
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

    </>
            
  )
}

export default Navbar
