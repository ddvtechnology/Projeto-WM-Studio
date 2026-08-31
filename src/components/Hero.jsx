import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { studioConfig } from "../data/config";
import GradientOrb from "./GradientOrb";

const titleLine = (text, delayBase, extraClass = "") => (
  <span className="inline-flex overflow-hidden">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.9,
          delay: delayBase + i * 0.03,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`inline-block ${extraClass}`}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const reflexoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden bg-cream pt-28 pb-14 sm:pt-32 sm:pb-20 lg:min-h-screen lg:flex lg:items-center lg:pt-24"
    >
      {/* Atmosfera — orbes de gradiente discretos */}
      <GradientOrb
        color="var(--color-terracotta)"
        size={520}
        className="left-[-10%] top-[-10%] hidden sm:block"
      />
      <GradientOrb
        color="var(--color-wine-soft)"
        size={380}
        className="bottom-[-15%] left-[20%]"
        drift={false}
      />

      {/* Reflexo — deslocado para a direita, com parallax sutil no scroll e degradê */}
      <motion.div
        style={isMobile ? {} : { y: reflexoY }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none select-none absolute -right-24 top-10 h-[100%] w-[65%] opacity-[0.24]
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_7%)]
          sm:-right-16 sm:h-[85%] sm:w-[55%]
          lg:right-[-6%] lg:top-0 lg:h-full lg:w-[46%] lg:opacity-[0.32]"
      >
        <img
          src="/assets/images/hero/reflexo.jpg?v=2"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover [mask-image:linear-gradient(to_left,transparent_0%,black_28%,black_68%,transparent_98%)]"
        />
      </motion.div>

      <div className="container-studio relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6">
        <div className="lg:col-span-7 lg:col-start-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="divider-label mb-6 max-w-[220px]"
          >
            Studio
          </motion.p>

          <h1 className="font-display font-light leading-[0.95] text-wine-dark text-[3.1rem] xs:text-[3.5rem] sm:text-[4.5rem] lg:text-[5.4rem] xl:text-[6rem]">
            <span className="block">{titleLine("Williane", 1.25)}</span>
            <span className="block italic text-terracotta">
              {titleLine("Monteiro", 1.6)}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="mt-5 text-sm tracking-[0.25em] uppercase text-wine-soft"
          >
            Designer &amp; Penteadista Profissional
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
            className="mt-7 max-w-md text-base sm:text-lg text-ink/85 leading-relaxed"
          >
            Beleza, elegância e cuidado <span className="block sm:inline">para momentos que merecem <span className="block sm:inline"> </span>ser inesquecíveis.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            className="mt-10 flex flex-col xs:flex-row flex-wrap gap-4"
          >
            <a
              href="#atendimento"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 min-h-[44px] text-xs tracking-[0.2em] uppercase text-cream cursor-pointer shadow-lg shadow-terracotta/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-terracotta/25 hover:bg-rose hover:text-wine-dark active:scale-95"
            >
              Agendar meu horário
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-wine-dark/30 px-7 py-4 min-h-[44px] text-xs tracking-[0.2em] uppercase text-wine-dark cursor-pointer transition-all duration-300 hover:border-wine-dark hover:bg-wine-dark/5 active:scale-95"
            >
              Conhecer meus serviços
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
