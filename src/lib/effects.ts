// Small, opt-out-able visual effects. Everything here is cosmetic: delete the
// call sites (or this file and the "Effects" block in index.css) to remove them.

/** Feeds the cursor position to the CSS spotlight glow (see .spotlight in index.css). */
export function trackPointer(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
