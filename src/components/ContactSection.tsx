import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: content } = useSiteContent("contact");

  const tagline = content?.tagline ?? "Get In Touch";
  const heading = content?.heading ?? "Plan Your Event";
  const subheading = content?.subheading ?? "Ready to host your next event at LIWA? Reach out to us and our team will make it unforgettable.";
  const address = content?.address ?? "LIWA Convention Centre\nKuttilanji, Irumalappady\nKothamangalam, Ernakulam District\nKerala, India - 686691";
  const phone = content?.phone ?? "+91 9895050765\n+91 7510134840";
  const email = content?.email ?? "liwaconventioncentre@gmail.com";
  const hours = content?.hours ?? "Open 7 days a week\n9:00 AM — 10:00 PM";

  return (
    <section id="contact" className="py-24 bg-charcoal-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">{tagline}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-4">{heading}</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-4" />
          <p className="font-body text-ivory-muted max-w-xl mx-auto text-sm">{subheading}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-ivory">Location</h3>
                <p className="font-body text-ivory-muted text-sm whitespace-pre-line">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-ivory">Phone</h3>
                <p className="font-body text-ivory-muted text-sm whitespace-pre-line">{phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-ivory">Email</h3>
                <p className="font-body text-ivory-muted text-sm">{email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1 stroke-[1.5]" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-ivory">Hours</h3>
                <p className="font-body text-ivory-muted text-sm whitespace-pre-line">{hours}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors" />
            <select className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors">
              <option>Select Event Type</option>
              <option>Wedding / Reception</option>
              <option>Conference / Seminar</option>
              <option>Exhibition / Expo</option>
              <option>Birthday / Anniversary</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Tell us about your event..." rows={4} className="w-full px-4 py-3 bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors resize-none" />
            <button type="submit" className="w-full px-8 py-4 bg-gold text-primary-foreground font-body font-semibold text-xs tracking-[0.2em] uppercase hover:bg-gold-dark transition-all duration-300">
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
