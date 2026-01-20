import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserDoctor, 
  FaHandsHoldingCircle, 
  FaChalkboardUser, 
  FaPeopleCarryBox, 
  FaUsersGear, 
  FaHeartPulse,
  FaHandFist,
  FaRegFaceSmileBeam,
  FaArrowRight
} from "react-icons/fa6";

// IMPORTANTE: Reemplaza con las fotos reales de cada GRUPO de trabajo
import TeamSalud from '../../assets/InitialImages/Imagen6.png'; 
import TeamPsico from '../../assets/InitialImages/Imagen3.png';
import TeamVoluntarios from '../../assets/InitialImages/Donacion.png';
import TeamAdmin from '../../assets/InitialImages/Carrusel1.jpeg';
import TeamDocente from '../../assets/InitialImages/Carrusel2.jpeg';
import TeamLogistica from '../../assets/InitialImages/Carrusel3.jpeg';

// ==========================================
// CONFIGURACIÓN DE ANIMACIONES
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// ==========================================
// DATOS DE LOS EQUIPOS
// ==========================================
const equiposData = [
  {
    id: 1,
    nombre: "Equipo Psicosocial",
    descripcion: "El corazón que escucha. Psicólogos y trabajadores sociales que brindan soporte emocional a niños y familias.",
    icono: <FaHeartPulse />,
    color: "bg-pink-100 text-pink-600",
    imagen: TeamPsico
  },
  {
    id: 2,
    nombre: "Salud y Terapias",
    descripcion: "Manos que sanan. Fisioterapeutas, fonoaudiólogos y médicos enfocados en el desarrollo físico y cognitivo.",
    icono: <FaUserDoctor />,
    color: "bg-blue-100 text-blue-600",
    imagen: TeamSalud
  },
  {
    id: 3,
    nombre: "Equipo Educativo",
    descripcion: "Mentes que guían. Docentes y pedagogos que adaptan el aprendizaje a las necesidades únicas de cada niño.",
    icono: <FaChalkboardUser />,
    color: "bg-yellow-100 text-yellow-600",
    imagen: TeamDocente
  },
  {
    id: 4,
    nombre: "Voluntariado",
    descripcion: "La fuerza del amor. Personas que donan su tiempo y energía para hacer magia en cada evento y actividad.",
    icono: <FaHandsHoldingCircle />,
    color: "bg-orange-100 text-orange-600",
    imagen: TeamVoluntarios
  },
  {
    id: 5,
    nombre: "Logística y Apoyo",
    descripcion: "El motor silencioso. Se encargan de que cada evento, donación y actividad salga a la perfección.",
    icono: <FaPeopleCarryBox />,
    color: "bg-green-100 text-green-600",
    imagen: TeamLogistica
  },
  {
    id: 6,
    nombre: "Administrativo",
    descripcion: "La estructura sólida. Gestionan los recursos con transparencia para maximizar nuestro impacto social.",
    icono: <FaUsersGear />,
    color: "bg-purple-100 text-purple-600",
    imagen: TeamAdmin
  },
];

// ==========================================
// DATOS "NUESTRO ADN"
// ==========================================
const adnData = [
    { titulo: "Pasión", desc: "Hacemos todo con el corazón.", icon: <FaHeartPulse /> },
    { titulo: "Resiliencia", desc: "Convertimos retos en oportunidades.", icon: <FaHandFist /> },
    { titulo: "Alegría", desc: "Celebramos cada pequeño logro.", icon: <FaRegFaceSmileBeam /> },
];

const Teams = () => {
  return (
    <div className="bg-[#FAF9F7] font-sans overflow-hidden pt-32 pb-20">
      
      {/* ==============================================================
          1. HERO: INTRODUCCIÓN
      ============================================================== */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Nuestra Gente</span>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mt-4 mb-6">
            Corazones que laten por <br/>
            <span className="text-blue-600">un mismo propósito.</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Detrás de cada sonrisa de un niño, hay un equipo multidisciplinario entregando su talento, tiempo y amor. Conoce a quienes hacen esto posible.
          </p>
        </motion.div>
      </div>

      {/* ==============================================================
          2. GRILLA DE EQUIPOS (FOTOS + DESCRIPCIÓN)
      ============================================================== */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {equiposData.map((equipo) => (
            <motion.div 
              key={equipo.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            >
              {/* Contenedor Imagen */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={equipo.imagen} 
                  alt={equipo.nombre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                />
                {/* Badge Icono Flotante */}
                <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md ${equipo.color}`}>
                  {equipo.icono}
                </div>
              </div>

              {/* Contenido Texto */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {equipo.nombre}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {equipo.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==============================================================
          3. SECCIÓN: NUESTRO ADN (CULTURA)
      ============================================================== */}
      <section className="bg-[#FAF9F7] py-20 mb-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-serif text-gray-900">El ADN de nuestro equipo</h2>
             <p className="text-gray-500 mt-2">Lo que nos define más allá de nuestras profesiones.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {adnData.map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                 >
                    <div className="w-20 h-20 bg-[#FAF9F7] rounded-full flex items-center justify-center text-3xl text-orange-500 mb-4 shadow-inner">
                       {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">{item.titulo}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ==============================================================
          4. CTA: ÚNETE AL EQUIPO
      ============================================================== */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          {/* Decoración Fondo */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">¿Te gustaría ser parte del cambio?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Siempre estamos buscando manos amigas y corazones dispuestos. Si tienes tiempo, talento o simplemente ganas de ayudar, hay un lugar para ti en nuestro equipo.
            </p>
            
            <a 
              href="https://wa.me/573043699780?text=Hola,%20quisiera%20información%20para%20unirme%20al%20equipo%20de%20voluntarios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 hover:text-white transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1"
            >
              Quiero ser Voluntario <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Teams;