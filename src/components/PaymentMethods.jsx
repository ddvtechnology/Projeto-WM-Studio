import { Banknote, QrCode, CreditCard } from "lucide-react";
import Reveal from "./Reveal";

const methods = [
  { icon: Banknote, label: "Dinheiro" },
  { icon: QrCode, label: "PIX" },
  { icon: CreditCard, label: "Cartão" },
];

export default function PaymentMethods() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-studio">
        <Reveal className="text-center max-w-lg mx-auto mb-12">
          <p className="divider-label mb-6 justify-center max-w-[220px] mx-auto">Praticidade</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-wine-dark">
            Formas de Pagamento
          </h2>
        </Reveal>

        <div className="flex justify-center gap-10 sm:gap-16">
          {methods.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 0.08}
              className="flex flex-col items-center gap-3 text-wine-dark"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-terracotta/40">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-ink/70">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
