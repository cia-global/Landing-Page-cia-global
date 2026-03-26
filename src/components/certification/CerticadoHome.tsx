

// ─── Hero principal ───────────────────────────────────────────────────────────
export default function CertHome() {
  return (
    
      <div className="py-10 border-t-4 border-amber-300 bg-gray-950">
                        <div className="absolute top-0 right-0 left-0 h-10 bg-amber-500"/>

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
                  src="/images/certification/surpericon.PNG"
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

  )}