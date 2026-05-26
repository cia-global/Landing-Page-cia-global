import { Helmet } from "react-helmet-async";
import { CalendarDays, MapPin, ArrowLeft, Clock, ShieldCheck, Store,
         UserCheck, Layers, Stethoscope, Accessibility, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsSoatNacional() {
  return (
    <>
      <Helmet>
        <title>Compra tu SOAT en nuestras 25 sedes | Cursos Comparendos</title>
        <meta name="description" content="Ya puedes comprar o renovar tu SOAT en cualquiera de las 25 sedes de Cursos Comparendos a nivel nacional. Asesoría incluida, proceso rápido y sin filas." />
        <meta name="keywords" content="comprar soat colombia, renovar soat, soat barato, soat comparendos, sedes soat colombia, soat vehiculo, seguro obligatorio tránsito" />
        <meta property="og:title" content="Compra tu SOAT en nuestras 25 sedes | Cursos Comparendos" />
        <meta property="og:description" content="Nuevo servicio disponible en todas nuestras sedes: adquiere o renueva tu SOAT de forma rápida, segura y con asesoría personalizada." />
        <meta property="og:image" content="https://www.pagocursoscomparendos.com/images/sedes/soat2.png" />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/noticias/soat-nacional" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/noticias/soat-nacional" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Cursos Comparendos ofrece venta de SOAT en sus 25 sedes a nivel nacional",
            image: ["https://www.pagocursoscomparendos.com/images/sedes/soat2.png"],
            datePublished: "2026-05-25",
            author: { "@type": "Organization", name: "Cursos Comparendos" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "A partir de hoy los conductores colombianos pueden comprar o renovar su SOAT en cualquiera de las 25 sedes de Cursos Comparendos distribuidas en todo el país.",
          })}
        </script>
      </Helmet>

      <div className="pt-5 min-h-screen bg-slate-50">

        {/* HERO */}
        <section className="relative h-[440px] overflow-hidden">
          <img
            src="/images/sedes/soat2.png"
            alt="Venta de SOAT en las 25 sedes de Cursos Comparendos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12 text-white">
            <Link to="/noticias" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 w-fit">
              <ArrowLeft size={16} />
              Volver a noticias
            </Link>

            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              Nuevo servicio
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 25 mayo 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Nacional</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 4 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              Ahora puedes comprar tu SOAT en cualquiera de nuestras 25 sedes a nivel nacional
            </h1>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-8">

              {/* Lead */}
              <p className="text-lg text-gray-700 leading-relaxed">
                En <strong>Cursos Comparendos</strong> seguimos ampliando los servicios que ponemos a disposición de los conductores colombianos. A partir de hoy, puedes adquirir tu <strong>SOAT</strong> en cualquiera de nuestras <strong>25 sedes</strong> distribuidas a lo largo y ancho del país, de forma rápida, segura y sin complicaciones.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Esta decisión nace de escuchar a nuestros usuarios: muchos nos pedían poder resolver en un solo lugar tanto el curso de comparendo como la renovación de su seguro obligatorio. Hoy hacemos eso realidad.
              </p>

              {/* ¿Qué es el SOAT? */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <h2 className="flex items-center gap-2 font-bold text-xl text-gray-800 mb-3">
                  <ShieldCheck size={20} className="text-blue-900" /> ¿Qué es el SOAT?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  El Seguro Obligatorio de Accidentes de Tránsito (SOAT) es un seguro de carácter obligatorio en Colombia para todos los vehículos que circulen por vías públicas. Fue creado para garantizar la atención médica inmediata de las víctimas de accidentes de tránsito, independientemente de quién sea el responsable del siniestro. Sin SOAT vigente, tu vehículo no puede circular legalmente y estás expuesto a comparendos y sanciones.
                </p>
              </div>

              {/* Coberturas */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">¿Qué cubre el SOAT?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Stethoscope size={20} className="text-blue-900" />, title: "Gastos médicos", desc: "Cubre atención hospitalaria, cirugías, medicamentos y rehabilitación de las víctimas." },
                    { icon: <HeartPulse size={20} className="text-blue-900" />, title: "Muerte", desc: "Indemnización a los beneficiarios en caso de fallecimiento a causa del accidente." },
                    { icon: <Accessibility size={20} className="text-blue-900" />, title: "Incapacidad permanente", desc: "Ampara a la víctima si queda con una discapacidad permanente derivada del accidente." },
                    { icon: <Clock size={20} className="text-blue-900" />, title: "Incapacidad temporal", desc: "Cubre los días en que la víctima no puede trabajar durante su recuperación." },
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

              {/* Alerta importante */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h2 className="flex items-center gap-2 font-bold text-blue-900 mb-2">
                  <ShieldCheck size={18} /> Importante
                </h2>
                <p className="text-blue-800 leading-relaxed text-sm">
                  El SOAT protege a <strong>todas las víctimas</strong> de un accidente de tránsito: conductor, pasajeros y peatones. No importa quién tuvo la culpa — la cobertura aplica para todos los involucrados.
                </p>
              </div>

              {/* Beneficios */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Beneficios de comprarlo con nosotros</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Store size={20} className="text-blue-900" />, title: "25 sedes disponibles", desc: "Encuéntranos en 25 ciudades y municipios de Colombia." },
                    { icon: <Clock size={20} className="text-blue-900" />, title: "Proceso ágil", desc: "Tramita tu SOAT en minutos, sin filas ni papeleo innecesario." },
                    { icon: <UserCheck size={20} className="text-blue-900" />, title: "Asesoría incluida", desc: "Te orientamos sobre tarifa y cobertura según el tipo de tu vehículo." },
                    { icon: <Layers size={20} className="text-blue-900" />, title: "Todo en un lugar", desc: "Curso de comparendo y SOAT en una sola visita a nuestra sede." },
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "25", label: "Sedes en todo el país" },
                  { num: "15", label: "Departamentos cubiertos" },
                  { num: "10", label: "Años en el mercado" },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-slate-50 rounded-2xl py-5 px-3">
                    <p className="text-3xl font-extrabold text-blue-700">{num}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* Cita */}
              <blockquote className="border-l-4 border-blue-700 pl-5 py-1">
                <p className="text-gray-600 italic leading-relaxed">
                  "Queremos ser el aliado número uno del conductor colombiano. Que en un solo lugar puedan resolver su comparendo, renovar su SOAT y salir tranquilos a la vía. Eso es lo que construimos cada día."
                </p>
              </blockquote>

              {/* Pasos */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">¿Cómo adquirir tu SOAT con nosotros?</p>
                <div className="space-y-5">
                  {[
                    { n: "1", title: "Visita la sede más cercana", desc: "Encuéntranos en nuestro mapa de sedes y dirígete a la más cercana a tu ubicación." },
                    { n: "2", title: "Presenta los documentos de tu vehículo", desc: "Solo necesitas la cédula y los documentos básicos del vehículo para iniciar el trámite." },
                    { n: "3", title: "Recibe tu asesoría y confirma la cobertura", desc: "Uno de nuestros asesores te explicará la tarifa, vigencia y coberturas según el tipo de vehículo." },
                    { n: "4", title: "Paga y recibe tu SOAT al instante", desc: "Proceso rápido con múltiples métodos de pago disponibles. ¡Listo para circular!" },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">{title}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-900 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">¿Listo para renovar tu SOAT?</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Encuentra tu sede más cercana y realiza el trámite hoy mismo o contactanos por WhatsApp. Sin filas, sin demoras, con el respaldo de Cursos Comparendos.
                </p>
                <div className="inline-flex items-center justify-center gap-3">
                  <Link
                    to="/cities"
                    className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-7 py-3 rounded-xl hover:scale-105 transition"
                  >
                    <MapPin size={18} />
                    Ver sedes cercanas
                  </Link>
                  {/* WhatsApp contact button */}
                  <a
                    href="https://wa.me/573207713935?text= Hola%2C%20quiero%20adquirir%20mi%20SOAT%20¿Podrían%20darme%20más%20información%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition"
                    aria-label="Contactar por WhatsApp"
                  >
                    <img
                      src="/images/whatsapp.png"
                      alt="Banner decorativo"
                      className="centered-icon w-6 h-6"
                    />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>

            </article>
          </div>
        </section>
      </div>
    </>
  );
}