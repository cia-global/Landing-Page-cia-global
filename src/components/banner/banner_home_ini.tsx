  import { Link } from 'react-router-dom';
  import BackgroundElements from './BackgroundElemtents';
  import { Calendar, Info, ChevronRight } from 'lucide-react';

export default function BannerHomeIni() {
  return (
   <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-40">
       <BackgroundElements />
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
   <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] xl:h-[600px]">
  <img
    src="/images/promocion.png"
    alt="Descuento en comparendos"
    className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
  />
</div>
    

     
      <div className="space-y-6">
    
      
        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
          🚦 Aprovecha el beneficio
        </span>

        
        <h1 className="text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          En comparendos manuales y
          <br />
          fotomultas 
        </h1>

       

       <div className="relative mb-8">
                <p className="text-lg text-blue-100 leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  Agenda hoy tu curso de seguridad vial y aprovecha los beneficios
                  en la reducción del valor de comparendos de acuerdo con la <span className="font-semibold text-yellow-300">Ley 769 de 2002 </span>
                  del Código Nacional de Tránsito.
                </p>
              </div>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
        <Link
          to="/appointment"
          className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 font-bold rounded-xl shadow-xl
             overflow-hidden
             animate-[float_4s_ease-in-out_infinite]
             hover:animate-none
             hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Agenda tu curso
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
          </Link>

        <button
          onClick={() =>
          document.getElementById('more-info')?.scrollIntoView({
          behavior: 'smooth',
          })
          }
          className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold"
        >
        <span className="flex items-center justify-center gap-2">
                    <Info className="w-5 h-5" />
                    Más información
                  </span>
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