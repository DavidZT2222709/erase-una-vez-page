import React from 'react';
import { motion } from 'framer-motion';
// Importamos los íconos
import { FaHeart, FaBookOpen, FaUsers, FaArrowRight, FaInstagram, FaStar, FaShapes, FaPalette, FaHandHoldingHeart, FaCheck, FaQuoteLeft } from "react-icons/fa6";
import { BiHappyHeartEyes } from "react-icons/bi"; 
// IMPORTANTE: Usa este Imagen1 solo como placeholder.
import Imagen1 from '../../assets/Donacion.png';
import Imagen2 from '../../assets/Imagen3.png';
import Tarjeta1 from '../../assets/Imagen6.png';
import Tarjeta2 from '../../assets/Imagen4.png';
import Tarjeta3 from '../../assets/Imagen5.png';

// NOTA: Importa aquí tus 8 imágenes reales para el collage final
// import Collage1 from '../../assets/collage/foto1.jpg';
// ... hasta Collage8

const Hero = () => {
  
  // ==========================================
  // Configuraciones de Animación Generales
  // ==========================================
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  // ==========================================
  // ANIMACIONES ESPECÍFICAS
  // ==========================================
  
  const cardsContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardItemVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Datos para la lista de causas
  const causasLista = [
    "Talleres comunitarios sobre inclusión y neurodivergencia",
    "Diseño e impresión de materiales accesibles",
    "Entrega de kits de cuidado para madres y cuidadores",
    "Formación a docentes y líderes sociales",
    "Redes de apoyo entre familias y profesionales"
  ];

  // Datos para Testimonios
  const testimonios = [
    {
      quote: "La cartilla que recibimos me ayudó a entender mejor las emociones de mi hijo. Fue como abrir una ventana al mundo que él ve.",
      author: "Laura G.",
      role: "Mamá de un niño con autismo",
      highlight: false
    },
    {
      quote: "Ser parte de un taller me cambió la forma de ver la inclusión. No solo enseñamos, también aprendimos de las familias que acompañamos.",
      author: "Mariana H.",
      role: "Voluntaria educativa",
      highlight: true 
    },
    {
      quote: "La Fundación hace un trabajo transformador, no solo entrega materiales, entrega dignidad y comunidad.",
      author: "David B.",
      role: "Terapeuta ocupacional",
      highlight: false
    }
  ];

  return (
    <section className="bg-[#FAF9F7] overflow-hidden font-sans">

      {/* =======================
          1. HERO PRINCIPAL
      ======================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Fondo decorativo */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl -z-10" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide border border-blue-100">
            👋 Bienvenidos a nuestra fundación
          </motion.span>

          <motion.h1 variants={fadeInUp} className="mt-6 text-4xl md:text-6xl font-serif text-gray-900 leading-[1.1]">
            Acompañamos la niñez <br />
            <span className="text-orange-500">con amor y futuro</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Trabajamos junto a niños, niñas y sus familias para fortalecer
            su desarrollo emocional, educativo y social, creando entornos
            seguros y llenos de esperanza.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:scale-105 transition transform duration-200 flex items-center gap-2 group">
              <FaHeart className="group-hover:animate-pulse" /> Donar ahora
            </button>
            <button className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:border-orange-200 transition flex items-center gap-2 group">
              Conocer más <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">
                  <FaUsers size={14} />
                </div>
              ))}
            </div>
            <p>Más de <strong>1.200 familias</strong> acompañadas.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative z-10">
            <img src={Imagen1} alt="Niño sonriendo" className="w-full max-w-md rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500 object-cover" />
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-6 md:-left-10 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl p-6 max-w-xs"
            >
              <div className="flex gap-1 text-orange-400 mb-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>
              <p className="text-sm text-gray-700 italic font-medium">
                “Gracias al acompañamiento, mi hijo ahora puede comunicarse mejor y sentirse seguro.”
              </p>
            </motion.div>
          </div>
          <div className="absolute top-10 right-10 w-full h-full bg-blue-600/10 rounded-3xl -z-10 transform translate-x-4 translate-y-4" />
        </motion.div>
      </div>

      {/* =======================
          2. BLOQUES INFORMATIVOS
      ======================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        {[
          { icon: <FaBookOpen className="text-blue-600" size={28} />, title: "Material educativo accesible", desc: "Recursos adaptados para apoyar la comunicación y el aprendizaje." },
          { icon: <BiHappyHeartEyes className="text-red-500" size={32} />, title: "Cuidado emocional familiar", desc: "Acompañamiento emocional profesional a cuidadores y familias." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition cursor-default group"
          >
            <div className="p-4 bg-gray-50 rounded-xl h-fit group-hover:bg-blue-50 transition-colors">{item.icon}</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* =======================
          3. MISIÓN & VISIÓN
      ======================= */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-[2.5rem] p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="flex justify-center relative z-10">
              <img src={Imagen2} alt="Misión" className="w-full max-w-sm rounded-2xl" />
            </div>
            <div className="text-white relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wide text-white mb-4">Sobre Nosotros</span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">Nuestra Misión & Visión</h2>
              <p className="mt-6 text-green-50 text-lg leading-relaxed">
                Acompañamos familias con niños en condición diferencial,
                brindando herramientas, contención emocional y materiales
                accesibles.
              </p>
              <button className="mt-8 px-8 py-3 rounded-full bg-white text-green-700 font-bold hover:bg-green-50 transition shadow-lg flex items-center gap-2">
                <FaInstagram size={20} /> Síguenos en Instagram
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          4. PROGRAMAS
      ======================= */}
      <div className="bg-[#FAF9F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Nuestros Programas</span>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">¿Cómo transforma tu aporte?</h2>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-10"
              variants={cardsContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                {/* TARJETA 1 */}
                <motion.div variants={cardItemVariant} className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-75 overflow-hidden shadow-lg mb-6 border-4 border-orange-50 group">
                          <img src={Tarjeta1} alt="Charlas" className="w-50 h-60 bg-[#FAF9F7] object-cover group-hover:scale-110 transition duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Charlas por la inclusión</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 px-4">
                        Llevamos talleres gratuitos a colegios y barrios para educar sobre convivencia y neurodivergencia.
                    </p>
                    <button className="mt-auto px-6 py-2 rounded-full bg-[#E63946] text-white font-bold text-sm hover:bg-red-700 transition shadow-md w-full max-w-[240px]">
                        QUIERO DONAR PARA CHARLAS
                    </button>
                </motion.div>

                {/* TARJETA 2 */}
                <motion.div variants={cardItemVariant} className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-75 overflow-hidden shadow-lg mb-6 border-4 border-blue-50 group">
                          <img src={Tarjeta2} alt="Charlas" className="w-50 h-50 bg-[#FAF9F7] object-cover group-hover:scale-110 transition duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Cartillas que conectan</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 px-4">
                        Diseñamos y distribuimos material accesible para niños con dificultades comunicativas.
                    </p>
                    <button className="mt-auto px-6 py-2 rounded-full bg-[#E63946] text-white font-bold text-sm hover:bg-red-700 transition shadow-md w-full max-w-[240px]">
                        QUIERO DONAR PARA CARTILLAS
                    </button>
                </motion.div>

                {/* TARJETA 3 */}
                <motion.div variants={cardItemVariant} className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 rounded-75 overflow-hidden shadow-lg mb-6 border-4 border-pink-50 group">
                          <img src={Tarjeta3} alt="Charlas" className="w-50 h-50 bg-[#FAF9F7] object-cover group-hover:scale-110 transition duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Apoyo para quienes cuidan</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 px-4">
                        Entregamos kits con artículos útiles y mensajes de aliento a cuidadores.
                    </p>
                    <button className="mt-auto px-6 py-2 rounded-full bg-[#E63946] text-white font-bold text-sm hover:bg-red-700 transition shadow-md w-full max-w-[240px]">
                        QUIERO DONAR PARA KITS
                    </button>
                </motion.div>
            </motion.div>
        </div>
      </div>

      {/* =======================
          5. NUESTRAS CAUSAS
      ======================= */}
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F3EEE8] rounded-[2.5rem] p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">NUESTRAS CAUSAS</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-gray-900 leading-tight">¿Cómo transformamos tu ayuda en acciones concretas?</h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">Cada aporte nos acerca a un entorno más justo, accesible e inclusivo para niños en condición diferencial y quienes los acompañan. Estas son las líneas de acción que tu donación ayuda a poner en marcha:</p>
              <button className="mt-8 px-8 py-4 rounded-full bg-[#E63946] text-white font-bold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">CONTÁCTANOS PARA SABER CÓMO PARTICIPAR</button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
              {causasLista.map((causa, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                  <FaCheck className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <h4 className="text-lg font-bold text-gray-800 leading-tight">{causa}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* =======================
          6. METAS FINANCIERAS
      ======================= */}
      <div className="bg-[#FAF9F7] pb-32 pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
                    <div className="absolute -bottom-12 left-20 w-32 h-32 border border-orange-300 rounded-full -z-10" />
                    <div className="absolute -bottom-16 left-32 w-32 h-32 border border-blue-200 rounded-full -z-10" />
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Apóyanos para hacer <br/><span className="italic text-gray-700">realidad estas metas</span></h2>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">Estamos comenzando un camino lleno de ilusión. Estas son las metas que nos hemos propuesto alcanzar con tu ayuda para transformar vidas a través de la educación accesible, el cuidado y la inclusión.</p>
                    <button className="mt-8 px-8 py-4 rounded-full bg-[#E63946] text-white font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transition transform hover:-translate-y-1">HAZ TU DONACIÓN Y SÉ PARTE DEL CAMBIO</button>
                </motion.div>
                <div className="relative h-[500px] w-full flex flex-col items-center lg:items-end justify-center">
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="relative z-30 bg-[#4DAF7C] text-white p-6 rounded-2xl shadow-xl w-64 md:w-72 lg:mr-32 rotate-[-3deg] hover:rotate-0 transition duration-300">
                        <div className="absolute top-2 right-2 text-yellow-200 text-xl"><FaStar /></div>
                        <h4 className="font-bold text-lg uppercase leading-tight opacity-90">Materiales <br/> Accesibles</h4>
                        <div className="mt-4 text-3xl font-bold tracking-tight">$5.000.000 <span className="text-sm font-normal">COP</span></div>
                        <div className="mt-2 flex justify-end"><FaShapes className="text-green-200 opacity-50 text-4xl" /></div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="relative z-20 bg-[#F48C51] text-white p-6 rounded-2xl shadow-xl w-64 md:w-72 -mt-6 lg:mr-10 rotate-[2deg] hover:rotate-0 transition duration-300">
                         <div className="absolute bottom-2 left-2 text-red-200 text-xl"><FaHeart /></div>
                        <h4 className="font-bold text-lg uppercase leading-tight opacity-90">Kits de <br/> Cuidado</h4>
                        <div className="mt-4 text-3xl font-bold tracking-tight">$4.000.000 <span className="text-sm font-normal">COP</span></div>
                         <div className="mt-2 flex justify-end"><FaHandHoldingHeart className="text-orange-200 opacity-50 text-4xl" /></div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="relative z-10 bg-[#1F454E] text-white p-6 rounded-2xl shadow-xl w-64 md:w-72 -mt-6 lg:mr-48 rotate-[-2deg] hover:rotate-0 transition duration-300">
                         <div className="absolute top-2 left-2 text-blue-200 text-xl"><FaBookOpen /></div>
                        <h4 className="font-bold text-lg uppercase leading-tight opacity-90">Talleres <br/> Educativos</h4>
                        <div className="mt-4 text-3xl font-bold tracking-tight">$3.000.000 <span className="text-sm font-normal">COP</span></div>
                         <div className="mt-2 flex justify-end"><FaPalette className="text-gray-400 opacity-30 text-4xl" /></div>
                    </motion.div>
                </div>
            </div>
        </div>
      </div>

      {/* =======================
          7. SUMATE AL CAMBIO
      ======================= */}
      {/* 🔴 CAMBIO AQUÍ: Reduje pb-32 a pb-8 para disminuir el espacio */}
      <div className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F3EEE8] rounded-[2.5rem] p-10 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {["Elige una causa", "Haz tu donación", "Participa como voluntario"].map((title, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 flex items-center gap-4 hover:border-orange-300 transition-colors">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg">{i + 1}</span>
                  <div><h4 className="font-bold text-gray-900">{title}</h4></div>
                </motion.div>
              ))}
            </div>
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">¿Cómo ayudar?</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">Súmate y sé parte <br/> del cambio</h3>
              <p className="mt-6 text-gray-600 text-lg">No necesitas ser experto para marcar la diferencia. Cada aporte cuenta.</p>
              <button className="mt-8 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition flex items-center gap-2">Quiero ayudar <FaUsers className="text-white" size={20} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          8. COLLAGE SIN BLUR
      ======================================================== */}
      {/* 🔴 CAMBIO AQUÍ: Cambié py-24 por pt-12 pb-24 para acercarlo arriba */}
      <div className="bg-[#FAF9F7] pt-12 pb-24 overflow-hidden relative flex items-center justify-center min-h-[800px]">
        
        {/* Contenedor principal del collage */}
        <div className="relative w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-center font-sans">

          {/* --- IMÁGENES DEL COLLAGE --- */}
          <div className="absolute top-0 left-4 w-48 h-48 md:w-72 md:h-72 rotate-[-4deg] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 hover:scale-105 transition duration-500">
               <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 1" />
          </div>

           <div className="absolute top-10 left-[35%] w-36 h-36 md:w-48 md:h-48 rotate-[3deg] rounded-2xl overflow-hidden shadow-xl border-2 border-white z-0 hidden md:block">
              <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 2" />
          </div>

          <div className="absolute top-6 right-8 w-56 h-56 md:w-80 md:h-80 rotate-[5deg] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 hover:scale-105 transition duration-500">
               <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 3" />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-44 h-64 md:w-60 md:h-96 rotate-[-3deg] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-105 transition duration-500">
               <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 4" />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 w-44 h-64 md:w-60 md:h-96 rotate-[2deg] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-105 transition duration-500">
               <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 5" />
          </div>

          <div className="absolute bottom-10 left-12 w-40 h-40 md:w-56 md:h-56 rotate-[4deg] rounded-2xl overflow-hidden shadow-xl border-2 border-white z-10">
               <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 6" />
          </div>
           
           <div className="absolute bottom-0 left-[40%] w-44 h-44 md:w-64 md:h-64 rotate-[-2deg] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 hidden md:block">
                <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 7" />
           </div>
           
          <div className="absolute bottom-4 right-10 w-52 h-52 md:w-72 md:h-72 rotate-[-5deg] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 hover:scale-105 transition duration-500">
               <img src={Imagen1} className="w-full h-full object-cover" alt="Collage 8" />
          </div>

          {/* --- TARJETA CENTRAL FLOTANTE --- */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-30 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-10 md:p-16 max-w-3xl text-center mx-6 font-sans"
          >
            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
              Descubre cómo puedes ser parte del cambio
            </h3>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              No necesitas ser experto para marcar la diferencia. Ya sea compartiendo nuestra causa, haciendo una donación o sumándote como voluntario, hay muchas formas de apoyar a quienes más lo necesitan.
            </p>
            <div className="mt-10 flex justify-center">
                <button className="px-10 py-4 rounded-full bg-[#E63946] text-white font-bold text-sm tracking-wider shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">
                CONOCER OPCIONES DE PARTICIPACIÓN
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ========================================================
          9. TESTIMONIOS
      ======================================================== */}
      <div className="bg-[#FAF9F7] pt-5 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Voces que inspiran</span>
             <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mt-2">Lo que dicen nuestras familias y equipo</h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={cardsContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonios.map((item, index) => (
              <motion.div 
                key={index}
                variants={cardItemVariant}
                className={`relative p-8 rounded-3xl flex flex-col justify-between min-h-[320px] shadow-lg ${
                  item.highlight ? 'bg-[#F48C51] text-white transform md:-translate-y-4' : 'bg-white text-gray-900 border border-gray-100'
                }`}
              >
                <div className="absolute top-6 right-8 opacity-20">
                   <FaQuoteLeft size={40} />
                </div>

                <div className="relative z-10">
                  <p className={`text-lg font-serif italic leading-relaxed ${item.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 bg-gray-200">
                     <img src={Imagen1} alt={item.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${item.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {item.author}
                    </h4>
                    <span className={`text-xs uppercase font-bold tracking-wide ${item.highlight ? 'text-orange-100' : 'text-blue-600'}`}>
                      {item.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;