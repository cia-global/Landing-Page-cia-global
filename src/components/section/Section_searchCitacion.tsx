import { Link } from "react-router-dom";
import { Search, ArrowRight, ShieldAlert, FileSearch } from "lucide-react";

export default function SectionConsultaMultas() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-800  to-blue-950 rounded-3xl overflow-hidden relative">

          {/* Imagen del conductor — reemplaza el src con tu imagen real con fondo transparente */}
          <div className="absolute bottom-0 right-0 h-full hidden lg:flex items-end">
            <img
              src="/images/conductor_banner.webp"
              alt="Conductor"
              className="h-[95%] w-auto object-contain object-bottom select-none"
            />
          </div>

          {/* Contenido centrado */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-14 md:py-16 lg:pr-72 xl:pr-80">

            <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Search size={13} /> Consulta gratuita
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4 max-w-2xl">
              ¿Sabes cuánto debes en multas de tránsito?
            </h2>

            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-xl">
              Consulta tus comparendos y fotomultas gratis en menos de 2 minutos.
              Conoce el valor exacto de tus multas y descubre si aún tienes descuento disponible.
            </p>

            <Link
              to="/consulta-multas"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-extrabold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl text-base"
            >
              <FileSearch size={20} />
              Conoce tu comparendo
              <ArrowRight size={18} />
            </Link>

            <p className="text-blue-300 text-xs mt-5 flex items-center gap-1.5">
              <ShieldAlert size={12} className="text-yellow-400 shrink-0" />
              La consulta es completamente gratuita. Desconfíe de sitios que cobren por este servicio.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}