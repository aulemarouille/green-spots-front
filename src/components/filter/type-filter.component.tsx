import { SpotType, spotTypes } from "@/types/spots";
import { TypeOption } from "./type-option.component";

interface TypeFilterProps {
  selectedType: SpotType;
  onTypeChange: (newType: SpotType) => void;
}

export default function TypeFilter({
  selectedType,
  onTypeChange,
}: TypeFilterProps) {
  return (
    <ul className="flex gap-2 md:gap-7 justify-center my-3">
      {spotTypes.map((type) => (
        <TypeOption
          key={type}
          type={type}
          onTypeChange={onTypeChange}
          selectedType={selectedType}
        />
      ))}
    </ul>
  );
}
