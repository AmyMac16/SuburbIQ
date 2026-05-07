"use client";

import { useState } from "react";
import SuburbSearch from "@/components/search/suburb-search";
import SuburbCard from "@/components/suburb/suburb-card";

export default function HomePage() {
  const [selectedSuburbs, setSelectedSuburbs] = useState<any[]>([]);

  function addSuburb(suburb: any) {
    const exists = selectedSuburbs.find(
      (s) => s.id === suburb.id
    );

    if (exists) return;

    setSelectedSuburbs((prev) => [...prev, suburb]);
  }

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

        <section className="mb-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

            <div className="mb-5">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Search Suburbs
              </p>
            </div>

            <SuburbSearch onSelect={addSuburb} />

          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {selectedSuburbs.map((suburb) => (
              <SuburbCard
                key={suburb.id}
                suburb={suburb}
              />
            ))}

          </div>
        </section>

      </div>
    </main>
  );
}
