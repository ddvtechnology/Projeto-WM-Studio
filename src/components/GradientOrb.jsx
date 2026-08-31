import { motion } from "framer-motion";

/**
 * Forma abstrata em gradiente — substitui ilustrações por atmosfera.
 * Usado com moderação em cada seção para criar profundidade sem poluir.
 */
export default function GradientOrb({
  color = "var(--color-terracotta)",
  size = 420,
  className = "",
  drift = true,
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`orb ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.14,
      }}
      animate={drift ? { y: [0, -18, 0] } : undefined}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
