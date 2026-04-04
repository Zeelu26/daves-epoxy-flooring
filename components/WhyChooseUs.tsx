export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Quality work without the nonsense
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Built to Last</h3>
            <p className="mt-3 text-neutral-600">
              We use durable materials and proper prep work so your floor looks good and holds up over time.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Clean Finish</h3>
            <p className="mt-3 text-neutral-600">
              Modern, professional results that instantly improve the appearance of your garage or workspace.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Reliable Service</h3>
            <p className="mt-3 text-neutral-600">
              Clear communication, honest timelines, and work done with attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}