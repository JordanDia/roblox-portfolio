import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-3">404</p>
        <h1 className="text-3xl font-bold text-text mb-4">Page not found</h1>
        <p className="text-text-secondary text-sm leading-relaxed mb-10">
          That page doesn't exist — it may have moved or the link is wrong.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary text-sm hover:no-underline">
            Back home
          </Link>
          <Link to="/contact" className="btn-secondary text-sm hover:no-underline">
            Commission me
          </Link>
        </div>
      </div>
    </div>
  )
}
