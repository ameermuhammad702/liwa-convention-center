import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Car,
  Wifi,
  BatteryFull,
  Music,
  ShieldCheck,
  Milk,
  AirVent,
  Accessibility,
} from "lucide-react";

const amenities = [
  { icon: Car, title: "Ample Parking", desc: "Spacious parking for 600+ vehicles" },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Seamless connectivity throughout" },
  { icon: BatteryFull, title: "Power Backup", desc: "100% diesel generator backup" },
  { icon: Music, title: "AV Equipment", desc: "Professional sound & lighting" },
  { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV surveillance & trained staff" },
  { icon: Milk, title: "Feeding Room", desc: "Dedicated Feeding Room" },
  { icon: AirVent, title: "Full AC", desc: "Sq.Ft. AC Hall" },
  { icon: Accessibility, title: "Accessible", desc: "Ramps, elevators & accessible restrooms" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Facilities</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            World-Class Amenities
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream-dark rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-heading text-base font-semibold text-navy mb-1">{item.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
