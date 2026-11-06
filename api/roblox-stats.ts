import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { placeId } = req.query

  if (!placeId || typeof placeId !== 'string') {
    return res.status(400).json({ error: 'Missing placeId' })
  }

  try {
    // Step 1: Resolve universe ID from place ID
    const universeRes = await fetch(
      `https://apis.roblox.com/universes/v1/places/${placeId}/universe`
    )
    if (!universeRes.ok) throw new Error('Failed to fetch universe ID')
    const { universeId } = await universeRes.json()

    // Step 2: Fetch game stats, votes + thumbnail in parallel
    const [gameRes, thumbRes, votesRes] = await Promise.all([
      fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`),
      fetch(
        `https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeId}&size=512x512&format=Png&isCircular=false`
      ),
      fetch(`https://games.roblox.com/v1/games/votes?universeIds=${universeId}`).catch(() => null),
    ])

    const gameData = await gameRes.json()
    const thumbData = await thumbRes.json()
    const votesData = votesRes && votesRes.ok ? await votesRes.json() : null

    const game = gameData?.data?.[0]
    const thumb = thumbData?.data?.[0]
    const votes = votesData?.data?.[0]

    if (!game) throw new Error('Game not found')

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30')
    return res.status(200).json({
      name: game.name,
      visits: game.visits,
      playing: game.playing,
      favorites: game.favoritedCount ?? null,
      upVotes: votes?.upVotes ?? null,
      downVotes: votes?.downVotes ?? null,
      thumbnailUrl: thumb?.imageUrl ?? null,
    })
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Unknown error' })
  }
}
