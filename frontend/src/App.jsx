import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/staticelements/Navbar.jsx';
import Footer from './components/staticelements/Footer.jsx';

import Hero from './components/inicio/Hero.jsx';

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
        </Routes>

        <Footer /> 
        {/* <ScrollToTopButton /> */}
      </main>
    </Router>
  )
}

export default App