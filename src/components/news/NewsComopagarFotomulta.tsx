import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CalendarDays, AlertTriangle, CheckCircle,
  Clock, Search, CreditCard, BookOpen,
  Camera, ChevronDown, ShieldAlert,
  ArrowLeft
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
    icon: <Search className="w-5 h-5" />,
    num: "01",
    titulo: "Consulte la fotomulta",
    desc: "Ingrese al SIMIT en fcm.org.co/simit con su cédula o placa del vehículo. También puede consultar en el portal del organismo de tránsito de su ciudad o en el sistema Fénix si aplica.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    num: "02",
    titulo: "Revise la evidencia",
    desc: "Verifique la fecha, lugar, evidencia fotográfica, organismo que impuso la sanción y estado del proceso. Confirme que los datos del vehículo y conductor sean correctos antes de cualquier pago.",
  },
  {
    icon: <ShieldAlert className="w-5 h-5" />,
    num: "03",
    titulo: "Determine quién conducía",
    desc: "Si usted era el propietario pero no el conductor al momento de la infracción, la Sentencia C-038 de 2020 le permite alegar que no era el infractor en la audiencia. La carga de identificarle recae en el Estado.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    num: "04",
    titulo: "Verifique los plazos de descuento",
    desc: "Revise la fecha de notificación. Tiene 11 días hábiles para acceder al 50% de descuento y del día 12 al 27 hábil para el 25%. Actúe rápido: cada día que pasa puede costarle dinero.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    num: "05",
    titulo: "Realice el curso pedagógico",
    desc: "Complete el curso en un CIA autorizado (aproximadamente 2 horas). Es requisito obligatorio — sin el curso no hay descuento, aunque pague dentro del plazo.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    num: "06",
    titulo: "Realice el pago",
    desc: "Cancele el valor con el descuento aplicado a través del SIMIT en línea (PSE o tarjeta), presencialmente en bancos o en el organismo de tránsito correspondiente.",
  },
];

const faqs = [
  {
    pregunta: "¿Las fotomultas aparecen en SIMIT?",
    respuesta: "Sí, una vez reportadas por el organismo de tránsito. Sin embargo, puede haber un tiempo de 24 a 72 horas entre la infracción y su aparición en el sistema. Si acaba de recibir la notificación y no aparece aún, espere unas horas y vuelva a consultar.",
  },
  {
    pregunta: "¿Cuáles son los plazos exactos para obtener descuento en fotomultas?",
    respuesta: "Para fotomultas: 50% de descuento pagando entre los días 1 y 11 hábiles desde la notificación. 25% de descuento entre los días 12 y 27 hábiles. A partir del día 28 hábil pierde el beneficio y debe pagar el 100% más intereses de mora.",
  },
  {
    pregunta: "¿El vehículo era mío pero yo no manejaba. ¿Qué hago?",
    respuesta: "Puede alegar en la audiencia que no era el conductor al momento de la infracción, amparado en la Sentencia C-038 de 2020. Deberá presentar argumentos y pruebas que lo sustenten. La carga de identificarle como infractor recae en el Estado, no en usted.",
  },
  {
    pregunta: "¿Puedo impugnar una fotomulta?",
    respuesta: "Sí. Tiene 11 días hábiles para solicitar la evidencia e interponer el recurso de impugnación ante el organismo de tránsito. Puede comparecer directamente sin necesidad de abogado, aunque para causales técnicas como calibración de equipos puede ser útil asesoría legal.",
  },
  {
    pregunta: "¿Es cierto que muchas fotomultas podrían ser anuladas?",
    respuesta: "El Ministerio de Transporte detectó irregularidades en más de 5,8 millones de fotomultas impuestas entre 2018 y 2024 por 37 organismos de tránsito que operaron sin los conceptos técnicos del Instituto Nacional de Metrología. Si cree que su fotomulta podría estar afectada, consulte con el organismo de tránsito correspondiente.",
  },
  {
    pregunta: "¿Qué pasa si no pago la fotomulta?",
    respuesta: "Después de vencer los plazos, la fotomulta pasa a cobro coactivo con posibilidad de embargo de cuentas o retención de salario. Además, las aseguradoras consultan el historial de comparendos al renovar pólizas, lo que puede aumentar su prima o afectar su cobertura.",
  },
  {
    pregunta: "¿La fotomulta por alcohol tiene descuento?",
    respuesta: "No. Las infracciones por conducir bajo efectos del alcohol o sustancias psicoactivas (código D02) no admiten descuento por pronto pago y suelen ir acompañadas de suspensión de licencia.",
  },
  {
    pregunta: "¿Fénix reemplaza al SIMIT?",
    respuesta: "No. Fénix es un sistema administrativo usado por algunos organismos de tránsito locales. El SIMIT consolida la información de comparendos y fotomultas a nivel nacional y es la plataforma principal para consultas y pagos.",
  },
];

export default function NewsComopagarFotomulta() {
  return (
    <>
      <Helmet>
        <title>Cómo pagar una fotomulta en Colombia — Guía completa 2026</title>
        <meta
          name="description"
          content="Aprenda cómo consultar y pagar una fotomulta en Colombia paso a paso. Plazos exactos, descuentos del 50%, cambio de infractor y cómo impugnar. Guía actualizada 2026."
        />
        <meta
          name="keywords"
          content="cómo pagar fotomulta colombia, fotomulta SIMIT 2026, descuento fotomulta, impugnar fotomulta colombia, cambio infractor fotomulta, consultar fotomulta cédula placa"
        />
        <meta property="og:title" content="Cómo pagar una fotomulta en Colombia — Guía completa 2026" />
        <meta property="og:description" content="Plazos exactos, descuentos del 50%, cambio de infractor y cómo impugnar una fotomulta en Colombia. Todo actualizado para 2026." />
        <meta property="og:image" content="https://https://www.pagocursoscomparendos.com/images/news/noticia8.webp" />
        <meta property="og:url" content="https://https://www.pagocursoscomparendos.com/noticias/como-pagar-una-fotomulta" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://https://www.pagocursoscomparendos.com/noticias/como-pagar-una-fotomulta" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cómo pagar una fotomulta en Colombia — Guía completa 2026",
            datePublished: "2026-06-01",
            dateModified: "2026-06-25",
            author: { "@type": "Organization", name: "Cursos Comparendos" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "Guía completa para consultar y pagar fotomultas en Colombia con descuento, incluyendo plazos exactos, cambio de infractor e impugnación.",
          })}
        </script>
      </Helmet>

      <div className="pt-10 min-h-screen bg-white">
        {/* HERO */}
         <section className="relative h-[440px] overflow-hidden">
          <img
            src="/images/news/noticia8.webp"
            alt="Nueva sede de Cursos Comparendos en Suba, Bogotá"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-12 text-white">
            <Link to="/#news" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 w-fit">
              <ArrowLeft size={16} />
              Volver a noticias
            </Link>

            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              Guía actualizada
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 21 Agosto 2026</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 3 min de lectura</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
               ¿Cómo pagar una fotomulta en Colombia?
            </h1>
             <p className="text-slate-300 text-lg leading-relaxed">
                Todo lo que necesita saber: consulta, plazos exactos, descuentos, cambio de infractor e impugnación.            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="space-y-12">

              {/* Introducción */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Las fotomultas son infracciones detectadas por sistemas automáticos de fotodetección autorizados por el Ministerio de Transporte. A diferencia de un comparendo presencial, el conductor no es notificado en el momento — la infracción llega posteriormente. Conocer el proceso, los plazos y sus derechos puede representar un ahorro significativo o incluso la anulación de la multa.
              </p>

              {/* Alerta irregularidades */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">Novedades 2026: posible anulación de millones de fotomultas</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    El Ministerio de Transporte detectó irregularidades en más de <strong>5,8 millones de fotomultas</strong> impuestas entre 2018 y 2024 por 37 organismos de tránsito que operaron sin los conceptos técnicos del Instituto Nacional de Metrología. Si cree que su fotomulta podría estar afectada, consulte con el organismo de tránsito correspondiente antes de pagar.
                  </p>
                </div>
              </div>

              {/* Diferencias comparendo vs fotomulta */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Fotomulta vs comparendo presencial
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-5 py-3 text-left font-semibold">Aspecto</th>
                        <th className="px-5 py-3 text-left font-semibold">Comparendo presencial</th>
                        <th className="px-5 py-3 text-left font-semibold">Fotomulta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["¿Quién lo impone?", "Agente de tránsito en vía", "Cámara de fotodetección autorizada"],
                        ["¿Cuándo se notifica?", "En el momento de la infracción", "Posteriormente por correo o SIMIT"],
                        ["Identificación del conductor", "Directa por el agente", "Se infiere del propietario del vehículo"],
                        ["Plazo para 50% descuento", "5 días hábiles", "11 días hábiles"],
                        ["Plazo para 25% descuento", "Días 6 a 20 hábiles", "Días 12 a 27 hábiles"],
                        ["¿Se puede impugnar?", "Sí", "Sí, dentro de los 11 días hábiles"],
                      ].map(([a, b, c], i) => (
                        <tr key={i} className={`border-t border-gray-100 ${i % 2 !== 0 ? "bg-slate-50" : ""}`}>
                          <td className="px-5 py-3 font-medium text-gray-700">{a}</td>
                          <td className="px-5 py-3 text-gray-600">{b}</td>
                          <td className="px-5 py-3 text-gray-600">{c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plazos descuento */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Plazos de descuento para fotomultas 2026
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-green-700">50%</p>
                    <p className="font-semibold text-green-900 mt-1">Días 1 – 11 hábiles</p>
                    <p className="text-xs text-green-700 mt-2">Desde la fecha de notificación</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-amber-700">25%</p>
                    <p className="font-semibold text-amber-900 mt-1">Días 12 – 27 hábiles</p>
                    <p className="text-xs text-amber-700 mt-2">Segundo plazo disponible</p>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-red-700">0%</p>
                    <p className="font-semibold text-red-900 mt-1">Día 28 en adelante</p>
                    <p className="text-xs text-red-700 mt-2">Paga el 100% + intereses de mora</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                  <Clock size={12} /> El curso pedagógico es obligatorio para acceder al descuento. Sin él no hay reducción aunque pague a tiempo.
                </p>
              </div>

              {/* Alerta cobro coactivo */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle size={22} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900 mb-1">¿Qué pasa si no paga?</p>
                  <p className="text-red-800 text-sm leading-relaxed">
                    Si no cancela dentro de los plazos, la fotomulta pasa a <strong>cobro coactivo</strong> con posibilidad de embargo de cuentas o retención de salario. Adicionalmente, las aseguradoras consultan el historial de comparendos al renovar pólizas, lo que puede aumentar su prima o afectar su cobertura.
                  </p>
                </div>
              </div>

              {/* Pasos */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Paso a paso
                </p>
                <div className="space-y-5">
                  {pasos.map((p) => (
                    <div key={p.num} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#253688] text-amber-400 flex items-center justify-center shrink-0">
                        {p.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 mb-0.5">{p.num}</p>
                        <p className="font-bold text-gray-800 mb-1">{p.titulo}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sentencia C-038 */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <h2 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <ShieldAlert size={20} className="text-[#253688]" />
                  ¿El vehículo era suyo pero usted no conducía?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  La <strong>Sentencia C-038 de 2020</strong> establece que la carga de identificar al conductor infractor recae en el Estado, no en el propietario del vehículo. Si puede demostrar que no era usted quien conducía, puede presentar sus argumentos y pruebas en la audiencia de juzgamiento.
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">¿Qué puede presentar como prueba?</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {[
                      "Declaración del conductor real (con sus datos)",
                      "Contratos de arrendamiento o préstamo del vehículo",
                      "Registros de peajes o GPS que ubiquen el vehículo con otro conductor",
                      "Testimonio de testigos presentes en el momento",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} className="text-green-600 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Canales de pago */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Canales de pago disponibles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { t: "En línea — SIMIT", d: "En fcm.org.co/simit con PSE o tarjeta débito/crédito. Solo necesita su cédula o placa y un correo para el comprobante." },
                    { t: "Presencial", d: "En bancos, corresponsales bancarios o directamente en el organismo de tránsito que impuso la infracción." },
                    { t: "Portal local", d: "Algunas ciudades como Bogotá y Medellín tienen portales propios de movilidad con procesos virtuales más desarrollados." },
                  ].map(({ t, d }) => (
                    <div key={t} className="bg-slate-50 rounded-2xl p-5 border border-gray-100">
                      <p className="font-bold text-gray-800 mb-2">{t}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                    </div>
                  ))}
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

              {/* CTA */}
              <div className="bg-blue-900 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">¿Recibió una fotomulta?</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Agende su curso en cualquiera de nuestras 25 sedes autorizadas y reciba asesoría para completar el proceso correctamente y aprovechar los descuentos disponibles.
                </p>
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
                >
                  <CalendarDays size={18} />
                  Agendar mi curso
                </Link>
              </div>

            </article>
          </div>
        </section>
      </div>
    </>
  );
}