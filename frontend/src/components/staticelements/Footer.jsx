import React from 'react';
import { motion } from 'framer-motion';
// Importamos íconos para redes y contacto
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#FAF9F7] pt-10"> {/* Un pequeño padding top para separar del contenido anterior */}
      
      <footer className="bg-[#1F454E] text-white rounded-t-[2.5rem] relative overflow-hidden font-sans">
        
        {/* Decoración de fondo (Círculos sutiles) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20">
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* IZQUIERDA: Llamado a la acción principal */}
                <div className="text-center lg:text-left">
                    <span className="text-green-300 font-bold tracking-wider uppercase text-xs mb-4 block">
                        Únete a la familia
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-tight mb-6">
                        Haz parte del comienzo de una historia diferente
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Con tu ayuda, podemos llevar educación accesible, cuidado y
                        esperanza a cientos de familias. Dona, participa o comparte. 
                        <span className="text-white font-semibold"> Cada gesto suma.</span>
                    </p>

                    {/* Botones de acción */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 rounded-full bg-[#E63946] text-white font-bold hover:bg-red-600 transition shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                            <FaHeart /> Haz un donativo
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold transition flex items-center justify-center">
                            Súmate al voluntariado
                        </button>
                    </div>
                </div>

                {/* DERECHA: Contacto y Redes */}
                <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <h3 className="text-2xl font-serif font-semibold mb-6">Contáctanos</h3>
                    
                    <div className="space-y-6">
                        {/* Item Correo */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-green-300 flex-shrink-0">
                                <FaEnvelope size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">Escríbenos</p>
                                <a href="mailto:contacto@eraseunavezfundacion.com" className="text-lg font-medium hover:text-green-300 transition">
                                    contacto@eraseunavezfundacion.com
                                </a>
                            </div>
                        </div>

                        {/* Item WhatsApp */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-green-300 flex-shrink-0">
                                <FaWhatsapp size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">Llámanos o chatea</p>
                                <a href="https://wa.me/573104567890" className="text-lg font-medium hover:text-green-300 transition">
                                    +57 310 456 7890
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-white/10" />

                    {/* Redes Sociales */}
                    <div>
                        <p className="text-sm text-gray-400 mb-4">Síguenos en nuestras redes:</p>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/fundaeraseunavez/" className="w-10 h-10 rounded-full bg-white text-[#1F454E] flex items-center justify-center hover:bg-green-300 transition hover:scale-110">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61576502703003" className="w-10 h-10 rounded-full bg-white text-[#1F454E] flex items-center justify-center hover:bg-green-300 transition hover:scale-110">
                                <FaFacebookF size={18} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        {/* CRÉDITOS */}
        <div className="border-t border-white/10 bg-[#17353C]">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>
                   © 2024 Fundación Erase Una Vez. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-1">
                    <span>Hecho con el</span>
                    <FaHeart className="text-red-500 animate-pulse" size={10} />
                    <span>por <span className="text-white font-bold">BullTech</span></span>
                </div>
            </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;