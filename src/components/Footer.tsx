const Footer = () => (
  <footer className="bg-charcoal py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-2xl font-bold text-gold">LIWA</h3>
          <p className="font-body text-xs tracking-[0.3em] text-ivory-muted uppercase">Convention Centre</p>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} LIWA Convention Centre, Kothamangalam. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
