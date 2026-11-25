"use client";

import { experiences, type Experience } from "@/data/experiences";

export interface Filters {
  search?: string | null;
  category?: string | null;
  destination?: string | null;
}

export interface UseExperiencesReturn {
  filtered: Experience[];
  categories: string[];
  destinations: string[];
  totalCount: number;
}

/**
 * Custom hook that encapsulates the filtering logic.
 * Filters experiences by title (case-insensitive regex),
 * category, and destination. Returns filtered results plus
 * the unique categories and destinations for populating filter UIs.
 */
export function useExperiences({
  search,
  category,
  destination,
}: Filters): UseExperiencesReturn {
  const filtered = experiences.filter((exp) => {
    // Title search — case‑insensitive regex
    if (search) {
      try {
        const regex = new RegExp(search, "i");
        if (!regex.test(exp.title)) return false;
      } catch {
        // Invalid regex — treat as plain substring
        if (!exp.title.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }
      }
    }

    // Category filter
    if (category && category !== "all") {
      if (exp.category !== category) return false;
    }

    // Destination filter — match against the full destination string
    // (city, country or both) case‑insensitively
    if (destination && destination !== "all") {
      if (
        !exp.destination
          .toLowerCase()
          .includes(destination.toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  });

  // Unique values for dropdowns
  const categories = [
    ...new Set(experiences.map((e) => e.category)),
  ] as string[];
  const destinations = [
    ...new Set(experiences.map((e) => e.destination)),
  ] as string[];

  return {
    filtered,
    categories,
    destinations,
    totalCount: experiences.length,
  };
}