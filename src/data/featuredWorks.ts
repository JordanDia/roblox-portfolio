// Featured works: the big showpiece cards on the home page, in display order.
// Each new project is just a new entry here.

export type Proof =
  /** A fixed, checkable metric, e.g. views on an X post. */
  | { value: string; label: string; href?: string }
  /** Live total visits pulled from the Roblox API for this place. */
  | { placeId: string; label: string; href?: string }

export type FeaturedVideo = { src: string; poster: string; aspect?: string; caption?: string }

export type FeaturedWork = {
  id: string
  hook: string
  subline: string
  proof?: Proof
  tags: string[]
  video: FeaturedVideo
  /** Optional second clip shown inside the card (click to play, no autoplay). */
  extraVideo?: FeaturedVideo
  details?: {
    details?: string[]
    status?: string[]
    references?: { label: string; href?: string }[]
  }
}

export const ELEMENTAL_ARENA_PLACE_ID = '78637124287592'
export const TOY_TOWER_DEFENSE_PLACE_ID = '126901770646936'

// Combat clips are cropped to the game viewport, so they run ultrawide.
const ULTRAWIDE = 'aspect-[1920/838]'

export const featuredWorks: FeaturedWork[] = [
  {
    id: 'toy-tower-defense',
    hook: 'A full tower defense game, scripted and shipped.',
    subline:
      '30 waves, two boss fights, three upgrade paths per toy and a lobby shop: the whole game loop, live on Roblox.',
    proof: {
      placeId: TOY_TOWER_DEFENSE_PLACE_ID,
      label: 'visits on Roblox',
      href: `https://www.roblox.com/games/${TOY_TOWER_DEFENSE_PLACE_ID}`,
    },
    tags: ['Live game', 'Waves & bosses', 'Upgrade paths'],
    video: { src: '/videos/toy-tower-defense.mp4', poster: '/videos/toy-tower-defense.jpg', aspect: 'aspect-video' },
    details: {
      details: [
        'Room and difficulty select, then an intro cutscene before wave 1.',
        '30 waves, with new enemy types announced as they first arrive.',
        'Three upgrade paths per toy, with path limits so you have to commit to a build.',
        'Targeting modes and selling, two boss fights, and victory rewards that feed player levels.',
        'A lobby where you buy toys and build your loadout before a match.',
      ],
      status: ['Live on Roblox.'],
      references: [
        { label: 'Play on Roblox', href: `https://www.roblox.com/games/${TOY_TOWER_DEFENSE_PLACE_ID}` },
      ],
    },
  },
  {
    id: 'elemental-arena',
    hook: 'Full-server PvP where the server decides every hit.',
    subline:
      'My own live arena game: players and bots trading dashes, blasts, beams and charged attacks, with hits validated on the server so the leaderboard can be trusted.',
    proof: {
      placeId: ELEMENTAL_ARENA_PLACE_ID,
      label: 'visits on Roblox',
      href: `https://www.roblox.com/games/${ELEMENTAL_ARENA_PLACE_ID}`,
    },
    tags: ['Live game', 'Server-decided hits', 'Charged abilities'],
    // Shot full-frame: the ability bar, leaderboard and hit counter sit at the edges.
    video: { src: '/videos/elemental-arena.mp4', poster: '/videos/elemental-arena.jpg', aspect: 'aspect-video' },
    details: {
      details: [
        'Elemental abilities: dash, blasts, beams, bombs and charged/held attacks, each with its own cooldown and wind-up.',
        'Every hit is decided by the server, so kills and hits on the leaderboard can be trusted.',
        'Bots fill the server so matches feel full at any player count.',
      ],
      status: ['Live on Roblox.'],
      references: [
        { label: 'Play on Roblox', href: `https://www.roblox.com/games/${ELEMENTAL_ARENA_PLACE_ID}` },
      ],
    },
  },
  {
    id: 'combat-framework',
    hook: 'Reusable frameworks, not one-off scripts.',
    subline:
      'Example: a combat framework where two very different kits share the same code, and a new move is config filled in, not a new script.',
    tags: ['Moves as config', 'Fixed server tick', 'Cancel windows'],
    video: {
      src: '/videos/mera-combat.mp4',
      poster: '/videos/mera-combat.jpg',
      aspect: ULTRAWIDE,
      caption: 'Fire moveset: Hiken, Flame Pillar, Enkai',
    },
    extraVideo: {
      src: '/videos/luffy-combat.mp4',
      poster: '/videos/luffy-combat.jpg',
      aspect: ULTRAWIDE,
      caption: 'Same framework, melee kit: M1 combos, blocking, punish windows',
    },
    details: {
      details: [
        'Each move is a config entry with its own hitbox, damage, cooldown and cancel windows.',
        'Combos, hitstun and block breaks run on a fixed server tick, so fights play the same at any frame rate.',
        'Built on an ECS framework, so a new fruit or character is mostly data.',
        'Both kits shown here (fire moveset and melee combo kit) run on the same framework.',
      ],
    },
  },
  // ⬇️ Slot for the server being built now. Uncomment once it has a video.
  // {
  //   id: 'swarm-2000',
  //   hook: '2,000 enemies, zero Instances.',
  //   subline: 'TODO: one plain sentence on how it works.',
  //   proof: { value: 'TODO', label: 'KB/s per player' },
  //   tags: ['TODO', 'TODO', 'TODO'],
  //   video: { src: '/videos/swarm-2000.mp4', poster: '/videos/swarm-2000.jpg', aspect: 'aspect-video' },
  //   details: { details: [], status: ['In development.'] },
  // },
]

// Smaller cards for range: title, one sentence, tags. Plays on hover / tap.
export type SystemClip = { id: string; src: string; poster: string; title: string; blurb: string; tags: string[] }

export const moreSystems: SystemClip[] = [
  {
    id: 'clean-the-eggs',
    src: '/videos/5.mp4',
    poster: '/videos/5.jpg',
    title: 'Clean The Eggs',
    blurb: 'Round-based game with queue pads, a match timer, egg rarities, carry capacity and an upgrade shop.',
    tags: ['Matchmaking', 'Timed rounds', 'Upgrade shop'],
  },
  {
    id: 'noob-army',
    src: '/videos/6.mp4',
    poster: '/videos/6.jpg',
    title: 'Command Your Noob Army',
    blurb: 'Lead a swarm down an endless track, picking roguelite buffs every few hundred metres.',
    tags: ['Swarm AI', 'Roguelite buffs', 'Monetisation'],
  },
  {
    id: 'crystal-cutter',
    src: '/videos/crystal-cutter.mp4',
    poster: '/videos/crystal-cutter.jpg',
    title: 'My Crystal Cutter',
    blurb: 'RNG loop: crystal rolls, rebirth multipliers, stacking auras and admin events.',
    tags: ['Rebirths', 'RNG rolls', 'Aura system'],
  },
  {
    id: 'merge-vs-mobs',
    src: '/videos/3.mp4',
    poster: '/videos/3.jpg',
    title: 'Merge vs Mobs',
    blurb: 'Merge matching units into stronger tiers on a grid, then send them against incoming waves.',
    tags: ['Merge grid', 'Unit tiers', 'Wave combat'],
  },
  {
    id: 'tower-defense-system',
    src: '/videos/2.mp4',
    poster: '/videos/2.jpg',
    title: 'Tower Defense System',
    blurb: 'Core TD loop: pathing waves, unit placement with range preview, kill cash and base health.',
    tags: ['Wave spawner', 'Placement', 'Cash economy'],
  },
  {
    id: 'grow-a-garden',
    src: '/videos/1.mp4',
    poster: '/videos/1.jpg',
    title: 'Grow a Garden System',
    blurb: 'Plant seeds on your plot, watch them grow through visible stages, then harvest and sell.',
    tags: ['Plot ownership', 'Growth stages', 'Harvest & sell'],
  },
]

// Track record: games with live stats from the Roblox API, plus your role.
export type TrackRecordGame = { placeId: string; label: string; role: string }

export const trackRecord: TrackRecordGame[] = [
  { placeId: ELEMENTAL_ARENA_PLACE_ID, label: 'Elemental Arena', role: 'Solo developer' },
  { placeId: TOY_TOWER_DEFENSE_PLACE_ID, label: 'Toy Tower Defense', role: 'Solo developer' },
  { placeId: '88088398050234', label: 'Leaf Blower Simulator', role: 'Solo developer' },
  { placeId: '99071281805726', label: 'Crystal Incremental', role: 'Solo developer' },
  { placeId: '100337093788565', label: 'evil plate game', role: 'Commission work' },
]
