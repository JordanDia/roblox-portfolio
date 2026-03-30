function Contact() {
  return (
    <div className="min-h-screen bg-bg px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Get in touch</p>
        <h1 className="text-3xl font-bold text-text mb-10">Contact</h1>

        <div className="card p-8 flex flex-col gap-6">
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Discord</p>
            <p className="text-lg font-semibold text-text">masterjj</p>
            <p className="text-xs text-text-secondary mt-1">Fastest way to reach me — DM for commissions or questions.</p>
          </div>

          <div className="border-t border-border" />

          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Commission Terms</p>
            <ul className="text-sm text-text-secondary space-y-2 leading-relaxed">
              <li>→ 50% payment upfront before work begins</li>
              <li>→ 50% on delivery</li>
              <li>→ Revisions included within scope</li>
              <li>→ Source files delivered after final payment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
