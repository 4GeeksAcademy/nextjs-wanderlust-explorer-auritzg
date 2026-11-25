"use client";

import { useState } from "react";

// Module-level persistent set so favorites survive client-side
// page navigations within the same session.
let globalFavorites: Set<number> = new Set();

/**
 * Custom hook that manages the user's favorite experience IDs.
 * Uses useState internally and persists across pages via a module-level set.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<number>>(
    new Set(globalFavorites)
  );

  function toggleFavorite(id: number): void {
    const updated = new Set(favorites);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    // Persist at module level so other pages see the change
    globalFavorites = updated;
    setFavorites(updated);
  }

  function isFavorite(id: number): boolean {
    return globalFavorites.has(id);
  }

  function favoriteCount(): number {
    return globalFavorites.size;
  }

  function getFavorites(): Set<number> {
    return new Set(globalFavorites);
  }

  return { favorites, toggleFavorite, isFavorite, favoriteCount, getFavorites };
}