const Footer = () => {
  return (
    <footer className="bg-green-600 text-white rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold max-w-4xl mx-auto leading-tight">
          Haz parte del comienzo de una historia diferente
        </h2>

        {/* TEXTO + CONTACTO */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-sm md:text-base">
          <p className="leading-relaxed">
            Con tu ayuda, podemos llevar educación accesible, cuidado y
            esperanza a cientos de familias.
            <br />
            <br />
            <span className="font-semibold">
              Dona, participa, comparte. Cada gesto suma.
            </span>
          </p>

          <div className="leading-relaxed">
            <p>
              <span className="font-semibold">Correo:</span>{" "}
              contacto@eraseunavezfundacion.com
            </p>
            <p className="mt-2">
              <span className="font-semibold">WhatsApp:</span>{" "}
              +57 310 456 7890
            </p>
          </div>
        </div>

        {/* BOTONES */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold">
            Haz un donativo
          </button>
          <button className="px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 transition font-semibold">
            Súmate al voluntariado
          </button>
        </div>
      </div>

      {/* CRÉDITOS */}
      <div className="text-center text-xs text-green-100 pb-6">
        Hecho con el 💚 por Vittgo usando Divi y Hostinger
      </div>
    </footer>
  );
};

export default Footer;
