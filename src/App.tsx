import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
import Certificados from './components/Certification';
import CertificadoDetalle from './components/certification/CertificadoDetail';

// Componente para scroll al cambiar de ruta


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Layout principal (con Header y Footer)
function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Rutas SIN Header ni Footer */}
        <Route path="/certificado/:codigo" element={<CertificadoDetalle />} />

        {/* Rutas CON Header y Footer — Layout como wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:slug" element={<CityDetail />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;