import { MapPin } from "lucide-react";

const areas = [
  "Livingston",
  "Parsippany",
  "Montclair",
  "Jersey City",
  "Newark",
  "West Orange",
  "East Hanover",
  "Morristown",
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="bg-bg-secondary py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-tag mb-4">Coverage</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-5">
            SERVING ALL OF
            <br />
            NEW JERSEY
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            From Essex County to Morris County and beyond — we bring premium
            epoxy flooring to homeowners and businesses across the state.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="group flex items-center gap-3 bg-bg-card border border-border px-6 py-5 transition-all duration-300 hover:border-accent-dark"
            >
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <span className="text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}