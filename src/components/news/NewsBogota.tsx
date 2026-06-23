import { Helmet } from "react-helmet-async";
import { CalendarDays, MapPin, ArrowLeft, Clock, Building2, Award, Headphones, FileText, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsBogotaSuba() {
  return (
    <>
      <Helmet>
        <title>Nueva sede en Bogotá Suba | Cursos Comparendos</title>
        <meta name="description" content="Cursos Comparendos abre su primera sede en Bogotá, localidad de Suba. Cursos de comparendos, asesoría personalizada y gestión de trámites cerca de ti." />
        <meta name="keywords" content="cursos de comparendos en bogotá, cursos comparendos suba, sede cursos comparendos bogotá, descuento comparendos bogotá, cia suba, cursos tránsito bogotá" />
        <meta property="og:title" content="Nueva sede en Bogotá - Suba | Cursos Comparendos" />
        <meta property="og:description" content="Abrimos nuestra primera sede en Bogotá. Conócela en Suba e inicia tu proceso de comparendo con nosotros." />
        <meta property="og:image" content="https://www.pagocursoscomparendos.com/images/sedes/bogota.webp" />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/noticias/nueva-sede-bogota-suba" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/noticias/nueva-sede-bogota-suba" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Cursos Comparendos abre su primera sede en Bogotá, localidad de Suba",
            image: ["https://www.pagocursoscomparendos.com/images/sedes/bogota.webp"],
            datePublished: "2026-05-25",
            author: { "@type": "Organization", name: "Cursos Comparendos" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "Cursos Comparendos inicia su expansión en Bogotá con una nueva sede en la localidad de Suba, ofreciendo cursos de comparendos, asesoría y gestión de trámites.",
          })}
        </script>
      </Helmet>

      <div className="pt-10 min-h-screen bg-slate-50">

        {/* HERO */}
        <section className="relative h-[440px] overflow-hidden">
          <img
            src="/images/sedes/bogota.png"
            alt="Nueva sede de Cursos Comparendos en Suba, Bogotá"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12 text-white">
            <Link to="/#news" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 w-fit">
              <ArrowLeft size={16} />
              Volver a noticias
            </Link>

            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              Nueva sede
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 25 mayo 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Suba, Bogotá</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 3 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              Iniciamos nuestra expansión en Bogotá: nueva sede en Suba
            </h1>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-8">

              {/* Lead */}
              <p className="text-lg text-gray-700 leading-relaxed">
                En <strong>Cursos Comparendos</strong> estamos marcando un hito en nuestra historia: abrimos nuestra primera sede en Bogotá, ubicada en la localidad de <strong>Suba</strong>. Este paso representa el inicio de una expansión que nos acercará a miles de conductores en la capital del país.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Durante años hemos acompañado a conductores en todo el proceso de comparendos de tránsito. Hoy, con la apertura de esta sede, damos respuesta a una demanda creciente de usuarios bogotanos que necesitaban un punto de atención cercano, ágil y de confianza.
              </p>

              {/* ¿Por qué Suba? */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h2 className="flex items-center gap-2 font-bold text-xl text-[#253688] mb-3">
                  <Building2 size={20} /> ¿Por qué Suba?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Suba es una de las localidades con mayor densidad poblacional de Bogotá y con alta actividad vehicular. Elegimos este sector como punto de partida estratégico para llegar a una gran cantidad de conductores desde el primer día, con proyección de expandirnos a otras zonas de la ciudad.
                </p>
              </div>

              {/* Servicios */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Servicios disponibles</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Award size={22} className="text-[#253688]" />, title: "Cursos de comparendos", desc: "Reducción de sanciones mediante formación certificada ante las autoridades de tránsito." },
                    { icon: <Headphones size={22} className="text-[#253688]" />, title: "Asesoría personalizada", desc: "Orientación experta sobre tu proceso, tiempos y documentación requerida." },
                    { icon: <FileText size={22} className="text-[#253688]" />, title: "Gestión de trámites", desc: "Acompañamiento completo en la documentación y procedimientos ante las entidades." },
                    { icon: <Clock size={22} className="text-[#253688]" />, title: "Horarios flexibles", desc: "Agenda tu curso en los horarios que mejor se adapten a tu disponibilidad." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-4 bg-slate-50 rounded-2xl p-5">
                      <div className="mt-0.5 flex-shrink-0">{icon}</div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">{title}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cita destacada */}
              <blockquote className="border-l-4 border-[#253688] pl-5 py-1">
                <p className="text-gray-600 italic leading-relaxed">
                  "Bogotá ha sido un objetivo estratégico para nosotros desde hace tiempo. Suba es solo el comienzo: queremos estar presentes en cada rincón de la ciudad para facilitarle la vida a los conductores bogotanos."
                </p>
              </blockquote>

              <p className="text-gray-600 leading-relaxed">
                Con esta sede buscamos mejorar la experiencia de nuestros usuarios: menos desplazamientos, atención más rápida y la posibilidad de resolver sus procesos de movilidad en un solo lugar, con el respaldo de nuestro equipo especializado.
              </p>

              {/* Ubicación */}
              <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
                <MapPin size={24} className="text-[#253688] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Localidad de Suba, Bogotá D.C.</p>
                  <p className="text-sm text-gray-500">Calle 147 # 101-56 centro comercial fiesta suba local 1</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/zKGkYtjU69apN4y98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-semibold px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Ver mapa
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>

              {/* Hoja de ruta */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Hoja de ruta de expansión</p>
                <div className="space-y-4">
                  {[
                    { active: true, label: "Mayo 2026", desc: "Apertura sede Suba, Bogotá. Inicio de operaciones con equipo completo de atención y cursos." },
                    { active: false, label: "Próximamente", desc: "Nuevas sedes en otras localidades de Bogotá. Seguiremos anunciando aperturas en nuestras redes y web." },
                    { active: false, label: "Futuro", desc: "Expansión a más ciudades del país, llevando el servicio de Cursos Comparendos a nivel nacional." },
                  ].map(({ active, label, desc }) => (
                    <div key={label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${active ? "bg-[#253688]" : "bg-gray-300"}`} />
                        <div className="w-px flex-1 bg-gray-200 mt-1" />
                      </div>
                      <div className="pb-4">
                        <p className="font-semibold text-gray-800 mb-1">{label}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#253688] rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">¿Tienes un comparendo en Bogotá?</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Agenda tu curso en nuestra nueva sede de Suba y reduce tu sanción de forma rápida, segura y certificada.
                </p>
                <Link
                  to="/cities/bogota"
                  className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-7 py-3 rounded-xl hover:scale-105 transition"
                >
                  <CheckCircle size={18} />
                  Agendar curso
                </Link>
              </div>

            </article>
          </div>
        </section>
      </div>
    </>
  );
}