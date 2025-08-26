import { Sparkles } from 'lucide-react';

interface DiscoverSpotButtonProps {
	discoverSpot: () => void;
}

export function DiscoverSpotButton({ discoverSpot }: DiscoverSpotButtonProps) {
	return (
		<div className="flex w-full justify-center">
        <button
          onClick={discoverSpot}
          className="
                text-white bg-(--primary-color) text-sm 
                hover:bg-(--primary-color-dark) transition-colors duration-200
                flex gap-2 items-center justify-center 
                py-3 px-5 mt-5 w-[600px] rounded-lg cursor-pointer
              "
        >
          <Sparkles
            size={26}
            strokeWidth={1}
            stroke="var(--primary-color)"
            fill="white"
          />
          Découvrir un nouveau spot
        </button>
      </div>
	);
}
