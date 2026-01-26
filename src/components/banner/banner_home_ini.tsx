  import { Link } from 'react-router-dom';
  import BackgroundElements from './BackgroundElemtents';

export default function BannerHomeIni() {
  return (
   <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-40">
       <BackgroundElements />
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* left IMAGE */}
   <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] xl:h-[600px]">
  <img
    src="/images/promocion.png"
    alt="Descuento en comparendos"
    className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
  />
</div>
    

      {/* rihtf CONTENT */}
      <div className="space-y-6">
    
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
          🚦 Aprovecha el beneficio
        </span>
        {/* Title */}
        
        <h1 className="text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          En comparendos manuales y
          <br />
          fotomultas 
        </h1>

        {/* Description */}

       <div className="relative mb-8">
                <p className="text-lg text-blue-100 leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  Agenda hoy tu curso de seguridad vial y aprovecha los beneficios
                  en la reducción de comparendos de acuerdo con la <span className="font-semibold text-yellow-300">Ley 1383 de 2010</span>.
                  Ponte al día con tus comparendos y ahórrate más dolores de cabeza.
                </p>
              </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
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
  <p className="text-center lg:text-left text-sm text-white/80 pt-2">
  ✔ Proceso 100% legal y seguro
</p>

</div>
        
      </div>

      

    </div>
  </div>
      </section>
    );
  }