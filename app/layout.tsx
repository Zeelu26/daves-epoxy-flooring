import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dave's Epoxy Flooring | Premium Garage & Commercial Floors in NJ",
  description:
    "Premium epoxy flooring for garages, basements, and commercial spaces across New Jersey engineered for durability, installed to perfection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary antialiased font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}