import { motion } from "framer-motion";
import { useSiteContent } from "@/hooks/useSiteContent";
import heroImageFallback from "@/assets/hero-venue.jpg";

const HeroSection = () => {
  const { data: content, isLoading } = useSiteContent("hero");

  const subtitle = content?.subtitle || "Kothamangalam, Kerala";
  const heading = content?.heading || "LIWA";
  const headingSub = content?.headingSub || "Convention Centre";
  const description = content?.description || "Where grand celebrations meet timeless elegance. The premier destination for weddings, conferences, and extraordinary events in Kerala.";
  const cta1 = content?.cta1 || "Book Your Event";
  const cta2 = content?.cta2 || "Explore Venues";
  const heroImage = isLoading ? null : (content?.heroImage || heroImageFallback);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal">
        {heroImage && (
          <img
            src={heroImage}
            alt="LIWA Convention Centre grand banquet hall"
            className="w-full h-full object-cover opacity-70"
            width={1920}
            height={1080}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-[0.5em] text-gold-light uppercase mb-6">
            {subtitle}
          </p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-ivory mb-4 leading-[0.9]">
            {heading}
          </h1>
          <span className="block text-gradient-gold text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-8 italic">
            {headingSub}
          </span>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm md:text-base text-ivory-muted max-w-xl mx-auto mb-12 font-light leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-10 py-4 bg-gold text-primary-foreground font-body font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-dark transition-all duration-300"
            >
              {cta1}
            </a>
            <a
              href="#venues"
              className="px-10 py-4 border border-gold/40 text-gold font-body font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              {cta2}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border border-gold/30 flex justify-center pt-2">
          <div className="w-0.5 h-1.5 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
