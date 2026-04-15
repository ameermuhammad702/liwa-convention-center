import { useLogo } from "@/hooks/useLogo";

const Footer = () => {
  const { logoUrl } = useLogo();

  return (
    <footer className="bg-charcoal py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="LIWA Convention Centre"
                className="h-10 md:h-12 w-auto object-contain"
              />
            ) : (
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-gold">LIWA</h3>
                <p className="font-body text-xs tracking-[0.3em] text-ivory-muted uppercase">Convention Centre</p>
              </div>
            )}
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} LIWA Convention Centre, Kothamangalam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
