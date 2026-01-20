import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaXmark, 
  FaChevronLeft, 
  FaChevronRight, 
  FaTag, 
  FaUserDoctor, 
  FaBrain, 
  FaHeartPulse, 
  FaPersonWalking 
} from "react-icons/fa6";

// IMPORTANTE: Importa aquí las imágenes de tus productos
import Gorra1 from '../../assets/InitialImages/Donacion.png'; 
import Gorra2 from '../../assets/InitialImages/Imagen3.png';
import Mug1 from '../../assets/InitialImages/Imagen6.png';
import FotoConsulta from '../../assets/InitialImages/Imagen6.png'; 

// ==========================================
// CONFIGURACIÓN DE ANIMACIONES (VARIANTS)
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre cada elemento hijo
      delayChildren: 0.1
    }
  }
};

// ==========================================
// DATOS
// ==========================================
const productosData = [
  {
    id: 1,
    nombre: "Gorra Oficial Fundación",
    precio: 35000,
    descripcion: "Gorra bordada con el logo oficial. Ajustable, tela transpirable y disponible en varios colores. Con tu compra apoyas las terapias de los niños.",
    categoria: "Accesorios",
    imagenes: [Gorra1, Gorra2, Gorra1]
  },
  {
    id: 2,
    nombre: "Mug 'Amor Infinito'",
    precio: 20000,
    descripcion: "Pocillo de cerámica con diseño exclusivo de nuestros niños artistas. Ideal para café o té. Capacidad 11oz.",
    categoria: "Hogar",
    imagenes: [Mug1, Gorra1, Mug1]
  },
  {
    id: 3,
    nombre: "Camiseta Voluntariado",
    precio: 45000,
    descripcion: "Camiseta 100% algodón. Diseño exclusivo 'Soy Parte del Cambio'. Disponible en tallas S, M, L y XL.",
    categoria: "Ropa",
    imagenes: [Gorra2, Mug1, Gorra2]
  },
  {
    id: 4,
    nombre: "Termo Metálico",
    precio: 30000,
    descripcion: "Mantén tus bebidas frías o calientes. Termo de acero inoxidable con el logo grabado en láser.",
    categoria: "Accesorios",
    imagenes: [Gorra1, Gorra2, Mug1]
  },
];

const serviciosSaludData = [
  {
    id: 1,
    nombre: "Consulta General",
    icono: <FaUserDoctor size={40} />,
    descripcion: "Atención médica primaria para valoración general, diagnóstico temprano y remisión a especialidades si es necesario. Enfocada en el bienestar integral del paciente.",
    imagenes: [FotoConsulta]
  },
  {
    id: 2,
    nombre: "Psicología",
    icono: <FaBrain size={40} />,
    descripcion: "Espacio seguro de escucha y orientación profesional. Brindamos terapia cognitivo-conductual, manejo de emociones y apoyo en procesos de duelo o ansiedad.",
    imagenes: [FotoConsulta]
  },
  {
    id: 3,
    nombre: "Psiquiatría",
    icono: <FaHeartPulse size={40} />,
    descripcion: "Diagnóstico y tratamiento especializado para trastornos de salud mental, combinando terapia y manejo farmacológico responsable para mejorar la calidad de vida.",
    imagenes: [FotoConsulta]
  },
  {
    id: 4,
    nombre: "Terapia Física",
    icono: <FaPersonWalking size={40} />,
    descripcion: "Rehabilitación física integral. Tratamiento para recuperación de lesiones, mejora de movilidad y fortalecimiento muscular con especialistas certificados.",
    imagenes: [FotoConsulta]
  },
];

// ==========================================
// COMPONENTE: CARRUSEL
// ==========================================
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(images.length <= 1) return;
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden group shadow-inner">
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Detalle"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition hover:bg-white">
            <FaChevronLeft />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition hover:bg-white">
            <FaChevronRight />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-blue-500 w-4" : "bg-white/60"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
const Servicios = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleBuyClick = (producto, e) => {
    if(e) e.stopPropagation();
    const message = `Hola Fundación, estoy interesado en comprar: ${producto.nombre}`;
    const url = `https://wa.me/573043699780?text=${encodeURIComponent(message)}`; 
    window.open(url, '_blank');
  };

  const handleAppointmentClick = (servicio, e) => {
    if(e) e.stopPropagation();
    const message = `Hola, quisiera agendar una cita para el servicio de: ${servicio.nombre}`;
    const url = `https://wa.me/573043699780?text=${encodeURIComponent(message)}`; 
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-32 pb-20 font-sans px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* =========================================
            SECCIÓN 1: TIENDA SOLIDARIA
           ========================================= */}
        <div id='tienda' className="mb-24">
          {/* Título Animado */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Apoya nuestra causa</span>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">
              Tienda Solidaria
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Productos con propósito. El 100% de la utilidad se destina a nuestros programas.
            </p>
          </motion.div>

          {/* Grid de Productos con Stagger (Ola) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {productosData.map((producto) => (
              <motion.div
                key={producto.id}
                variants={fadeInUp} // Hereda la animación de entrada
                layoutId={`product-${producto.id}`}
                onClick={() => setSelectedProduct(producto)}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 cursor-pointer group hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={producto.imagenes[0]} alt={producto.nombre} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-600 flex items-center gap-1">
                    <FaTag className="text-orange-500" /> {producto.categoria}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-serif text-gray-900 mb-1">{producto.nombre}</h3>
                  <p className="text-xl font-bold text-blue-600 mb-4">${producto.precio.toLocaleString()}</p>
                  <button onClick={(e) => handleBuyClick(producto, e)} className="w-full py-2 rounded-xl bg-orange-100 text-orange-600 font-bold hover:bg-orange-200 transition">
                    Ver Detalles
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Separador Animado */}
        <motion.hr 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-gray-200 mb-20 origin-left" 
        />

        {/* =========================================
            SECCIÓN 2: SERVICIOS EN SALUD
           ========================================= */}
        <div id='salud' className="mb-10">
          {/* Título Animado */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Bienestar y Cuidado</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">
              Servicios en Salud
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con tu salud física y mental.
            </p>
          </motion.div>

          {/* Grid de Servicios Animado */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             variants={staggerContainer}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {serviciosSaludData.map((servicio) => (
              <motion.div
                key={servicio.id}
                variants={fadeInUp} // Hereda la animación de entrada
                layoutId={`service-${servicio.id}`}
                onClick={() => setSelectedService(servicio)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white aspect-square rounded-[2rem] shadow-md border-2 border-transparent hover:border-blue-200 flex flex-col items-center justify-center p-4 cursor-pointer text-center gap-4 transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {servicio.icono}
                </div>
                <h3 className="font-serif font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">
                  {servicio.nombre}
                </h3>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-3 py-1 rounded-full">
                  Ver info
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            MODAL 1: PRODUCTO
           ========================================= */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`product-${selectedProduct.id}`}
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden"
              >
                <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-20 bg-gray-100 p-2 rounded-full hover:bg-red-100 hover:text-red-500 transition">
                  <FaXmark size={20} />
                </button>
                <div className="w-full md:w-1/2 p-6 bg-gray-50 flex items-center justify-center">
                   <ImageSlider images={selectedProduct.imagenes} />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-orange-500 font-bold uppercase text-xs mb-2">{selectedProduct.categoria}</span>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">{selectedProduct.nombre}</h2>
                  <p className="text-3xl font-bold text-blue-600 mb-6">${selectedProduct.precio.toLocaleString()}</p>
                  <p className="text-gray-600 mb-8 leading-relaxed">{selectedProduct.descripcion}</p>
                  <button onClick={(e) => handleBuyClick(selectedProduct, e)} className="w-full py-4 rounded-xl bg-green-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-lg hover:-translate-y-1">
                    <FaWhatsapp size={22} /> Comprar ahora
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* =========================================
            MODAL 2: SERVICIO
           ========================================= */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`service-${selectedService.id}`}
                className="bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden border-4 border-white"
              >
                <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full shadow-sm hover:text-red-500 transition">
                  <FaXmark size={20} />
                </button>
                <div className="w-full md:w-5/12 h-64 md:h-auto relative">
                   <img src={selectedService.imagenes[0]} alt={selectedService.nombre} className="w-full h-full object-cover"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6 md:hidden">
                      <h2 className="text-white font-serif font-bold text-2xl">{selectedService.nombre}</h2>
                   </div>
                </div>
                <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white">
                  <div className="hidden md:flex items-center gap-3 mb-4 text-blue-600">
                    {selectedService.icono}
                    <h2 className="text-3xl font-serif font-bold text-gray-900">{selectedService.nombre}</h2>
                  </div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Información del servicio</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedService.descripcion}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button onClick={(e) => handleAppointmentClick(selectedService, e)} className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5">
                      <FaWhatsapp size={22} /> Agendar Cita
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3">Te redirigiremos a WhatsApp para coordinar la fecha.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Servicios;