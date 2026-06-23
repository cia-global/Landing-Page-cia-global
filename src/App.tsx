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
import BucaramangaCity from './components/cityseo/CitySeoBucaramanga';
import FlorenciaCity from './components/cityseo/CitySeoFlorencia';
import CityPage from './components/cityseo/CitiesSeoPage';
import NewsBogotaSuba from './components/news/NewsBogota';
import NewsSoatNacional from './components/news/NewsSoat';
import NewsLicense from './components/news/NewsLicense';
import NewsCambioInfractor from './components/news/NewsCambioInfractor';
import NewsDescuentoComparendos from './components/news/NewsDescuentoComparendos';

// Componente para scroll al cambiar de ruta


function ScrollManager() {
    const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [pathname, hash]);

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
      <ScrollManager />
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
          <Route path="/curso-comparendo-bucaramanga" element={<BucaramangaCity />} />
          <Route path="/curso-comparendo-florencia" element={<FlorenciaCity />} />
          <Route path="/curso-comparendo/:slug" element={<CityPage />} />
          <Route path="/noticias/nueva-sede-bogota-suba" element={<NewsBogotaSuba />} />
          <Route path="/noticias/soat-nacional" element={<NewsSoatNacional />} />
          <Route path="/noticias/licencia-conduccion-por-puntos-colombia" element={<NewsLicense />} />
          <Route path="/noticias/cambio-infractor-comparendo" element={<NewsCambioInfractor />} />
          <Route path="/noticias/descuento-comparendos" element={<NewsDescuentoComparendos />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;