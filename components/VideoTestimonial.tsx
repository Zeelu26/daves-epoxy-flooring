"use client";

import { Play } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <section className="bg-bg-primary py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-tag mb-4">Happy Customer</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
            HEAR IT STRAIGHT
            <br />
            FROM A HOMEOWNER
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative bg-bg-card border border-border overflow-hidden aspect-[16/9]">
            <video
              ref={videoRef}
              src="/les-review.webm"
              className="w-full h-full object-cover"
              controls={playing}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-bg-primary/40 transition-all hover:bg-bg-primary/20 cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center transition-transform hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </button>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-serif text-7xl text-accent/30 leading-none mb-4">
              &ldquo;
            </span>
            <p className="text-text-secondary text-lg leading-relaxed italic mb-4">
              Dave&apos;s team completely transformed our garage in just one day.
              The floor looks incredible and the process was smooth from start to
              finish. Highly recommend them if you want a luxury garage floor.
            </p>
            <p className="text-text-secondary text-base leading-relaxed italic mb-6">
              From the first phone call to the final walkthrough, they were on
              time, professional, and meticulous about every detail — including
              cleanup. Friends and neighbors keep complimenting the new floor and
              asking who did it. We only wish we had called Dave sooner.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-14 h-14 bg-accent-dark rounded-full flex items-center justify-center font-display text-xl text-white">
                L
              </div>
              <div>
                <p className="font-display text-xl tracking-wider">LES</p>
                <p className="text-text-muted text-sm">Verified Customer — New Jersey</p>
              </div>
            </div>

            <div className="flex gap-1 mt-5 text-accent text-lg tracking-widest">
              ★★★★★
            </div>

            <a
              href="#quote"
              className="btn-primary px-7 py-4 inline-flex items-center gap-2 mt-8 w-fit text-base"
            >
              Get Your Free Quote <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}