import type { TrackRecordGame } from '../data/featuredWorks'
import { approval, formatExact, UNAVAILABLE, useRobloxStats } from '../hooks/useRobloxStats'

/** One game in the track-record table: exact numbers straight from the Roblox API. */
export default function TrackRecordRow({ game }: { game: TrackRecordGame }) {
  const { stats, error } = useRobloxStats(game.placeId)

  // Drop games that are no longer live or have no title.
  if (stats && (stats.name === UNAVAILABLE || !stats.name)) return null

  const pct = stats ? approval(stats) : null
  const url = `https://www.roblox.com/games/${game.placeId}`

  const cell = (value: string | null, label: string) => (
    <div className="min-w-[5.5rem]">
      {value == null ? (
        <div className="h-5 w-14 bg-surface-2 rounded animate-pulse" />
      ) : (
        <p className="text-base font-bold text-text tabular-nums">{value}</p>
      )}
      <p className="text-[11px] text-text-muted">{label}</p>
    </div>
  )

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row sm:items-center gap-4 px-4 py-4 hover:no-underline hover:bg-surface-2 transition-colors"
    >
      <div className="flex items-center gap-3 sm:w-72 min-w-0">
        <div className="w-11 h-11 rounded-md overflow-hidden flex-shrink-0 bg-surface border border-border">
          {stats?.thumbnailUrl && <img src={stats.thumbnailUrl} alt="" className="w-full h-full object-cover" />}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-text truncate">{stats?.name ?? game.label}</p>
          <p className="text-xs text-text-secondary">{game.role}</p>
        </div>
      </div>

      {error ? (
        <p className="text-xs text-text-muted">Stats unavailable right now</p>
      ) : (
        <div className="flex flex-wrap gap-x-6 gap-y-2 flex-1">
          {cell(stats ? formatExact(stats.visits) : null, 'visits')}
          {cell(stats ? (stats.favorites != null ? formatExact(stats.favorites) : '—') : null, 'favourites')}
          {cell(stats ? (pct != null ? `${pct}%` : '—') : null, 'approval')}
          {cell(stats ? formatExact(stats.playing) : null, 'playing now')}
        </div>
      )}

      <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors sm:ml-auto">
        Play ↗
      </span>
    </a>
  )
}
