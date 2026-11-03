// Building & modeling work. Kept off the home page on purpose: Home sells
// scripting, this page shows range. Order = best first — the first image in
// each list is shown large.

interface Shot {
  src: string
  title: string
  caption?: string
}

const models: Shot[] = [
  { src: '/images/web/low-poly-well.jpg', title: 'Low-Poly Well' },
  { src: '/images/web/wand.jpg', title: 'Twisted Wand' },
  { src: '/images/web/magic-staff.jpg', title: 'Magic Staff' },
  { src: '/images/web/low-poly-axe.jpg', title: 'Battle Axe' },
  { src: '/images/web/barrel.jpg', title: 'Barrel' },
]

const builds: Shot[] = [
  {
    src: '/images/web/shrine-lanterns.jpg',
    title: 'Forest Shrine',
    caption: 'Built in Roblox Studio: terrain, stone lanterns, shrine and lighting.',
  },
  { src: '/images/web/shrine-gate.jpg', title: 'Forest Shrine — gate' },
  { src: '/images/web/shrine-overview.jpg', title: 'Forest Shrine — overview' },
]

function Tile({ shot, large = false }: { shot: Shot; large?: boolean }) {
  return (
    <a
      href={shot.src}
      target="_blank"
      rel="noopener noreferrer"
      className={`group card overflow-hidden hover:no-underline ${large ? 'md:col-span-2' : ''}`}
    >
      <div className="aspect-video overflow-hidden bg-black">
        <img
          src={shot.src}
          alt={shot.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-text">{shot.title}</p>
        {shot.caption && <p className="text-xs text-text-secondary mt-1">{shot.caption}</p>}
      </div>
    </a>
  )
}

function Gallery({ shots }: { shots: Shot[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {shots.map((s, i) => (
        <Tile key={s.src} shot={s} large={i === 0} />
      ))}
    </div>
  )
}

export default function Builds() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 animate-fade-in">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Blender</p>
        <h1 className="section-title mb-8">Models</h1>
        <Gallery shots={models} />
      </section>

      <div className="divider max-w-6xl mx-auto px-6" />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Environment</p>
        <h2 className="section-title mb-8">Builds</h2>
        <Gallery shots={builds} />
      </section>
    </div>
  )
}
