const BannerInfo = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
        {/* Columna izquierda: texto y tarjetas */}
        <div className="md:w-1/2 space-y-6">
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

        {/* Columna derecha: imagen */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
         <img
  src="/images/image-banner.jpg"
  alt="Educación vial y descuentos por comparendos"
  className="w-80 h-auto rounded-2xl shadow-lg border border-white/20"
/>
        </div>
      </div>
    </section>
  );
};

export default BannerInfo;
