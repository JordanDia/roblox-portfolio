import YouTubeEmbed from './components/YouTubeEmbed'
// import CustomVideoPlayer from './components/CustomVideoPlayer' // Keep for future use

function App() {

  const videos = [
    {
      id: 0,
      title: "Steal A Game",
      youtubeId: "eoLeqOjy0IM", // Just the video ID from the URL
      description: "Steal A Game Template"
    },
    {
      id: 1,
      title: "Item Shop",
      youtubeId: "sRLMfwZ2_qo", // Just the video ID from the URL
      description: "Monetization with Gamepasses and Robux"
    },
    {
      id: 2,
      title: "Lightning Strike",
      youtubeId: "CYSkNCNjhAo", // Just the video ID from the URL
      description: "Cool lightning strike attack"
    },
    {
      id: 3,
      title: "Combat System", 
      youtubeId: "vvPVIgnU3q0", // Replace with actual YouTube video ID
      description: "Basic combat system with a graphical user interface"
    },
    {
      id: 4,
      title: "Fireball Attack",
      youtubeId: "OsBN5A6BjQo", // Replace with actual YouTube video ID
      description: "Basic fireball attack"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-6xl font-bold gradient-text text-center mb-2 animate-fade-in">
            Master_JJ
          </h1>
          <p className="text-lg text-gray-400 text-center mb-6 animate-fade-in">
            Discord: masterjj
          </p>
          <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Passionate Roblox developer specializing in game mechanics and scripting. 
            Creating immersive worlds and engaging gameplay experiences that bring ideas to life.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Video Showcase Section */}
        <section className="mb-20">
          <h2 className="section-title animate-fade-in">
            Recent Work Showcase
          </h2>
          
          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {videos.map((video) => (
              <YouTubeEmbed
                key={video.id}
                youtubeId={video.youtubeId}
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="section-title animate-fade-in">
            Skills & Expertise
          </h2>
                      <div className="grid md:grid-cols-3 gap-8">
              <div className="skill-card group animate-slide-up">
                <div className="text-5xl mb-6">🎮</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Game Development</h3>
                <p className="text-gray-400">Creating engaging gameplay mechanics and immersive worlds with attention to detail and performance optimization.</p>
              </div>
              <div className="skill-card group animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Scripting</h3>
                <p className="text-gray-400">Advanced Lua scripting for complex game systems, efficient algorithms, and scalable architecture.</p>
              </div>
              <div className="skill-card group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Web Development</h3>
                <p className="text-gray-400">Creating modern, responsive web applications with clean code and exceptional user experiences.</p>
              </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="section-title animate-fade-in">
            Commission Pricing
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="skill-card group animate-slide-up text-center">
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Roblox Commissions</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I offer flexible pricing for custom Roblox development work. 
                <span className="text-blue-400 font-semibold"> Payment is split 50/50: half upfront to begin work, and half upon completion.</span>
              </p>
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-300 text-sm">
                  💡 <span className="font-semibold">Why this structure?</span> It ensures both parties are committed to the project while maintaining fair terms for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Master_JJ - Roblox Developer Portfolio
          </p>
          <p className="text-gray-500 mt-2">
            Built with passion and precision
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
