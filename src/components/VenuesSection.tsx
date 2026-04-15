import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import heroImgFallback from "@/assets/main-hall.jpg";
import diningHallFallback from "@/assets/dining-hall.png";

const VenuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: content } = useSiteContent("venues");

  const tagline = content?.tagline ?? "Our Spaces";
  const heading = content?.heading ?? "Stunning Venues";

  const venues = [
    {
      name: content?.venue1Name ?? "Main Hall",
      description: content?.venue1Desc ?? "Our spacious 5,000 sq. ft. air-conditioned main hall is designed to host gatherings of up to 1200 guests comfortably. Featuring a decorative gypsum ceiling, elegant lighting, and a large stage, the space is ideal for weddings, conferences, cultural events, and special celebrations.",
      image: content?.venue1Image ?? heroImgFallback,
      features: ["1200 Guests", "Air-Conditioned Hall", "5,000 Sq. Ft."],
    },
    {
      name: content?.venue2Name ?? "Dining Hall",
      description: content?.venue2Desc ?? "Our spacious 5,000 sq. ft. dining hall is designed to comfortably accommodate up to 1500 guests at a time. With a well-organized layout, ample ventilation, and generous serving space, the hall ensures a smooth and comfortable dining experience for weddings, receptions, and large gatherings.",
      image: content?.venue2Image ?? diningHallFallback,
      features: ["5,000 Sq. Ft.", "Spacious Layout", "1500 Guests"],
    },
  ];

  return (
    <section id="venues" className="py-24 bg-charcoal" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">{tagline}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-4">{heading}</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="space-y-20">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden">
                  <img src={venue.image} alt={venue.name} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={600} />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-heading text-3xl font-bold text-ivory mb-4">{venue.name}</h3>
                <div className="w-8 h-px bg-gold/40 mb-6" />
                <p className="font-body text-ivory-muted leading-relaxed mb-8 text-sm">{venue.description}</p>
                <div className="flex flex-wrap gap-3">
                  {venue.features.map((f) => (
                    <span key={f} className="px-4 py-2 bg-secondary text-gold font-body text-xs font-medium tracking-wider uppercase border border-border">{f}</span>
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
