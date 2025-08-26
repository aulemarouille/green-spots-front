import { Spot, SpotType } from "@/types/spots";
import dynamic from "next/dynamic";

// Import dynamique OBLIGATOIRE pour Leaflet
const DynamicMap = dynamic(() => import("@/components/map/dynamic-map.component"), {
  ssr: false,
});

interface MapProps {
  spots: Spot[];
  selectedType: SpotType;
}

export default function Map({ spots, selectedType }: MapProps) {
  return (
    <div className="mb-6">
      <DynamicMap spots={spots} selectedType={selectedType} />
    </div>
  );
}
