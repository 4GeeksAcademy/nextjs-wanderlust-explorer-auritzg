import Link from "next/link";

interface ExperienceCardProps {
  id: number;
  title: string;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
  favorite?: boolean;
  onFavoriteChange?: (id: number) => void;
}

export default function ExperienceCard({
  id,
  title,
  destination,
  price,
  rating,
  imageUrl,
  favorite = false,
  onFavoriteChange,
}: ExperienceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-black/8 bg-white">
      <Link href={`/experiences/${id}`} className="relative block h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </Link>

      {onFavoriteChange && (
        <button
          type="button"
          onClick={() => onFavoriteChange(id)}
          aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          aria-pressed={favorite}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border shadow-sm ${
            favorite
              ? "border-[#ff5b45] bg-[#ff5b45] text-white"
              : "border-white/70 bg-white text-[#263238]"
          }`}
        >
          <span aria-hidden="true">{favorite ? "♥" : "♡"}</span>
        </button>
      )}

      <div className="p-4">
        <p className="text-xs font-bold uppercase text-[#0b6f72]">{destination}</p>
        <Link href={`/experiences/${id}`}>
          <h3 className="mt-1 min-h-12 text-lg font-black leading-6 text-[#263238]">{title}</h3>
        </Link>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-sm font-bold text-[#263238]">
            Desde <span className="text-lg">EUR {price}</span>
          </p>
          <p className="text-sm font-black text-[#263238]" aria-label={`Valoracion ${rating}`}>
            ★ {rating}
          </p>
        </div>
      </div>
    </article>
  );
}
