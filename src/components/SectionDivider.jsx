import { motion } from "framer-motion";

export default function SectionDivider({ className = "" }) {
  return (
    <div className={`container-studio overflow-hidden py-2 sm:py-4 flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-terracotta/35 to-transparent origin-center"
      />
    </div>
  );
}
