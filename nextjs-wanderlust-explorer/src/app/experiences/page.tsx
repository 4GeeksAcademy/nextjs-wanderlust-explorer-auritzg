"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { useExperiences, type Filters } from "@/hooks/useExperiences";
import { useFavorites } from "@/hooks/useFavorites";

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();

  // Read filters from URL query params
  const initialSearch = searchParams.get("search") ?? "";
  const initialCategory = searchParams.get("category") ?? "all";
  const initialDestination = searchParams.get("destination") ?? "all";

  // Input values
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [categoryInput, setCategoryInput] = useState(initialCategory);
  const [destinationInput, setDestinationInput] = useState(initialDestination);

  // Active filters
  const activeFilters: Filters = {
    search: searchInput || null,
    category: categoryInput !== "all" ? categoryInput : null,
    destination: destinationInput !== "all" ? destinationInput : null,
  };

  const { filtered, categories, destinations, totalCount } =
    useExperiences(activeFilters);

  // Sync URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchInput) params.set("search", searchInput);
    if (categoryInput && categoryInput !== "all")
      params.set("category", categoryInput);
    if (destinationInput && destinationInput !== "all")
      params.set("destination", destinationInput);
    const query = params.toString();
    const newUrl = query ? `/experiences?${query}` : "/experiences";

    const currentQuery = searchParams.toString();
    if (query !== currentQuery) {
      router.replace(newUrl, { scroll: false });
    }
  }, [searchInput, categoryInput, destinationInput, router, searchParams]);

  // Update document title
  useEffect(() => {
    document.title = "Explorar experiencias — Wanderlust Explorer";
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-black text-[#263238]">
        Explora experiencias
      </h1>
      <p className="mt-2 text-sm text-[#5d6b70]">
        {totalCount} experiencias disponibles — muestra {filtered.length}
        {filtered.length === 1 ? "resultado" : "resultados"}
      </p>

      {/* Search + Filters */}
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchBar value={searchInput} onChange={setSearchInput} />
        <FilterBar
          label="Categoría"
          name="category"
          options={categories}
          value={categoryInput}
          onChange={setCategoryInput}
          allLabel="Todas las categorías"
        />
        <FilterBar
          label="Destino"
          name="destination"
          options={destinations}
          value={destinationInput}
          onChange={setDestinationInput}
          allLabel="Todos los destinos"
        />
      </form>

      {/* Results grid */}
      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-2xl font-black text-[#263238]">
            No se encontraron resultados
          </p>
          <p className="mt-2 text-[#5d6b70]">
            Intenta ajustar tu búsqueda o limpiar los filtros para ver más
            experiencias.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((exp) => (
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
      )}
    </main>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ExperiencesContent />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-center text-[#5d6b70]">Cargando explorador…</p>
    </main>
  );
}