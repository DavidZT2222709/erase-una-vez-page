import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
// Iconos
import { FaPuzzlePiece, FaChalkboardUser, FaHeartPulse, FaUserDoctor, FaHandsHoldingChild, FaLightbulb, FaXmark, FaPlay, FaUsers, FaCity, FaHeart, FaHandHoldingHeart } from "react-icons/fa6";

// IMPORTANTE: Importa aquí las imágenes de portada de cada proyecto
import ImagenProyecto1 from '../../assets/InitialImages/Donacion.png'; 
const PlaceholderImg = ImagenProyecto1; 

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

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ==========================================
  // CONFIGURACIÓN DE ANIMACIONES (NUEVO)
  // ==========================================
  
  // 1. Variantes para el contenedor (Grid)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Retraso de 0.2s entre cada tarjeta
      }
    }
  };

  // 2. Variantes para cada tarjeta individual
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Empieza invisible y abajo
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } // Sube suavemente
    }
  };

  // ==========================================
  // DATOS DE LOS PROYECTOS
  // ==========================================
  const projectsData = [
    {
      id: 1,
      title: "Concientización sobre el Autismo",
      shortDesc: "Jornadas para educar y sensibilizar a la comunidad sobre la neurodivergencia.",
      fullDesc: "Realizamos campañas masivas en barrios, centros comerciales y redes sociales para derribar mitos sobre el autismo. Nuestro objetivo es crear una sociedad más empática que entienda la neurodivergencia no como una enfermedad, sino como una forma diferente de ver el mundo. Incluimos testimonios de familias y expertos.",
      icon: <FaPuzzlePiece />,
      color: "bg-blue-100 text-blue-600",
      image: PlaceholderImg,
    },
    {
      id: 2,
      title: "Capacitación a Instituciones Educativas",
      shortDesc: "Formación a docentes para crear aulas inclusivas y adaptadas.",
      fullDesc: "Visitamos colegios públicos y privados para brindar herramientas pedagógicas a los docentes. Enseñamos estrategias de diseño universal de aprendizaje (DUA), manejo de crisis en el aula y adaptación curricular, garantizando que los niños con discapacidades cognitivas tengan un aprendizaje significativo.",
      icon: <FaChalkboardUser />,
      color: "bg-green-100 text-green-600",
      image: PlaceholderImg,
    },
    {
      id: 3,
      title: "Sexualidad Educativa",
      shortDesc: "Talleres adaptados sobre derechos, cuerpo y prevención.",
      fullDesc: "Un programa pionero enfocado en el derecho a la educación sexual para personas con discapacidad cognitiva. Abordamos temas como el reconocimiento del cuerpo, el consentimiento, la prevención del abuso y las relaciones afectivas sanas, utilizando material visual y didáctico adaptado a sus necesidades de comprensión.",
      icon: <FaHeartPulse />,
      color: "bg-pink-100 text-pink-600",
      image: PlaceholderImg,
    },
    {
      id: 4,
      title: "Asistencia en Salud",
      shortDesc: "Brigadas y apoyo para el acceso a servicios médicos especializados.",
      fullDesc: "Gestionamos y realizamos brigadas de salud con neurólogos, psicólogos y terapeutas ocupacionales aliados. Además, brindamos asesoría legal y acompañamiento a las familias para garantizar que las EPS cumplan con la entrega de medicamentos y tratamientos necesarios.",
      icon: <FaUserDoctor />,
      color: "bg-teal-100 text-teal-600",
      image: PlaceholderImg,
    },
    {
      id: 5,
      title: "Acompañamiento a Cuidadores",
      shortDesc: "Espacios de respiro y apoyo psicológico para padres y madres.",
      fullDesc: "Sabemos que cuidar es una labor agotadora. Creamos 'Círculos de Respiro', espacios seguros donde padres, madres y cuidadores reciben apoyo psicológico, comparten experiencias y aprenden técnicas de manejo del estrés y autocuidado. Porque quien cuida también merece ser cuidado.",
      icon: <FaHandsHoldingChild />,
      color: "bg-orange-100 text-orange-600",
      image: PlaceholderImg,
    },
    {
      id: 6,
      title: "Proyectos de Emprendimiento",
      shortDesc: "Impulso económico para familias de niños con discapacidad.",
      fullDesc: "Capacitamos a madres cabeza de hogar y jóvenes con discapacidad en oficios productivos (artesanías, panadería, confección). Además, brindamos capital semilla y espacios en ferias para que puedan generar ingresos propios sin descuidar el cuidado de sus hijos.",
      icon: <FaLightbulb />,
      color: "bg-yellow-100 text-yellow-600",
      image: PlaceholderImg,
    },
  ];

  return (
    <div className="font-sans">
        {/* ==========================================
            SECCIÓN PRINCIPAL: PROYECTOS
        ========================================== */}
        <section className="bg-[#FAF9F7] py-24 min-h-screen relative overflow-hidden">
        
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* ENCABEZADO (Animación Simple) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Nuestras Líneas de Acción</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mt-3">
                        Programas que transforman vidas
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                        Abordamos la inclusión de manera integral, desde la salud y la educación hasta el empoderamiento económico de las familias.
                    </p>
                </motion.div>

                {/* GRID DE PROYECTOS (Animación Escalonada) */}
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants} // Usamos las variantes del contenedor
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }} // Se activa un poco antes de llegar
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            variants={itemVariants} // Cada tarjeta usa la variante de item
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 cursor-pointer group hover:border-orange-200 transition-colors"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {project.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {project.shortDesc}
                            </p>
                            <div className="flex items-center text-sm font-bold text-blue-600 uppercase tracking-wide gap-2">
                                Ver detalles <span className="text-lg">→</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>

        {/* ==========================================
            SECCIÓN DE ESTADÍSTICAS
        ========================================== */}
        <section className="bg-[#FAF9F7] py-24 border-t border-gray-100">
             <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-serif text-gray-900">
                        Resultados que respaldan nuestro trabajo
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                   
                   <div className="text-center group">
                      <div className="flex justify-center mb-4 text-orange-500 group-hover:scale-110 transition duration-300">
                         <FaUsers size={40} />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
                         +<Counter value={1200} />
                      </div>
                      <p className="text-gray-500 font-medium uppercase text-xs md:text-sm tracking-wider">Beneficiarios</p>
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

        {/* ==========================================
            MODAL (VENTANA EMERGENTE)
        ========================================== */}
        <AnimatePresence>
            {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                
                {/* Backdrop */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Contenido del Modal */}
                <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative z-10"
                >
                <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition shadow-md"
                >
                    <FaXmark size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* COLUMNA 1: MULTIMEDIA */}
                    <div className="relative h-64 md:h-auto bg-gray-100">
                        <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-orange-600 shadow-lg cursor-pointer hover:scale-110 transition">
                                <FaPlay className="ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 2: INFORMACIÓN */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6 text-sm font-bold uppercase ${selectedProject.color}`}>
                        {selectedProject.icon}
                        Programa #{selectedProject.id}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        {selectedProject.title}
                    </h2>
                    
                    <div className="prose prose-lg text-gray-600 leading-relaxed">
                        <p>{selectedProject.fullDesc}</p>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-900 uppercase mb-2">Impacto Esperado:</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Beneficio directo a familias vulnerables.</li>
                                <li>Mejora en indicadores de calidad de vida.</li>
                                <li>Cobertura en zonas rurales y urbanas.</li>
                            </ul>
                        </div>
                    </div>

                    <button className="mt-8 w-full py-4 rounded-full bg-[#E63946] text-white font-bold shadow-lg hover:bg-red-700 transition">
                        Quiero apoyar este proyecto
                    </button>
                    </div>

                </div>
                </motion.div>
            </div>
            )}
        </AnimatePresence>

    </div>
  );
};

export default Proyectos;