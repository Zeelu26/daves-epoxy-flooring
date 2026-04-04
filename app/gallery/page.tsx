export default function GalleryPage() {
  const projects = [
    {
      title: "Garage Epoxy Floor",
      location: "Livingston, NJ",
      description: "Clean epoxy finish with a durable coating designed for everyday use.",
    },
    {
      title: "Basement Floor Coating",
      location: "Parsippany, NJ",
      description: "A brighter, smoother surface that improves the look and function of the space.",
    },
    {
      title: "Commercial Epoxy Project",
      location: "West Orange, NJ",
      description: "Professional flooring system built for durability and a polished appearance.",
    },
    {
      title: "Decorative Flake System",
      location: "Montville, NJ",
      description: "A textured epoxy finish that adds both style and strength.",
    },
    {
      title: "Concrete Coating Upgrade",
      location: "Morristown, NJ",
      description: "Concrete surface refreshed with a clean and long lasting protective coating.",
    },
    {
      title: "Residential Garage Makeover",
      location: "East Hanover, NJ",
      description: "A full garage floor transformation with a modern, durable epoxy finish.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Our Work
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Explore our recent flooring projects
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Take a look at some of the epoxy flooring projects we have completed for homeowners and businesses across New Jersey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="flex h-64 items-center justify-center bg-neutral-200 text-neutral-500">
                Project Image
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  {project.location}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
                <p className="mt-4 text-neutral-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}