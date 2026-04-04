export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Our Services
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Professional epoxy flooring solutions built to last
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Dave&apos;s Epoxy Flooring offers durable, clean, and modern flooring systems for residential and commercial spaces across New Jersey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Garage Epoxy Floors</h2>
            <p className="mt-4 text-neutral-600">
              Upgrade your garage with a floor coating that looks sharp, resists wear, and is easier to clean and maintain.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Basement Epoxy Coatings</h2>
            <p className="mt-4 text-neutral-600">
              Give your basement a cleaner, brighter, and more durable finish with epoxy flooring designed for long term performance.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Commercial Epoxy Flooring</h2>
            <p className="mt-4 text-neutral-600">
              Strong flooring systems for commercial spaces, workshops, and business interiors that need durability and a professional look.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Concrete Coatings</h2>
            <p className="mt-4 text-neutral-600">
              Protect and improve concrete surfaces with coatings that help extend life, reduce wear, and improve appearance.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Decorative Flake Systems</h2>
            <p className="mt-4 text-neutral-600">
              Add texture, style, and extra visual appeal with decorative flake finishes that still keep the floor tough and practical.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Surface Prep and Repairs</h2>
            <p className="mt-4 text-neutral-600">
              Proper preparation matters. We handle concrete prep and repair work to help ensure the flooring system performs the way it should.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}