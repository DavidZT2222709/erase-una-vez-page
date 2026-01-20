import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/staticelements/Navbar.jsx';
import Footer from './components/staticelements/Footer.jsx';

import Hero from './components/pages/Inicio.jsx';
import Proyectos from './components/pages/Proyectos.jsx';
import Contacto from './components/pages/Contacto.jsx';
import Servicios from './components/pages/Servicios.jsx';
import HelpButton from './components/staticelements/HelpButton.jsx';
import Nosotros from './components/pages/Nosotros.jsx';
import Teams from './components/pages/Teams.jsx';

// Asegúrate de importar también Footer y ScrollToTopButton si ya existen, 
// de lo contrario, coméntalos o darán error.
// import Footer from './Footer';
// import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <Router basename='/'>
      <main>
        {/* El Navbar se mostrará aquí */}
        <Navbar />

        <Routes>
          {/* Principal Pages */}
          <Route path='/' element={
            <>
              <Hero />
            </>
          } />
          {/* Pages/Views */}
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/equipo-de-trabajo' element={<Teams />} />
        </Routes>
        
        <HelpButton />
        <Footer /> 
        {/* <ScrollToTopButton /> */}
      </main>
    </Router>
  )
}

export default App