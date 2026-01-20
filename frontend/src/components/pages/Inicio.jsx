import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
// Iconos
import { 
  FaHeart, FaHandHoldingHeart, FaCity, FaUsers, FaQuoteLeft, 
  FaBookOpen, FaLightbulb, FaHandsHoldingCircle, FaArrowRight 
} from "react-icons/fa6";

// IMPORTANTE: Reemplaza estos imports por tus imágenes reales.
import Imagen1 from '../../assets/InitialImages/Donacion.png'; 
import Imagen2 from '../../assets/InitialImages/Imagen3.png';

// Imagenes Carrusel
import carrusel1 from '../../assets/InitialImages/Carrusel1.jpeg';
import carrusel2 from '../../assets/InitialImages/Carrusel2.jpeg';
import carrusel3 from '../../assets/InitialImages/Carrusel3.jpeg';
import carrusel4 from '../../assets/InitialImages/Carrusel4.jpeg';
import carrusel5 from '../../assets/InitialImages/Carrusel5.jpeg';
import carrusel6 from '../../assets/InitialImages/Carrusel6.jpeg';
import carrusel7 from '../../assets/InitialImages/Carrusel7.jpeg';
import carrusel8 from '../../assets/InitialImages/Carrusel8.jpeg';

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
const Inicio = () => {

  // --- Animaciones Generales ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const heroImages = [
    carrusel1, carrusel2, carrusel3, carrusel4, 
    carrusel5, carrusel6, carrusel7, carrusel8
  ];

  // IMAGENES DE EQUIPOS DE TRABAJO (6 Equipos)
  const teamImages = [
    { src: carrusel1, label: "Equipo Psicosocial" },
    { src: carrusel2, label: "Voluntarios" },
    { src: carrusel3, label: "Terapeutas Físicos" },
    { src: carrusel4, label: "Administrativos" },
    { src: carrusel5, label: "Docentes" },
    { src: carrusel6, label: "Logística y Apoyo" },
  ];

  const aliados = [Exito, Colombia, Colombina, Falabella, Ramo, Fcv];

  const pilares = [
    {
      icon: <FaBookOpen />,
      title: "Educación Inclusiva",
      desc: "Adaptamos métodos de aprendizaje para potenciar las habilidades únicas de cada niño."
    },
    {
      icon: <FaLightbulb />,
      title: "Desarrollo Cognitivo",
      desc: "Terapias especializadas que estimulan la neuroplasticidad y el crecimiento personal."
    },
    {
      icon: <FaHandsHoldingCircle />,
      title: "Apoyo Familiar",
      desc: "No están solos. Brindamos orientación y comunidad a los padres y cuidadores."
    }
  ];

  // ==========================================
  // ARRAY DE TESTIMONIOS (6 ITEMS)
  // ==========================================
  const testimonios = [
    {
      quote: "La cartilla que recibimos me ayudó a entender mejor las emociones de mi hijo. Fue como abrir una ventana al mundo que él ve.",
      author: "Laura G.",
      role: "Mamá Beneficiaria",
      highlight: false
    },
    {
      quote: "Ser parte de un taller me cambió la forma de ver la inclusión. No solo enseñamos, también aprendimos de las familias.",
      author: "Mariana H.",
      role: "Voluntaria Educativa",
      highlight: true // Resaltado (Naranja)
    },
    {
      quote: "La Fundación hace un trabajo transformador, no solo entrega materiales, entrega dignidad y comunidad.",
      author: "David B.",
      role: "Terapeuta Ocupacional",
      highlight: false
    },
    // --- NUEVOS TESTIMONIOS ---
    {
      quote: "Gracias al apoyo en fonoaudiología, mi hija ha logrado comunicarse mejor con sus compañeros de clase.",
      author: "Carlos M.",
      role: "Papá Beneficiario",
      highlight: false
    },
    {
      quote: "Donar a Érase Una Vez me da la tranquilidad de saber que cada peso se invierte en la sonrisa de un niño.",
      author: "Andrea P.",
      role: "Donante Recurrente",
      highlight: false
    },
    {
      quote: "El ambiente de trabajo es mágico. Aquí todos remamos hacia el mismo lado: el bienestar de los peques.",
      author: "Dra. Sofía L.",
      role: "Coordinadora de Salud",
      highlight: true // Resaltado (Naranja)
    }
  ];

  return (
    <div className="bg-[#FAF9F7] font-sans overflow-hidden">

      {/* ==============================================================
          1. HERO SLIDER
      ============================================================== */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F7] pt-28 pb-16">
        {/* Cinta de Imágenes de Fondo */}
        <div className="absolute inset-0 flex items-center pt-10 opacity-90">
          <motion.div 
            className="flex gap-6 pl-6" 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            style={{ width: "fit-content" }}
          >
            {[...heroImages, ...heroImages].map((img, index) => (
              <div key={index} className="relative w-[200px] md:w-[260px] h-[300px] md:h-[400px] flex-shrink-0 rounded-[1.5rem] overflow-hidden shadow-lg hover:scale-105 transition duration-500">
                 <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> 
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tarjeta Central */}
        <div className="relative z-10 container mx-auto px-6 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-[#F9F7F5]/85 backdrop-blur-md border border-white/50 p-6 md:p-10 rounded-[2rem] shadow-xl text-center"
          >
             <div className="inline-block py-1 px-3 rounded-full bg-blue-100/90 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                FUNDACIÓN ÉRASE UNA VEZ
             </div>
             <h1 className="text-3xl md:text-4xl font-serif text-[#1F2937] leading-tight mb-3">
                Un lugar donde la <br/> <span className="text-orange-500">neurodivergencia</span> brilla
             </h1>
             <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto">
                Creamos espacios seguros y oportunidades de desarrollo para niños y niñas con autismo y discapacidades cognitivas.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
               <a href="https://wa.me/573043699780">
                  <button className="px-6 py-2.5 rounded-full bg-[#E63946] text-white font-bold text-sm shadow-md hover:bg-red-700 transition transform hover:-translate-y-1">
                      Haz tu aporte
                  </button>
               </a>
               <a href="/proyectos">
                  <button className="px-6 py-2.5 rounded-full bg-white border border-gray-300 text-gray-700 font-bold text-sm hover:border-gray-900 hover:text-gray-900 transition">
                      Ver programas
                  </button>
               </a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ==============================================================
          2. PILARES
      ============================================================== */}
      <section className="py-20 px-6 font-sans bg-[#FAF9F7] relative">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
             <span className="text-orange-500 font-bold tracking-wider uppercase text-xs">Nuestro Enfoque</span>
             <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">¿Cómo transformamos vidas?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {pilares.map((pilar, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2 } } }}
                className="bg-white p-8 rounded-[2rem] hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange-100 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 shadow-sm group-hover:scale-110 transition duration-300">
                  {pilar.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{pilar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. ESTADÍSTICAS
      ============================================================== */}
      <section className="bg-[#FAF9F7] py-16 border-y border-gray-100 font-sans">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-orange-500 group-hover:scale-110 transition duration-300"><FaUsers size={40} /></div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">+<Counter value={1200} /></div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Beneficiarios</p>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-blue-500 group-hover:scale-110 transition duration-300"><FaCity size={40} /></div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif"><Counter value={5} /></div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Sedes</p>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-green-500 group-hover:scale-110 transition duration-300"><FaHeart size={40} /></div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">+<Counter value={850} /></div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Familias</p>
               </div>
               <div className="text-center group">
                  <div className="flex justify-center mb-4 text-purple-500 group-hover:scale-110 transition duration-300"><FaHandHoldingHeart size={40} /></div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif"><Counter value={12} /></div>
                  <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Programas</p>
               </div>
            </div>
         </div>
      </section>

      {/* ==============================================================
          4. BANNER VOLUNTARIADO
      ============================================================== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1F454E] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-serif text-white mb-4">Tu tiempo puede cambiar el mundo de un niño</h2>
              <p className="text-green-100 text-lg">Únete a nuestro equipo de voluntarios o conviértete en un padrino de sueños.</p>
            </div>
            <div className="relative z-10 shrink-0">
               <button className="bg-[#F48C51] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#d9753e] transition flex items-center gap-2 group">
                 Quiero ser Voluntario <FaArrowRight className="group-hover:translate-x-1 transition" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. ALIADOS
      ============================================================== */}
      <motion.section 
        className="py-16 overflow-hidden bg-[#FAF9F7] font-sans"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
      >
         <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Nuestros Aliados</h3>
         </div>
         <div className="relative w-full flex overflow-hidden">
            <motion.div 
               className="flex gap-16 md:gap-20 items-center whitespace-nowrap"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
               style={{ width: "fit-content" }}
            >
               {[...aliados, ...aliados, ...aliados, ...aliados].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer">
                     <img src={logo} alt="Aliado" className="h-12 md:h-16 w-auto object-contain" />
                  </div>
               ))}
            </motion.div>
         </div>
      </motion.section>

      {/* ==============================================================
          6. TESTIMONIOS (AHORA CON 6 ITEMS Y ESPACIO CORREGIDO)
      ============================================================== */}
      <div className="bg-[#FAF9F7] pt-16 pb-6 font-sans"> {/* Reduce padding-bottom de 16 a 6 */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
             <span className="text-orange-500 font-bold tracking-wider uppercase text-xs">Voces que inspiran</span>
             <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mt-2">Nuestras familias y equipo</h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {testimonios.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`relative p-6 rounded-2xl flex flex-col justify-between min-h-[260px] shadow-md border border-gray-50 ${
                  item.highlight ? 'bg-[#F48C51] text-white transform md:-translate-y-2' : 'bg-white text-gray-900'
                }`}
              >
                <div className="absolute top-4 right-6 opacity-20"><FaQuoteLeft size={30} /></div>
                <div className="relative z-10">
                  <p className={`text-base font-serif italic leading-relaxed ${item.highlight ? 'text-white/90' : 'text-gray-600'}`}>"{item.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/50 bg-gray-200">
                     <img src={Imagen1} alt={item.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${item.highlight ? 'text-white' : 'text-gray-900'}`}>{item.author}</h4>
                    <span className={`text-[10px] uppercase font-bold tracking-wide ${item.highlight ? 'text-orange-100' : 'text-blue-600'}`}>{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ==============================================================
          7. CARRUSEL DE EQUIPOS (ESPACIO CORREGIDO)
      ============================================================== */}
      <section className="bg-[#FAF9F7] pt-8 pb-20 font-sans border-t border-gray-100 overflow-hidden"> {/* Reduce padding-top de 20 a 8 */}
        <div className="text-center mb-10">
           <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">Quienes hacen esto posible</span>
           <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">Nuestro Talento Humano</h2>
        </div>

        {/* Contenedor del Carrusel Infinito */}
        <div className="relative w-full flex overflow-hidden pb-10">
           <motion.div 
             className="flex gap-6 pl-6" 
             animate={{ x: ["0%", "-50%"] }} 
             transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
             style={{ width: "fit-content" }}
           >
             {/* Duplicamos el array para efecto infinito */}
             {[...teamImages, ...teamImages, ...teamImages].map((team, index) => (
               <div 
                 key={index} 
                 className="relative w-[280px] h-[350px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
               >
                  <img src={team.src} alt={team.label} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  
                  {/* Overlay con nombre del equipo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl font-serif">{team.label}</h3>
                    <div className="w-10 h-1 bg-orange-500 mt-2 rounded-full"></div>
                  </div>
               </div>
             ))}
           </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Inicio;