"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
}

/**
 * Reusable search input with label.
 */
export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Buscar experiencias…",
}: SearchBarProps) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor="search-input" className="sr-only">
        Buscar experiencias
      </label>
      <input
        id="search-input"
        name="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) {
            onSubmit();
          }
        }}
        placeholder={placeholder}
        className="h-12 w-full rounded-md border border-black/10 bg-white px-4 text-[#263238] placeholder:text-[#7d8b91] outline-none"
      />
    </div>
  );
}