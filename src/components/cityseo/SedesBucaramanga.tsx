/**
 * SedesBucaramanga.tsx
 * Sección de sedes en Bucaramanga — consulta Supabase por slug
 * Pegar dentro de BucaramangaCity.tsx antes del bloque SEO
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ChevronRight, Building2, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

// ─── Tipo ─────────────────────────────────────────────────────────────────────
interface City {
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  page: number;
  is_active: boolean;
  created_at: string;
  nameSede: string;
  image: string;
  slug: string;
}

// ─── Componente ───────────────────────────────────────────────────────────────
export default function SedesBucaramanga() {
  const [sedes, setSedes] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<City | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("cities")
        .select("*")
        .ilike("slug", "%bucaramanga%")  // filtra todas las sedes de Bucaramanga
        .eq("is_active", true)
        .order("nameSede", { ascending: true });

      if (!error && data) setSedes(data as City[]);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="w-full max-w-xs h-48 bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (sedes.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#253688]/10 text-[#253688] text-xs font-bold px-4 py-1.5 rounded-full mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Presencia en Bucaramanga
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Nuestras sedes en Bucaramanga
          </h2>
          <p className="text-gray-500 text-sm">
            Selecciona la sede más cercana a ti para ver todos los detalles
          </p>
        </div>

        {/* Tarjetas de sedes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {sedes.map((sede) => (
            <button
              key={sede.id}
              onClick={() => setSelected(selected?.id === sede.id ? null : sede)}
              className={`group text-left rounded-2xl border-2 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                selected?.id === sede.id
                  ? "border-yellow-400 shadow-yellow-400/20 shadow-lg"
                  : "border-gray-200 hover:border-[#253688]/40"
              }`}
            >
              {/* Imagen de la sede */}
              {sede.image ? (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={sede.image}
                    alt={sede.nameSede}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  {/* Badge seleccionado */}
                  {selected?.id === sede.id && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full">
                      Seleccionada
                    </div>
                  )}
                </div>
              ) : (
                <div className={`h-40 flex items-center justify-center transition-colors ${
                  selected?.id === sede.id ? "bg-[#253688]" : "bg-gray-100 group-hover:bg-[#253688]/10"
                }`}>
                  <Building2 className={`w-12 h-12 ${selected?.id === sede.id ? "text-yellow-400" : "text-gray-300"}`} />
                </div>
              )}

              {/* Info */}
              <div className="p-5 bg-white">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="text-xs font-semibold text-[#253688] uppercase tracking-wider mb-0.5">
                      Sede
                    </p>
                    <h3 className="font-bold text-gray-800 text-base leading-tight">
                      {sede.nameSede || sede.name}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    selected?.id === sede.id
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-100 text-gray-400 group-hover:bg-[#253688] group-hover:text-white"
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-start gap-2 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{sede.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Phone className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                    <span>{sede.phone}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Panel de detalles — se expande al seleccionar */}
        {selected && (
          <div className="bg-white border-2 border-yellow-400 rounded-2xl p-6 shadow-lg animate-[fadeIn_0.3s_ease]">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs font-semibold text-[#253688] uppercase tracking-wider mb-0.5">
                  Detalles de la sede
                </p>
                <h3 className="text-xl font-extrabold text-gray-900">
                  {selected.nameSede || selected.name}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Dirección */}
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-9 h-9 bg-[#253688] text-yellow-400 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-0.5">Dirección</p>
                  <p className="text-sm font-medium text-gray-800">{selected.address}</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-9 h-9 bg-[#253688] text-yellow-400 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-0.5">Teléfono</p>
                  <a
                    href={`tel:${selected.phone}`}
                    className="text-sm font-medium text-[#253688] hover:text-yellow-600 transition-colors"
                  >
                    {selected.phone}
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-9 h-9 bg-[#253688] text-yellow-400 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-0.5">Horario</p>
                  <p className="text-sm font-medium text-gray-800">Lunes a Viernes</p>
                  <p className="text-xs text-gray-500">8:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Mapa */}
              {selected.coordinates?.lat && (
                <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-9 h-9 bg-[#253688] text-yellow-400 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 mb-0.5">Ubicación</p>
                    <a
                      href={`https://www.google.com/maps?q=${selected.coordinates.lat},${selected.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#253688] hover:text-yellow-600 transition-colors"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/appointment?city=${selected.id}`}
                className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-yellow-400/30 hover:scale-105 transition-all duration-300 text-sm"
              >
                <Clock className="w-4 h-4" />
                Agendar en esta sede
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={`/cities/${selected.slug}`}
                className="inline-flex items-center gap-2 bg-[#253688] hover:bg-[#1a2660] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
              >
                Ver página de la sede
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </div>

      {/* Keyframe para la animación del panel */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}