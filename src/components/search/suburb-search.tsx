"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { searchSuburbs } from "@/services/suburbs";

interface Props {
  onSelect: (suburb: any) => void;
}

export default function SuburbSearch({ onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(value: string) {
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);

    const suburbs = await searchSuburbs(value);

    setResults(suburbs);

    setLoading(false);
  }

  return (
    <div className="relative">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-4 text-zinc-500" size={18} />

          <input
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search any NZ suburb..."
            className="w-full bg-black border border-zinc-800 rounded-xl pl-12 pr-5 py-4 outline-none focus:border-lime-400"
          />
        </div>
      </div>

      {loading && (
        <div className="absolute w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-500">
          Searching suburbs...
        </div>
      )}

      {results.length > 0 && (
        <div className="absolute w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden z-50">
          {results.map((suburb) => (
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
                {suburb.city} • {suburb.region}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}