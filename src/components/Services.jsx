import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { serviceCategories } from "../data/services";

export default function Services() {
  return (
    <section id="servicos" className="bg-ivory py-24 sm:py-32">
      <div className="container-studio">
        <Reveal className="max-w-xl mb-14 sm:mb-20">
          <p className="divider-label mb-6 max-w-[180px]">O que eu faço</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-wine-dark">
            Serviços
          </h2>
          <p className="mt-4 text-ink/70 text-base sm:text-lg">
            Beleza, cuidado e produções pensadas para você.
          </p>
        </Reveal>

        <div className="divide-y divide-wine-dark/10 border-t border-b border-wine-dark/10">
          {serviceCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <a
                href={cat.href}
                className="group flex items-center gap-6 sm:gap-10 py-8 sm:py-10 transition-all duration-300 hover:bg-cream/60 sm:hover:rounded-2xl -mx-6 px-6 sm:mx-0 sm:px-6 cursor-pointer active:scale-[0.99]"
              >
                <span className="font-display text-3xl sm:text-4xl text-terracotta/50 transition-colors duration-300 group-hover:text-terracotta shrink-0">
                  {cat.number}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-2xl sm:text-3xl text-wine-dark mb-1.5 transition-transform duration-300 group-hover:translate-x-1">
                    {cat.title}
                  </h3>
                  <p className="text-ink/70 text-sm sm:text-base max-w-lg">{cat.description}</p>
                </div>

                <span className="hidden sm:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-terracotta shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Ver mais <ArrowRight size={14} />
                </span>
                <ArrowRight
                  size={18}
                  className="sm:hidden text-terracotta shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
