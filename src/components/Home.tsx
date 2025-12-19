import { CheckCircle, Users, MapPin, Calendar, Clock } from 'lucide-react';
import BannerInfo from './banner/banner_home_info';
import SectionCities from './section/Section_cities';
import BackgroundElements from './banner/BackgroundElemtents';
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-48">
       <BackgroundElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cumple tu curso de sensibilización y educación vial
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Desde nuestras sedes cerca de tí. Facil, rápido y confiable.
            </p>
            <Link
              to="/appointment"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar mi clase
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        
      </section>

      <section className="py-16 bg-gray-50">
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
               },
              {
                icon: MapPin,
                title: 'Elige tu ciudad',
                description: 'Selecciona la sede más cercana a tu ubicación',
              },
              {
                icon: Calendar,
                title: 'Agenda tu clase',
                description: 'Escoge la fecha y hora que mejor te convenga',
              },
              {
                icon: CheckCircle,
                title: 'Asiste al curso',
                description: 'Completa tu formación vial con instructores certificados',
              },
            ].map((step, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionCities/>
      <BannerInfo/>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Profesionales Certificados',
                description: 'Instructores con amplia experiencia y certificación oficial',
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
  );
}
