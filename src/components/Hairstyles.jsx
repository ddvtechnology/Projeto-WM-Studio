import Reveal from "./Reveal";
import { prices } from "../data/prices";

/* Uma foto, um tamanho, um preço — usado no Penteado Básico, onde cada
   foto corresponde exatamente a um valor. */
function SizeCard({ src, label, value, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group relative aspect-[3/4] overflow-hidden rounded-sm shrink-0 w-[68vw] xs:w-[58vw] sm:w-auto snap-start cursor-pointer">
      <img src={src} alt={label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wine-dark via-wine-dark/60 to-transparent p-5 pt-16 flex flex-col justify-end">
        <p className="text-cream text-lg sm:text-xl font-display leading-snug drop-shadow-md">{label}</p>
        <p className="font-display text-lg sm:text-xl font-medium text-terracotta mt-1 drop-shadow-md">{value}</p>
      </div>
    </Reveal>
  );
}

/* Foto de portfólio pura — usada quando a quantidade de fotos não
   corresponde 1:1 à quantidade de valores (Elaborados). */
function GalleryPhoto({ src, alt, delay = 0, tall = false }) {
  return (
    <Reveal
      delay={delay}
      className={`group relative overflow-hidden rounded-sm shrink-0 w-[62vw] xs:w-[54vw] sm:w-auto snap-start cursor-pointer ${
        tall ? "aspect-[3/4]" : "aspect-square"
      }`}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
    </Reveal>
  );
}

/* Lista de valores em formato "tópico" — usada junto ao texto quando as
   fotos são um portfólio geral e não correspondem 1:1 a cada valor. */
function PriceList({ tiers }) {
  return (
    <ul className="mt-6 max-w-sm sm:max-w-md divide-y divide-wine-dark/10 border-t border-b border-wine-dark/10">
      {tiers.map(([label, value]) => (
        <li key={label} className="flex items-baseline justify-between gap-6 py-3.5">
          <span className="text-lg sm:text-xl font-display text-ink/80 leading-snug">{label}</span>
          <span className="font-display text-lg sm:text-xl font-medium text-terracotta">{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Hairstyles() {
  const basico = [
    { src: "/assets/images/hairstyles/basico-pequeno.jpg", label: "Cabelo pequeno", value: prices.basicHairstyle.small },
    { src: "/assets/images/hairstyles/basico-medio.jpg", label: "Cabelo médio", value: prices.basicHairstyle.medium },
    { src: "/assets/images/hairstyles/basico-grande.jpg", label: "Cabelo grande", value: prices.basicHairstyle.large },
  ];

  const elaboradoTiers = [
    ["Cabelo pequeno", prices.elaborateHairstyle.small],
    ["Cabelo médio", prices.elaborateHairstyle.medium],
    ["Cabelo grande", prices.elaborateHairstyle.large],
  ];

  const babylissTiers = [
    ["Cabelo curto", prices.babyliss.short],
    ["Cabelo médio", prices.babyliss.medium],
    ["Cabelo grande", prices.babyliss.long],
  ];

  return (
    <section id="penteados" className="bg-ivory py-24 sm:py-32">
      <div className="container-studio">
        <Reveal className="max-w-xl mb-16 sm:mb-24">
          <p className="divider-label mb-6 max-w-[180px]">Produções</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-wine-dark">
            Penteados
          </h2>
          <p className="mt-4 text-ink/70 text-base sm:text-lg">
            Produções que valorizam sua beleza em cada ocasião.
          </p>
        </Reveal>

        <div className="space-y-24 sm:space-y-28">
          {/* PENTEADO BÁSICO — 3 fotos, uma por tamanho: valor direto na imagem */}
          <div>
            <Reveal className="max-w-2xl mb-8 sm:mb-10">
              <h3 className="font-display text-3xl sm:text-4xl text-wine-dark mb-4">
                Penteado Básico
              </h3>
              <p className="text-ink/75 leading-relaxed">
                Penteados básicos, delicados e versáteis para realçar a beleza de forma
                elegante e natural. São indicados para ocasiões mais leves, como batizados,
                ensaios fotográficos, festas abertas e eventos durante o dia. Uma proposta
                charmosa para quem deseja estar linda, bem produzida e confortável, sem
                abrir mão da delicadeza e do seu estilo.
              </p>
            </Reveal>

            <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-5">
              {basico.map((item, i) => (
                <SizeCard key={item.label} {...item} delay={i * 0.08} />
              ))}
            </div>
          </div>

          {/* PENTEADOS ELABORADOS */}
          <div>
            <Reveal className="max-w-2xl mb-8 sm:mb-10">
              <h3 className="font-display text-3xl sm:text-4xl text-wine-dark mb-4">
                Penteados Elaborados
              </h3>
              <p className="text-ink/75 leading-relaxed">
                Penteados elaborados pensados para ocasiões especiais, como casamentos,
                formaturas e aniversários. Produções sofisticadas, elegantes e
                personalizadas, com acabamento impecável e atenção aos detalhes, para
                valorizar ainda mais sua beleza e deixar seu momento inesquecível.
              </p>
              <PriceList tiers={elaboradoTiers} />
            </Reveal>

            <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-5 sm:gap-4">
              <GalleryPhoto src="/assets/images/hairstyles/elaborado-01.jpg" alt="Penteado elaborado 1" tall />
              <GalleryPhoto src="/assets/images/hairstyles/elaborado-02.jpg" alt="Penteado elaborado 2" delay={0.05} />
              <GalleryPhoto src="/assets/images/hairstyles/elaborado-03.jpg" alt="Penteado elaborado 3" delay={0.1} tall />
              <GalleryPhoto src="/assets/images/hairstyles/elaborado-04.jpg" alt="Penteado elaborado 4" delay={0.15} />
              <GalleryPhoto src="/assets/images/hairstyles/elaborado-05.jpg" alt="Penteado elaborado 5" delay={0.2} tall />
            </div>
          </div>

          {/* BABYLISS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <Reveal className="lg:col-span-6">
              <h3 className="font-display text-3xl sm:text-4xl text-wine-dark mb-4">
                Babyliss
              </h3>
              <p className="text-ink/75 leading-relaxed">
                Ondas e movimento para uma produção elegante e versátil, perfeita para
                dar um toque especial ao visual sem abrir mão da naturalidade.
              </p>
              <PriceList tiers={babylissTiers} />
            </Reveal>

            <Reveal className="lg:col-span-5 lg:col-start-8 max-w-xs mx-auto lg:mx-0">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer">
                <img
                  src="/assets/images/hairstyles/babyliss.jpg"
                  alt="Babyliss"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
