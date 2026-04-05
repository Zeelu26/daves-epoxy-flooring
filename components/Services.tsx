import { PaintBucket, Warehouse, Home, Building2 } from "lucide-react";

const services = [
  {
    icon: PaintBucket,
    number: "01",
    title: "GARAGE FLOORS",
    text: "The workhorse of our business. We transform worn-out, cracked garage floors into stunning, chemical-resistant surfaces that handle everything you throw at them.",
  },
  {
    icon: Warehouse,
    number: "02",
    title: "COMMERCIAL COATING",
    text: "Warehouses, shops, showrooms, restaurants. We install heavy-duty epoxy systems designed for high traffic, heavy equipment, and daily abuse.",
  },
  {
    icon: Home,
    number: "03",
    title: "BASEMENT & INTERIOR",
    text: "Turn damp, grey concrete into a polished living space. Our interior coatings resist moisture, stains, and wear — while looking showroom-ready.",
  },
  {
    icon: Building2,
    number: "04",
    title: "INDUSTRIAL FLOORS",
    text: "Heavy-duty floor systems for demanding environments where downtime isn't an option and performance is everything.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-primary py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-tag mb-4">What We Do</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-5">
            FLOORING SOLUTIONS
            <br />
            BUILT FOR REAL LIFE
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Whether it&apos;s your garage, your basement, or a 10,000 sq ft
            warehouse — we install epoxy systems that perform and look
            incredible doing it.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-bg-card border border-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent-dark"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-accent-dark scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <span className="absolute top-4 right-5 font-display text-5xl text-accent/[0.06] leading-none">
                  {service.number}
                </span>

                <div className="w-14 h-14 border border-accent-dark flex items-center justify-center text-accent mb-6">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-2xl tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {service.text}
                </p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-1.5 text-accent text-sm tracking-[0.1em] uppercase font-semibold mt-5 transition-[gap] duration-300 hover:gap-3"
                >
                  Get Started <span>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}