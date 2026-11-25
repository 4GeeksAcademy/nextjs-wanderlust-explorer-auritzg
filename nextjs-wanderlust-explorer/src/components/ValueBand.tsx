interface ValueBandProps {
  title: string;
  items: Array<{ title: string; description: string }>;
}

export default function ValueBand({ title, items }: ValueBandProps) {
  return (
    <section className="bg-[#eef6f4] py-14">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-black text-[#263238]">{title}</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title}>
              <div className="mb-3 h-1 w-10 bg-[#ff5b45]" />
              <h3 className="font-black text-[#263238]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d6b70]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
