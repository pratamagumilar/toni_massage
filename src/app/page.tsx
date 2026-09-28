import Coverage from "@/components/Coverage";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowToOrder from "@/components/HowToOrder";
import Keluhan from "@/components/Keluhan";
import Services from "@/components/Services";
import StickyBar from "@/components/StickyBar";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Keluhan />
        <Services />
        <Coverage />
        <HowToOrder />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
