import { Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/hero-bg.jpeg"
        alt="Dave's Epoxy Flooring fleet"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/80 to-bg-primary/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/40" />
      <div className="absolute inset-0 grid-lines-bg opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 py-28 md:py-0">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 border border-accent-dark text-accent text-[0.7rem] tracking-[0.25em] uppercase mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
            Serving All of New Jersey
          </div>

          <h1
            className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-wide text-text-primary mb-6 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            DOES YOUR
            <br />
            GARAGE FLOOR <span className="text-accent">SUCK?.</span>
          </h1>

          <p
            className="font-serif italic text-[clamp(1.1rem,2vw,1.35rem)] text-text-secondary max-w-xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Premium epoxy flooring for garages, basements, and commercial spaces across New Jersey engineered for durability, installed to perfection.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            <a href="#quote" className="btn-primary px-7 py-4 inline-flex items-center gap-2">
              Get a Free Quote <span>→</span>
            </a>
            <a
              href="tel:+19739014045"
              className="btn-outline px-7 py-4 inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              (973) 901-4045
            </a>
          </div>

          <div
            className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-border animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            {[
              { num: "500+", label: "Floors Installed" },
              { num: "15+", label: "Years Experience" },
              { num: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-accent leading-none">
                  {stat.num}
                </p>
                <p className="text-[0.75rem] tracking-[0.15em] uppercase text-text-muted mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-text-muted animate-fade-up hidden md:flex" style={{ animationDelay: "1.3s" }}>
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}