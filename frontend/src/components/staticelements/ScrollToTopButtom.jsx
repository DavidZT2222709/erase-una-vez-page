import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Detectar scroll para mostrar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Acción al hacer click → desplazarse arriba con animación suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 100,
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-20 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </motion.div>
  );
};

export default ScrollToTopButton;
