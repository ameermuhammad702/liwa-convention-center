import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BusFront,
  HandHeart,
  BatteryFull,
  Music,
  ShieldCheck,
  Milk,
  AirVent,
  Accessibility,
} from "lucide-react";

const amenities = [
  { icon: BusFront, title: "Large Vehicle Parking", desc: "Spacious parking for large vehicles" },
  { icon: HandHeart, title: "Prayer Room", desc: "A dedicated prayer room for guests" },
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
    <section id="amenities" className="py-24 bg-charcoal" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">Amenities</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-4">
            Essential Event Facilities
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-6 text-center hover:border-gold/30 transition-colors duration-500"
            >
              <item.icon className="w-6 h-6 text-gold mx-auto mb-3 stroke-[1.5]" />
              <h3 className="font-heading text-base font-semibold text-ivory mb-1">{item.title}</h3>
              <p className="font-body text-xs text-ivory-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
