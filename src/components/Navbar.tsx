import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartDrawer from './CartDrawer'

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg border-b border-border backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

          <NavLink to="/" className="flex items-center gap-2.5 hover:no-underline group">
            <img
              src="/masterjj-faceshot.png"
              alt=""
              className="w-7 h-7 rounded-full ring-1 ring-border group-hover:ring-border-hover transition-all duration-200"
            />
            <span className="text-sm font-semibold text-text tracking-widest uppercase">
              Master_JJ
            </span>
          </NavLink>

          <div className="flex items-center gap-5 sm:gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop' },
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

            {/* Persistent CTA — the hire action should never be more than one click away */}
            <NavLink
              to="/contact"
              className="bg-white text-black text-xs font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-accent-dim hover:no-underline whitespace-nowrap"
            >
              Commission Me
            </NavLink>
          </div>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar
