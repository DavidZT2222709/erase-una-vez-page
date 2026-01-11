import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot, FaPhone, FaEnvelope, FaUserTie, FaStreetView, FaXmark } from "react-icons/fa6";

// Importa el logo para usarlo como marcador en el mapa
import LogoMarker from '../../assets/InitialImages/Perfil.png';

// ==========================================
// CONFIGURACIÓN Y DATOS
// ==========================================

const containerStyle = {
  width: "100%",
  height: "100%", // Se adapta al contenedor padre
  borderRadius: "1.5rem",
};

// Coordenadas centrales de Colombia para la vista inicial
const centerColombia = { lat: 4.570868, lng: -74.297333 };

const sedesData = [
  {
    id: 1,
    ciudad: "Valledupar (Cesar)",
    direccion: "Calle 12 # 45-67, Valledupar",
    coords: { lat: 10.46314, lng: -73.25322 },
    horario: "Lunes a Viernes: 8am - 5pm",
    contactos: [
        { cargo: "Dirección General", nombre: "Dra. María Pérez", tel: "310 123 4567", email: "direccion.cesar@fun.org" },
        { cargo: "Coordinación Psicosocial", nombre: "Lic. Juan Diaz", tel: "310 123 4568", email: "psico.cesar@fun.org" },
        { cargo: "Atención al Usuario", nombre: "Sra. Ana Ruiz", tel: "310 123 4569", email: "atencion.cesar@fun.org" },
    ]
  },
  {
    id: 2,
    ciudad: "Riohacha (La Guajira)",
    direccion: "Cra 5 # 10-20, Riohacha",
    coords: { lat: 11.54444, lng: -72.90722 },
    horario: "Lunes a Viernes: 7am - 4pm",
    contactos: [
        { cargo: "Coordinador Sede", nombre: "Dr. Carlos Vives", tel: "312 987 6543", email: "coord.guajira@fun.org" },
        { cargo: "Trabajo Social", nombre: "Lic. Elena Noguera", tel: "312 987 6544", email: "social.guajira@fun.org" },
    ]
  },
  {
    id: 3,
    ciudad: "Pereira (Risaralda)",
    direccion: "Av. Circunvalar # 12-34",
    coords: { lat: 4.81333, lng: -75.69611 },
    horario: "Lunes a Viernes: 8am - 6pm",
    contactos: [
        { cargo: "Dirección Administrativa", nombre: "Sra. Luisa Madrigal", tel: "315 555 6677", email: "admin.pereira@fun.org" },
        { cargo: "Terapia Ocupacional", nombre: "Dr. Jose Henao", tel: "315 555 6678", email: "terapia.pereira@fun.org" },
    ]
  },
  {
    id: 4,
    ciudad: "Quibdó (Chocó)",
    direccion: "Calle 20 # 4-56, Quibdó",
    coords: { lat: 5.69472, lng: -76.66111 },
    horario: "Lunes a Viernes: 9am - 5pm",
    contactos: [
        { cargo: "Coordinador General", nombre: "Dr. Tostao Valencia", tel: "318 444 3322", email: "coord.choco@fun.org" },
        { cargo: "Apoyo Pedagógico", nombre: "Lic. Goyo Martínez", tel: "318 444 3323", email: "pedagogia.choco@fun.org" },
    ]
  },
];

const Contacto = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedSede, setSelectedSede] = useState(null);
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const handleSelectSede = (sede) => {
    setSelectedSede(sede);
    if (mapRef.current) {
      mapRef.current.panTo(sede.coords);
      mapRef.current.setZoom(16);
    }
  };

  const handleCloseSede = (e) => {
    e.stopPropagation();
    setSelectedSede(null);
    if (mapRef.current) {
        mapRef.current.panTo(centerColombia);
        mapRef.current.setZoom(6);
    }
  };

  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-28 pb-10 font-sans px-6 flex flex-col justify-center"> {/* Ajusté padding top/bottom */}
      
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-8"> {/* Reduje margen inferior */}
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Contáctanos</span>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">
                Nuestras Sedes en Colombia
            </h1>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Selecciona una sede para ver los contactos administrativos y ubicarla en el mapa.
            </p>
        </div>

        {/* CONTENEDOR PRINCIPAL */}
        {/* CAMBIO AQUÍ: Reduje la altura a 550px en Desktop y ajusté el gap */}
        <div className="grid lg:grid-cols-3 gap-6 h-auto lg:h-[550px]">
            
            {/* 1. COLUMNA IZQUIERDA: LISTA DE SEDES Y CONTACTOS */}
            <div className="lg:col-span-1 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
                {sedesData.map((sede) => (
                    <motion.div
                        key={sede.id}
                        onClick={() => handleSelectSede(sede)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`relative p-5 rounded-2xl cursor-pointer border transition-all duration-300 ${
                            selectedSede?.id === sede.id 
                            ? "bg-white border-orange-400 shadow-md ring-1 ring-orange-100" 
                            : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-sm"
                        }`}
                    >
                        {/* BOTÓN DE CERRAR */}
                        <AnimatePresence>
                            {selectedSede?.id === sede.id && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    onClick={handleCloseSede}
                                    className="absolute top-3 right-3 z-10 p-1 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors shadow-sm"
                                    title="Cerrar información"
                                >
                                    <FaXmark size={12} />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-between items-start pr-6">
                            <div>
                                <h3 className={`text-lg font-bold font-serif ${selectedSede?.id === sede.id ? "text-orange-600" : "text-gray-800"}`}>
                                    {sede.ciudad}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                                    <FaLocationDot /> {sede.direccion}
                                </div>
                            </div>
                            {selectedSede?.id === sede.id && (
                                <FaStreetView className="text-orange-500 text-xl animate-pulse mt-1" />
                            )}
                        </div>

                        {/* DESPLEGABLE DE CONTACTOS */}
                        <AnimatePresence>
                            {selectedSede?.id === sede.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-3 pt-3 border-t border-gray-100">
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Directorio Administrativo</h4>
                                        <div className="space-y-3">
                                            {sede.contactos.map((contacto, idx) => (
                                                <div key={idx} className="bg-gray-50 p-2.5 rounded-xl">
                                                    <div className="flex items-center gap-2 mb-0.5 text-blue-700 font-bold text-xs">
                                                        <FaUserTie /> {contacto.cargo}
                                                    </div>
                                                    <div className="text-gray-700 font-medium text-xs ml-5">{contacto.nombre}</div>
                                                    
                                                    <div className="flex flex-col ml-5 mt-1 gap-1 text-[10px] text-gray-500">
                                                        <a href={`tel:${contacto.tel}`} className="flex items-center gap-1 hover:text-orange-500 transition">
                                                            <FaPhone size={9} /> {contacto.tel}
                                                        </a>
                                                        <a href={`mailto:${contacto.email}`} className="flex items-center gap-1 hover:text-orange-500 transition">
                                                            <FaEnvelope size={9} /> {contacto.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* 2. COLUMNA DERECHA: MAPA INTERACTIVO */}
            {/* CAMBIO AQUÍ: Altura reducida en móvil (400px) y full en desktop (que ahora es 550px) */}
            <motion.div 
                className="lg:col-span-2 bg-white rounded-[2rem] p-2 shadow-xl border border-gray-200 h-[400px] lg:h-full relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={centerColombia}
                        zoom={6}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={{
                            disableDefaultUI: false,
                            zoomControl: true,
                            streetViewControl: true,
                            mapTypeControl: false,
                            fullscreenControl: true,
                            styles: [
                                {
                                    featureType: "poi",
                                    elementType: "labels",
                                    stylers: [{ visibility: "off" }],
                                },
                            ],
                        }}
                    >
                        {sedesData.map((sede) => (
                            <Marker
                                key={sede.id}
                                position={sede.coords}
                                title={sede.ciudad}
                                onClick={() => handleSelectSede(sede)}
                                icon={{
                                    url: LogoMarker,
                                    scaledSize: new window.google.maps.Size(40, 40),
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(20, 20),
                                }}
                                animation={window.google.maps.Animation.DROP}
                            />
                        ))}

                        {selectedSede && (
                            <InfoWindow
                                position={selectedSede.coords}
                                onCloseClick={() => setSelectedSede(null)}
                                options={{ pixelOffset: new window.google.maps.Size(0, -20) }}
                            >
                                <div className="p-2 min-w-[180px]">
                                    <h3 className="font-bold text-orange-600 font-serif mb-1">{selectedSede.ciudad}</h3>
                                    <p className="text-xs text-gray-600 mb-1">{selectedSede.direccion}</p>
                                    <p className="text-xs font-bold text-blue-600">{selectedSede.horario}</p>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-3xl animate-pulse">
                        <p className="text-gray-400 font-bold">Cargando Mapa...</p>
                    </div>
                )}
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contacto;