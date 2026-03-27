  import { Link } from 'react-router-dom';
  import BackgroundElements from './BackgroundElemtents';
  import { Calendar, Info, ChevronRight, } from 'lucide-react';
  import ColombiaMap from '../map/ColombiaMap';


// ─── Hero principal ───────────────────────────────────────────────────────────
export default function BannerHomeIni() {
  return (
    
    <section className="relative bg-gray-50 text-white py-20 md:py-26 overflow-hidden">
        <div className="absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full lg:bg-gray-950 " />
        <div className="absolute top-0 left-1/2 w-20 h-full bg-gradient-to-r from-gray-50 to-gray-950/30"></div>
      <BackgroundElements />
        {/*  bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 */}
      <div className="relative z-10  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-0 items-center ">
          
          <div className="space-y-5 sm:space-y-5 md:px-16 px-8 ">
             
            {/* Imagen promo */}
            <div className="flex justify-center">
              <img
                src="/images/promocion.webp"
                alt="50% descuento en comparendos"
                fetchPriority="high"
                className="w-72 sm:w-64 md:w-80 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              />
            </div>
            {/* <div className="bg-gray-900 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"></div> */}
            {/* Título */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-center text-black">
              EN COMPARENDOS MANUALES Y{" "}
              <span className="text-amber-300 ">FOTOMULTAS</span>
            </h1>

            {/* Descripción */}
            <div className="px-16">
            <p className="text-lg text-gray-700 leading-relaxed bg-gray-400/20 backdrop-blur-sm rounded-2xl p-5 border border-gray-400/70">
              Agenda hoy tu curso de seguridad vial y aprovecha los beneficios
              en la reducción del valor de comparendos de acuerdo con la{" "}
              <span className="font-semibold text-amber-500">Ley 769 de 2002</span>{" "}
              del Código Nacional de Tránsito.
            </p>
             <p className="text-sm text-black/70 pt-3">✔ Proceso 100% legal y seguro</p>
              </div>
            {/* Botones */}
            <div className="flex flex-wrap gap-4 pt-1 justify-center">
              <Link
                to="/appointment"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-xl shadow-xl
                            overflow-hidden
                            animate-[float_4s_ease-in-out_infinite]
                            hover:animate-none
                            hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
                behavior: 'smooth',})}
                className="px-8 py-4 bg-gray-400/20 backdrop-blur-sm text-gray-700 border-2 border-gray-400/70 rounded-xl hover:bg-gray-500/20 hover:border-gray-800/80 transition-all duration-300 font-semibold">
                <span className="flex items-center justify-center gap-2">
                    <Info className="w-5 h-5" />
                      Más información
                </span>
              </button>
            </div>
          </div>

          {/* ── DERECHA: Mapa de Colombia ── */}
          <div className=" flex flex-col items-center xl:-mt-24 lg:-mt-44 sm:mt-12 bg-gray-950 lg:bg-gray-950/0">
              <div className="lg:hidden w-full h-8 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>

              <div className=" relative w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xl h-[380px] sm:h-[460px] lg:h-[620px]">  
                <div className=''><ColombiaMap/></div> 
              </div>
              <div className="absolute bottom-4 left-[60%]">
              <div className="relative inline-block">
                {/* Línea amarilla lateral */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-4/5 bg-yellow-400 rounded-full"></div>

                {/* Caja principal */}
                <div className="bg-black border border-white rounded-2xl px-8 py-5 shadow-lg">
                  <p className="text-gray-300 tracking-[0.2em] text-sm font-medium">
                    PRESENCIA NACIONAL
                  </p>
                  <h2 className="text-yellow-400 text-2xl font-extrabold mt-1">
                    +25 SEDES ACTIVAS
                  </h2>
                </div>
              </div>
              </div>
          </div>
        </div>
  </div>
  
            
  </section>
  );
}
