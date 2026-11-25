"use client";

import { experiences } from "@/data/experiences";
import DestinationCard from "@/components/DestinationCard";
import ExperienceCard from "@/components/ExperienceCard";
import HeroSearch from "@/components/HeroSearch";
import ValueBand from "@/components/ValueBand";
import { useFavorites } from "@/hooks/useFavorites";

const destinations = [
  { name: "Roma", count: 18, imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80" },
  { name: "Paris", count: 24, imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80" },
  { name: "Budapest", count: 16, imageUrl: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=700&q=80" },
  { name: "Lisboa", count: 21, imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=700&q=80" },
];

// Pick 6 recommended experiences (first 6 from the dataset)
const recommended = experiences.slice(0, 6);

export default function Home() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <main>
      <HeroSearch />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-black uppercase text-[#ff5b45]">Explora el mundo</p>
        <h2 className="mt-2 text-3xl font-black text-[#263238]">Actividades que valen la pena viajar</h2>
        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} {...destination} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <p className="text-sm font-black uppercase text-[#ff5b45]">Ideas para tu viaje</p>
        <h2 className="mt-2 text-3xl font-black text-[#263238]">Experiencias recomendadas</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {recommended.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              title={exp.title}
              destination={exp.destination}
              price={exp.price}
              rating={exp.rating}
              imageUrl={exp.imageUrl}
              favorite={favorites.has(exp.id)}
              onFavoriteChange={toggleFavorite}
            />
          ))}
        </div>
      </section>

      <ValueBand
        title="Reserva con tranquilidad"
        items={[
          { title: "Cancelacion flexible", description: "Cambia tus planes sin complicaciones en actividades seleccionadas." },
          { title: "Actividades verificadas", description: "Opciones revisadas para ayudarte a elegir con confianza." },
          { title: "Soporte de viaje", description: "Recibe ayuda antes y durante tu experiencia." },
        ]}
      />
    </main>
  );
}
