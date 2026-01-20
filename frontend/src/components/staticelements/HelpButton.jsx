import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaHandsHoldingCircle, FaRobot, FaXmark } from "react-icons/fa6";

// IMPORTANTE: Asegúrate de que esta ruta sea correcta para la imagen de tu mascota
import MascotaImg from '../../assets/InitialImages/Imagen1.png'; 

const HelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Opciones del menú
  const actions = [
    { 
      id: 1, 
      label: "Donar", 
      icon: <FaHeart />, 
      color: "text-red-500", 
      bg: "bg-red-50",
      onClick: () => window.open("https://link-de-donacion.com", "_blank") 
    },
    { 
      id: 2, 
      label: "Voluntariado", 
      icon: <FaHandsHoldingCircle />, 
      color: "text-orange-500", 
      bg: "bg-orange-50",
      onClick: () => window.open("https://wa.me/573043699780?text=Hola,%20quiero%20ser%20voluntario", "_blank")
    },
    { 
      id: 3, 
      label: "Chatbot", 
      icon: <FaRobot />, 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      onClick: () => console.log("Abrir Chatbot") 
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* --- MENÚ DESPLEGABLE --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3 items-end mb-2">
            {actions.map((action, index) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={action.onClick}
                className="flex items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-full shadow-lg border border-gray-100 group hover:scale-105 transition-transform"
              >
                <span className="text-gray-600 font-bold text-sm group-hover:text-gray-900">
                  {action.label}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${action.bg} ${action.color} shadow-sm`}>
                  {action.icon}
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* --- BOTÓN PRINCIPAL (MASCOTA FLOTANTE) --- */}
      <div className="relative group">
        
        {/* Tooltip "Ayuda" */}
        {!isOpen && (
           <motion.div 
             initial={{ opacity: 0, x: 10 }}
             whileHover={{ opacity: 1, x: 0 }}
             className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-bold shadow-md whitespace-nowrap hidden md:block pointer-events-none"
           >
             ¿Necesitas ayuda?
           </motion.div>
        )}

        {/* Botón Transparente (Solo Imagen) */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          // CAMBIO: Se eliminó bg-white, border y shadow-2xl del contenedor
          className="relative w-24 h-24 flex items-center justify-center overflow-visible transition-all focus:outline-none"
        >
          {/* Imagen de la Mascota */}
          <img 
            src={MascotaImg} 
            alt="Ayuda" 
            // CAMBIO: drop-shadow-2xl para que la sombra sea de la silueta del búho
            className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-110'}`} 
          />

          {/* Icono de Cerrar (Con su propio fondo blanco pequeño para ser visible) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}>
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <FaXmark className="text-gray-500 text-2xl" />
            </div>
          </div>

          {/* Indicador de pulso (Ajustado a la posición de la imagen) */}
          {!isOpen && (
            <span className="absolute top-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
            </span>
          )}
        </motion.button>
      </div>

    </div>
  );
};

export default HelpButton;