import { CheckCircle, Users, MapPin, Calendar, Clock, ChevronLeft, ChevronRight, } from 'lucide-react';
import BannerInfo from './banner/banner_home_info';
import SectionCities from './section/Section_cities';
import BannerHomeIni from './banner/banner_home_ini';
import HomeStats from './section/SectionStatsHome';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sedes, SedesData } from '../data/sedes1';
import { useState, useEffect } from 'react';



export default function Home() {
    const [cities, setCities] = useState<Sedes[]>([]);
    const [loadingCities, setLoadingCities] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      fetchCities();
    }, []);

     const fetchCities = async () => {
        try {
          setTimeout(() => {
              setCities(SedesData);
              setLoadingCities(false);
            }, 1000);
          
        } catch (error) {
          console.error('Error fetching cities:', error);
        } finally {
          setLoadingCities(false);
        }
      };
    
      const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prev) => (prev === cities.length - 1 ? 0 : prev + 1));
      };
    
      const getVisibleCities = () => {
        const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const visible = [];
        for (let i = 0; i < itemsPerPage; i++) {
          visible.push(cities[(currentIndex + i) % cities.length]);
        }
        return visible;
      };

  return (
     <>
     <Helmet>
        <title>Cursos Comparendos Colombia | 50% Descuento - Ley 1383</title>
        <meta name="description" content="Completa tu curso de educación vial con instructores certificados en Colombia. Agenda fácil, horarios flexibles y cobertura nacional." />
        <meta name="keywords" content="cursos comparendos colombia, descuento comparendos 50%, ley 1383, reducir multas tránsito, cursos educación vial, descuento fotomultas, CIA colombia" />
        <meta httpEquiv="content-language" content="es-CO" />
         <link rel="canonical" href="https://www.pagocursoscomparendos.com/" />
         <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Colombia" />
        <meta property="og:title" content="Cursos comparendos de Colombia - Curso de Educación Vial" />
        <meta property="og:description" content="Completa tu curso de educación vial con instructores certificados en Colombia. Agenda fácil, horarios flexibles y cobertura nacional." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pagocursoscomparendos.com/images/oghome.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cursos Comparendos" />
        <meta name="robots" content="index,follow" />
      </Helmet>
    <div className="pt-6">
      <BannerHomeIni/>
      <SectionCities/>

      <section className="pt-20 pb-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Proceso simple en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
               {
                 icon: Users,
                 title: 'Regístrate',
                 description: 'Completa tus datos personales y número de comparendo',
                 link: '/appointment',
               },
              {
                icon: MapPin,
                title: 'Elige tu ciudad',
                description: 'Selecciona la sede más cercana a tu ubicación',
                link: '/cities',
              },
              {
                icon: Calendar,
                title: 'Agenda tu clase',
                description: 'Escoge la fecha y hora que mejor te convenga',
                link: '/appointment',
              },
              {
                icon: CheckCircle,
                title: 'Asiste al curso',
                description: 'Completa tu formación vial con instructores certificados',
                link: '',
              },
            ].map((step, index) => (
              <Link
                to={step.link}
                key={index}
                
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <BannerInfo/>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegirnos?
          </h2>
          <div className="m-24">
          <HomeStats />
          </div>
          <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loadingCities ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : cities.length > 0 ? (
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getVisibleCities().map((city, idx) => (
                  <div key={`${city.id}-${idx}`} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      {city.image ? (
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                          <span className="text-gray-400 text-sm">Sin imagen</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{city.name}</h3>   
                    </div>
                  </div>
                ))}
              </div>

              {cities.length > 3 && (
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}

              <div className="flex justify-center gap-2 mt-6">
                {cities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Ir a ciudad ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Profesionales Certificados',
                description: 'Instructores con amplia experiencia y certificación',
              },
              {
                icon: MapPin,
                title: 'Cobertura Nacional',
                description: 'Presencia en las principales ciudades de Colombia',
              },
              {
                icon: Calendar,
                title: 'Fácil Agendamiento',
                description: 'Sistema en línea simple y rápido para agendar tu clase',
              },
              {
                icon: Clock,
                title: 'Horarios Flexibles',
                description: 'Múltiples opciones de horario para adaptarnos a ti',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
