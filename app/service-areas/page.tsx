export default function ServiceAreasPage() {
  const areas = [
    "Livingston, NJ",
    "Parsippany, NJ",
    "West Orange, NJ",
    "Montville, NJ",
    "Morristown, NJ",
    "East Hanover, NJ",
    "Florham Park, NJ",
    "Caldwell, NJ",
    "Roseland, NJ",
    "Short Hills, NJ",
    "Summit, NJ",
    "Wayne, NJ",
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Service Areas
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Proudly serving homeowners and businesses across New Jersey
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Dave&apos;s Epoxy Flooring provides professional epoxy flooring services in a wide range of New Jersey communities. If you are nearby and unsure whether we serve your area, reach out and ask.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-neutral-200 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Areas We Serve</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-xl bg-neutral-100 px-4 py-3 text-neutral-700"
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-neutral-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Not sure if we cover your location?</h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Contact Dave&apos;s Epoxy Flooring and let us know where your project is located. We&apos;ll let you know if your property falls within our service area.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+19739014045"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              Call Now
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}