import {
  Spot,
  SPOT_TYPE_COLORS,
  SPOT_TYPE_LABELS,
  SpotType,
} from "@/types/spots";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import SpotPopup from "../spot-popup/spot-popup.component";
import { DiscoverSpotButton } from "./discover-spot-button.component";

interface DynamicMapProps {
  spots: Spot[];
  selectedType: SpotType;
}

export default function DynamicMap({ spots, selectedType }: DynamicMapProps) {
  const [mounted, setMounted] = useState(false);
  const mapRef = useRef<L.Map>(null);
  const markerRefs = useRef<L.Marker[]>([]);

  // Create custom icons for different spot types
  const createCustomIcon = (type: SpotType) => {
    const color = SPOT_TYPE_COLORS[type];
    return L.divIcon({
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      className: "custom-marker",
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Fix for default markers in react-leaflet
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  /**
   * Close all popups and reset markers on type changes
   */
  useEffect(() => {
    markerRefs.current.forEach((marker) => marker?.closePopup());
    markerRefs.current = [];
  }, [selectedType]);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.setView([48.202, -2.9326], 8); // Reset map settings
  }, [selectedType]);

  /**
   * Open a random spot popup on the map
   */
  function handleDiscoverSpot(): void {
    const markers = markerRefs.current;

    if (markers.length === 0) return;

    const randomMarker = markers[Math.floor(Math.random() * markers.length)];
    randomMarker.openPopup();
  }

  if (!mounted) {
    return (
      <div className="w-full h-[50vh] bg-(--bg-light) rounded-lg flex items-center justify-center">
        <p className="text-(--title-color)">Chargement de la carte...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[55vh] rounded-lg overflow-hidden shadow-lg">
        {/* Map */}
        <MapContainer
          key={selectedType}
          center={[48.202, -2.9326]} // Center of Bretagne
          zoom={8}
          className="w-full h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {spots.map((spot, index) => (
            <Marker
              key={`${spot.latitude}-${spot.longitude}-${index}`} // Unique key
              position={[spot.latitude, spot.longitude]}
              icon={createCustomIcon(spot.type)}
              ref={(marker) => {
                if (marker) markerRefs.current[index] = marker;
              }}
            >
              <SpotPopup spot={spot} />
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Map caption */}
      <p className="text-center text-gray-400 font-light text-sm mt-2">
        {selectedType === "all"
          ? "Tous les spots"
          : SPOT_TYPE_LABELS[selectedType]}{" "}
        • Total : {spots.length ?? 0}
      </p>

      {/* Button open random spot popup */}
      <DiscoverSpotButton discoverSpot={handleDiscoverSpot} />
    </>
  );
}
