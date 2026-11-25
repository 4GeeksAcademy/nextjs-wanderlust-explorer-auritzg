import Link from "next/link";

export default function HeroSearch() {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[#102a2a]/45" />

      <div className="mx-auto flex min-h-[520px] max-w-6xl items-center px-5 py-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-black uppercase text-[#ffd166]">
            Viajes que se recuerdan
          </p>
          <h1 className="max-w-xl text-5xl font-black leading-[1.05] sm:text-6xl">
            Encuentra tu proxima aventura
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-white/90">
            Explora actividades seleccionadas en destinos que despertaran tu curiosidad.
          </p>

          <form
            action="/experiences"
            className="mt-8 flex max-w-xl flex-col gap-2 rounded-lg bg-white p-2 shadow-2xl sm:flex-row"
          >
            <label className="sr-only" htmlFor="hero-search">
              Buscar experiencias
            </label>
            <input
              id="hero-search"
              name="search"
              type="search"
              placeholder="Destino, actividad o experiencia"
              className="h-12 min-w-0 flex-1 rounded-md px-4 text-[#263238] outline-none placeholder:text-[#7d8b91]"
            />
            <button
              type="submit"
              className="h-12 rounded-md bg-[#ff5b45] px-6 font-black text-white transition-colors hover:bg-[#df4533]"
            >
              Buscar
            </button>
          </form>

          <Link
            href="/experiences"
            className="mt-5 inline-block text-sm font-bold underline decoration-white/50 underline-offset-4"
          >
            Ver todas las experiencias
          </Link>
        </div>
      </div>
    </section>
  );
}
