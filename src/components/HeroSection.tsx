import { motion } from "framer-motion";
import heroImage from "@/assets/hero-venue.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LIWA Convention Centre grand banquet hall"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-gold-light uppercase mb-4">
            Kothamangalam, Kerala
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
            LIWA
            <span className="block text-gradient-gold text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
              Convention Centre
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Where grand celebrations meet timeless elegance. The premier destination for weddings, conferences, and extraordinary events in Kerala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold-dark transition-colors duration-300"
            >
              Book Your Event
            </a>
            <a
              href="#venues"
              className="px-8 py-4 border border-gold text-gold font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold/10 transition-colors duration-300"
            >
              Explore Venues
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
