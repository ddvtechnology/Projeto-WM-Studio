import WhatsappIcon from "./WhatsappIcon";
import { navLinks, studioConfig } from "../data/config";
import logo from "../assets/logo.png";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-wine-dark/10 py-14">
      <div className="container-studio flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <span className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-cream ring-1 ring-wine/10 p-2 sm:p-3 shadow-[0_2px_10px_-2px_rgba(74,29,27,0.15)]">
            <img src={logo} alt={studioConfig.name} className="h-full w-full object-contain" />
          </span>
          <div>
            <p className="font-display text-xl text-wine-dark">{studioConfig.professional}</p>
            <p className="text-xs tracking-[0.2em] uppercase text-copper mt-1">
              {studioConfig.profession}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-wine-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={studioConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-wine-dark/80 hover:text-terracotta transition-colors tracking-wide"
          >
            {studioConfig.phone}
          </a>
          <div className="flex items-center gap-3">
            <a
              href={studioConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Williane Monteiro Studio"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-wine-dark/20 text-wine-dark hover:border-terracotta hover:text-terracotta transition-colors"
            >
              <InstagramIcon width={18} height={18} />
            </a>
            <a
              href={studioConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do Williane Monteiro Studio"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-wine-dark/20 text-wine-dark hover:border-terracotta hover:text-terracotta transition-colors"
            >
              <WhatsappIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-[0.7rem] tracking-widest uppercase text-ink/40">
        © {new Date().getFullYear()} {studioConfig.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
