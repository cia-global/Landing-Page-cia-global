  import { Link } from 'react-router-dom';
  import BackgroundElements from './BackgroundElemtents';

export default function BannerHomeIni() {
  return (
   <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-40">
       <BackgroundElements />
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
          🚦 Aprovecha el beneficio
        </span>
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-yellow-300">50% de descuento</span>
          <br />
          en comparendos manuales y
          <br />
          fotomultas 
        </h1>
        {/* Description */}
        <p className="text-lg text-white/90 max-w-xl">
         Agenda hoy tu curso de concientización vial y aprovecha los beneficios en la reducción de comparendos
          de acuerdo con la Ley 1383 de 2010. Ponte al día con tus comparendos y ahórrate más dolores de cabeza.
        </p>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            📆 Agenda tu curso
          </Link>

          <button
              onClick={() =>
                  document.getElementById('more-info')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
            className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Más información
          </button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-white/80 pt-2">
          ✔ Proceso 100% legal y seguro
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
          <img
            src="/images/policia.jpg"
            alt="Descuento en comparendos"
            className="w-full h-full object-cover"
          />

          {/* Floating card */}
          <div className="absolute bottom-4 left-4 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <div className="bg-green-100 text-green-600 p-2 rounded-full">
              💰
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">
                Ahorro estimado
              </p>
              <p className="text-lg font-bold">
                Hasta $500.000
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
      </section>
    );
  }