import Link from "next/link";

interface DestinationCardProps {
  name: string;
  count: number;
  imageUrl: string;
}

export default function DestinationCard({ name, count, imageUrl }: DestinationCardProps) {
  return (
    <Link
      href={`/experiences?destination=${encodeURIComponent(name)}`}
      className="group min-w-40 overflow-hidden rounded-lg border border-black/5 bg-white"
    >
      <div
        className="h-36 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="px-3 py-3">
        <h3 className="font-black text-[#263238]">{name}</h3>
        <p className="mt-1 text-xs text-[#738087]">{count} experiencias</p>
      </div>
    </Link>
  );
}
