import { useEffect, useState } from 'react'

interface RobloxStats {
  name: string
  visits: number
  playing: number
  thumbnailUrl: string | null
}

interface RobloxGameCardProps {
  placeId: string
  label?: string
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}

export default function RobloxGameCard({ placeId, label }: RobloxGameCardProps) {
  const [stats, setStats] = useState<RobloxStats | null>(null)
  const [error, setError] = useState(false)

  const fetchStats = async () => {
    try {
      const res = await fetch(`/api/roblox-stats?placeId=${placeId}`)
      if (!res.ok) throw new Error()
      const data = await res.json()
      setStats(data)
    } catch {
      setError(true)
    }
  }

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 60_000)
    return () => clearInterval(interval)
  }, [placeId])

  const gameUrl = `https://www.roblox.com/games/${placeId}`

  return (
    <a
      href={gameUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex gap-4 p-4 hover:no-underline transition-all duration-300 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-surface border border-border">
        {stats?.thumbnailUrl ? (
          <img
            src={stats.thumbnailUrl}
            alt={stats.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-border-hover border-t-text-secondary animate-spin" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-text truncate">
            {stats?.name ?? label ?? 'Loading…'}
          </span>
          {/* Live dot */}
          {stats && stats.playing > 0 && (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
              <span className="text-xs text-green-500">Live</span>
            </span>
          )}
        </div>

        {error ? (
          <p className="text-xs text-text-muted">Stats unavailable</p>
        ) : stats ? (
          <div className="flex items-center gap-4">
            <div>
              <p className="text-lg font-bold text-text">{formatNumber(stats.visits)}</p>
              <p className="text-xs text-text-muted">Total Visits</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <p className="text-lg font-bold text-text">{formatNumber(stats.playing)}</p>
              <p className="text-xs text-text-muted">Playing Now</p>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="h-4 w-16 bg-surface-2 rounded animate-pulse" />
            <div className="h-4 w-16 bg-surface-2 rounded animate-pulse" />
          </div>
        )}

        <p className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
          Play on Roblox →
        </p>
      </div>
    </a>
  )
}
