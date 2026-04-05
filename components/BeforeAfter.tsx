"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    before: "https://davesepoxyflooring.com/assets/images/banner/desktop/0-11-IMG_1387.jpeg",
    after: "https://davesepoxyflooring.com/assets/images/banner/desktop/IMG_1376.jpeg",
    label: "Residential Garage — Montclair, NJ",
  },
  {
    before: "https://davesepoxyflooring.com/assets/images/banner/desktop/0-7D324B9D-9442-4CD0-84A6-CE9E6562D8EA.jpeg",
    after: "https://davesepoxyflooring.com/assets/images/banner/desktop/IMG_5370.jpeg",
    label: "3-Car Garage — Wayne, NJ",
  },
  {
    before: "https://davesepoxyflooring.com/assets/images/banner/desktop/0-98F0CD16-2327-4E41-8BA8-B3FF0D546252.jpeg",
    after: "https://davesepoxyflooring.com/assets/images/banner/desktop/IMG_0826.jpeg",
    label: "Commercial Space — Parsippany, NJ",
  },
  {
    before: "https://davesepoxyflooring.com/assets/images/banner/desktop/0-F4E94ADD-E3D7-43AF-8045-A2C44A2B33B0.jpeg",
    after: "https://davesepoxyflooring.com/assets/images/banner/desktop/IMG_5288.jpeg",
    label: "Finished Basement — Livingston, NJ",
  },
];

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  function goTo(index: number) {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }

  function prev() {
    goTo((current - 1 + projects.length) % projects.length);
  }

  function next() {
    goTo((current + 1) % projects.length);
  }

  const project = projects[current];

  return (
    <section className="bg-bg-secondary py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-tag mb-4">Results</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-5">
            SEE THE
            <br />
            TRANSFORMATION
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Every floor tells a story of careful preparation and expert
            installation. Swipe through our recent projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-bg-card border border-border p-5 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg tracking-wider">BEFORE</h3>
              <span className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted border border-border px-3 py-1">
                Cracked. Dull. Stained.
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-bg-primary overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.before}
                alt={`Before — ${project.label}`}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>

          <div className="bg-bg-card border border-accent-dark/30 p-5 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg tracking-wider">AFTER</h3>
              <span className="text-[0.7rem] tracking-[0.1em] uppercase text-accent border border-accent-dark px-3 py-1">
                Durable. Clean. Premium.
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-bg-primary overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.after}
                alt={`After — ${project.label}`}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-text-secondary text-sm">{project.label}</p>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-8"
                      : "bg-border w-2.5 hover:bg-text-muted"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}