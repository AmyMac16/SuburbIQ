export interface Suburb {
  id: number;
  suburb_name: string;
  city: string;
  region: string;
  slug: string;
}

export interface SuburbSnapshot {
  sold_12m: number;
  active_listings: number;
  median_days_on_market: number;
  median_price: number;
  median_rent: number;
  annual_growth_percent: number;
  vendor_discount_percent: number;
  rental_yield: number;
  market_pressure_score: number;
  final_score: number;
}
