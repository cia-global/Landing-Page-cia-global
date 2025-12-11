import { Target, Eye, Heart, Award, Shield, Users,  ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase, City } from '../lib/supabase';
import { partnersData,Partner} from '../data/partner';
import { Sedes, SedesData } from '../data/sedes1';

export default function About() {

    const [cities, setCities] = useState<Sedes[]>([]);
  const [loadingCities, setLoadingCities] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
   const [partners, setPartners] = useState<Partner[]>([]);
     const [loadingPartners, setLoadingPartners] = useState(true);

  useEffect(() => {
    fetchCities();
    fetchPartners();
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

  const fetchPartners = () => {
      try {
        // Simula carga de datos
        setTimeout(() => {
          setPartners(partnersData);
          setLoadingPartners(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setLoadingPartners(false);
      }
    };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Líderes en educación y sensibilización vial en Colombia
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Somos una empresa especializada en la formación y sensibilización vial para infractores vehiculares en Colombia. Con años de experiencia en el sector, nos hemos consolidado como referentes en la educación para la seguridad vial.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestro compromiso va más allá del cumplimiento normativo: buscamos generar conciencia real sobre la importancia de conducir con responsabilidad, respeto y conocimiento de las normas de tránsito.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="text-blue-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Certificación Oficial
                    </h3>
                    <p className="text-gray-700">
                      Avalados por las autoridades de tránsito colombianas
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="text-green-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Instructores Calificados
                    </h3>
                    <p className="text-gray-700">
                      Profesionales con experiencia y formación especializada
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-blue-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Cobertura Nacional
                    </h3>
                    <p className="text-gray-700">
                      Presencia en las principales ciudades del país
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Formar conductores responsables mediante programas educativos de calidad, contribuyendo a la reducción de accidentes de tránsito y promoviendo una cultura de seguridad vial en Colombia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Eye className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la empresa líder en educación vial en Colombia, reconocida por la excelencia de nuestros programas y por nuestro impacto positivo en la seguridad vial del país.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Valores</h3>
              <ul className="text-gray-700 text-left space-y-2">
                <li>• Responsabilidad social</li>
                <li>• Excelencia educativa</li>
                <li>• Compromiso con la seguridad</li>
                <li>• Integridad y transparencia</li>
                <li>• Respeto y empatía</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

         <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Nuestros Aliados
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Trabajamos con las mejores instituciones y organizaciones del sector vial
          </p>

          {loadingPartners ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : partners.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:bg-white transition-all duration-300 group"
                >
                  <a
                    href={ '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-24 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  
                    
                  </a>
                  <h3 className="text-sm font-semibold text-gray-900 text-center">{partner.name}</h3>
                  {partner.description && (
                    <p className="text-xs text-gray-600 text-center mt-2">{partner.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>


       <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nuestras Sedes
          </h2>

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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>   
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nuestro Compromiso
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
              Más allá de cumplir con una obligación legal, nuestros cursos buscan generar un cambio real en la forma de conducir de cada participante. Trabajamos con metodologías pedagógicas actualizadas, casos prácticos y contenidos que promueven la reflexión sobre el impacto de nuestras acciones en la vía.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                La seguridad vial es responsabilidad de todos
              </h3>
              <p className="text-blue-100 text-lg">
                Juntos construimos vías más seguras para Colombia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
