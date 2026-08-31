import Reveal from "./Reveal";
import { prices } from "../data/prices";

const gallery = [
  { title: "Designer com Henna", image: "/assets/images/eyebrows/designer-henna.jpg", value: prices.eyebrows.henna },
  { title: "Designer Sem Henna", image: "/assets/images/eyebrows/designer-sem-henna.jpg", value: prices.eyebrows.female },
  { title: "Designer Masculino", image: "/assets/images/eyebrows/designer-masculino.jpg", value: prices.eyebrows.male },
  { title: "Designer Personalizado", image: "/assets/images/eyebrows/designer-personalizado.jpg", value: prices.eyebrows.personalizado },
];

export default function Eyebrows() {
  return (
    <section id="sobrancelhas" className="bg-cream py-24 sm:py-32">
      <div className="container-studio">
        <Reveal className="max-w-xl mb-14">
          <p className="divider-label mb-6 max-w-[220px]">Olhar &amp; expressão</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-wine-dark">
            Design de Sobrancelhas
          </h2>
          <p className="mt-4 text-ink/70 text-base sm:text-lg">
            Detalhes que valorizam sua expressão.
          </p>
        </Reveal>

        {/* Galeria com valores integrados — um serviço, uma foto, um preço */}
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 mt-10">
          {gallery.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 0.06}
              className={`group relative shrink-0 w-[70vw] xs:w-[62vw] sm:w-auto h-fit snap-start overflow-hidden rounded-sm cursor-pointer ${
                i % 2 === 1 ? "sm:mt-8" : ""
              }`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wine-dark via-wine-dark/60 to-transparent p-5 pt-16 flex flex-col justify-end">
                <p className="text-cream text-lg sm:text-xl font-display leading-snug drop-shadow-md">{g.title}</p>
                <p className="font-display text-lg sm:text-xl font-medium text-terracotta mt-1 drop-shadow-md">{g.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
