"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Principal">
        <Link href="/" className="text-xl font-black text-[#0b6f72]">
          WANDERLUST
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            // For nested routes like /experiences/123, match the parent
            const active = link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active
                    ? "bg-[#0b6f72] text-white"
                    : "text-[#263238] hover:bg-[#eef6f4]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-xs font-black text-[#263238]"
            >
              {link.label.slice(0, 1)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
