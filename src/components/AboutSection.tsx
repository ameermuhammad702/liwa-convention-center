import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Users, AirVent, Building } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const icons = [Car, Users, AirVent, Building];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: content } = useSiteContent("about");

  const tagline = content?.tagline ?? "Our Story";
  const heading = content?.heading ?? "A Legacy of Grand Celebrations";
  const description = content?.description ?? "Nestled in the heart of Kothamangalam, LIWA Convention Centre stands as a beacon of luxury and hospitality. Our sprawling venue combines traditional Kerala elegance with modern amenities, creating the perfect canvas for your most cherished moments — from dream weddings to prestigious corporate events.";

  const stats = [
    { icon: icons[0], label: content?.stat1Label ?? "Car Parking", value: content?.stat1Value ?? "600+" },
    { icon: icons[1], label: content?.stat2Label ?? "Capacity", value: content?.stat2Value ?? "3,000+" },
    { icon: icons[2], label: content?.stat3Label ?? "Sq. Ft. Air Conditioned Hall", value: content?.stat3Value ?? "4000+" },
    { icon: icons[3], label: content?.stat4Label ?? "Total Sq. Ft. Space", value: content?.stat4Value ?? "12,000+" },
  ];

  return (
    <section id="about" className="py-24 bg-charcoal-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">{tagline}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-6">{heading}</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p className="font-body text-ivory-muted leading-relaxed text-sm">{description}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-6 border border-border rounded-sm"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-3 stroke-[1.5]" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
              <p className="font-body text-xs text-ivory-muted mt-2 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
