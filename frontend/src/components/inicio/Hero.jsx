import Imagen1 from '../../assets/Donacion.jpg';

const Hero = () => {
  return (
    <section className="bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* CONTENIDO */}
        <div>
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Bienvenidos a nuestra fundación
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Acompañamos la niñez
            <br />
            con amor y oportunidades
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Trabajamos junto a niños, niñas y sus familias para fortalecer
            su desarrollo emocional, educativo y social, creando entornos
            seguros y llenos de esperanza.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
              Donar ahora
            </button>
            <button className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition">
              Conocer más
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Más de <strong>1.200 familias</strong> acompañadas en programas de cuidado y desarrollo infantil.
          </p>
        </div>

        {/* IMAGEN + TARJETA */}
        <div className="relative flex justify-center">
          <img
            src={Imagen1}
            alt="Ilustración de apoyo a la niñez"
            className="w-full max-w-md"
          />

          <div className="absolute -bottom-6 bg-white shadow-lg rounded-xl p-5 max-w-sm">
            <p className="text-sm text-gray-600">
              “Gracias al acompañamiento, mi hijo ahora puede comunicarse
              mejor y sentirse seguro.”
            </p>
            <span className="block mt-2 text-xs font-semibold text-gray-400">
              — Madre beneficiaria
            </span>
          </div>
        </div>
      </div>

      {/* BLOQUES INFERIORES */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        
        <div className="flex gap-4">
          <div className="text-2xl">📘</div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Material educativo accesible
            </h3>
            <p className="text-gray-600 text-sm">
              Desarrollamos recursos adaptados para apoyar la comunicación
              y el aprendizaje de niños con diversas necesidades.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-2xl">💛</div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Cuidado emocional familiar
            </h3>
            <p className="text-gray-600 text-sm">
              Brindamos acompañamiento emocional a cuidadores y familias
              que enfrentan retos diarios en el cuidado infantil.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
