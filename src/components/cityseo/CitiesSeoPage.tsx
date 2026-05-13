/**
 * CityPage.tsx
 * Página dinámica SEO para cada ciudad.
 * Ruta: /cursos-comparendo-:slug
 *
 * Agrega en App.tsx:
 *   <Route path="/cursos-comparendo-:slug" element={<CityPage />} />
 *
 * Dependencias:
 *   npm install react-helmet-async @supabase/supabase-js
 */

import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { createClient } from "@supabase/supabase-js";
import {
  CheckCircle, Clock, MapPin, Award, Zap, Users,
  ChevronRight, ChevronDown, Calendar, Phone,
  Building2, X,
} from "lucide-react";

// ─── Supabase ─────────────────────────────────────────────────────────────────
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

// ─── Tipos ────────────────────────────────────────────────────────────────────
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

// ─── Helper: capitalizar nombre de ciudad ─────────────────────────────────────
function capitalizar(texto: string): string {
  return texto
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-200 rounded-2xl overflow-hidden"
      onClick={() => setOpen(!open)}
    >
      <button className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-800 text-sm sm:text-base">{pregunta}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#253688] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{respuesta}</p>
        </div>
      )}
    </div>
  );
}

// ─── Sección de Sedes ─────────────────────────────────────────────────────────
function SedesSection({ slug, ciudad }: { slug: string; ciudad: string }) {
  const [sedes, setSedes] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<City | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("cities")
        .select("*")
        .ilike("slug", `%${slug}%`)
        .eq("is_active", true)
        .order("nameSede", { ascending: true });

      if (!error && data) setSedes(data as City[]);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-2xl animate-pulse" />
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

        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#253688]/10 text-[#253688] text-xs font-bold px-4 py-1.5 rounded-full mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Presencia en {ciudad}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Nuestras sedes en {ciudad}
          </h2>
          <p className="text-gray-500 text-sm">
            Selecciona la sede más cercana a ti para ver todos los detalles
          </p>
        </div>

        {/* Tarjetas */}
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
              {sede.image ? (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={sede.image}
                    alt={sede.nameSede}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
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

              <div className="p-5 bg-white">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="text-xs font-semibold text-[#253688] uppercase tracking-wider mb-0.5">Sede</p>
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

        {/* Panel de detalles */}
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
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-9 h-9 bg-[#253688] text-yellow-400 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-0.5">Dirección</p>
                  <p className="text-sm font-medium text-gray-800">{selected.address}</p>
                </div>
              </div>

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

            <div className="flex flex-wrap gap-3">
              <Link
                to={`/appointment?city=${selected.id}`}
                className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-yellow-400/30 hover:scale-105 transition-all duration-300 text-sm"
              >
                <Clock className="w-4 h-4" />
                Agendar en esta sede
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PÁGINA PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════════
export default function CityPage() {
  const { slug } = useParams<{ slug: string }>();

  // Ciudad formateada para mostrar en textos
  const ciudad = capitalizar(slug ?? "");

  // Si no hay slug redirigir
  if (!slug) return <Navigate to="/404" replace />;

  const beneficios = [
    { icon: <Award className="w-6 h-6" />,        titulo: "50% de descuento",         desc: "En comparendos manuales y fotomultas" },
    { icon: <CheckCircle className="w-6 h-6" />,   titulo: "Curso certificado",         desc: "Avalado por el Ministerio de Transporte" },
    { icon: <Clock className="w-6 h-6" />,         titulo: "Solo 2 horas",              desc: "Proceso rápido en una sola sesión" },
    { icon: <Zap className="w-6 h-6" />,           titulo: "Proceso rápido",            desc: "Agenda, asiste y recibe tu certificado" },
    { icon: <MapPin className="w-6 h-6" />,        titulo: `Sede en ${ciudad}`,         desc: "Atención presencial en la ciudad" },
    { icon: <Users className="w-6 h-6" />,         titulo: "Instructores certificados", desc: "Personal capacitado y profesional" },
  ];

  const pasos = [
    { num: "01", titulo: "Agenda tu curso",       desc: "Selecciona la fecha y hora en nuestra plataforma en línea." },
    { num: "02", titulo: "Asiste a la sede",       desc: `Preséntate en nuestra sede en ${ciudad} con tu documento de identidad.` },
    { num: "03", titulo: "Realiza el curso",       desc: "Completa las 2 horas de educación vial con instructores certificados." },
    { num: "04", titulo: "Recibe tu certificado", desc: "Obtén el certificado oficial al finalizar el curso." },
    { num: "05", titulo: "Aplica el descuento",   desc: "Presenta el certificado y obtén el 50% de descuento en tu multa." },
  ];

  const faqs = [
    {
      pregunta: `¿Cuánto dura el curso de comparendos en ${ciudad}?`,
      respuesta: `El curso pedagógico para infractores de tránsito en ${ciudad} tiene una duración de 2 horas. Es un proceso rápido que puedes completar en una sola sesión presencial en nuestra sede.`,
    },
    {
      pregunta: "¿Cuánto descuento obtengo en mi comparendo?",
      respuesta: "Al completar el curso de educación vial obtienes hasta un 50% de descuento sobre el valor de tu comparendo, de acuerdo con la Ley 769 de 2002 del Código Nacional de Tránsito de Colombia.",
    },
    {
      pregunta: "¿Es obligatorio hacer el curso para obtener el descuento?",
      respuesta: "Sí. Para acceder al beneficio de reducción del 50% en el valor de tu multa, es obligatorio asistir y completar el curso pedagógico para infractores en una institución certificada como la nuestra.",
    },
    {
      pregunta: `¿Dónde se realiza el curso en ${ciudad}?`,
      respuesta: `Nuestra sede en ${ciudad} está ubicada en un punto de fácil acceso. Al agendar tu cita recibirás la dirección exacta y los horarios disponibles.`,
    },
    {
      pregunta: "¿Aplica para comparendos manuales y fotomultas?",
      respuesta: "Sí, el beneficio del 50% de descuento aplica tanto para comparendos manuales impuestos por agentes de tránsito como para fotomultas registradas en el SIMIT.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`Curso de comparendo en ${ciudad} con 50% de descuento | Agenda hoy`}</title>
        <meta
          name="description"
          content={`Realiza tu curso de comparendos en ${ciudad} y obtén hasta un 50% de descuento en tu multa. Curso certificado, duración 2 horas, atención presencial. ¡Agenda hoy!`}
        />
        <meta
          name="keywords"
          content={`curso comparendo ${slug}, descuento comparendo ${slug}, curso infractores ${slug}, reducir multa transito ${slug}, curso pedagogico ${slug}`}
        />
        <link rel="canonical" href={`https://www.pagocursoscomparendos.com/cursos-comparendo-${slug}`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`Curso de comparendo en ${ciudad} con 50% de descuento`} />
        <meta property="og:description" content={`Obtén hasta un 50% de descuento en tu comparendo en ${ciudad}. Curso certificado de 2 horas. ¡Agenda hoy!`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.pagocursoscomparendos.com/cursos-comparendo-${slug}`} />
      </Helmet>

      <div className="pt-16">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-gray-950 via-[#253688] to-gray-950 text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#253688]/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">

              <div className="flex-1 flex flex-col sm:items-center lg:items-start sm:text-center lg:text-left space-y-6">
                <span className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-1.5 rounded-full text-sm font-semibold">
                  <MapPin className="w-4 h-4" /> {ciudad}, Colombia
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Curso de comparendo en{" "}
                  <span className="text-yellow-400">{ciudad}</span>{" "}
                  con descuento
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  Si tienes un comparendo en {ciudad}, puedes obtener hasta un{" "}
                  <span className="text-yellow-400 font-bold">50% de descuento</span>{" "}
                  realizando el curso pedagógico para infractores de tránsito. Agenda tu
                  curso de forma rápida y cumple con el proceso legal para reducir el
                  valor de tu multa.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to={`/appointment?city=${slug}`}
                    className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-yellow-400/30 hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Agenda tu curso
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/573207713935"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300"
                  >
                    <img src="/images/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                    +57 3207713935
                  </a>
                </div>

                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <span className="text-green-400">✔</span> Proceso 100% legal · Ley 769 de 2002
                </p>
              </div>

              {/* Imagen promo */}
              <div className="shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
                <img
                  src="/images/promocion.webp"
                  alt={`50% descuento comparendo ${ciudad}`}
                  fetchPriority="high"
                  className="w-60 sm:w-72 md:w-80 object-contain drop-shadow-2xl"
                />
                <p className="text-xl font-bold text-white mt-2">EN COMPARENDOS Y</p>
                <p className="text-xl font-bold text-white">FOTOMULTAS</p>
                <div className="mt-3 w-12 h-1 bg-yellow-400 mx-auto rounded-full" />
              </div>

            </div>
          </div>
        </section>

        {/* ── BENEFICIOS ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                ¿Por qué hacer el curso con nosotros?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Somos una institución certificada con años de experiencia en {ciudad}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {beneficios.map((b, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-[#253688]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#253688] to-[#1a2660] text-yellow-400 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {b.icon}
                  </div>
                  <h3 className="relative z-10 font-bold text-gray-900 text-lg mb-2 group-hover:text-[#253688] transition-colors">
                    {b.titulo}
                  </h3>
                  <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                  <div className="relative z-10 mt-4 h-1 w-10 bg-yellow-400 rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESO ── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                ¿Cómo funciona el proceso?
              </h2>
              <p className="text-gray-500">5 pasos simples para obtener tu descuento en {ciudad}</p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-[#253688] to-yellow-400 z-0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {pasos.map((paso, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#253688] text-yellow-400 font-black text-xl flex items-center justify-center shadow-lg mb-4 border-4 border-white">
                      {paso.num}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">{paso.titulo}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{paso.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to={`/appointment?city=${slug}`}
                className="group inline-flex items-center gap-2 bg-[#253688] hover:bg-[#1a2660] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Comenzar ahora
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEDES ── */}
        <SedesSection slug={slug} ciudad={ciudad} />

        {/* ── FAQ ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Preguntas frecuentes</h2>
              <p className="text-gray-500">Todo lo que necesitas saber sobre el curso en {ciudad}</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} pregunta={faq.pregunta} respuesta={faq.respuesta} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE SEO ── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Curso de comparendos en {ciudad}: todo lo que debes saber
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Si recibiste un comparendo en {ciudad}, tienes la posibilidad de reducir
                hasta el 50% del valor de tu multa gracias al{" "}
                <strong>curso pedagógico para infractores de tránsito</strong>,
                reglamentado por la Ley 769 de 2002 del Código Nacional de Tránsito de Colombia.
              </p>
              <p>
                En <strong>Cursos Comparendos Colombia</strong> contamos con sedes en{" "}
                {ciudad} donde ofrecemos este curso de manera presencial, con instructores
                certificados y en un tiempo mínimo de 2 horas. Nuestro proceso está
                diseñado para que puedas cumplir con el requisito legal de forma rápida,
                cómoda y sin complicaciones.
              </p>
              <p>
                El <strong>descuento comparendo {ciudad.toLowerCase()}</strong> aplica
                tanto para comparendos manuales impuestos por agentes de la Policía de
                Tránsito como para fotomultas registradas en el sistema SIMIT. Una vez
                completes el curso y obtengas tu certificado, podrás presentarlo ante la
                autoridad de tránsito correspondiente para hacer efectivo el beneficio.
              </p>
              <p>
                Agendar tu <strong>curso infractores {ciudad.toLowerCase()}</strong> es
                muy sencillo. Solo debes ingresar a nuestra plataforma, seleccionar la
                ciudad de {ciudad}, elegir la fecha y hora disponible, y completar tus
                datos personales. Recibirás una confirmación inmediata y el día del curso
                solo debes presentarte en nuestra sede con tu documento de identidad y el
                número de comparendo.
              </p>
              <p>
                No esperes más para resolver tu situación de tránsito en {ciudad}. Cada
                día que pasa sin tramitar el descuento es dinero que puedes ahorrar. Con
                nuestro curso de educación vial no solo reduces tu multa sino que también
                contribuyes a mejorar tu comportamiento como conductor y a hacer de las
                vías de {ciudad} un lugar más seguro para todos.
              </p>
            </div>

            {/* CTA final */}
            <div className="mt-10 bg-gradient-to-br from-gray-950 via-[#253688] to-gray-950 rounded-3xl p-8 text-center text-white">
              <p className="text-2xl font-extrabold mb-2">¿Listo para ahorrar en tu comparendo?</p>
              <p className="text-gray-300 mb-6 text-sm">
                Agenda tu curso en {ciudad} en menos de 2 minutos
              </p>
              <Link
                to={`/appointment?city=${slug}`}
                className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-yellow-400/30 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Agenda tu curso ahora
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}