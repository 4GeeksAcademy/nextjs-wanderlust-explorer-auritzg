"use client";

import { useEffect } from "react";
import { useFavorites } from "@/hooks/useFavorites";

export default function ProfilePage() {
  const { favoriteCount } = useFavorites();

  useEffect(() => {
    document.title = "Mi perfil — Wanderlust Explorer";
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <h1 className="text-3xl font-black text-[#263238]">Mi perfil</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr]">
        {/* Avatar + quick info */}
        <div className="rounded-lg border border-black/10 bg-white p-6 text-center">
          <div className="mx-auto h-24 w-24 rounded-full bg-[#eef6f4]">
            <div className="grid h-24 w-24 place-items-center text-4xl">👤</div>
          </div>
          <h2 className="mt-3 text-xl font-black text-[#263238]">Viajero</h2>
          <p className="text-sm text-[#5d6b70]">viajero@wanderlust.app</p>
        </div>

        {/* Stats */}
        <div className="rounded-lg border border-black/10 bg-white p-6">
          <h2 className="text-xl font-black text-[#263238]">Resumen</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-[#eef6f4] p-4 text-center">
              <p className="text-3xl font-black text-[#0b6f72]">
                {favoriteCount()}
              </p>
              <p className="mt-1 text-sm text-[#5d6b70]">
                {favoriteCount() === 1 ? "Favorito" : "Favoritos"}
              </p>
            </div>

            <div className="rounded-lg bg-[#eef6f4] p-4 text-center">
              <p className="text-3xl font-black text-[#0b6f72]">100</p>
              <p className="mt-1 text-sm text-[#5d6b70]">Experiencias</p>
            </div>
          </div>

          <hr className="my-8 border-black/5" />

          <div className="space-y-3 text-sm text-[#5d6b70]">
            <div className="flex justify-between">
              <span>Miembro desde</span>
              <span className="font-bold text-[#263238]">Enero 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Idioma</span>
              <span className="font-bold text-[#263238]">Español</span>
            </div>
            <div className="flex justify-between">
              <span>Moneda</span>
              <span className="font-bold text-[#263238]">EUR</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}