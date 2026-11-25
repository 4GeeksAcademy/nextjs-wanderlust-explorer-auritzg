"use client";

import { useEffect } from "react";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, favoriteCount } = useFavorites();

  const favoriteExperiences = experiences.filter((e) => favorites.has(e.id));

  useEffect(() => {
    document.title = "Mis favoritos — Wanderlust Explorer";
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black text-[#263238]">Mis favoritos</h1>
      <p className="mt-2 text-sm text-[#5d6b70]">
        {favoriteCount()} {favoriteCount() === 1 ? "experiencia guardada" : "experiencias guardadas"}
      </p>

      {favoriteExperiences.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-2xl font-black text-[#263238]">
            Aún no tienes favoritos
          </p>
          <p className="mt-2 text-[#5d6b70]">
            Explora experiencias y marca las que más te gusten con el corazón.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-block rounded-md bg-[#0b6f72] px-6 py-3 font-bold text-white transition-colors hover:bg-[#095a5d]"
          >
            Explorar experiencias
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              title={exp.title}
              destination={exp.destination}
              price={exp.price}
              rating={exp.rating}
              imageUrl={exp.imageUrl}
              favorite={true}
              onFavoriteChange={toggleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  );
}