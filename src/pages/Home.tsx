import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import RobloxGameCard from '../components/RobloxGameCard'

// ⬇️ Type each video's title here
const showcaseVideos = [
  { id: 1, src: "/videos/1.mp4", title: "Grow a Garden System" },
  { id: 2, src: "/videos/2.mp4", title: "Tower Defense System" },
  { id: 3, src: "/videos/3.mp4", title: "Merge vs Mobs Prototype" },
  { id: 4, src: "/videos/4.mp4", title: "Gojo Combat System" },
  { id: 5, src: "/videos/5.mp4", title: "Clean The Eggs" },
]

const pricingTiers = [
  { price: '$50 – $100', label: 'Small / normal tasks' },
  { price: '$300+', label: 'Prototypes & average-sized game systems (minimum)' },
  { price: '$1000', label: 'High-quality / polished game systems' },
]

const stats = [
  { value: '60M+', label: 'Visits contributed' },
  { value: 'BSc', label: 'Computer Science — graduated 2025' },
]

function Home() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="animate-fade-in">
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/masterjj-faceshot.png"
              alt="Master_JJ"
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
            live games, from full simulator loops to combat frameworks.
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
        <div className="grid grid-cols-2 gap-4 mt-16 animate-slide-up">
          {stats.map((s) => (
            <div key={s.value} className="border border-border rounded-xl p-5">
              <p className="text-2xl font-bold text-text mb-1">{s.value}</p>
              <p className="text-xs text-text-secondary">{s.label}</p>
            </div>
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
            placeId = "99071281805726"
            label = "[💎] Crystal Incremental"
          />

          <RobloxGameCard
            placeId = "109735585951652"
            label = "Command Your Noob Army ⚔️"
          />

          <RobloxGameCard
            placeId="102479137412335"
            label="Awareness Incremental"
          />
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      {/* Live Projects */}
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

      {/* Video Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Portfolio</p>
        <h2 className="section-title">Work Showcase</h2>
        <div className="grid md:grid-cols-2 gap-5 items-start">
          {showcaseVideos.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              title={video.title}
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
