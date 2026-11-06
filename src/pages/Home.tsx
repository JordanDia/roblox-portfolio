import { Link } from 'react-router-dom'
import FeaturedWorkCard from '../components/FeaturedWorkCard'
import SystemClipCard from '../components/SystemClipCard'
import TrackRecordRow from '../components/TrackRecordRow'
import DiscordCta from '../components/DiscordCta'
import Reveal from '../components/Reveal'
import { featuredWorks, moreSystems, trackRecord } from '../data/featuredWorks'
import { formatExact, useTotalVisits } from '../hooks/useRobloxStats'

// Ordered high → low: the first number a buyer reads sets the frame for the rest.
const pricingTiers = [
  { price: '$1000+', label: 'High-quality / polished game systems' },
  { price: '$300+', label: 'Prototypes & average-sized game systems' },
  { price: '$100+', label: 'Small / normal tasks' },
]

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs text-text-muted uppercase tracking-widest mb-2">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-text">{title}</h2>
      {intro && <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mt-3">{intro}</p>}
    </div>
  )
}

function Home() {
  // Exact, live sum of the games listed in the track record.
  const totalVisits = useTotalVisits(trackRecord.map((g) => g.placeId))

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="animate-fade-in">
          <div className="flex items-center gap-5 mb-8">
            <img
              src="/masterjj-faceshot.png"
              alt="Master_JJ"
              width={96}
              height={96}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full ring-1 ring-border flex-shrink-0"
            />
            <div>
              <p className="text-text-secondary text-xs md:text-sm mb-1 tracking-widest uppercase">
                Roblox Scripter · Master_JJ
              </p>
              <p className="text-text-muted text-xs">BSc Computer Science, 2025</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text leading-[1.05] tracking-tight max-w-4xl mb-6">
            Whatever your game needs, I can build it.
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Tower defense, PvP, simulators, RNG loops, combat frameworks: full games and the systems inside them, shipped live on Roblox.
            {totalVisits != null && (
              <>
                {' '}
                <span className="text-text font-semibold tabular-nums">{formatExact(totalVisits)}</span> visits
                across the games below, counted live from Roblox.
              </>
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm hover:no-underline">
              Commission Me
            </Link>
            <a href="#work" className="btn-secondary text-sm hover:no-underline">
              See the work ↓
            </a>
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section id="work" className="max-w-6xl mx-auto px-6 pb-20 scroll-mt-20">
        <SectionHead eyebrow="Featured" title="Featured Works" />
        <div className="flex flex-col gap-8">
          {featuredWorks.map((work, i) => (
            <Reveal key={work.id}>
              <FeaturedWorkCard work={work} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal>
          <SectionHead
            eyebrow="Track record"
            title="Games & numbers"
            intro="Live numbers from the Roblox API, not rounded. Click a row to check it yourself."
          />
          <div className="card divide-y divide-border overflow-hidden">
            {trackRecord.map((g) => (
              <TrackRecordRow key={g.placeId} game={g} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* More systems */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal>
          <SectionHead
            eyebrow="Range"
            title="More systems"
            intro="Simulator and game-loop work for commissions and my own projects."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreSystems.map((clip) => (
              <SystemClipCard key={clip.id} clip={clip} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Pricing + contact */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal>
          <SectionHead eyebrow="Pricing" title="Commissions" />
          <div className="grid lg:grid-cols-[1fr_22rem] gap-6 items-start">
            <div className="card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-text mb-6">Custom Roblox Development</h3>

              <div className="flex flex-col gap-3 mb-6">
                {pricingTiers.map((tier) => (
                  <div key={tier.price} className="flex items-baseline gap-4 border border-border rounded-lg p-4">
                    <p className="text-lg font-bold text-text whitespace-nowrap w-28 flex-shrink-0">{tier.price}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{tier.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Payment is split <span className="text-text font-semibold">50% upfront</span> to begin work, and{' '}
                <span className="text-text font-semibold">50% upon completion</span>. This keeps both sides committed
                on fair terms.
              </p>

              <ul className="text-sm text-text-secondary space-y-2 leading-relaxed mb-6">
                <li>→ Revisions included within scope</li>
                <li>→ Full source files delivered after final payment</li>
              </ul>

              <div className="border border-border rounded-lg p-4 text-xs text-text-muted leading-relaxed">
                Full games or very large systems get a custom quote. Send your budget and deadline with your first
                message and I can quote you right away.
              </div>
            </div>

            <div className="card p-6">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-3">Contact</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                Fastest way to reach me. Usually replies within a day.
              </p>
              <DiscordCta />
              <Link to="/contact" className="block text-xs text-text-muted hover:text-text-secondary mt-4">
                What to include in your first message →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
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
