"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full !bg-white border-b shadow-sm relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="!text-black text-xl font-bold">
          Dave&apos;s Epoxy Flooring
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="!text-black hover:!text-gray-600 transition">
            Home
          </Link>
          <Link href="/services" className="!text-black hover:!text-gray-600 transition">
            Services
          </Link>
          <Link href="/service-areas" className="!text-black hover:!text-gray-600 transition">
            Service Areas
          </Link>
          <Link href="/gallery" className="!text-black hover:!text-gray-600 transition">
            Gallery
          </Link>
          <Link href="/reviews" className="!text-black hover:!text-gray-600 transition">
            Reviews
          </Link>
          <Link href="/contact" className="!text-black hover:!text-gray-600 transition">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden !text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t !bg-white px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="!text-black">
              Home
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="!text-black">
              Services
            </Link>
            <Link href="/service-areas" onClick={() => setMenuOpen(false)} className="!text-black">
              Service Areas
            </Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="!text-black">
              Gallery
            </Link>
            <Link href="/reviews" onClick={() => setMenuOpen(false)} className="!text-black">
              Reviews
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="!text-black">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}