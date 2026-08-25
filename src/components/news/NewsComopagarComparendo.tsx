import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CalendarDays, AlertTriangle, CheckCircle,
  Clock, Search, CreditCard, BookOpen, ChevronDown,
  ArrowLeft,
  MapPin
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
    titulo: "Consulte su comparendo",
    desc: "Ingrese al portal oficial del SIMIT en fcm.org.co/simit con su número de cédula o placa del vehículo para verificar si tiene infracciones activas.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    num: "02",
    titulo: "Verifique los plazos",
    desc: "Compruebe la fecha de imposición del comparendo para saber si aún está dentro del plazo para acceder al descuento del 50% o 25%.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    num: "03",
    titulo: "Realice el curso pedagógico",
    desc: "Agende y complete el curso en un CIA autorizado. Es requisito obligatorio para que el sistema aplique el descuento. Sin curso, no hay descuento.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    num: "04",
    titulo: "Realice el pago",
    desc: "Cancele el valor con el descuento aplicado a través del SIMIT en línea (PSE o tarjeta), presencialmente o en el organismo de tránsito correspondiente.",
  },
];

const faqs = [
  {
    pregunta: "¿Debo consultar primero en SIMIT o en RUNT?",
    respuesta: "Para comparendos, consulte primero el SIMIT en fcm.org.co/simit. El RUNT es útil para verificar información del conductor o el vehículo, como licencia, restricciones e historial. Son plataformas complementarias.",
  },
  {
    pregunta: "¿El curso pedagógico es obligatorio para obtener el descuento?",
    respuesta: "Sí, es obligatorio. Sin el curso, el sistema del SIMIT no aplica ningún descuento aunque pague dentro del plazo. Ambas condiciones —curso completado y pago oportuno— deben cumplirse.",
  },
  {
    pregunta: "¿Puedo pagar directamente sin hacer el curso?",
    respuesta: "Sí puede pagar sin el curso, pero perderá el descuento del 50% o 25% y deberá cancelar el 100% del valor de la multa.",
  },
  {
    pregunta: "¿Qué pasa si supero los 20 días hábiles sin pagar?",
    respuesta: "Pierde el beneficio del descuento por pronto pago y deberá cancelar el valor total del comparendo más los intereses generados.",
  },
  {
    pregunta: "¿Todos los comparendos tienen descuento?",
    respuesta: "No. Las infracciones por conducir bajo efectos del alcohol o drogas deben pagarse al 100% sin descuento posible, independientemente de los plazos o el curso.",
  },
  {
    pregunta: "¿Puedo impugnar y pedir el descuento al mismo tiempo?",
    respuesta: "No. El descuento requiere aceptar la infracción. No es compatible con la interposición de recursos de impugnación al mismo tiempo.",
  },
  {
    pregunta: "¿Fénix reemplaza al SIMIT?",
    respuesta: "No. Fénix es un sistema utilizado por algunos organismos de tránsito para administrar sus procesos internos. El SIMIT consolida la información de comparendos a nivel nacional.",
  },
  {
    pregunta: "¿Puedo pagar en cuotas?",
    respuesta: "El SIMIT no ofrece pagos en cuotas directamente. Sin embargo, si el monto total es alto, puede solicitar un acuerdo de pago de 6 a 36 cuotas mensuales en la Secretaría de Movilidad del municipio donde se impuso la infracción.",
  },
];

export default function NewsComopagarComparendo() {
  return (
    <>
      <Helmet>
        <title>Cómo pagar un comparendo de tránsito en Colombia — Guía 2026</title>
        <meta
          name="description"
          content="Aprenda cómo consultar y pagar un comparendo paso a paso usando SIMIT, RUNT y Fénix. Conozca los plazos exactos para obtener hasta un 50% de descuento realizando el curso pedagógico."
        />
        <meta
          name="keywords"
          content="cómo pagar comparendo colombia, pagar comparendo simit, descuento comparendo 2026, consultar comparendo por cédula, curso pedagógico comparendo, fotomulta descuento"
        />
        <meta property="og:title" content="Cómo pagar un comparendo de tránsito en Colombia — Guía 2026" />
        <meta property="og:description" content="Guía completa para consultar y pagar su comparendo con hasta 50% de descuento usando SIMIT, RUNT y el curso pedagógico autorizado." />
        <meta property="og:image" content="https://pagocursoscomparendos.com/images/news/noticia7.webp" />
        <meta property="og:url" content="https://pagocursoscomparendos.com/noticias/como-pagar-un-comparendo" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://pagocursoscomparendos.com/noticias/como-pagar-un-comparendo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cómo pagar un comparendo de tránsito en Colombia (Guía 2026)",
            datePublished: "2026-06-01",
            dateModified: "2026-06-25",
            author: { "@type": "Organization", name: "Cursos Comparendos" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "Guía completa para consultar y pagar comparendos en Colombia con descuento del 50% usando SIMIT, RUNT y el curso pedagógico autorizado.",
          })}
        </script>
      </Helmet>

      <div className="pt-10 min-h-screen bg-white">

        {/* HERO */}
       
           <section className="relative h-[440px] overflow-hidden">
          <img
            src="/images/news/noticia7.webp"
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
               Cómo pagar un comparendo de tránsito en Colombia
            </h1>
             <p className="text-slate-300 text-lg leading-relaxed">
              Consulta, plazos, descuentos y el paso a paso para pagar menos usando el SIMIT y el curso pedagógico autorizado.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="space-y-12">

              {/* Introducción */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Recibir un comparendo genera muchas dudas: ¿dónde consultarlo?, ¿cómo pagarlo?, ¿existen descuentos? En Colombia existen herramientas oficiales como el <strong>SIMIT</strong>, el <strong>RUNT</strong> y el sistema <strong>Fénix</strong> que permiten gestionar todo el proceso. Esta guía explica paso a paso cómo hacerlo y cómo acceder a los descuentos que establece la ley.
              </p>

              {/* Plataformas */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                  Plataformas oficiales
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      nombre: "SIMIT",
                      url: "fcm.org.co/simit",
                      desc: "Sistema principal para consultar, liquidar y pagar comparendos a nivel nacional. Administrado por la Federación Colombiana de Municipios.",
                      items: ["Comparendos pendientes", "Valor de la multa", "Estado del proceso", "Opciones de pago"],
                    },
                    {
                      nombre: "RUNT",
                      url: "runt.com.co",
                      desc: "Registro Único Nacional de Tránsito. Útil para verificar información del conductor y el vehículo.",
                      items: ["Licencia de conducción", "Estado del vehículo", "Restricciones", "Historial del conductor"],
                    },
                    {
                      nombre: "Fénix",
                      url: "",
                      desc: "Sistema usado por algunos organismos de tránsito para administrar comparendos. Si su infracción pertenece a uno de ellos, será redirigido aquí.",
                      items: ["Estado de la infracción", "Proceso administrativo", "Pago en organismos locales"],
                    },
                  ].map((p) => (
                    <div key={p.nombre} className="bg-slate-50 rounded-2xl p-5 border border-gray-100">
                      <p className="font-bold text-[#253688] text-lg mb-1">{p.nombre}</p>
                      {p.url && <p className="text-xs text-gray-400 mb-3">{p.url}</p>}
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.desc}</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {p.items.map((i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle size={12} className="text-green-600 shrink-0" /> {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabla de descuentos */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                  Plazos y descuentos 2026
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-5 py-3 text-left font-semibold">Tipo</th>
                        <th className="px-5 py-3 text-left font-semibold">50% descuento</th>
                        <th className="px-5 py-3 text-left font-semibold">25% descuento</th>
                        <th className="px-5 py-3 text-left font-semibold">Sin descuento</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-5 py-4 font-medium text-gray-800">Comparendo presencial</td>
                        <td className="px-5 py-4 text-green-700 font-semibold">Días 1 – 5 hábiles</td>
                        <td className="px-5 py-4 text-amber-700 font-semibold">Días 6 – 20 hábiles</td>
                        <td className="px-5 py-4 text-red-600 font-semibold">Día 21 en adelante</td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-slate-50">
                        <td className="px-5 py-4 font-medium text-gray-800">Fotomulta</td>
                        <td className="px-5 py-4 text-green-700 font-semibold">Días 1 – 11 hábiles</td>
                        <td className="px-5 py-4 text-amber-700 font-semibold">Días 12 – 27 hábiles</td>
                        <td className="px-5 py-4 text-red-600 font-semibold">Día 28 en adelante</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                  <Clock size={12} /> Los plazos se cuentan desde la fecha de imposición o notificación del comparendo.
                </p>
              </div>

              {/* Alerta curso obligatorio */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">El curso pedagógico es obligatorio para el descuento</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Pagar dentro del plazo <strong>no es suficiente</strong>. Sin el curso, el SIMIT no aplica ningún descuento y debe pagar el 100% del valor. Ambas condiciones deben cumplirse: curso completado + pago dentro del plazo. Además, el curso da un <strong>5% adicional</strong> sobre el descuento correspondiente.
                  </p>
                </div>
              </div>

              {/* Alerta alcohol */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle size={22} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900 mb-1">Infracciones sin descuento</p>
                  <p className="text-red-800 text-sm leading-relaxed">
                    Las infracciones por conducir bajo efectos del alcohol o drogas <strong>no tienen descuento posible</strong> y deben pagarse al 100%, independientemente de los plazos o si se realiza el curso.
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

              {/* Canales de pago */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Canales de pago disponibles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { t: "En línea", d: "Desde el portal del SIMIT con PSE o tarjeta débito/crédito. Solo necesita su cédula o placa y un correo para el comprobante." },
                    { t: "Presencial", d: "En bancos, corresponsales bancarios o directamente en el organismo de tránsito que impuso la infracción." },
                    { t: "Acuerdo de pago", d: "Si el monto es alto, puede solicitar cuotas de 6 a 36 meses directamente en la Secretaría de Movilidad del municipio." },
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
                <h3 className="text-2xl font-bold mb-3">
                  ¿Necesita realizar el curso para obtener el descuento?
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Agenda su curso en cualquiera de nuestras 25 sedes y reciba la orientación necesaria para completar el proceso de forma rápida y segura.
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