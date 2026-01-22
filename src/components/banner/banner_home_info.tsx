
import { Calendar, Clock, Camera, FileCheck } from 'lucide-react';

interface DiscountCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight: string;
}

const BannerInfo = () => {
  const discountCards: DiscountCard[] = [
    {
      id: '1',
      title: '50% Comparendo manual',
      description: 'Realiza el curso dentro de los primeros 5 días hábiles después de la infracción.',
      icon: <Calendar size={24} />,
      highlight: '5 días hábiles',
    },
    {
      id: '2',
      title: '25% Comparendo manual',
      description: 'Realiza el curso entre el 6.º y el 20.º día hábil posteriores a la infracción.',
      icon: <Clock size={24} />,
      highlight: '6-20 días hábiles',
    },
    {
      id: '3',
      title: '50% en fotomultas',
      description: 'Realiza el curso dentro de los primeros 11 días hábiles después de la notificación de la infracción.',
      icon: <Camera size={24} />,
      highlight: '11 días hábiles',
    },
    {
      id: '4',
      title: '25% en fotomultas',
      description: 'Si realizas el curso entre el día 12 y el día 26 hábil después de la notificación de la infracción.',
      icon: <FileCheck size={24} />,
      highlight: '12-26 días hábiles',
    },
  ];

  return (
    <section id='more-info' className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
      {/* Imagen decorativa optimizada */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/banner.jpeg"
          alt=""
          loading="lazy"
className="absolute right-0 top-0 h-full w-full object-cover opacity-25 md:opacity-35"          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Gradiente overlay mejorado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-700/50 to-transparent"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl">
          {/* Header section */}
          <div className="mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Información Importante</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Descuentos por Comparendos
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Para obtener los descuentos, debes tener en cuenta estos plazos establecidos por ley
            </p>
          </div>

          {/* Grid de tarjetas mejorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {discountCards.map((card, index) => (
              <div
                key={card.id}
                className="group relative bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Badge de descuento */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {card.title.includes('50%') ? '50%' : '25%'}
                </div>

                {/* Icono */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {card.icon}
                </div>

                {/* Contenido */}
                <h3 className="font-bold text-blue-900 mb-3 text-lg">
                  {card.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Highlight del plazo */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Clock size={16} />
                    <span className="text-xs font-semibold">{card.highlight}</span>
                  </div>
                </div>

                {/* Efecto hover */}
                <div className="absolute inset-0 border-2 border-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* Call to action adicional */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <p className="text-sm text-center">
                💡 <span className="font-semibold">Tip:</span> No dejes pasar los plazos, agenda tu curso hoy mismo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default BannerInfo;
       

    










