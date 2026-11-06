import { useId, useState } from 'react'
import VideoCard from './VideoCard'
import type { FeaturedWork, Proof } from '../data/featuredWorks'
import { formatExact, useRobloxStats } from '../hooks/useRobloxStats'
import { trackPointer } from '../lib/effects'

// Drafted-but-unverified lines are marked TODO. They show (dashed) in dev so
// they're easy to find, and never ship to the live site.
const isTodo = (s: string) => s.trimStart().startsWith('TODO')
const visible = (lines?: string[]) =>
  (lines ?? []).filter((l) => import.meta.env.DEV || !isTodo(l))

function ProofLine({ proof }: { proof: Proof }) {
  const live = 'placeId' in proof
  const { stats } = useRobloxStats(live ? proof.placeId : undefined)

  const value = live ? (stats ? formatExact(stats.visits) : null) : proof.value
  // Live metric that hasn't loaded (or failed): hide rather than show a guess.
  if (value == null) return <div className="h-7" aria-hidden />

  const body = (
    <>
      <span className="text-xl font-bold text-text tabular-nums">{value}</span>
      <span className="text-sm text-text-secondary">{proof.label}</span>
      {live && (
        <span className="text-[10px] uppercase tracking-wider text-text-muted border border-border rounded px-1.5 py-0.5">
          live
        </span>
      )}
    </>
  )

  return proof.href ? (
    <a
      href={proof.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-2 hover:no-underline group/proof"
    >
      {body}
      <span className="text-xs text-text-muted group-hover/proof:text-text-secondary transition-colors">↗</span>
    </a>
  ) : (
    <div className="inline-flex items-baseline gap-2">{body}</div>
  )
}

function Section({ title, lines }: { title: string; lines: string[] }) {
  if (!lines.length) return null
  return (
    <div>
      <p className="text-xs text-text-muted uppercase tracking-widest mb-2">{title}</p>
      <ul className="text-sm text-text-secondary space-y-1.5 leading-relaxed">
        {lines.map((l) => (
          <li
            key={l}
            className={isTodo(l) ? 'border border-dashed border-yellow-700/60 text-yellow-600/80 rounded px-2 py-1' : ''}
          >
            → {l}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FeaturedWorkCard({ work, index }: { work: FeaturedWork; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const d = work.details

  const sections = [
    { title: 'Details', lines: visible(d?.details) },
    { title: 'Status', lines: visible(d?.status) },
  ]
  const refs = d?.references ?? []
  const hasDetails = sections.some((s) => s.lines.length) || refs.length > 0

  return (
    <article className="spotlight card p-5 md:p-8" onPointerMove={trackPointer}>
      <div className="flex items-start gap-4 mb-6">
        <span className="text-xs text-text-muted font-semibold tabular-nums pt-2">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-3">
            {work.hook}
          </h3>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">{work.subline}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5">
            {work.proof && <ProofLine proof={work.proof} />}
            <div className="flex flex-wrap gap-1.5">
              {work.tags.slice(0, 3).map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoCard
        src={work.video.src}
        poster={work.video.poster}
        aspect={work.video.aspect ?? 'aspect-video'}
        autoPlayInView
        bare
      />
      {work.video.caption && <p className="text-xs text-text-muted mt-2">{work.video.caption}</p>}

      {work.extraVideo && (
        <div className="mt-5">
          <VideoCard
            src={work.extraVideo.src}
            poster={work.extraVideo.poster}
            aspect={work.extraVideo.aspect ?? 'aspect-video'}
            bare
          />
          {work.extraVideo.caption && <p className="text-xs text-text-muted mt-2">{work.extraVideo.caption}</p>}
        </div>
      )}

      {hasDetails && (
        <div className="mt-6 border-t border-border pt-4">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text transition-colors"
          >
            <span className={`inline-block transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>›</span>
            Technical details
          </button>

          {open && (
            <div id={panelId} className="grid md:grid-cols-2 gap-6 mt-5">
              {sections.map((s) => (
                <Section key={s.title} title={s.title} lines={s.lines} />
              ))}
              {refs.length > 0 && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-2">References</p>
                  <ul className="text-sm space-y-1.5">
                    {refs.map((r) =>
                      r.href ? (
                        <li key={r.label}>
                          <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text">
                            → {r.label} ↗
                          </a>
                        </li>
                      ) : (
                        <li key={r.label} className="text-text-secondary">→ {r.label}</li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

