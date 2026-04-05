"use client";

import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
          scrolled
            ? "bg-bg-primary/92 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-text-primary no-underline"
          >
            <div className="w-9 h-9 border-2 border-accent rounded flex items-center justify-center font-display text-accent text-lg font-bold">
              D
            </div>
            <span className="font-display text-lg tracking-[0.15em]">
              DAVE&apos;S EPOXY
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {["Services", "Process", "Reviews", "Service Areas"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-text-secondary text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-accent"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+19739014565"
              className="flex items-center gap-2 text-xs font-semibold text-text-primary tracking-wide"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              (973) 901-4565
            </a>
            <a
              href="#quote"
              className="btn-primary px-5 py-2.5 text-xs"
            >
              Free Quote
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] bg-bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-400 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 text-text-primary text-3xl bg-transparent border-none cursor-pointer"
        >
          &times;
        </button>
        {["Services", "Process", "Reviews", "Service Areas", "Free Quote"].map(
          (item) => (
            <a
              key={item}
              href={
                item === "Free Quote"
                  ? "#quote"
                  : `#${item.toLowerCase().replace(" ", "-")}`
              }
              className="font-display text-3xl tracking-[0.15em] text-text-primary hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.toUpperCase()}
            </a>
          )
        )}
        <a
          href="tel:+19739014045"
          className="font-display text-xl text-accent tracking-wider mt-4"
          onClick={() => setOpen(false)}
        >
          (973) 901-4045
        </a>
      </div>
    </>
  );
}