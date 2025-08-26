export interface Spot {
  name: string;
  type: SpotType;
  latitude: number;
  longitude: number;
  address: string;
  description: string;
  openingHours?: string;
  website?: string;
  phone?: string;
  priceRange?: string;
  power?: string;
  certifications?: string[];
  specialties?: string[];
}

export const spotTypes = [
  'organic_market',
  'eco_accommodation',
  'charging_station',
  'local_producer',
  'bio_shop',
] as const;

export type SpotType = typeof spotTypes[number] | 'all';

//export type SpotType =
//  | "organic_market"
//  | "eco_accommodation"
//  | "charging_station"
//  | "local_producer"
//  | "bio_shop";

export interface SpotsResponse {
  spots: Spot[];
  types: SpotType[];
  totalCount: number;
  region: string;
  type?: string;
}

export interface TypesResponse {
  types: string[];
  typeCounts: Record<string, number>;
  totalTypes: number;
  region: string;
}

export enum SpotTypeLabel {
  organic_market = "Marché bio",
  eco_accommodation = "Hébergement écologique",
  charging_station = "Borne de recharge électrique",
  local_producer = "Producteur local",
  bio_shop = "Magasin bio",
}

export const SPOT_TYPE_LABELS = {
  organic_market: "Marché bio",
  eco_accommodation: "Hébergement écologique",
  charging_station: "Borne de recharge",
  local_producer: "Producteur local",
  bio_shop: "Magasin bio",
  all: "Tout"
} as const;

export const SPOT_TYPE_COLORS = {
  organic_market: "#6BAF92",
  eco_accommodation: "#A57548",
  charging_station: "#3BAFDA",
  local_producer: "#E9B949",
  bio_shop: "#7B4B94",
  all: "gray"
} as const;
