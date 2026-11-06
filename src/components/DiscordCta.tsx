import { useState } from 'react'
import { DISCORD_PREFILL, DISCORD_URL, DISCORD_USERNAME } from '../data/contact'

/**
 * Copies a ready-to-send first message, then hands off to Discord. Two steps on
 * purpose: opening a new tab in the same click would hide the confirmation.
 */
export default function DiscordCta() {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'failed'>('idle')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_PREFILL)
      setCopied('ok')
    } catch {
      setCopied('failed')
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {copied === 'idle' ? (
        <button type="button" onClick={copy} className="btn-primary text-sm">
          Message me on Discord
        </button>
      ) : (
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm text-center hover:no-underline"
        >
          Open Discord →
        </a>
      )}

      <p className="text-xs text-text-muted leading-relaxed min-h-[2.5rem]" aria-live="polite">
        {copied === 'ok' && <span className="text-green-500">Copied, now paste it in Discord. </span>}
        {copied === 'failed' && <span>Couldn't copy. Send this: </span>}
        {copied !== 'ok' && <span className="text-text-secondary">"{DISCORD_PREFILL}"</span>}
        {copied === 'ok' && <span>Can't DM? Add <span className="text-text-secondary">{DISCORD_USERNAME}</span> as a friend first.</span>}
      </p>
    </div>
  )
}
