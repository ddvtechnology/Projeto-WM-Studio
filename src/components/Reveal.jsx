import { motion } from "framer-motion";

/**
 * Wrapper de animação padrão do studio: fade + leve deslocamento vertical.
 * Mantém consistência entre seções e respeita prefers-reduced-motion via
 * Framer Motion (que já observa a preferência do usuário nas transições).
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 22,
  duration = 0.7,
  className = "",
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
