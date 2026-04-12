import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Users, Star, MapPin } from "lucide-react";

const stats = [
  { icon: Crown, label: "Years of Excellence", value: "10+" },
  { icon: Users, label: "Events Hosted", value: "5,000+" },
  { icon: Star, label: "Happy Clients", value: "98%" },
  { icon: MapPin, label: "Sq. Ft. Space", value: "50,000+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
            A Legacy of Grand Celebrations
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            Nestled in the heart of Kothamangalam, LIWA Convention Centre stands as a beacon of luxury
            and hospitality. Our sprawling venue combines traditional Kerala elegance with modern amenities,
            creating the perfect canvas for your most cherished moments — from dream weddings to
            prestigious corporate events.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="font-heading text-3xl md:text-4xl font-bold text-navy">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
