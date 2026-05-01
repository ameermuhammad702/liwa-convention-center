import { useLogo } from "@/hooks/useLogo";
import { useSiteContent } from "@/hooks/useSiteContent";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Footer = () => {
  const { logoUrl } = useLogo();
  const { data: social } = useSiteContent("social");
  const instagramUrl = social?.instagramUrl || "https://www.instagram.com/liwaconventioncentre/";
  const facebookUrl = social?.facebookUrl || "https://www.facebook.com/people/Liwa-Convention/61584895154150/";

  return (
    <footer className="bg-charcoal py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="LIWA Convention Centre"
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold text-gold">LIWA</h3>
              <p className="font-body text-xs tracking-[0.3em] text-ivory-muted uppercase">Convention Centre</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="font-body text-xs text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} LIWA Convention Centre, Kothamangalam. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-ivory-muted hover:text-gold transition-colors duration-300"
                >
                  <InstagramIcon />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-ivory-muted hover:text-gold transition-colors duration-300"
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Footer = () => {
  const { logoUrl } = useLogo();

  return (
    <footer className="bg-charcoal py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="LIWA Convention Centre"
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold text-gold">LIWA</h3>
              <p className="font-body text-xs tracking-[0.3em] text-ivory-muted uppercase">Convention Centre</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/liwaconventioncentre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ivory-muted hover:text-gold transition-colors duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/people/Liwa-Convention/61584895154150/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-ivory-muted hover:text-gold transition-colors duration-300"
            >
              <FacebookIcon />
            </a>
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
