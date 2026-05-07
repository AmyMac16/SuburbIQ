export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0c0f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <header className="border-b border-zinc-800 pb-8 mb-10">
          <h1 className="text-7xl font-black tracking-tight">
            SUBURB<span className="text-lime-400">IQ</span>
          </h1>

          <p className="mt-3 text-zinc-500 uppercase tracking-[0.3em] text-sm">
            NZ Property Investment Intelligence
          </p>
        </header>

        <section>
          <div className="border border-zinc-800 bg-zinc-950 p-6 rounded-2xl">
            
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Search Suburbs
            </p>

            <div className="flex gap-3">
              <input
                placeholder="Search any NZ suburb..."
                className="flex-1 bg-black border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-lime-400"
              />

              <button className="bg-lime-400 text-black font-bold px-8 rounded-xl">
                Lookup
              </button>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
