import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { prefersReducedMotion } from '../lib/effects'

/**
 * A quick, one-time fade/rise as a block enters the viewport.
 *
 * Kept deliberately mild so it never gets in the way:
 * - fires early (before the block is fully on screen) and only once
 * - anything already on screen at load is shown immediately, no flash
 * - off entirely for prefers-reduced-motion, and content is never hidden
 *   if JS hasn't run
 */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'pending' | 'in'>('idle')

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight) return // already visible

    setState('pending')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('in')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = state === 'pending' ? 'reveal' : state === 'in' ? 'reveal reveal-in' : ''
  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  )
}
