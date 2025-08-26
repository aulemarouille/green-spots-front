import { getAllSpots, handleApiError } from "@/services/spots.service";
import { Spot, SpotType } from "@/types/spots";
import { useEffect, useState } from "react";

export const useSpots = (initialType: SpotType = "all") => {
  const [spotMap, setSpotMap] = useState<Map<SpotType, Spot[]>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<SpotType>(initialType);

  useEffect(() => {
    fetchSpots();
  }, []);

  function changeType(newType: SpotType): void {
    setSelectedType(newType);
  }

  async function fetchSpots() {
    try {
      setLoading(true);
      setError(null);

      const response = await getAllSpots();
      const map: Map<SpotType, Spot[]> = new Map([["all", response.spots]]);

      for (const spot of response.spots) {
        const group = map.get(spot.type) ?? [];
        group.push(spot);
        map.set(spot.type, group);
      }

      setSpotMap(map);
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return {
    spots: spotMap.get(selectedType) ?? [],
    loading,
    error,
    selectedType,
    changeType,
    refetch: () => fetchSpots(),
  };
};
