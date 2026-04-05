import { CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: "✦",
    title: "OWNER-OPERATED",
    text: "Dave is on every job. No random subcontractors, no franchise workers. You get the person whose name is on the truck.",
  },
  {
    icon: "◆",
    title: "PREMIUM MATERIALS",
    text: "We use commercial-grade epoxies and polyaspartics — not the watered-down box store products. The difference shows in year 5.",
  },
  {
    icon: "▣",
    title: "PROPER PREP WORK",
    text: "Diamond grinding, not acid etching. Moisture testing, crack filling, patching. We do the boring stuff that makes the floor last decades.",
  },
  {
    icon: "◎",
    title: "NO NONSENSE PRICING",
    text: "You get a real quote upfront. No hidden fees, no bait-and-switch, no surprises at the end. What we say is what you pay.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-bg-primary py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="w-full aspect-[4/3] bg-bg-card border border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,162,78,0.1)_0%,transparent_50%),repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(212,162,78,0.02)_40px,rgba(212,162,78,0.02)_41px),repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(212,162,78,0.02)_40px,rgba(212,162,78,0.02)_41px)]" />
                <div className="absolute bottom-8 left-8 right-8 font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-text-primary/[0.07]">
                  CRAFTSMANSHIP
                  <br />
                  OVER
                  <br />
                  SHORTCUTS
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-28 h-28 border-2 border-accent opacity-20" />
            </div>
          </div>

          <div>
            <p className="section-tag mb-4">Why Dave&apos;s</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-10">
              QUALITY YOU CAN
              <br />
              STAND ON
            </h2>

            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-5 items-start pb-6 border-b border-border last:border-b-0"
                >
                  <div className="shrink-0 w-12 h-12 border border-accent-dark flex items-center justify-center text-accent text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg tracking-wider mb-1">
                      {f.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}