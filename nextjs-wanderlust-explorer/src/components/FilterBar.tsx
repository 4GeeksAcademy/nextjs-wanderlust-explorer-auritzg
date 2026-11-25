"use client";

interface FilterBarProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  allLabel?: string;
}

/**
 * Reusable filter dropdown.
 */
export default function FilterBar({
  label,
  name,
  options,
  value,
  onChange,
  allLabel,
}: FilterBarProps) {
  const placeholder = allLabel ?? `Tod${label.endsWith("a") ? "a" : "o"}s ${label.toLowerCase()}`;

  return (
    <div>
      <label htmlFor={`filter-${name}`} className="sr-only">
        {label}
      </label>
      <select
        id={`filter-${name}`}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-md border border-black/10 bg-white px-4 text-[#263238] outline-none"
      >
        <option value="all">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}