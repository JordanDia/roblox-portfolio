import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import RobloxGameCard from '../components/RobloxGameCard'

// ⬇️ Featured combat work — the first thing a commissioner sees.
// These are cropped to the game viewport, so they run ultrawide rather than 16:9.
// The `tags` are what a buyer scans for: edit them to match what you actually built.
const combatVideos = [
  {
    id: 'mera',
    src: '/videos/mera-combat.mp4',
    poster: '/videos/mera-combat.jpg',
    title: 'Mera Combat System',
    blurb:
      'A fire moveset — Hiken, Flame Pillar and Enkai — on the same framework as the Luffy kit. None of it is a one-off script: each move is a config entry with its own hitbox, damage and cancel windows, so a new fruit or character is mostly data.',
    tags: ['Anime moveset', 'Moves as config', 'Shared framework', 'Cancel windows'],
  },
  {
    id: 'luffy',
    src: '/videos/luffy-combat.mp4',
    poster: '/videos/luffy-combat.jpg',
    title: 'Luffy Combat System',
    blurb:
      'A melee combo kit with blocking and punish windows. Combos, hitstun and block breaks run on a fixed server tick, so they feel the same for every player whatever their frame rate. Adding a move means adding a config entry, not writing a new script.',
    tags: ['M1 combos', 'Block / punish states', 'Frame-rate independent', 'Moves as config'],
  },
  {
    id: 'elemental-arena',
    src: '/videos/elemental-arena.mp4',
    poster: '/videos/elemental-arena.jpg',
    title: 'Elemental Arena',
    blurb:
      'My own live PvP game. A full server of players and bots trading elemental abilities — dash, blasts, beams, bombs and charged attacks, each with its own cooldown and wind-up. Every hit is decided by the server, so the kills and hits on the leaderboard can be trusted.',
    tags: ['Live game', 'Full-server PvP', 'Charged & held abilities', 'Server-decided hits'],
    // Shot full-frame: the ability bar, leaderboard and hit counter sit at the
    // edges, so this one isn't cropped ultrawide like the clips below it.
    aspect: 'aspect-video',
  },
]

// ⬇️ Top of the page: the most complete, most recent work
const featuredVideo = {
  id: 'toy-tower-defense',
  src: '/videos/toy-tower-defense.mp4',
  poster: '/videos/toy-tower-defense.jpg',
  title: 'Toy Tower Defense — Live Game',
  blurb:
    'A full tower defense game I scripted and launched. Room and difficulty select, an intro cutscene, 30 waves with new enemy types announced as they arrive, three upgrade paths per toy with path limits, targeting and selling, two boss fights, victory rewards with player levels, and a lobby where you buy toys and build your loadout.',
  tags: ['Live game', 'Wave & boss system', 'Upgrade paths', 'Toy shop & loadout', 'Player levels'],
}

// ⬇️ Simulator / systems work — strongest, most finished-looking clips first
const systemVideos = [
  {
    id: 5,
    src: '/videos/5.mp4',
    poster: '/videos/5.jpg',
    title: 'Clean The Eggs',
    blurb:
      'A complete round-based game: queue pads with a countdown start the match, then players race the timer to collect eggs of different rarities. Includes carry capacity, an upgrade shop (capacity, cash gain, speed), an inventory and a tool hotbar.',
    tags: ['Lobby & matchmaking', 'Timed rounds', 'Rarity system', 'Upgrade shop', 'Inventory'],
  },
  {
    id: 6,
    src: '/videos/6.mp4',
    poster: '/videos/6.jpg',
    title: 'Command Your Noob Army',
    blurb:
      'Lead a swarm of noobs down an endless track. Every few hundred metres you pick one of three buffs that level up roguelite-style, with kill goals, timed damage boosts and in-game purchases to revive the army or add more noobs.',
    tags: ['Swarm AI', 'Roguelite buffs', 'Distance progression', 'Monetisation hooks'],
  },
  {
    id: 'crystal-cutter',
    src: '/videos/crystal-cutter.mp4',
    poster: '/videos/crystal-cutter.jpg',
    title: 'My Crystal Cutter — Solo Developed',
    blurb:
      'Designed, scripted and shipped entirely by me — no team. A full RNG progression loop: crystal roll spinning, rebirths that reset for permanent multipliers, stacking aura effects, and an admin abuse system for live events.',
    tags: ['Solo developed', 'Rebirth progression', 'RNG spinning', 'Aura system', 'Admin abuse system'],
  },
  {
    id: 3,
    src: '/videos/3.mp4',
    poster: '/videos/3.jpg',
    title: 'Merge vs Mobs',
    blurb:
      'Buy units onto a grid and drag matching ones together to merge them into stronger tiers, then send them against incoming waves to defend your base. Includes base health and a spawn-level upgrade.',
    tags: ['Merge grid', 'Unit tiers', 'Wave combat', 'Upgrades'],
  },
  {
    id: 2,
    src: '/videos/2.mp4',
    poster: '/videos/2.jpg',
    title: 'Tower Defense System',
    blurb:
      'The core tower defense loop: waves of enemies follow a path, players place units with a visible range preview, kills pay cash, and leaks cost base health.',
    tags: ['Wave spawner', 'Pathing enemies', 'Unit placement', 'Cash economy'],
  },
  {
    id: 1,
    src: '/videos/1.mp4',
    poster: '/videos/1.jpg',
    title: 'Grow a Garden System',
    blurb:
      'A Grow a Garden-style loop: plant seeds on your plot, watch them grow through visible stages over time, then harvest and sell for cash.',
    tags: ['Plot ownership', 'Timed growth stages', 'Harvest & sell'],
  },
]

// Ordered high → low: the first number a buyer reads sets the frame for the rest.
const pricingTiers = [
  { price: '$1000+', label: 'High-quality / polished game systems' },
  { price: '$300+', label: 'Prototypes & average-sized game systems' },
  { price: '$100+', label: 'Small / normal tasks' },
]

const ELEMENTAL_ARENA_PLACE_ID = '78637124287592'
const TOY_TOWER_DEFENSE_PLACE_ID = '126901770646936'

const stats = [
  { value: '60M+', label: 'Visits contributed' },
  { value: 'BSc', label: 'Computer Science — graduated 2025' },
]

function Home() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="animate-fade-in">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/masterjj-faceshot.png"
              alt="Master_JJ"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full ring-1 ring-border flex-shrink-0"
            />
            <div>
              <p className="text-text-secondary text-sm mb-2 tracking-widest uppercase">Roblox Scripter · Combat &amp; Simulators</p>
              <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
                Master_JJ
              </h1>
            </div>
          </div>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10">
            I build Roblox game systems that ship — <span className="text-text font-semibold">60M+ visits</span> across
            live games, from combat frameworks to full simulator loops.
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm hover:no-underline"
            >
              Commission Me
            </Link>
            <a
              href="#work"
              className="btn-secondary text-sm hover:no-underline"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 mt-14 animate-slide-up">
          {stats.map((s) => (
            <div key={s.value} className="border border-border rounded-xl p-5">
              <p className="text-2xl font-bold text-text mb-1">{s.value}</p>
              <p className="text-xs text-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured — first thing below the hero */}
      <section id="work" className="max-w-6xl mx-auto px-6 pb-16 scroll-mt-20">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Featured</p>
        <h2 className="section-title mb-8">Latest Game</h2>
        <VideoCard
          src={featuredVideo.src}
          poster={featuredVideo.poster}
          title={featuredVideo.title}
          blurb={featuredVideo.blurb}
          tags={featuredVideo.tags}
          aspect="aspect-video"
          autoPlayInView
        />
      </section>

      {/* Combat Frameworks */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Combat</p>
        <h2 className="section-title mb-3">Combat Frameworks</h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mb-8">
          Combat that feels sharp for players and stays easy for your team to extend. Hits are
          decided by the server on a fixed tick, so fights play the same at any frame rate. Moves
          are config, not code: a new attack is its damage, hitbox and cooldown filled in, with no
          new scripts. Under the hood it's an ECS framework. Every clip below is my own code.
        </p>
        <div className="flex flex-col gap-6">
          {combatVideos.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              poster={video.poster}
              title={video.title}
              blurb={video.blurb}
              tags={video.tags}
              aspect={video.aspect ?? 'aspect-[1920/838]'}
              autoPlayInView
            />
          ))}
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      {/* Solo Dev */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Solo Dev</p>
        <h2 className="section-title">My Games</h2>
        <div className="grid md:grid-cols-2 gap-4">

          <RobloxGameCard
            placeId={ELEMENTAL_ARENA_PLACE_ID}
            label="Elemental Arena"
          />

          <RobloxGameCard
            placeId={TOY_TOWER_DEFENSE_PLACE_ID}
            label="Toy Tower Defense"
          />

          <RobloxGameCard
            placeId="88088398050234"
            label="Leaf Blower Simulator"
          />

          <RobloxGameCard
            placeId="99071281805726"
            label="Crystal Incremental"
          />
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      {/* Live Projects — proof the work shipped */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Commission Work</p>
        <h2 className="section-title">Games I've Worked On</h2>
        <div className="grid md:grid-cols-2 gap-4">

          <RobloxGameCard
            placeId="77244716807270"
            label="Pawn Shop Simulator"
          />

          <RobloxGameCard
            placeId="100337093788565"
            label="[🍀] evil plate game"
          />


        </div>
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      {/* Simulator & game systems */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Portfolio</p>
        <h2 className="section-title">Simulator & Game Systems</h2>
        <div className="grid md:grid-cols-2 gap-5 items-start">
          {systemVideos.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              poster={video.poster}
              title={video.title}
              blurb={video.blurb}
              tags={video.tags}
            />
          ))}
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      {/* Commission pricing */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Pricing</p>
        <h2 className="section-title">Commissions</h2>
        <div className="card p-8 max-w-2xl">
          <h3 className="text-lg font-semibold text-text mb-6">Custom Roblox Development</h3>

          <div className="flex flex-col gap-3 mb-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.price}
                className="flex items-baseline gap-4 border border-border rounded-lg p-4"
              >
                <p className="text-lg font-bold text-text whitespace-nowrap w-28 flex-shrink-0">
                  {tier.price}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{tier.label}</p>
              </div>
            ))}
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Payment is split <span className="text-text font-semibold">50% upfront</span> to begin work,
            and <span className="text-text font-semibold">50% upon completion</span> — this keeps both
            sides committed on fair terms.
          </p>

          <ul className="text-sm text-text-secondary space-y-2 leading-relaxed mb-6">
            <li>→ Revisions included within scope</li>
            <li>→ Full source files delivered after final payment</li>
          </ul>

          <div className="border border-border rounded-lg p-4 text-xs text-text-muted leading-relaxed">
            Full games or very large systems get a custom quote. Send your budget and deadline
            with your first message and I can quote you right away.
          </div>

          <Link to="/contact" className="btn-primary text-sm mt-6 inline-block hover:no-underline">
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
          <p className="text-text-muted text-xs">© {new Date().getFullYear()} Master_JJ</p>
          <Link to="/shop" className="text-text-muted text-xs hover:text-text-secondary">
            Assets shop →
          </Link>
        </div>
      </footer>

    </div>
  )
}

export default Home
