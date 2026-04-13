import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VenuesSection from "@/components/VenuesSection";
import VideosSection from "@/components/VideosSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <VenuesSection />
    <VideosSection />
    <AmenitiesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
