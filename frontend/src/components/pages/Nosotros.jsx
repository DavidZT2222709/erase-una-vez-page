import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBullseye, 
  FaEye, 
  FaFilePdf, 
  FaDownload, 
  FaHandHoldingHeart, 
  FaScaleBalanced, 
  FaPeopleGroup,
  FaEnvelope // <--- Agregado este icono para el botón de correo
} from "react-icons/fa6";

// IMPORTANTE: Reemplaza con tus imágenes reales
import FotoHistoria from '../../assets/InitialImages/Imagen3.png'; 
import FotoFundadora from '../../assets/InitialImages/Imagen6.png'; // Foto Fundadora
import FotoCofundadora from '../../assets/InitialImages/Donacion.png'; // Foto Cofundadora

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
// DATOS SIMULADOS
// ==========================================
const documentosLegales = [
  { nombre: "RUT Actualizado", año: "2024", size: "1.2 MB" },
  { nombre: "Certificado Cámara de Comercio", año: "2024", size: "850 KB" },
  { nombre: "Estados Financieros", año: "2023", size: "2.5 MB" },
  { nombre: "Informe de Gestión", año: "2023", size: "3.1 MB" },
  { nombre: "Certificación Bancaria", año: "2024", size: "400 KB" },
];

const valores = [
  { titulo: "Inclusión", desc: "Celebramos la diversidad neurocognitiva como un valor único.", icon: <FaPeopleGroup /> },
  { titulo: "Transparencia", desc: "Cada recurso se gestiona con honestidad y claridad.", icon: <FaScaleBalanced /> },
  { titulo: "Empatía", desc: "Nos ponemos en los zapatos de cada familia que acompañamos.", icon: <FaHandHoldingHeart /> },
];

// Datos del Equipo Directivo
const equipoDirectivo = [
  { 
    nombre: "Nombre Fundadora", 
    cargo: "Fundadora", 
    email: "fundadora@eraseunavez.org", 
    foto: FotoFundadora 
  },
  { 
    nombre: "Nombre Cofundadora", 
    cargo: "Cofundadora", 
    email: "cofundadora@eraseunavez.org", 
    foto: FotoCofundadora 
  },
  { 
    nombre: "Dirección General", 
    cargo: "Fundación Érase Una Vez", 
    email: "contacto@eraseunavez.org", 
    foto: FotoHistoria // Reutilicé una foto, cámbiala por la real
  },
];

const Nosotros = () => {
  return (
    <div className="bg-[#FAF9F7] font-sans overflow-hidden pt-32 pb-20">
      
      {/* ==============================================================
          1. HEADER / HERO
      ============================================================== */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Nuestra Esencia</span>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mt-4 mb-6">
            Más que una fundación, <br/>
            <span className="text-orange-500">somos una familia.</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Trabajamos día a día para construir un mundo donde la neurodivergencia sea sinónimo de oportunidad, talento y amor.
          </p>
        </motion.div>
      </div>

      {/* ==============================================================
          2. NUESTRA HISTORIA (FONDO VERDE PERSONALIZADO)
      ============================================================== */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-[#1F454E] rounded-[3rem] p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          
          {/* Imagen */}
          <motion.div 
            className="w-full md:w-1/2 h-[300px] md:h-[450px]"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <img src={FotoHistoria} alt="Historia Fundación" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            <div className="absolute bottom-0 left-0 bg-orange-500 text-white px-6 py-2 rounded-tr-2xl font-bold font-serif text-xl">
              Desde 2018
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Nuestra Historia</h2>
            <div className="prose text-white text-lg leading-relaxed space-y-4">
              <p>
                La <strong>Fundación Érase Una Vez</strong> nació del sueño de un grupo de profesionales y padres que entendieron que el amor no tiene moldes. 
              </p>
              <p>
                Comenzamos en un pequeño garaje con 5 niños y una convicción inquebrantable. Hoy, somos un referente en atención integral, brindando terapias, educación y apoyo emocional a cientos de familias que han encontrado en nosotros un segundo hogar.
              </p>
              <p>
                Creemos firmemente que cada pequeño avance es una gran victoria y que, con el apoyo adecuado, no existen límites.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==============================================================
          3. MISIÓN Y VISIÓN
      ============================================================== */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tarjeta Misión */}
          <motion.div 
            className="bg-blue-50/50 border border-blue-100 p-10 rounded-[2.5rem] relative group hover:bg-blue-100 transition duration-300"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Mejorar la calidad de vida de niños y niñas con condiciones cognitivas diversas, proporcionando atención terapéutica integral, educación inclusiva y un sistema de apoyo sólido para sus familias, fomentando su autonomía y felicidad.
            </p>
          </motion.div>

          {/* Tarjeta Visión */}
          <motion.div 
            className="bg-orange-50/50 border border-orange-100 p-10 rounded-[2.5rem] relative group hover:bg-orange-100 transition duration-300"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition">
              <FaEye />
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Para el año 2028, seremos reconocidos a nivel nacional como una organización líder en modelos de innovación social y educativa para la neurodivergencia, impactando positivamente las políticas públicas y la cultura de inclusión en Colombia.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ==============================================================
          4. NUESTROS VALORES
      ============================================================== */}
      <section className="bg-[#FAF9F7] py-10 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Lo que nos mueve</h2>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {valores.map((valor, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-8 text-center shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-3xl text-blue-600 mb-6">
                  {valor.icon}
                </div>
                <h4 className="text-xl font-bold font-serif text-gray-900 mb-3">{valor.titulo}</h4>
                <p className="text-gray-500 leading-relaxed">{valor.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==============================================================
          5. TRANSPARENCIA (SECCIÓN LEGAL)
      ============================================================== */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div 
          className="bg-[#1F2937] rounded-[2rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          {/* Fondo Decorativo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-gray-700 pb-6">
              <div>
                <span className="text-orange-400 font-bold tracking-wider uppercase text-xs">Transparencia y Legalidad</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-2">Documentación Legal</h2>
                <p className="text-gray-400 mt-2 max-w-lg">
                  Como entidad sin ánimo de lucro (ESAL), estamos comprometidos con la claridad en nuestra gestión.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                 <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300 border border-gray-700">
                    NIT: 900.123.456-7
                 </div>
              </div>
            </div>

            {/* Lista de Documentos */}
            <div className="grid gap-4">
              {documentosLegales.map((doc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-700 bg-gray-800/50 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
                      <FaFilePdf size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 group-hover:text-white transition">{doc.nombre}</h4>
                      <p className="text-xs text-gray-500">Actualizado: {doc.año} • PDF ({doc.size})</p>
                    </div>
                  </div>
                  <div className="text-gray-500 group-hover:text-orange-400 transition">
                    <FaDownload size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="text-center text-gray-500 text-xs mt-8">
              ¿Necesitas información adicional? Contáctanos a <a href="mailto:legal@fundacion.com" className="text-blue-400 hover:underline">legal@fundacion.com</a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ==============================================================
          6. NUEVO: EQUIPO DIRECTIVO
      ============================================================== */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">Liderazgo</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">Quienes guían nuestro camino</h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {equipoDirectivo.map((lider, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2.5rem] p-6 text-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Imagen */}
              <div className="w-40 h-40 mx-auto rounded-[1.5rem] overflow-hidden mb-6 shadow-md">
                 <img src={lider.foto} alt={lider.nombre} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold font-serif text-gray-900">{lider.nombre}</h3>
              <p className="text-orange-500 text-sm font-bold uppercase tracking-wide mt-1 mb-6">{lider.cargo}</p>
              
              {/* Botón Correo */}
              <a 
                href={`mailto:${lider.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300 w-full justify-center"
              >
                <FaEnvelope /> Contactar
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default Nosotros;