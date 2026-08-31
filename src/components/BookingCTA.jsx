import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { studioConfig } from "../data/config";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-wine-dark py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_75%_30%,theme(colors.terracotta)_0%,transparent_55%)]"
      />
      <div className="container-studio relative z-10 text-center">
        <Reveal>
          <p className="divider-label mb-8 justify-center max-w-[220px] mx-auto text-rose">
            Reserve seu horário
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-cream leading-tight max-w-3xl mx-auto">
            Seu momento especial merece uma produção à altura.
          </h2>
          
          <p className="mt-6 text-cream/75 text-base sm:text-lg font-display italic max-w-xl mx-auto leading-relaxed">
            Atendimento exclusivo com hora marcada. Por ser uma produção artesanal e dedicada, as vagas são limitadas por data.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3.5">
            <a
              href={studioConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-9 py-4 min-h-[44px] text-xs tracking-[0.2em] uppercase text-cream cursor-pointer shadow-lg shadow-terracotta/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-terracotta/25 hover:bg-rose hover:text-wine-dark active:scale-95"
            >
              Agendar meu horário
              <ArrowRight size={16} />
            </a>

            <span className="text-[0.7rem] sm:text-xs tracking-[0.2em] uppercase text-rose/70">
              ✦ Garanta sua data com antecedência ✦
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
