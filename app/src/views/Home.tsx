import HomeAddParking from "@/components/HomeAddParking";
import HomeHero from "@/components/HomeHeroSearch";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeAddParking />

      {/* Rest of the sections will go here */}
    </div>
  );
}
