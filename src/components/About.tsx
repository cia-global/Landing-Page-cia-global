import { Target, Eye, Heart, Building2, Shield, Users, } from 'lucide-react';
import { useEffect, useState } from 'react';
import { partnersData,Partner} from '../data/partner';

import SectionCertificate from './section/SectionCertificate';
import { Helmet } from 'react-helmet-async';


export default function About() {
   const [partners, setPartners] = useState<Partner[]>([]);
     const [loadingPartners, setLoadingPartners] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

 
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
    <>

    <Helmet>
  <title>Quiénes Somos - Cursos Comparendos Colombia</title>
  <meta name="description" content="Somos una plataforma nacional dedicada a la educación, formación y sensibilización vial para infractores en Colombia. Cursos certificados con cobertura nacional." />
  <meta httpEquiv="content-language" content="es-CO" />
  <meta name="keywords" content="quienes somos cursos comparendos, CIA colombia, cursos certificados, educación vial colombia" />
  <link rel="canonical" href="https://www.pagocursoscomparendos.com/about" />
  <meta property="og:title" content="Quiénes Somos - Cursos Comparendos Colombia" />
  <meta property="og:description" content="Somos una plataforma nacional dedicada a la educación, formación y sensibilización vial para infractores en Colombia. Cursos certificados con cobertura nacional." />
  <meta property="og:type" content="website" />
  <meta name="robots" content="index,follow" />
</Helmet>

    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-green-600 text-white py-20 relative overflow-hidden">
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
                Somos una plataforma nacional dedicada a la educación, formación y sensibilización vial para infractores vehiculares en Colombia. Trabajamos en articulación con diferentes centros de capacitación autorizados en el país, lo que nos permite ofrecer una red de sedes confiables, certificadas y alineadas con los estándares exigidos por las autoridades de tránsito.              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestro objetivo es facilitar a los ciudadanos el acceso a procesos formativos transparentes, eficientes y de alta calidad, asegurando que cada curso contribuya a mejorar la seguridad vial y a promover comportamientos responsables en las vías.              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building2 className="text-blue-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Red de Centros Autorizados
                    </h3>
                    <p className="text-gray-700">
                      Convenios con centros certificados en todo el país
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
                Cursos comparendos de colombia, es una organización dedicada a la prestación del servicio de capacitación y reeducación a los infractores de las normas de tránsito mediante la sensibilización sobre la importancia de la seguridad vial como factor de prevención de la accidentalidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Eye className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                  Al año 2030, Cursos comparendos de colombia, se consolidará como una organización líder en educación vial en Colombia, mediante la prestación de un servicio con altos estándares de calidad en cumplimiento de los requisitos legales y reglametarios que aplican a la organización.
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

      <SectionCertificate />

         <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Nuestras Marcas
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
    </>
  );
}
