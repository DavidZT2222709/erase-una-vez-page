import React from 'react';
// Importamos íconos necesarios
import { FaInstagram, FaFacebookF, FaHeart, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {

  // Datos de las sedes para facilitar la edición
  const sedes = [
    {
      ciudad: "Cesar",
      direccion: "Calle 12 # 45-67, Valledupar",
      telefono: "+57 310 123 4567",
      email: "cesar@eraseunavez.org"
    },
    {
      ciudad: "La Guajira",
      direccion: "Cra 5 # 10-20, Riohacha",
      telefono: "+57 312 987 6543",
      email: "guajira@eraseunavez.org"
    },
    {
      ciudad: "Pereira",
      direccion: "Av. Circunvalar # 12-34",
      telefono: "+57 315 555 6677",
      email: "pereira@eraseunavez.org"
    },
    {
      ciudad: "Chocó",
      direccion: "Calle 20 # 4-56, Quibdó",
      telefono: "+57 318 444 3322",
      email: "choco@eraseunavez.org"
    }
  ];

  return (
    <div className="bg-[#FAF9F7] pt-10">
      
      <footer className="bg-[#1F454E] text-white rounded-t-[2.5rem] relative overflow-hidden font-sans">
        
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-12"> {/* Reduje py-20 a py-12 */}
            
            {/* --- SECCIÓN SUPERIOR: LLAMADO A LA ACCIÓN (Más compacto) --- */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 border-b border-white/10 pb-10">
                <div className="text-center lg:text-left max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-tight mb-2">
                        Haz parte del comienzo de una historia diferente
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        Con tu ayuda llevamos esperanza. <span className="text-white font-semibold">Cada gesto suma.</span>
                    </p>
                </div>

                <div className="flex gap-4">
                     <button className="px-6 py-3 rounded-full bg-[#E63946] text-white text-sm font-bold hover:bg-red-600 transition shadow-lg hover:-translate-y-1 flex items-center gap-2">
                        <FaHeart /> Donar
                    </button>
                    <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 text-white text-sm font-semibold transition">
                        Voluntariado
                    </button>
                </div>
            </div>

            {/* --- SECCIÓN MEDIA: SEDES (Grid de 4 columnas) --- */}
            <div className="mb-10">
                <h3 className="text-center lg:text-left text-green-300 font-bold uppercase tracking-wider text-xs mb-6">
                    Nuestras Sedes
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sedes.map((sede, index) => (
                        <div key={index} className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition duration-300">
                            <h4 className="text-lg font-serif font-bold mb-3 text-white">{sede.ciudad}</h4>
                            
                            <ul className="space-y-3 text-xs text-gray-300">
                                <li className="flex items-start gap-3">
                                    <FaLocationDot className="mt-0.5 text-green-400 shrink-0" />
                                    <span>{sede.direccion}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhone className="text-green-400 shrink-0" />
                                    <a href={`tel:${sede.telefono.replace(/\s/g, '')}`} className="hover:text-white transition">
                                        {sede.telefono}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-green-400 shrink-0" />
                                    <a href={`mailto:${sede.email}`} className="hover:text-white transition truncate">
                                        {sede.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SECCIÓN INFERIOR: REDES Y COPYRIGHT --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 text-xs text-gray-400">
                
                {/* Redes Sociales */}
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/fundaeraseunavez/" className="hover:text-white transition flex items-center gap-2">
                        <FaInstagram size={16} /> <span className="hidden sm:inline">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576502703003" className="hover:text-white transition flex items-center gap-2">
                        <FaFacebookF size={14} /> <span className="hidden sm:inline">Facebook</span>
                    </a>
                </div>

                {/* Créditos */}
                <div className="text-center md:text-right">
                    <p className="mb-1">© 2024 Fundación Erase Una Vez.</p>
                    <div className="flex items-center justify-center md:justify-end gap-1 opacity-70">
                        <span>Desarrollado por</span>
                        <span className="text-white font-bold">BullTech</span>
                    </div>
                </div>

            </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;