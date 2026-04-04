export default function ServicesPreview() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Our Services
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Flooring solutions for homes and businesses
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          We install epoxy flooring systems that are tough, low maintenance, and designed to upgrade the look of your space.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Garage Epoxy Floors</h3>
          <p className="mt-3 text-neutral-600">
            Clean, durable, and made to handle everyday wear, vehicles, and storage.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Basement & Interior Floors</h3>
          <p className="mt-3 text-neutral-600">
            A polished finish that makes interior concrete surfaces easier to maintain and better looking.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Commercial Epoxy Coatings</h3>
          <p className="mt-3 text-neutral-600">
            Strong flooring systems for shops, work areas, and commercial spaces that need long lasting performance.
          </p>
        </div>
      </div>
    </section>
  );
}