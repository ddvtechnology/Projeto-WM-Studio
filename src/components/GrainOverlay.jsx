/**
 * Textura de grão fixa sobre toda a página — dá profundidade ao fundo escuro
 * sem pesar performance (SVG inline, opacidade mínima, sem interação).
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-multiply"
    />
  );
}
