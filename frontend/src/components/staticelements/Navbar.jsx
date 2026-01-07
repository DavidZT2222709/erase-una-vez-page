import React from 'react';
import Logo from '../../assets/Logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-[#FAF9F7] py-4 font-bold">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Centrado */}
        <a href="/" className="mb-4">
          <img src={Logo} alt="Érase una vez Fundación Logo" className="h-16" />
        </a>

        {/* Opciones de Navegación */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="/" className="hover:text-blue-600 transition duration-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="/nosotros" className="hover:text-blue-600 transition duration-300">
              Nosotros
            </a>
          </li>
          <li>
            <a href="/nuestro-trabajo" className="hover:text-blue-600 transition duration-300">
              Nuestro Trabajo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;