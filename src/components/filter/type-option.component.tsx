import { SPOT_TYPE_COLORS, SPOT_TYPE_LABELS, SpotType } from "@/types/spots";
import {
  Apple,
  House,
  Layers,
  Leaf,
  PlugZap,
  ShoppingCart,
} from "lucide-react";
import { CSSProperties, JSX } from "react";

export const SPOT_TYPE_ICONS: Record<SpotType, JSX.Element> = {
  organic_market: <Leaf />,
  eco_accommodation: <House />,
  charging_station: <PlugZap />,
  local_producer: <Apple />,
  bio_shop: <ShoppingCart />,
  all: <Layers />,
} as const;

interface CSSVariables extends CSSProperties {
  "--spot-color"?: string;
}

interface TypeOptionProps {
  type: SpotType;
  selectedType: SpotType;
  onTypeChange: (newType: SpotType) => void;
}

export function TypeOption({
  type,
  selectedType,
  onTypeChange,
}: TypeOptionProps) {
  function handleTypeChange(): void {
    if (type === selectedType) {
      onTypeChange("all");
      return;
    }
    onTypeChange(type);
  }

  return (
    <li
      className={`
				flex flex-col items-center gap-2 md:w-[120px] cursor-pointer group
				transition-colors duration-200 p-2 sm:p-4 md:p-2 md:pt-3 rounded-md
				hover:bg-(--spot-color)/20
				${selectedType === type ? "bg-(--spot-color)/20" : ""}
			`}
      style={{ "--spot-color": SPOT_TYPE_COLORS[type] } as CSSVariables}
      onClick={handleTypeChange}
    >
      <span
        className={`
					inline-block p-3 md:p-2 rounded-full  
      		transition-colors duration-200 
      		group-hover:text-white group-hover:bg-(--spot-color)
					${
            selectedType === type
              ? "text-white bg-(--spot-color)"
              : "text-(--spot-color) bg-(--spot-color)/20"
          }
				`}
      >
        {SPOT_TYPE_ICONS[type]}
      </span>
      <span
        className="
					text-center leading-[1.3] text-(--spot-color) 
          hidden md:block
				"
      >
        {SPOT_TYPE_LABELS[type]}
      </span>
    </li>
  );
}
