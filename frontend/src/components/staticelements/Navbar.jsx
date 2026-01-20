import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark, FaHeart } from "react-icons/fa6";
import Logo from '../../assets/InitialImages/Logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de enlaces para mantener el código limpio
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { 
      name: "Proyectos", 
      path: "/proyectos",
      subLinks:[
        {name: "Concientización sobre el Autismo", hash: "#concientizacion"},
        {name: "Capacitación Docente", hash: "#capacitacion"},
        {name: "Sexualidad Educativa", hash: "#sexualidad"},
        {name: "Asistencia en Salud", hash: "#salud"},
        {name: "Apoyo a Cuidadores", hash: "#cuidadores"},
        {name: "Proyectos Emprendimiento", hash: "#emprendimiento"},
      ]
    
    },
    { 
      name: "Servicios", 
      path: "/servicios",
      subLinks:[
        {name: "Tienda Solidaria", hash: "#tienda"},
        {name: "Servicios en Salud", hash: "#salud"},
      ]

    },
    { name: "Equipo de Trabajo", path: "/equipo-de-trabajo" },
    { name: "Contactanos", path: "/contacto" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 font-sans ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-[#FAF9F7] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* 1. LOGOTIPO */}
          <a href="/" className="flex-shrink-0">
            <img 
              src={Logo} 
              alt="Érase una vez Fundación" 
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`} 
            />
          </a>

          {/* 2. MENÚ DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                
                {/* Enlace Principal */}
                <a 
                  href={link.path} 
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors relative flex items-center gap-1 py-4"
                >
                  {link.name}
                  
                  {/* Ícono de flecha pequeña si tiene submenú (Opcional pero recomendado para UX) */}
                  {link.subLinks && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}

                  {/* Línea animada (Tu código original) */}
                  <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* LÓGICA DEL DROPDOWN (Solo se renderiza si existen subLinks) */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[200px] z-50">
                    {/* Contenedor blanco con sombra */}
                    <div className="bg-white rounded-md shadow-xl border border-gray-100 overflow-hidden py-2">
                      {link.subLinks.map((subItem) => (
                        <a
                          key={subItem.name}
                          // Concatenamos la ruta principal + el hash (#seccion)
                          href={`${link.path}${subItem.hash}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. BOTÓN DONAR + MENÚ HAMBURGUESA */}
          <div className="flex items-center gap-4">
            {/* Botón CTA (Visible siempre o solo en desktop según prefieras) */}
            <a href='https://wa.me/573043699780'>
              <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E63946] text-white text-sm font-bold hover:bg-red-700 transition shadow-md hover:-translate-y-0.5 transform duration-200">
                <FaHeart size={14} /> Donar
              </button>
            </a>
            {/* Botón Hamburguesa (Móvil) */}
            <button 
              className="md:hidden text-gray-800 focus:outline-none p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 4. MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#FAF9F7] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                className="text-2xl font-serif font-bold text-gray-800 hover:text-orange-500 transition"
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              >
                {link.name}
              </a>
            ))}
            
            <a href='https://wa.me/573043699780'>
              <button className="mt-4 px-8 py-3 rounded-full bg-[#E63946] text-white font-bold text-lg hover:bg-red-700 transition flex items-center gap-2">
                <FaHeart /> Quiero Donar
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;