import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border-2 border-accent rounded flex items-center justify-center font-display text-accent text-lg font-bold">
                D
              </div>
              <span className="font-display text-lg tracking-[0.15em]">
                DAVE&apos;S EPOXY
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Professional epoxy flooring for homes and businesses across New
              Jersey. Quality work, honest pricing, results that last.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.2em] mb-5 text-text-primary">
              SERVICES
            </h4>
            <div className="flex flex-col gap-3">
              {["Garage Floors", "Basement Coatings", "Commercial Floors", "Concrete Repair"].map(
                (link) => (
                  <a
                    key={link}
                    href="#services"
                    className="text-text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.2em] mb-5 text-text-primary">
              COMPANY
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Our Process", href: "#process" },
                { label: "Reviews", href: "#reviews" },
                { label: "Service Areas", href: "#service-areas" },
                { label: "Contact", href: "#quote" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-muted text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.2em] mb-5 text-text-primary">
              CONTACT
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+19739014045"
                className="flex items-center gap-2.5 text-text-muted text-sm hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent shrink-0" />
                (973) 901-4045
              </a>
              <a
                href="mailto:info@davesepoxyflooring.com"
                className="flex items-center gap-2.5 text-text-muted text-sm hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                info@davesepoxyflooring.com
              </a>
              <div className="flex items-center gap-2.5 text-text-muted text-sm">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                New Jersey, United States
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6 border-t border-border text-xs text-text-muted">
          <span>&copy; 2026 Dave&apos;s Epoxy Flooring. All rights reserved.</span>
          <span>Serving New Jersey with pride.</span>
        </div>
      </div>
    </footer>
  );
}