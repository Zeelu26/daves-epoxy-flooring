export default function ReviewsPage() {
  const reviews = [
    {
      name: "Michael R.",
      location: "Livingston, NJ",
      text: "Dave did an amazing job on our garage floor. The finish looks clean, professional, and completely changed the space.",
    },
    {
      name: "Sandra T.",
      location: "Parsippany, NJ",
      text: "Very easy to work with, showed up on time, and the final result came out even better than we expected.",
    },
    {
      name: "James L.",
      location: "West Orange, NJ",
      text: "The floor looks incredible and feels built to last. You can tell they care about the details and prep work.",
    },
    {
      name: "Priya M.",
      location: "Montville, NJ",
      text: "Great communication from start to finish. Our basement floor looks cleaner, brighter, and much more finished now.",
    },
    {
      name: "Daniel S.",
      location: "Morristown, NJ",
      text: "Professional work, honest process, and no headaches. I would absolutely recommend Dave’s Epoxy Flooring.",
    },
    {
      name: "Rachel K.",
      location: "East Hanover, NJ",
      text: "Super happy with the garage makeover. The coating looks sharp and the whole job felt smooth from quote to finish.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Customer Reviews
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            What our customers are saying
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            We take pride in delivering flooring results that look great, last long, and make the whole process easy for the customer.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <div className="text-lg">★★★★★</div>

              <p className="mt-4 text-neutral-700">
                “{review.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-neutral-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}