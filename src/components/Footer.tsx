const Footer = () => (
  <footer className="bg-navy py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-2xl font-bold text-gold">LIWA</h3>
          <p className="font-body text-xs tracking-[0.3em] text-cream/60 uppercase">Convention Centre</p>
        </div>
        <p className="font-body text-sm text-cream/40">
          © {new Date().getFullYear()} LIWA Convention Centre, Kothamangalam. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
