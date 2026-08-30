import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import RobloxGameCard from '../components/RobloxGameCard'

// ⬇️ Featured combat work — the first thing a commissioner sees.
// These are cropped to the game viewport, so they run ultrawide rather than 16:9.
// The `tags` are what a buyer scans for: edit them to match what you actually built.
const combatVideos = [
  {
    id: 'luffy',
    src: '/videos/luffy-combat.mp4',
    poster: '/videos/luffy-combat.jpg',
    title: 'Luffy Combat System',
    blurb:
      'Built on an ECS architecture with a fixed-step scheduler, so every hit resolves in a deterministic order — the same inputs always produce the same fight. Moves, hitboxes, damage and cancel windows are defined as data, so a new attack is a config entry rather than a new script.',
    tags: ['ECS architecture', 'Data-driven moveset', 'Deterministic scheduler', 'Block / punish states'],
  },
  {
    id: 'parry',
    src: '/videos/parry-combat.mp4',
    poster: '/videos/parry-combat.jpg',
    title: 'Parry-Based Combat System',
    blurb:
      'Timing-critical combat where determinism is the whole product — the scheduler resolves parry, grab and counter windows on a fixed tick, so the outcome never depends on frame rate. The same ECS core scales from a 1v1 duel to a server full of fighters without per-entity script overhead.',
    tags: ['Deterministic tick', 'Parry & grab windows', 'ECS architecture', 'Scales to full servers'],
  },
  {
    id: 'gojo',
    src: '/videos/gojo-combat.mp4',
    poster: '/videos/gojo-combat.jpg',
    title: 'Gojo Combat System',
    blurb:
      'Ability-driven combat with a slotted moveset — each ability carries its own cooldown, cast timing and VFX sequence as data, so the roster grows without the framework changing.',
    tags: ['Ability system', 'Data-driven moveset', 'Cooldown & cast timing', 'VFX sequencing'],
  },
]

// ⬇️ Simulator / systems work
const systemVideos = [
  {
    id: 'crystal-cutter',
    src: '/videos/crystal-cutter.mp4',
    poster: '/videos/crystal-cutter.jpg',
    title: 'My Crystal Cutter — Solo Developed',
    blurb:
      'Designed, scripted and shipped entirely by me — no team. A full RNG progression loop: crystal roll spinning, rebirths that reset for permanent multipliers, stacking aura effects, and an admin abuse system for live events.',
    tags: ['Solo developed', 'Rebirth progression', 'RNG spinning', 'Aura system', 'Admin abuse system'],
  },
  { id: 1, src: '/videos/1.mp4', poster: '/videos/1.jpg', title: 'Grow a Garden System' },
  { id: 2, src: '/videos/2.mp4', poster: '/videos/2.jpg', title: 'Tower Defense System' },
  { id: 3, src: '/videos/3.mp4', poster: '/videos/3.jpg', title: 'Merge vs Mobs Prototype' },
  { id: 5, src: '/videos/5.mp4', poster: '/videos/5.jpg', title: 'Clean The Eggs' },
  { id: 6, src: '/videos/6.mp4', poster: '/videos/6.jpg', title: 'Command Your Noob Army' },
]

// Ordered high → low: the first number a buyer reads sets the frame for the rest.
const pricingTiers = [
  { price: '$1000+', label: 'High-quality / polished game systems' },
  { price: '$300+', label: 'Prototypes & average-sized game systems (minimum)' },
  { price: '$100+', label: 'Small / normal tasks' },
]

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
              <p className="text-text-secondary text-sm mb-2 tracking-widest uppercase">Roblox Developer</p>
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
            <Link
              to="/shop"
              className="btn-secondary text-sm hover:no-underline"
            >
              Browse Shop
            </Link>
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

      {/* Combat Frameworks — featured, first thing below the hero */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Featured</p>
        <h2 className="section-title mb-3">Combat Frameworks</h2>
        <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mb-8">
          Combat built like engine code, not gameplay scripts — an ECS core, a fixed-step
          scheduler for deterministic hit resolution, and movesets defined as data so new
          attacks ship without touching the framework. Every clip below is my own code, running live.
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
              aspect="aspect-[1920/838]"
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
            placeId="83479981830294"
            label="[💎] My Crystal Cutter"
          />

          <RobloxGameCard
            placeId="99071281805726"
            label="[💎] Crystal Incremental"
          />
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      {/* Live Projects — proof the work shipped */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Commission Work</p>
        <h2 className="section-title">Live Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">

          <RobloxGameCard
            placeId="77244716807270"
            label="Pawn Shop Simulator"
          />

          <RobloxGameCard
            placeId="100337093788565"
            label="[🍀] evil plate game"
          />

          <RobloxGameCard
            placeId="131341951728937"
            label="My Mutants"
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

          <div className="border border-border rounded-lg p-4 text-xs text-text-muted leading-relaxed">
            Large-scale or highly complex games fall outside these ranges and need a custom quote.
            Please only reach out once your budget is ready.
          </div>

          <Link to="/contact" className="btn-primary text-sm mt-6 inline-block hover:no-underline">
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
          <p className="text-text-muted text-xs">© 2025 Master_JJ</p>
          <p className="text-text-muted text-xs">Built with precision</p>
        </div>
      </footer>

    </div>
  )
}

export default Home
