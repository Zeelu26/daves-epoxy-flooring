import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <QuoteSection />
    </main>
  );
}