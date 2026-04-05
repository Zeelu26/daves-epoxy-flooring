const reviews = [
  {
    name: "Mike R.",
    location: "Montclair, NJ",
    initials: "MR",
    text: "Dave and his team did an incredible job on our two-car garage. The floor looks absolutely unreal. Great communication from start to finish.",
  },
  {
    name: "Sarah L.",
    location: "Wayne, NJ",
    initials: "SL",
    text: "We got three quotes and Dave's was the most honest. No upselling, just a straight answer. The basement floor came out perfect.",
  },
  {
    name: "James T.",
    location: "Parsippany, NJ",
    initials: "JT",
    text: "Had our commercial space done and it's held up through two years of heavy equipment use. Still looks brand new. Highly recommend.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-bg-secondary py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-tag mb-4">Testimonials</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
            WHAT HOMEOWNERS
            <br />
            ARE SAYING
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-bg-card border border-border p-8 relative"
            >
              <span className="font-serif text-5xl text-accent/30 leading-none block mb-4">
                &ldquo;
              </span>
              <div className="text-accent text-sm tracking-widest mb-4">
                ★★★★★
              </div>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed italic mb-6">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-dark rounded-full flex items-center justify-center font-display text-sm text-bg-primary">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="text-xs text-text-muted">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}