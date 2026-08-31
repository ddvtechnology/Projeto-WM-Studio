import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { studioConfig } from "../data/config";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Permanece na tela por um curto período antes de iniciar a transição de saída
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center rounded-full bg-cream ring-1 ring-wine/10 p-5 shadow-[0_4px_20px_-4px_rgba(74,29,27,0.15)] mb-6"
          >
            <img
              src={logo}
              alt={studioConfig.name}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
