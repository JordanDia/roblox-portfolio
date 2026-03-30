import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartDrawer from './CartDrawer'

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg border-b border-border backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

          <div className="text-sm font-semibold text-text tracking-widest uppercase">
            Jah Studios
          </div>

          <div className="flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-text text-sm font-medium'
                    : 'text-text-secondary text-sm hover:text-text transition-colors duration-200'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar
