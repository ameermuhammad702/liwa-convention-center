import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import weddingImgFallback from "@/assets/wedding-hall.jpg";
import conferenceImgFallback from "@/assets/conference-hall.jpg";
import exhibitionImgFallback from "@/assets/exhibition.jpg";

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: content } = useSiteContent("events");

  const tagline = content?.tagline ?? "What We Host";
  const heading = content?.heading ?? "Events & Occasions";
  const subheading = content?.subheading ?? "From intimate gatherings to grand celebrations, we bring your vision to life.";

  const events = [
    {
      title: content?.event1Title ?? "Weddings & Receptions",
      description: content?.event1Desc ?? "Create unforgettable memories in our grand banquet halls adorned with elegant décor, perfect lighting, and world-class catering.",
      image: content?.event1Image ?? weddingImgFallback,
      capacity: content?.event1Capacity ?? "Up to 2,000 guests",
    },
    {
      title: content?.event2Title ?? "Conferences & Seminars",
      description: content?.event2Desc ?? "State-of-the-art audio-visual equipment, flexible seating arrangements, and dedicated support for seamless corporate events.",
      image: content?.event2Image ?? conferenceImgFallback,
      capacity: content?.event2Capacity ?? "Up to 1,000 attendees",
    },
    {
      title: content?.event3Title ?? "Exhibitions & Expos",
      description: content?.event3Desc ?? "Expansive, column-free exhibition spaces with customizable layouts for trade shows, product launches, and cultural events.",
      image: content?.event3Image ?? exhibitionImgFallback,
      capacity: content?.event3Capacity ?? "Up to 5,000 sq. ft.",
    },
  ];

  return (
    <section id="events" className="py-24 bg-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">{tagline}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mb-4">{heading}</h2>
          <p className="font-body text-cream/60 max-w-xl mx-auto">{subheading}</p>
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
                <img src={event.image?.includes("/storage/v1/object/public/") ? `${event.image.replace("/storage/v1/object/public/", "/storage/v1/render/image/public/")}?width=800&quality=70` : event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" width={800} height={600} />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-cream mb-2">{event.title}</h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed mb-4">{event.description}</p>
                <span className="text-gold font-body text-xs tracking-wider uppercase font-semibold">{event.capacity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
