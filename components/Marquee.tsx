const items = [
  "Garage Floors",
  "Basement Coatings",
  "Commercial Spaces",
  "Metallic Epoxy",
  "Flake Systems",
  "Polyaspartic Coatings",
  "Concrete Repair",
  "Industrial Floors",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-4 border-t border-b border-border overflow-hidden bg-bg-secondary">
      <div className="flex gap-12 animate-marquee w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-[0.3em] uppercase text-text-muted whitespace-nowrap flex items-center gap-6"
          >
            {item}
            <span className="text-[0.5rem] text-accent-dark">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}