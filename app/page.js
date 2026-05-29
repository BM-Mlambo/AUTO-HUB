import Chatbot from "./Components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      {/* Hero Section */}
      <section
        className="relative min-h-[480px] md:min-h-[540px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=85')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06200e]/85 via-[#0d3d1e]/75 to-[#163e26]/60" />

        {/* Content */}
        <div className="relative z-10 px-4 py-16 md:py-20 max-w-2xl mx-auto w-full">
          <span className="inline-block bg-white/10 text-green-300 text-xs px-4 py-1 rounded-full border border-white/20 mb-5 tracking-wider">
            🌍 Serving Kenya & East Africa
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Find Your Perfect{" "}
            <span className="text-green-400">Dream Car</span> Today
          </h1>
          <p className="text-green-100 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Quality, trusted and affordable vehicles curated for you.
            Browse hundreds of verified cars from top dealers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/cars" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-green-800 px-8 py-3 rounded-xl font-medium hover:bg-green-50 transition text-sm md:text-base">
                Browse Cars →
              </button>
            </a>
            <button className="w-full sm:w-auto border-2 border-white/40 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition text-sm md:text-base">
              Sell Your Car
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-black text-white">500+</div>
              <div className="text-xs text-green-400 uppercase tracking-widest mt-1">Cars Listed</div>
            </div>
            <div className="hidden sm:block w-px bg-white/20" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-black text-white">200+</div>
              <div className="text-xs text-green-400 uppercase tracking-widest mt-1">Happy Buyers</div>
            </div>
            <div className="hidden sm:block w-px bg-white/20" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-black text-white">50+</div>
              <div className="text-xs text-green-400 uppercase tracking-widest mt-1">Trusted Dealers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-green-700 mb-2">Why Choose Us</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800">Everything You Need in One Place</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: "✅", title: "Verified Listings", desc: "Every car goes through a verification process before listing." },
            { icon: "💰", title: "Best Prices", desc: "Competitive pricing with transparent costs — no hidden fees." },
            { icon: "🔒", title: "Secure Deals", desc: "Safe and secure transactions with buyer protection." },
            { icon: "🚗", title: "Wide Selection", desc: "Hundreds of models from sedans to SUVs and trucks." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center text-xl mb-4">{f.icon}</div>
              <h3 className="font-medium text-gray-800 mb-1 text-sm md:text-base">{f.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-4 md:mx-auto max-w-5xl mb-12 px-0 md:px-6">
        <div className="bg-gradient-to-br from-[#0d3d1e] to-[#1a5c2e] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">Ready to Find Your Car?</h2>
          <p className="text-green-200 text-sm md:text-base mb-6">Join thousands of happy buyers across Kenya and East Africa.</p>
          <a href="/cars">
            <button className="bg-white text-green-800 px-8 py-3 rounded-xl font-medium hover:bg-green-50 transition text-sm md:text-base">
              Browse All Cars →
            </button>
          </a>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </main>
  )
}