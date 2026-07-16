import { useState } from 'react'

const DISCORD_ID = '198189217824768002'
const DISCORD_USERNAME = 'masterjj'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyUsername = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — username is visible on screen anyway */
    }
  }

  return (
    <div className="min-h-screen bg-bg px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Get in touch</p>
        <h1 className="text-3xl font-bold text-text mb-10">Contact</h1>

        <div className="card p-8 flex flex-col gap-8">

          {/* Primary CTA */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/masterjj-faceshot.png"
                alt=""
                className="w-12 h-12 rounded-full ring-1 ring-border flex-shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-text">Master_JJ</p>
                <p className="text-xs text-text-secondary">Usually replies within a day</p>
              </div>
            </div>

            <a
              href={`https://discord.com/users/${DISCORD_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-block w-full text-center hover:no-underline"
            >
              Message me on Discord →
            </a>

            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-xs text-text-muted">or add</span>
              <button
                onClick={copyUsername}
                className="text-xs font-semibold text-text-secondary hover:text-text transition-colors duration-200 border border-border hover:border-border-hover rounded px-2 py-1"
              >
                {copied ? 'copied ✓' : `${DISCORD_USERNAME} — copy`}
              </button>
            </div>

            <p className="text-xs text-text-muted leading-relaxed mt-5 text-center">
              If Discord won't let you DM me directly, add me as a friend first — Discord blocks
              messages between people who don't share a server.
            </p>
          </div>

          <div className="border-t border-border" />

          {/* What to include */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-3">Speed things up</p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              Include these in your first message and I can quote you right away:
            </p>
            <ul className="text-sm text-text-secondary space-y-2 leading-relaxed">
              <li>→ What you need built, in a sentence or two</li>
              <li>→ Your budget range</li>
              <li>→ Your deadline, if you have one</li>
              <li>→ A link to the game, if it already exists</li>
            </ul>
          </div>

          <div className="border-t border-border" />

          {/* Terms */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-3">Commission Terms</p>
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
