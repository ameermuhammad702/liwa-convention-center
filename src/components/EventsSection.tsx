import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import weddingImg from "@/assets/wedding-hall.jpg";
import conferenceImg from "@/assets/conference-hall.jpg";
import exhibitionImg from "@/assets/exhibition.jpg";

const events = [
  {
    title: "Weddings & Receptions",
    description: "Create unforgettable memories in our grand banquet halls adorned with elegant décor, perfect lighting, and world-class catering.",
    image: weddingImg,
    capacity: "Up to 2,000 guests",
  },
  {
    title: "Conferences & Seminars",
    description: "State-of-the-art audio-visual equipment, flexible seating arrangements, and dedicated support for seamless corporate events.",
    image: conferenceImg,
    capacity: "Up to 1,000 attendees",
  },
  {
    title: "Exhibitions & Expos",
    description: "Expansive, column-free exhibition spaces with customizable layouts for trade shows, product launches, and cultural events.",
    image: exhibitionImg,
    capacity: "Up to 5,000 sq. ft.",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 bg-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">What We Host</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mb-4">
            Events & Occasions
          </h2>
          <p className="font-body text-cream/60 max-w-xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group rounded-lg overflow-hidden bg-navy-light"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-cream mb-2">{event.title}</h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed mb-4">{event.description}</p>
                <span className="text-gold font-body text-xs tracking-wider uppercase font-semibold">
                  {event.capacity}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
