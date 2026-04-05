import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import VideoTestimonial from "@/components/VideoTestimonial";
import Guarantee from "@/components/Guarantee";
import ServiceAreas from "@/components/ServiceAreas";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Hero />
      <Marquee />
      <Services />
      <BeforeAfter />
      <Process />
      <WhyChooseUs />
      <Reviews />
      <VideoTestimonial />
      <Guarantee />
      <ServiceAreas />
      <QuoteSection />
    </main>
  );
}