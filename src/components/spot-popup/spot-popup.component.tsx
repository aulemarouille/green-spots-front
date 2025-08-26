import { Spot, SPOT_TYPE_COLORS, SPOT_TYPE_LABELS } from "@/types/spots";
import {
  CircleDollarSign,
  Clock,
  Globe,
  MapPin,
  Phone,
  PlugZap,
} from "lucide-react";
import { Popup } from "react-leaflet";
import SpotInfoItem from "./info-wrapper.component";
import SpotInfoList from "./info-list.component";
import { formatPhoneNumberForTel } from "@/lib/utils";

interface SpotPopupProps {
  spot: Spot;
}

export default function SpotPopup({ spot }: SpotPopupProps) {
  return (
    <Popup>
      <div className="p-2 min-w-64 font-(family-name:--font-poppins) text-(--text-color)">
        <h3 className="font-bold text-3xl text-(--title-color) font-(family-name:--font-caveat) mb-2">
          {spot.name}
        </h3>

        <div className="my-2">
          <span
            className="inline-block px-2 py-1 rounded-lg text-xs text-white"
            style={{ backgroundColor: SPOT_TYPE_COLORS[spot.type] }}
          >
            {SPOT_TYPE_LABELS[spot.type]}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm">{spot.description}</span>

          {/* Spot details */}
          {spot.address && (
            <SpotInfoItem icon={MapPin}>{spot.address}</SpotInfoItem>
          )}

          {spot.openingHours && (
            <SpotInfoItem icon={Clock}>{spot.openingHours}</SpotInfoItem>
          )}

          {spot.website && (
            <SpotInfoItem icon={Globe}>
              <a
                href={spot.website}
                target="_blank"
                rel="noopener"
                className="!text-(--primary-color)"
              >
                {spot.website}
              </a>
            </SpotInfoItem>
          )}

          {spot.phone && (
            <SpotInfoItem icon={Phone}>
              <a
                href={formatPhoneNumberForTel(spot.phone)}
                target="_blank"
                rel="noopener"
                className="!text-(--primary-color)"
              >
                {spot.phone}
              </a>
            </SpotInfoItem>
          )}

          {spot.priceRange && (
            <SpotInfoItem icon={CircleDollarSign}>
              {spot.priceRange}
            </SpotInfoItem>
          )}

          {spot.power && (
            <SpotInfoItem icon={PlugZap}>{spot.power}</SpotInfoItem>
          )}

          {/* Spot certifications or specialities */}
          <SpotInfoList
            title="Certifications"
            items={spot.certifications ?? []}
          />

          {!spot.certifications && (
            <SpotInfoList title="Spécialités" items={spot.specialties ?? []} />
          )}
        </div>
      </div>
    </Popup>
  );
}
