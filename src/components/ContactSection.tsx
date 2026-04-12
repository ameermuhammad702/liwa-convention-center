import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Plan Your Event
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Ready to host your next event at LIWA? Reach out to us and our team will make it unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Location</h3>
                <p className="font-body text-muted-foreground text-sm">
                  LIWA Convention Centre<br />
                  Kothamangalam, Ernakulam District<br />
                  Kerala, India - 686691
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Phone</h3>
                <p className="font-body text-muted-foreground text-sm">
                  +91 485 282 XXXX<br />
                  +91 94XX XXX XXX
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Email</h3>
                <p className="font-body text-muted-foreground text-sm">
                  info@liwaconventioncentre.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Hours</h3>
                <p className="font-body text-muted-foreground text-sm">
                  Open 7 days a week<br />
                  9:00 AM — 10:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded bg-cream border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded bg-cream border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded bg-cream border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <select className="w-full px-4 py-3 rounded bg-cream border border-border font-body text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50">
              <option>Select Event Type</option>
              <option>Wedding / Reception</option>
              <option>Conference / Seminar</option>
              <option>Exhibition / Expo</option>
              <option>Birthday / Anniversary</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Tell us about your event..."
              rows={4}
              className="w-full px-4 py-3 rounded bg-cream border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gold text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold-dark transition-colors duration-300"
            >
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
