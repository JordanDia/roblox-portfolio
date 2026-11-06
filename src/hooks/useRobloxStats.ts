import { useEffect, useState } from 'react'

export interface RobloxStats {
  name: string
  visits: number
  playing: number
  favorites: number | null
  upVotes: number | null
  downVotes: number | null
  thumbnailUrl: string | null
}

// Roblox returns this placeholder (with 0 visits) for games that are private,
// taken down or moderated.
export const UNAVAILABLE = '[TITLE UNAVAILABLE]'

/** Exact, comma-grouped: every number on the page must be checkable. */
export const formatExact = (n: number) => n.toLocaleString('en-US')

export function approval(s: RobloxStats): number | null {
  if (s.upVotes == null || s.downVotes == null) return null
  const total = s.upVotes + s.downVotes
  return total > 0 ? Math.round((s.upVotes / total) * 100) : null
}

// One request per place, shared by every component that asks for it.
const cache = new Map<string, Promise<RobloxStats>>()

function load(placeId: string): Promise<RobloxStats> {
  let p = cache.get(placeId)
  if (!p) {
    p = fetch(`/api/roblox-stats?placeId=${placeId}`).then((res) => {
      if (!res.ok) throw new Error('stats unavailable')
      return res.json() as Promise<RobloxStats>
    })
    // Drop failures so a later mount can retry.
    p.catch(() => cache.delete(placeId))
    cache.set(placeId, p)
  }
  return p
}

type State = { stats: RobloxStats | null; error: boolean }

export function useRobloxStats(placeId: string | undefined): State {
  const [state, setState] = useState<State>({ stats: null, error: false })

  useEffect(() => {
    if (!placeId) return
    let alive = true
    load(placeId)
      .then((stats) => alive && setState({ stats, error: false }))
      .catch(() => alive && setState({ stats: null, error: true }))
    return () => {
      alive = false
    }
  }, [placeId])

  return state
}

/** Sum of visits across several places; null until all have answered (or if any failed). */
export function useTotalVisits(placeIds: string[]): number | null {
  const [total, setTotal] = useState<number | null>(null)
  const key = placeIds.join(',')

  useEffect(() => {
    let alive = true
    Promise.allSettled(key.split(',').map(load)).then((results) => {
      if (!alive) return
      // Only show a total when every game answered: a partial sum would be wrong.
      if (results.some((r) => r.status === 'rejected')) return setTotal(null)
      const sum = results.reduce(
        (acc, r) => acc + (r.status === 'fulfilled' && r.value.name !== UNAVAILABLE ? r.value.visits : 0),
        0,
      )
      setTotal(sum)
    })
    return () => {
      alive = false
    }
  }, [key])

  return total
}
