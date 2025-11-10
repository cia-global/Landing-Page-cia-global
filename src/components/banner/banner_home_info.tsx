
const BannerInfo = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-32 overflow-hidden">
      {/* Imagen decorativa al lado derecho */}
      <img
        src="/images/image-banner.jpg"
        alt="Banner decorativo"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 md:opacity-40"
      />

      {/* Capa para mejorar legibilidad (opcional, si la imagen tiene mucho color) */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-900/40 to-transparent"></div>

      {/* Contenido */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Columna izquierda: texto y tarjetas */}
        <div className="md:w-1/2 space-y-6 z-10">
         <h2 className="text-3xl font-bold text-white">
            Recuerda que
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            Para obtener los descuentos por comparendos, debes tener en cuenta esta información:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Tarjeta 50% descuento */}
            <div className="p-4 bg-white text-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-200">
              <h3 className="font-semibold text-blue-700 mb-2">
                Para el 50% de descuento
              </h3>
              <p className="text-sm">
                Realiza el curso dentro de los primeros 5 días hábiles después de la infracción.
              </p>
            </div>

            {/* Tarjeta 25% descuento */}
            <div className="p-4 bg-white text-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-200">
              <h3 className="font-semibold text-blue-700 mb-2">
                Para el 25% de descuento
              </h3>
              <p className="text-sm">
                Realiza el curso entre el sexto y el vigésimo día hábil después de la infracción.
              </p>
            </div>

            {/* Tarjeta 50% fotomultas */}
            <div className="p-4 bg-white text-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-200">
              <h3 className="font-semibold text-blue-700 mb-2">
                Para el 50% en fotomultas
              </h3>
              <p className="text-sm">
                Si aceptas la infracción y realizas el curso dentro de los 11 días hábiles.
              </p>
            </div>

            {/* Tarjeta 25% fotomultas */}
            <div className="p-4 bg-white text-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-200">
              <h3 className="font-semibold text-blue-700 mb-2">
                Para el 25% en fotomultas
              </h3>
              <p className="text-sm">
                Si realizas el curso entre el día 12 y el día 26 hábil después de la notificación.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BannerInfo;

         
       

    










