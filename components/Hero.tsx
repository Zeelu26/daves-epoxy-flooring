export default function Hero() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">
          Dave&apos;s Epoxy Flooring
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Does Your Garage Floor Suck?
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          Professional epoxy flooring for garages, basements, commercial spaces, and more.
          Serving New Jersey with high quality installation and reliable service.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#quote"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Get a Free Quote
          </a>

          <a
            href="tel:+19739014045"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}