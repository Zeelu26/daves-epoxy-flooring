import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="relative bg-bg-primary py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.06)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 w-20 h-20 border border-accent-dark flex items-center justify-center">
          <Shield className="h-10 w-10 text-accent" />
        </div>

        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-5">
          OUR WARRANTY-BACKED
          <br />
          PROMISE
        </h2>

        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          We stand behind our installations with systems designed for long-term
          durability, appearance, and performance. Good work should not
          disappear in a year.
        </p>

        <div className="flex justify-center gap-12 mt-12">
          {[
            { label: "Material Warranty", value: "15 YR" },
            { label: "Workmanship", value: "LIFETIME" },
            { label: "Satisfaction", value: "100%" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-4xl text-accent leading-none">
                {item.value}
              </p>
              <p className="text-sm tracking-[0.15em] uppercase text-text-muted mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}