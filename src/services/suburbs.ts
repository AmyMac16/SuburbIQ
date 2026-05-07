import { supabase } from "@/lib/supabase";

export async function searchSuburbs(query: string) {
  if (!query || query.length < 2) {
    return [];
  }

  const { data, error } = await supabase
    .from("suburbs")
    .select("*")
    .or(
      `suburb_name.ilike.%${query}%,city.ilike.%${query}%,region.ilike.%${query}%`
    )
    .limit(12);

  if (error) {
    console.error("Suburb search error:", error);
    return [];
  }

  return data;
}
