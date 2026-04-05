const steps = [
  {
    number: "01",
    title: "FREE ASSESSMENT",
    text: "We visit your space, evaluate the concrete condition, discuss your goals, and give you a clear, honest quote — no pressure, no gimmicks.",
  },
  {
    number: "02",
    title: "SURFACE PREP",
    text: "Diamond grinding, crack repair, moisture testing. Proper prep is 80% of a great floor, and we never cut corners here.",
  },
  {
    number: "03",
    title: "EPOXY APPLICATION",
    text: "Multiple coats of premium epoxy, flake, metallic, or solid color — applied with precision by experienced hands.",
  },
  {
    number: "04",
    title: "FINAL WALKTHROUGH",
    text: "We inspect every inch, ensure you're thrilled, and walk you through care and maintenance. The job isn't done until you say it is.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-bg-secondary py-24 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(249,115,22,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-tag mb-4">How It Works</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
            FROM CONCRETE TO
            <br />
            INCREDIBLE IN 4 STEPS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`p-8 relative ${
                i < steps.length - 1
                  ? "border-r border-border max-xl:border-r-0 max-md:border-b max-xl:even:border-r-0 xl:last:border-r-0"
                  : ""
              } ${i < 2 ? "max-xl:border-b max-xl:border-border" : ""}`}
            >
              <p className="font-display text-6xl text-accent/50 leading-none mb-5">
                {step.number}
              </p>
              <h3 className="font-display text-2xl tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}