const items = [
  "Sobrancelhas",
  "Design com Henna",
  "Penteado Básico",
  "Penteados Elaborados",
  "Babyliss",
  "Epilação",
];

export default function Marquee() {
  const line = [...items, ...items];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-wine/20 bg-ivory py-4 sm:py-5"
    >
      <div className="flex w-max animate-marquee gap-10 sm:gap-16">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-10 sm:gap-16">
            {line.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-10 sm:gap-16 font-display italic text-xl sm:text-2xl text-wine-dark/80 whitespace-nowrap"
              >
                {item}
                <span className="text-terracotta text-sm not-italic">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
