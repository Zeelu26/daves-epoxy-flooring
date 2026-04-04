export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Get in touch for a free quote
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Have a garage, basement, or commercial flooring project in mind? Reach out and we’ll help you get started.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <div className="mt-6 space-y-5 text-neutral-700">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  Phone
                </p>
                <a
                  href="tel:+19739014045"
                  className="mt-1 block text-lg font-medium hover:text-neutral-500"
                >
                  (973) 901-4045
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  Email
                </p>
                <a
                  href="mailto:info@davesepoxyflooring.com"
                  className="mt-1 block text-lg font-medium hover:text-neutral-500"
                >
                  info@davesepoxyflooring.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  Service Area
                </p>
                <p className="mt-1 text-lg font-medium">
                  New Jersey and surrounding areas
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Request a Quote</h2>
            <p className="mt-4 text-neutral-300">
              Tell us a little about your project and we’ll get back to you with the next steps.
            </p>

            <form className="mt-8 grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}