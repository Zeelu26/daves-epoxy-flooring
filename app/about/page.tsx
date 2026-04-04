export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Built on quality work, honest service, and durable results
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Dave&apos;s Epoxy Flooring is focused on delivering clean, long lasting epoxy flooring solutions for homeowners and businesses across New Jersey.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="mt-4 text-neutral-600">
              We specialize in epoxy flooring systems that improve the appearance, durability, and function of concrete surfaces.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">What We Believe</h2>
            <p className="mt-4 text-neutral-600">
              We believe in honest work, clean finishes, and delivering results that last.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}