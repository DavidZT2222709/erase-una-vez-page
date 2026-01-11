import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
// Iconos
import { FaHeart, FaHandHoldingHeart, FaCity, FaUsers, FaPuzzlePiece, FaQuoteLeft } from "react-icons/fa6";

// IMPORTANTE: Reemplaza estos imports por tus imágenes reales.
import Imagen1 from '../../assets/InitialImages/Donacion.png'; 
import Imagen2 from '../../assets/InitialImages/Imagen3.png';
import Tarjeta1 from '../../assets/InitialImages/Imagen6.png';
import Tarjeta2 from '../../assets/InitialImages/Imagen4.png';
import Tarjeta3 from '../../assets/InitialImages/Imagen5.png';

// Imagenes de empresas aliadas
import Exito from '../../assets/Marcas/Exito.svg';
import Colombia from '../../assets/Marcas/Colombia.png';
import Colombina from '../../assets/Marcas/Colombina.png';
import Falabella from '../../assets/Marcas/Falabella.png';
import Ramo from '../../assets/Marcas/Ramo.png';
import Fcv from '../../assets/Marcas/LOGO-FCV.png';

// ==========================================
// COMPONENTE: CONTADOR ANIMADO
// ==========================================
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 }); 

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

// ==========================================
// COMPONENTE PRINCIPAL: HERO
// ==========================================
const Hero = () => {

  // --- Animaciones Generales ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const heroImages = [
    Imagen1, Imagen2, Tarjeta1, Tarjeta2, 
    Tarjeta3, Imagen1, Imagen2, Tarjeta1
  ];

  const aliados = [Exito, Colombia, Colombina, Falabella, Ramo, Fcv];

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
    <div className="bg-[#FAF9F7] font-sans overflow-hidden">

      {/* ==============================================================
          1. HERO SLIDER TIPO GALERÍA
      ============================================================== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F7] pt-32 pb-20">
        
        {/* --- CINTA DE IMÁGENES DE FONDO --- */}
        <div className="absolute inset-0 flex items-center pt-20 opacity-80">
          <motion.div 
            className="flex gap-6 pl-6" 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 60 
            }}
            style={{ width: "fit-content" }}
          >
            {[...heroImages, ...heroImages].map((img, index) => (
              <div 
                key={index} 
                className="relative w-[220px] md:w-[280px] h-[350px] md:h-[450px] flex-shrink-0 rounded-[1.5rem] overflow-hidden shadow-lg grayscale-[20%]"
              >
                 <img 
                    src={img} 
                    alt={`Slide ${index}`} 
                    className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-white/10"></div> 
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- TARJETA CENTRAL BLANCA --- */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-[#F9F7F5]/90 backdrop-blur-md border border-white/60 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center"
          >
             <div className="inline-block py-1 px-4 rounded-full bg-blue-100/80 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
                FUNDACIÓN ÉRASE UNA VEZ
             </div>
             
             <h1 className="text-3xl md:text-5xl font-serif text-[#1F2937] leading-tight mb-4">
                Un lugar donde la <br/>
                <span className="text-orange-500">neurodivergencia</span> brilla
             </h1>

             <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
                Creamos espacios seguros y oportunidades de desarrollo para niños y niñas 
                con autismo y discapacidades cognitivas. Acompañamos sus pasos con amor.
             </p>

             <div className="flex flex-wrap justify-center gap-3">
                <button className="px-8 py-3 rounded-full bg-[#E63946] text-white font-bold text-base shadow-md hover:bg-red-700 transition transform hover:-translate-y-1">
                   Haz tu aporte
                </button>
                <button className="px-8 py-3 rounded-full bg-transparent border border-gray-400 text-gray-700 font-bold text-base hover:border-gray-900 hover:text-gray-900 transition">
                   Nuestros programas
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ==============================================================
          2. MISIÓN Y VISIÓN
      ============================================================== */}
      <motion.section 
        className="py-16 px-6 font-sans bg-[#FAF9F7]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#1F454E] to-[#17353C] rounded-[2.5rem] p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden text-white shadow-xl">
             
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
             <FaPuzzlePiece className="absolute bottom-6 left-6 text-white/5 text-8xl rotate-12" />

             <div className="relative z-10">
                <span className="text-green-300 font-bold tracking-wider uppercase text-xs">Nuestra Esencia</span>
                <h2 className="mt-3 text-2xl md:text-4xl font-serif leading-tight">
                   Construimos puentes de inclusión
                </h2>
                <div className="mt-6 space-y-4 text-gray-200 text-base leading-relaxed">
                   <p>
                      <strong>Misión:</strong> Mejorar la calidad de vida de niños con condiciones cognitivas diversas a través de atención integral y apoyo familiar.
                   </p>
                   <p>
                      <strong>Visión:</strong> Ser referentes nacionales en modelos de inclusión social y educativa, valorando el potencial único de cada niño.
                   </p>
                </div>
             </div>

             <div className="relative z-10 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden group">
                   <img src={Imagen2} alt="Niños jugando" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
             </div>
          </div>
        </div>
      </motion.section>

      {/* ==============================================================
          3. ESTADÍSTICAS (SECCIÓN MODIFICADA)
      ============================================================== */}
      <section className="bg-[#FAF9F7] py-16 border-y border-gray-100 font-sans">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               
               <div className="text-center group">
                  {/* 1. Aumenté el margen inferior y el tamaño del ícono */}
                  <div className="flex justify-center mb-4 text-orange-500 group-hover:scale-110 transition duration-300">
                     <FaUsers size={40} /> {/* Antes size={30} */}
                  </div>
                  {/* 2. Aumenté el tamaño del texto de la cifra */}
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif"> {/* Antes text-3xl md:text-4xl */}
                     +<Counter value={1200} />
                  </div>
                  {/* 3. Aumenté ligeramente el tamaño del título */}
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Beneficiarios</p> {/* Antes text-[10px] md:text-xs */}
               </div>

               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-blue-500 group-hover:scale-110 transition duration-300">
                     <FaCity size={40} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
                     <Counter value={5} />
                  </div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Sedes</p>
               </div>

               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-green-500 group-hover:scale-110 transition duration-300">
                     <FaHeart size={40} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
                     +<Counter value={850} />
                  </div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Familias</p>
               </div>

               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-purple-500 group-hover:scale-110 transition duration-300">
                     <FaHandHoldingHeart size={40} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
                     <Counter value={12} />
                  </div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Programas</p>
               </div>

            </div>
         </div>
      </section>

      {/* ==============================================================
          4. ALIADOS (Logos Reales)
      ============================================================== */}
      <motion.section 
        className="py-16 overflow-hidden bg-[#FAF9F7] font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
         <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Nuestros Aliados</h3>
         </div>

         <div className="relative w-full flex overflow-hidden">
            <motion.div 
               className="flex gap-16 md:gap-20 items-center whitespace-nowrap"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 30
               }}
               style={{ width: "fit-content" }}
            >
               {[...aliados, ...aliados, ...aliados, ...aliados].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer">
                     <img 
                        src={logo} 
                        alt="Aliado Estratégico" 
                        className="h-12 md:h-16 w-auto object-contain" 
                     />
                  </div>
               ))}
            </motion.div>
         </div>
      </motion.section>

      {/* =======================
          5. TESTIMONIOS
      ======================= */}
      <div className="bg-[#FAF9F7] py-16 font-sans">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
             <span className="text-orange-500 font-bold tracking-wider uppercase text-xs">Voces que inspiran</span>
             <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mt-2">Nuestras familias y equipo</h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {testimonios.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`relative p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-md border border-gray-50 ${
                  item.highlight ? 'bg-[#F48C51] text-white transform md:-translate-y-2' : 'bg-white text-gray-900'
                }`}
              >
                <div className="absolute top-4 right-6 opacity-20">
                   <FaQuoteLeft size={30} />
                </div>

                <div className="relative z-10">
                  <p className={`text-base font-serif italic leading-relaxed ${item.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/50 bg-gray-200">
                     <img src={Imagen1} alt={item.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${item.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {item.author}
                    </h4>
                    <span className={`text-[10px] uppercase font-bold tracking-wide ${item.highlight ? 'text-orange-100' : 'text-blue-600'}`}>
                      {item.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Hero;