import { CheckCircle, Users, MapPin, Calendar, Clock } from 'lucide-react';
import BannerInfo from './banner/banner_home_info';
import SectionCities from './section/Section_cities';
import BannerHomeIni from './banner/banner_home_ini';
import { Link } from 'react-router-dom';



export default function Home() {
  return (
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
