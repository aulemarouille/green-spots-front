"use client";

import Loader from "@/components/loader.component";
import Map from "@/components/map/map.component";
import PageLayout from "@/components/page-layout.component";
import TypeFilter from "@/components/filter/type-filter.component";
import { useSpots } from "@/hooks/useSpots";

export default function HomePage() {
  const { spots, loading, error, selectedType, changeType } = useSpots();

  return (
    <main>
      <PageLayout title="Explorez la Bretagne" accentWord="durable">
        
        {loading && <Loader text="Récupération des spots" />}

        {!loading && !error && (
          <>
            <TypeFilter onTypeChange={changeType} selectedType={selectedType} />
            <Map spots={spots} selectedType={selectedType} />
          </>
        )}
      </PageLayout>
    </main>
  );
}
