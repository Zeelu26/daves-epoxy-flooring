"use client";

import { useState } from "react";

export default function QuoteSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      project_details: (form.elements.namedItem("project_details") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="quote"
      className="relative bg-bg-primary py-24 lg:py-32 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.06)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.03)_0%,transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="section-tag justify-center mb-4 before:hidden">
          Get Started
        </p>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4">
          READY TO FIX
          <br />
          THAT FLOOR?
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          Tell us about your space. We&apos;ll come take a look, give you an
          honest quote, and get your project on the calendar.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 text-left">
          <input
            name="full_name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full bg-bg-card border border-border px-6 py-4 text-text-primary text-base placeholder:text-text-muted outline-none transition-colors focus:border-accent"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-bg-card border border-border px-6 py-4 text-text-primary text-base placeholder:text-text-muted outline-none transition-colors focus:border-accent"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full bg-bg-card border border-border px-6 py-4 text-text-primary text-base placeholder:text-text-muted outline-none transition-colors focus:border-accent"
          />
          <textarea
            name="project_details"
            placeholder="Tell us about your space (garage size, condition, finish preferences...)"
            rows={5}
            className="w-full bg-bg-card border border-border px-6 py-4 text-text-primary text-base placeholder:text-text-muted outline-none transition-colors focus:border-accent resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full py-4 text-base text-center disabled:opacity-50"
          >
            {status === "loading" ? "SENDING..." : "REQUEST FREE QUOTE →"}
          </button>

          {status === "success" && (
            <p className="text-center text-accent text-base mt-2">
              Quote request sent! We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-base mt-2">
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </form>

        <a
          href="tel:+19739014045"
          className="inline-flex items-center gap-2 font-display text-3xl text-accent mt-8 tracking-wider hover:text-accent-light transition-colors"
        >
          ☎ (973) 901-4045
        </a>
      </div>
    </section>
  );
}