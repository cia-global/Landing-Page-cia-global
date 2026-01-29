import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Cities from './components/Cities';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import CityDetail from './components/CityDetail';
import NotFound from './components/NotFound';
import WhatsAppBubble from './components/bubble/WhatsAppBubble';
import PrivacyPolicy from './components/politics/PrivacyPolicy';
import TermsAndConditions from './components/politics/TermsAndConditions';

// Componente para scroll al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Layout principal
function Layout() {
  const location = useLocation();
  
  // Extraer la sección actual de la URL
  const getCurrentSection = () => {
    const path = location.pathname.slice(1); // Remueve el "/"
    return path || 'home';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:cityId" element={<CityDetail />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Ruta para página no encontrada */}
          <Route path="/404" element={<NotFound />} />
          
          {/* Redirigir cualquier ruta no válida */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
      <WhatsAppBubble />
    </BrowserRouter>
    
  );
}

export default App;
