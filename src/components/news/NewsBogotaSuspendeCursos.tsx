import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CalendarDays, AlertTriangle, CheckCircle,
  ChevronDown, ExternalLink, MapPin, Clock, ArrowLeft 
} from "lucide-react";
import { useState } from "react";

function FAQItem({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-200 rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <button className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-800 text-sm sm:text-base">{pregunta}</span>
        <ChevronDown className={`w-5 h-5 text-[#253688] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{respuesta}</p>
        </div>
      )}
    </div>
  );
}

const pasos = [
  {
    n: "01",
    t: "Consulte su comparendo",
    d: "Verifique el estado de la infracción y la fecha correspondiente en el SIMIT (fcm.org.co/simit) o en el portal de la Secretaría de Movilidad.",
  },
  {
    n: "02",
    t: "Revise el plazo",
    d: "Determine si todavía está dentro del período establecido para acceder al descuento del 50% o 25% según el tipo de comparendo.",
  },
  {
    n: "03",
    t: "Busque un CIA autorizado",
    d: "Consulte el listado de Centros Integrales de Atención habilitados a través del RUNT o directamente en nuestras sedes.",
  },
  {
    n: "04",
    t: "Realice el curso pedagógico",
    d: "Complete el curso de aproximadamente 2 horas en el centro autorizado. El CIA reporta su asistencia directamente al RUNT.",
  },
  {
    n: "05",
    t: "Verifique el registro",
    d: "El CIA reportará la realización del curso para que la información sea procesada en los sistemas correspondientes.",
  },
  {
    n: "06",
    t: "Realice el pago",
    d: "Una vez cumplidos los requisitos, cancele el valor con el descuento aplicable a través del SIMIT u otros canales habilitados.",
  },
];

const faqs = [
  {
    pregunta: "¿Se eliminaron los descuentos de los comparendos en Bogotá?",
    respuesta: "No. La suspensión solo afecta los cursos que prestaba directamente la Secretaría de Movilidad. Los descuentos establecidos por la ley continúan vigentes y pueden obtenerse realizando el curso en un CIA autorizado.",
  },
  {
    pregunta: "¿Por qué suspendió los cursos la Secretaría de Movilidad?",
    respuesta: "La medida responde a las Resoluciones 2877 del 1 de abril de 2026 y 8863 del 16 de julio de 2026 de la Superintendencia de Transporte, que exigen implementar el Sistema de Control y Vigilancia (SICOV) con validaciones biométricas y reconocimiento facial para los cursos pedagógicos.",
  },
  {
    pregunta: "¿Los cursos realizados en un CIA son válidos?",
    respuesta: "Sí, siempre que el Centro Integral de Atención esté debidamente autorizado y habilitado. Una vez terminado el curso, el CIA reporta la asistencia al RUNT y la certificación tiene validez en todo el territorio nacional.",
  },
  {
    pregunta: "¿Cuándo volverá a prestar cursos la Secretaría de Movilidad?",
    respuesta: "Por el momento no hay una fecha anunciada de reanudación. La Secretaría informará oportunamente una vez se cumplan las condiciones técnicas y contractuales necesarias para implementar el SICOV.",
  },
  {
    pregunta: "¿Puedo hacer el curso fuera de Bogotá si mi comparendo es bogotano?",
    respuesta: "La certificación de un CIA tiene validez en todo el territorio nacional. Lo importante es que el centro esté debidamente autorizado y habilitado ante el Ministerio de Transporte.",
  },
];

export default function NewsBogotaSuspendeCursos() {
  return (
    <>
      <Helmet>
        <title>Bogotá suspende cursos pedagógicos: dónde hacer el curso para el descuento | 2026</title>
        <meta
          name="description"
          content="La Secretaría de Movilidad de Bogotá suspendió temporalmente los cursos pedagógicos desde el 16 de septiembre de 2026. Los descuentos siguen vigentes en CIA autorizados. Conozca cómo proceder."
        />
        <meta
          name="keywords"
          content="bogotá suspende cursos pedagógicos, cursos comparendos bogotá 2026, CIA autorizado bogotá, descuento comparendo bogotá, secretaría movilidad bogotá cursos"
        />
        <meta property="og:title" content="Bogotá suspende cursos pedagógicos: dónde hacer el curso para el descuento" />
        <meta property="og:description" content="La Secretaría de Movilidad suspendió temporalmente sus cursos desde el 16 de septiembre. Los descuentos siguen disponibles en CIA autorizados." />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/noticias/bogota-suspende-cursos-pedagogicos-2026" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/noticias/bogota-suspende-cursos-pedagogicos-2026" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Bogotá suspende temporalmente los cursos pedagógicos: dónde puede hacer ahora el curso para obtener el descuento",
            datePublished: "2026-09-17",
            dateModified: "2026-09-17",
            author: { "@type": "Organization", name: "Equipo Editorial VialSeg" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "La Secretaría Distrital de Movilidad suspendió temporalmente los cursos pedagógicos desde el 16 de septiembre de 2026. Los descuentos siguen vigentes en CIA autorizados.",
          })}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-white">

        {/* HERO */}
      
        <section className="relative h-[440px] overflow-hidden">
            <img
            src="/images/news/noticia12.webp"
            alt="Nueva sede de Cursos Comparendos en Suba, Bogotá"
            className="absolute inset-0 w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-[#253688]/90 to-slate-900/60" />
          {/* <img src="/images/news/bogota-cursos.jpg" alt="Bogotá suspende cursos pedagógicos" className="absolute inset-0 w-full h-full object-cover" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" /> */}

          <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-end pb-12 text-white">
            <Link to="/noticias" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 w-fit">
              ← Volver a noticias
            </Link>

            <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              🚨 Alerta para conductores en Bogotá
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 17 septiembre 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Bogotá D.C.</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 4 min de lectura</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
              Bogotá suspende temporalmente los cursos pedagógicos: ¿dónde puede hacer ahora el curso para obtener el descuento?
            </h1>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-10">

              {/* Byline */}
              <p className="text-sm text-gray-400">
                Por: <span className="font-semibold text-gray-600">Equipo Editorial VialSeg</span> · Actualizado 17 de septiembre de 2026
              </p>

              {/* Lead */}
              <p className="text-lg text-gray-700 leading-relaxed">
                La Secretaría Distrital de Movilidad de Bogotá anunció que, desde el miércoles 16 de septiembre de 2026, suspendió temporalmente la realización directa de los cursos pedagógicos para infractores de tránsito en sus puntos de atención. Sin embargo, <strong>los descuentos no desaparecen</strong>: el trámite sigue disponible a través de los Centros Integrales de Atención (CIA) autorizados.
              </p>

              {/* Alerta principal */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">Lo más importante</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    La suspensión <strong>no elimina los descuentos</strong> establecidos por la ley. Los plazos para acceder al 50% o 25% de descuento siguen corriendo. Si tiene un comparendo activo en Bogotá, <strong>no espere a que la Secretaría reanude el servicio</strong> — puede hacer el curso hoy en un CIA autorizado.
                  </p>
                </div>
              </div>

              {/* Por qué se suspendió */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Por qué suspendió los cursos la Secretaría de Movilidad?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La medida responde a nuevos requisitos establecidos mediante las <strong>Resoluciones 2877 del 1 de abril de 2026</strong> y <strong>8863 del 16 de julio de 2026</strong> de la Superintendencia de Transporte. Entre las nuevas exigencias se encuentra la implementación del <strong>Sistema de Control y Vigilancia (SICOV)</strong>, que busca fortalecer la seguridad y trazabilidad de los cursos pedagógicos.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  El sistema contempla mecanismos para verificar la identidad de las personas que realizan el curso, incluyendo <strong>validaciones biométricas y reconocimiento facial</strong>. La Secretaría informó que adelanta un proceso de contratación para seleccionar al operador autorizado que permitirá implementar el sistema requerido.
                </p>
              </div>

              {/* Descuentos vigentes */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Descuentos vigentes — plazos 2026
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Comparendo en vía */}
                  <div className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-slate-900 px-5 py-3">
                      <p className="text-white font-semibold text-sm">Comparendo impuesto en vía</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      <div className="flex items-center justify-between px-5 py-3">
                        <p className="text-sm text-gray-600">Días 1 – 5 hábiles</p>
                        <span className="text-green-700 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">50%</span>
                      </div>
                      <div className="flex items-center justify-between px-5 py-3">
                        <p className="text-sm text-gray-600">Días 6 – 20 hábiles</p>
                        <span className="text-amber-700 font-bold text-sm bg-amber-50 px-3 py-1 rounded-full">25%</span>
                      </div>
                    </div>
                  </div>

                  {/* Fotomulta */}
                  <div className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-slate-900 px-5 py-3">
                      <p className="text-white font-semibold text-sm">Comparendo electrónico (fotomulta)</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      <div className="flex items-center justify-between px-5 py-3">
                        <p className="text-sm text-gray-600">Días 1 – 11 hábiles</p>
                        <span className="text-green-700 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">50%</span>
                      </div>
                      <div className="flex items-center justify-between px-5 py-3">
                        <p className="text-sm text-gray-600">Días 12 – 26 hábiles</p>
                        <span className="text-amber-700 font-bold text-sm bg-amber-50 px-3 py-1 rounded-full">25%</span>
                      </div>
                    </div>
                  </div>

                </div>
                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                  <Clock size={12} /> Los plazos deben verificarse según la fecha de notificación de cada comparendo.
                </p>
              </div>

              {/* CIA válido */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h2 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle size={18} className="text-blue-700" />
                  ¿Los cursos en un CIA son válidos?
                </h2>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Sí, siempre que el Centro Integral de Atención esté debidamente autorizado y habilitado. Una vez terminado el curso, el CIA reporta la asistencia directamente al RUNT para que el beneficio pueda aplicarse al momento del pago. La certificación de un CIA tiene <strong>validez en todo el territorio nacional</strong>, según la normativa vigente.
                </p>
              </div>

              {/* Pasos */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  ¿Qué debe hacer si tiene un comparendo en Bogotá?
                </p>
                <div className="space-y-5">
                  {pasos.map((p) => (
                    <div key={p.n} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#253688] text-amber-400 font-bold text-sm flex items-center justify-center shrink-0">
                        {p.n}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 mb-0.5">{p.t}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cuándo vuelve */}
              <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
                <Clock size={22} className="text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-800 mb-1">¿Cuándo volverá a prestar cursos la Secretaría?</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Por el momento <strong>no hay fecha anunciada</strong> de reanudación. La Secretaría informará oportunamente cuándo volverá a prestar directamente los cursos, una vez se cumplan las condiciones técnicas y contractuales necesarias para implementar el SICOV.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                  Preguntas frecuentes
                </p>
                <div className="space-y-3">
                  {faqs.map((f) => (
                    <FAQItem key={f.pregunta} pregunta={f.pregunta} respuesta={f.respuesta} />
                  ))}
                </div>
              </div>

              {/* Fuentes oficiales */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Fuentes oficiales
                </p>
                <div className="space-y-3">
                  {[
                    {
                      label: "Comunicado oficial de la Secretaría de Movilidad",
                      href: "https://www.movilidadbogota.gov.co",
                    },
                    {
                      label: "Información oficial sobre dónde realizar el curso",
                      href: "https://www.runt.com.co",
                    },
                  ].map(({ label, href }) => (
                    <a 
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#253688] hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={14} className="shrink-0" />
                      {label}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                  La información de esta publicación fue contrastada con la Secretaría Distrital de Movilidad de Bogotá, que publicó el anuncio el 15 de septiembre de 2026 y actualizó sus preguntas frecuentes el 16 de septiembre.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-[#253688] rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">¿Necesita realizar el curso en Bogotá?</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  En Cursos Comparendos contamos con sedes autorizadas. No espere a que la Secretaría reanude el servicio — los plazos de descuento siguen corriendo.
                </p>
                <Link
                  to="/curso-comparendo-bogota"
                  className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
                >
                  <CalendarDays size={18} />
                  Agendar mi curso
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}