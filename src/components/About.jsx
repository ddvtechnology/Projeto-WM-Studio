import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import GradientOrb from "./GradientOrb";

const paragraphs = [
  "Minha paixão pela área da beleza nasceu do desejo de transformar não apenas a aparência, mas também a autoestima e a confiança de cada mulher.",
  "Sou Williane Monteiro, Designer e Penteadista Profissional, e amo criar produções que valorizam a beleza, a personalidade e a essência de cada cliente.",
  "Para mim, cada penteado é único e merece atenção aos detalhes, delicadeza e dedicação.",
  "Acredito que se sentir bonita é também se sentir especial. Por isso, meu propósito é proporcionar uma experiência acolhedora e profissional, fazendo com que cada mulher saia do meu atendimento ainda mais confiante, elegante e feliz.",
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const capaY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <GradientOrb color="var(--color-copper)" size={420} className="right-[-10%] top-[15%] hidden lg:block" />
      <GradientOrb color="var(--color-rose)" size={280} className="left-[-6%] bottom-[5%] hidden lg:block" drift={false} />

      {/* Marca d'água tipográfica decorativa */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none select-none absolute -right-4 top-28 hidden xl:block font-display text-9xl leading-none opacity-70"
      >
      </span>

      <div className="container-studio relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Coluna da Imagem */}
        <div className="lg:col-span-5 relative order-last lg:order-first">
          <motion.div
            style={isMobile ? {} : { y: capaY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] max-w-md mx-auto lg:max-w-none">
              <img
                src="/assets/images/hero/capa.jpg"
                alt="Williane Monteiro em produção de penteado"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-wine-dark/10" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-full w-full -z-10 border border-terracotta/40 rounded-[2px] hidden sm:block max-w-md mx-auto lg:max-w-none" />
          </motion.div>
        </div>

        {/* Coluna de Texto */}
        <div className="lg:col-span-7">
          <Reveal className="text-center lg:text-left mb-10 sm:mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-light text-wine-dark">
              Sobre Mim
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto lg:mx-0">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl text-wine-dark leading-snug text-center sm:text-left">
                <span className="float-left mr-3 mt-1 font-display text-7xl sm:text-8xl leading-[0.75] text-terracotta">
                  {paragraphs[0].charAt(0)}
                </span>
                {paragraphs[0].slice(1)}
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
              {paragraphs.slice(1).map((p, i) => (
                <Reveal key={i} delay={0.06 * i}>
                  <p className="text-ink/80 leading-relaxed text-[0.98rem] sm:text-base text-center lg:text-left">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-10 text-center lg:text-left">
              <span className="mx-auto lg:mx-0 mb-6 block h-px w-16 bg-terracotta/40" />
              <p className="font-display italic text-xl sm:text-2xl text-wine-soft leading-relaxed">
                Minha maior realização é participar de momentos especiais e transformar
                sonhos em beleza.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
