  import { Link } from 'react-router-dom';
  import BackgroundElements from './BackgroundElemtents';
  import { Calendar, Info, ChevronRight, } from 'lucide-react';
  import ColombiaMap from '../map/ColombiaMap';


// ─── Hero principal ───────────────────────────────────────────────────────────
export default function BannerHomeIni() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 md:py-26 overflow-hidden">
      <BackgroundElements />

      <div className="relative z-10 w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── IZQUIERDA: Contenido ── */}
          <div className="space-y-5 sm:space-y-10 md:pl-6">

            {/* Imagen promo */}
            <div className="flex justify-center">
              <img
                src="/images/promocion.webp"
                alt="50% descuento en comparendos"
                fetchPriority="high"
                className="w-72 sm:w-64 md:w-80 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              />
            </div>
            {/* Título */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-center">
              En comparendos manuales y{" "}
              <span className="text-yellow-300">fotomultas</span>
            </h1>

            {/* Descripción */}
            <div>
            <p className="text-lg text-blue-100 leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              Agenda hoy tu curso de seguridad vial y aprovecha los beneficios
              en la reducción del valor de comparendos de acuerdo con la{" "}
              <span className="font-semibold text-yellow-300">Ley 769 de 2002</span>{" "}
              del Código Nacional de Tránsito.
            </p>
             <p className="text-sm text-white/70 pt-3">✔ Proceso 100% legal y seguro</p>
              </div>
            {/* Botones */}
            <div className="flex flex-wrap gap-4 pt-1 justify-center">
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
            </div>

           
          </div>

          {/* ── DERECHA: Mapa de Colombia ── */}
          <div className=" flex flex-col items-center gap-6 xl:-mt-24 lg:-mt-44">     
            <div className=" relative  w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xl h-[380px] sm:h-[460px] lg:h-[620px]">
               <div className=''><ColombiaMap/></div>
                 </div>
          </div>
        </div>
        {/* ── Avalados y vigilados por ── */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <p className="text-center text-xs font-semibold text-white/60 tracking-widest uppercase mb-6">
            Avalados y vigilados por
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4 flex items-center gap-6 sm:gap-10">
            
                <div className="group relative flex items-center justify-center">
      <img
        src="/images/certification/iconmin.png"
        alt="Ministerio de Transporte"
        className="h-8 sm:h-10 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Ministerio de Transporte
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-900/90" />
      </div>
    </div>

              <div className="w-px h-7 bg-white/25" />
              <div className="group relative flex items-center justify-center">
      <img
        src="/images/certification/surpericon.png"
        alt="Superintendencia"
        className="h-8 sm:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Superintendencia de Puertos y Transporte
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-900/90" />
      </div>
    </div>
              <div className="w-px h-7 bg-white/25" />
               <div className="group relative flex items-center justify-center">
      <img
        src="/images/certification/runt.webp"
        alt="RUNT"
        className="h-8 sm:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        RUNT
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-900/90" />
      </div>
    </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}