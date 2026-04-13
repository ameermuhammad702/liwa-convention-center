import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import heroImgFallback from "@/assets/hero-venue-new.webp";
import weddingImgFallback from "@/assets/wedding-hall.jpg";

const VenuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: content } = useSiteContent("venues");

  const tagline = content?.tagline ?? "Our Spaces";
  const heading = content?.heading ?? "Stunning Venues";

  const venues = [
    {
      name: content?.venue1Name ?? "Grand Ballroom",
      description: content?.venue1Desc ?? "Our flagship hall with soaring ceilings, crystal chandeliers, and capacity for up to 2,000 guests. Perfect for grand weddings and gala events.",
      image: content?.venue1Image ?? heroImgFallback,
      features: ["2,000 Guests", "Bridal Suite", "DECORATED CEILING"],
    },
    {
      name: content?.venue2Name ?? "Celebration Hall",
      description: content?.venue2Desc ?? "An intimate yet elegant space ideal for engagements, birthday parties, and family gatherings with personalized décor options.",
      image: content?.venue2Image ?? weddingImgFallback,
      features: ["500 Guests", "Custom Décor", "Private Dining"],
    },
  ];

  return (
    <section id="venues" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">{tagline}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">{heading}</h2>
        </motion.div>

        <div className="space-y-16">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src={venue.image} alt={venue.name} className="w-full h-80 object-cover" loading="lazy" width={800} height={600} />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-heading text-3xl font-bold text-navy mb-4">{venue.name}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{venue.description}</p>
                <div className="flex flex-wrap gap-3">
                  {venue.features.map((f) => (
                    <span key={f} className="px-4 py-2 bg-gold/10 text-gold-dark font-body text-xs font-semibold tracking-wider uppercase rounded-full border border-gold/20">{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;
