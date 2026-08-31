import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, studioConfig } from "../data/config";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-cream/92 backdrop-blur-md shadow-[0_1px_0_0_rgba(74,29,27,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-studio flex items-center justify-between py-3 sm:py-4">
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-cream ring-1 ring-wine/10 p-1.5 shadow-[0_2px_10px_-2px_rgba(74,29,27,0.15)]">
            <img
              src={logo}
              alt={studioConfig.name}
              className="h-full w-full object-contain"
            />
          </span>
          <span
            className={`hidden sm:block font-display text-lg tracking-wide leading-none ${
              scrolled ? "text-wine-dark" : "text-wine-dark"
            }`}
          >
            Williane Monteiro
            <span className="block text-[0.6rem] font-body tracking-[0.3em] text-copper uppercase mt-0.5">
              Studio
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide text-wine-dark/85 hover:text-wine-dark transition-colors group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#atendimento"
          className="hidden lg:inline-flex items-center gap-2 rounded-sm border border-wine-dark/80 px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-wine-dark hover:bg-wine-dark hover:text-cream transition-colors duration-300"
        >
          Agendar
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-wine-dark"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-cream border-t border-wine-dark/10 shadow-lg"
          >
            <nav className="container-studio flex flex-col py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="py-3.5 border-b border-wine-dark/10 text-base text-wine-dark font-display text-xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#atendimento"
                onClick={handleNavClick}
                className="mt-6 inline-flex items-center justify-center rounded-sm bg-wine-dark px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-cream"
              >
                Agendar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
