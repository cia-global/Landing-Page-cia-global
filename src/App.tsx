import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Cities from './components/Cities';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import CityDetail from './components/CityDetail';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleNavigate = (section: string, cityId?: string) => {
    if (section === 'city-detail' && cityId) {
      setSelectedCityId(cityId);
      setCurrentSection('city-detail');
    } else {
      setCurrentSection(section);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'cities':
        return <Cities onNavigate={handleNavigate} />;
      case 'appointment':
        return <Appointment />;
      case 'contact':
        return <Contact />;
       case 'city-detail':
        return selectedCityId ? <CityDetail cityId={selectedCityId} onNavigate={handleNavigate} /> : <Home onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
