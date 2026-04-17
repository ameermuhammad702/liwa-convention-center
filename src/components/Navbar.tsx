import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLogo } from "@/hooks/useLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Venues", href: "#venues" },
  { label: "Events", href: "#events" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logoUrl } = useLogo();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="LIWA Convention Centre"
              className="h-10 md:h-12 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          )}
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-gold">LIWA</span>
            <span className="text-xs font-body font-light tracking-[0.3em] text-ivory-muted">
              CONVENTION CENTRE
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-body font-medium tracking-[0.15em] text-ivory-muted hover:text-gold transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ivory"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-charcoal border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-body font-medium tracking-[0.15em] text-ivory-muted hover:text-gold transition-colors uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
