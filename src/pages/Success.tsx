export default function Success() {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <h1 className="text-5xl font-bold gradient-text mb-2 animate-fade-in">
              Payment Successful
            </h1>
            <p className="text-lg text-gray-400 animate-fade-in">
              Thank you for your purchase 🎉
            </p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-xl w-full">
            <div className="skill-card text-center animate-slide-up">
              <div className="text-6xl mb-6">✅</div>
  
              <h2 className="text-2xl font-semibold text-green-400 mb-4">
                Your payment was completed successfully
              </h2>
  
              <p className="text-gray-400 text-lg leading-relaxed">
                Your files will be sent to the email address you used at checkout.
                If you don’t see the email within a few minutes, please check your spam folder.
              </p>
  
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/shop"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Back to Shop
                </a>
  
                <a
                  href="/"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center">
            <p className="text-gray-400">
              © 2025 Master_JJ — Roblox Developer Portfolio
            </p>
          </div>
        </footer>
      </div>
    )
  }
  