"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";

function ExperienceDetailContent() {
  const params = useParams<{ id: string }>();
  const id = params.id ? parseInt(params.id) : NaN;

  const experience = experiences.find((e) => e.id === id);
  const { toggleFavorite, favorites } = useFavorites();
  const isFavorite = favorites.has(id);

  // Update document title
  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} — Wanderlust Explorer`;
    } else {
      document.title = "Experiencia no encontrada — Wanderlust Explorer";
    }
  }, [experience]);

  if (!experience) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="text-3xl font-black text-[#263238]">
          Experiencia no encontrada
        </h1>
        <p className="mt-4 text-[#5d6b70]">
          La experiencia que buscas no existe o ha sido eliminada.
        </p>
        <Link
          href="/experiences"
          className="mt-6 inline-block rounded-md bg-[#0b6f72] px-6 py-3 font-bold text-white transition-colors hover:bg-[#095a5d]"
        >
          ← Volver al explorador
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-[#5d6b70]">
        <Link href="/" className="underline decoration-black/20 underline-offset-2">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/experiences"
          className="underline decoration-black/20 underline-offset-2"
        >
          Experiencias
        </Link>
        <span className="mx-2">/</span>
        <span className="font-bold text-[#263238]">{experience.title}</span>
      </nav>

      {/* Hero image */}
      <div
        className="mt-6 h-72 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url('${experience.imageUrl}')`,
        }}
      />

      <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
        {/* Left column — main info */}
        <div>
          <p className="text-sm font-bold uppercase text-[#0b6f72]">
            {experience.destination}
          </p>
          <h1 className="mt-2 text-3xl font-black text-[#263238]">
            {experience.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <span className="rounded-full bg-[#eef6f4] px-3 py-1 font-bold text-[#0b6f72]">
              {experience.category}
            </span>
            <span aria-label={`Valoración ${experience.rating}`}>
              ★ {experience.rating}
            </span>
          </div>

          <p className="mt-8 text-lg leading-8 text-[#263238]">
            {experience.description}
          </p>

          <Link
            href="/experiences"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0b6f72] underline decoration-black/20 underline-offset-4"
          >
            ← Volver a experiencias
          </Link>
        </div>

        {/* Right column — sidebar */}
        <aside className="rounded-lg border border-black/10 bg-[#f9fafa] p-6">
          <p className="text-sm font-bold uppercase text-[#5d6b70]">Precio</p>
          <p className="mt-1 text-3xl font-black text-[#263238]">
            EUR {experience.price}
          </p>

          <hr className="my-6 border-black/5" />

          <button
            type="button"
            onClick={() => toggleFavorite(experience.id)}
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            aria-pressed={isFavorite}
            className={`w-full rounded-md px-6 py-3 font-bold text-white transition-colors ${
              isFavorite
                ? "bg-[#ff5b45] hover:bg-[#df4533]"
                : "bg-[#0b6f72] hover:bg-[#095a5d]"
            }`}
          >
            {isFavorite ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
          </button>

          <hr className="my-6 border-black/5" />

          <div className="text-sm text-[#5d6b70]">
            <p className="font-bold">Detalles</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Destino: {experience.destination}</li>
              <li>Categoría: {experience.category}</li>
              <li>
                Valoración: ★ {experience.rating} / 5.0
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default function ExperienceDetailPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ExperienceDetailContent />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-20 text-center">
      <p className="text-[#5d6b70]">Cargando experiencia…</p>
    </main>
  );
}