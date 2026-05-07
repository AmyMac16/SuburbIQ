"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { nzSuburbs } from "@/data/nz-suburbs";

interface Props {
  onSelect: (suburb: any) => void;
}

export default function SuburbSearch({ onSelect }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return [];

    const search = query.toLowerCase();

    return nzSuburbs
      .map((suburb) => {
        const suburbMatch =
          suburb.suburb_name.toLowerCase().startsWith(search);

        const cityMatch =
          suburb.city.toLowerCase().startsWith(search);

        let score = 0;

        if (suburbMatch) score += 100;
        if (cityMatch) score += 50;

        if (
          suburb.suburb_name.toLowerCase().includes(search)
        ) {
          score += 25;
        }

        return {
          suburb,
          score,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((item) => item.suburb);
  }, [query]);

  return (
    <div className="relative">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-4 text-zinc-500" size={18} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any NZ suburb..."
            className="w-full bg-black border border-zinc-800 rounded-xl pl-12 pr-5 py-4 outline-none focus:border-lime-400"
          />
        </div>
      </div>

      {filtered.length > 0 && (
        <div className="absolute w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden z-50">
          {filtered.map((suburb) => (
            <button
              key={suburb.id}
              onClick={() => {
                onSelect(suburb);
                setQuery("");
              }}
              className="w-full text-left px-5 py-4 hover:bg-zinc-900 transition border-b border-zinc-800 last:border-none"
            >
              <div className="font-semibold">
                {suburb.suburb_name}
              </div>

              <div className="text-sm text-zinc-500">
                {suburb.suburb_name} • {suburb.city}, {suburb.region}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}