import { Link } from "react-router-dom";
import {
  Percent,
  Clock,
  CheckCircle,
  AlertTriangle,
  MapPin,
  CalendarDays,
  FileText,
  Car,
  ArrowLeft
} from "lucide-react";

export default function NewsDescuentoComparendos() {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">

      {/* HERO */}
       <section className="relative  flow-hidden py-6over">
          <img
            src="/images/news/descuento.png"
            alt="Descuento en comparendos realizando curso de seguridad vial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end py-8 text-white">
            
            <Link to="/#news"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-2 w-fit">
              <ArrowLeft size={16} />
              Volver a noticias
            </Link>

            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              Guía para Conductores
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 23 junio 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Nacional</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 4 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              ¿Cómo Obtener Hasta un 50% de Descuento en un Comparendo Realizando el Curso de Seguridad Vial?
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl pt-4">
            Conozca los descuentos establecidos por la ley para comparendos
            manuales y fotomultas, los plazos para acceder al beneficio y cómo
            realizar el curso de seguridad vial.
          </p>
         
          </div>
        </section>
      

      {/* IMAGEN */}
      <section className="max-w-5xl mx-auto px-4 -mt-10">
        <img
          src="/images/news/descuento-comparendos.jpg"
          alt="Descuento en comparendos realizando curso de seguridad vial"
          className="w-full rounded-2xl shadow-2xl"
        />
      </section>

      {/* CONTENIDO */}
      <article className="max-w-4xl mx-auto px-4 py-16">

        <div className="prose prose-lg max-w-none">

          <p>
            Miles de conductores en Colombia desconocen que la ley permite
            obtener importantes descuentos en el valor de un comparendo
            realizando oportunamente el curso de seguridad vial para
            infractores.
          </p>

          <p>
            Dependiendo del tipo de infracción y del momento en que se realice
            el trámite, es posible obtener descuentos de hasta el 50% sobre el
            valor de la multa.
          </p>

          {/* DESTACADO */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg my-8">

            <div className="flex items-center gap-3 mb-2">
              <Percent className="text-green-600" />
              <h3 className="font-bold text-xl">
                Beneficio Principal
              </h3>
            </div>

            <p className="mb-0">
              Los conductores pueden acceder a descuentos del
              <strong> 50% </strong>
              o
              <strong> 25% </strong>
              en el valor de la multa realizando el curso de seguridad vial
              dentro de los plazos establecidos por la ley.
            </p>

          </div>

          <h2>
            ¿Qué es el curso de seguridad vial?
          </h2>

          <p>
            Es una capacitación pedagógica dirigida a conductores infractores
            que busca fortalecer el conocimiento de las normas de tránsito y
            promover comportamientos responsables en las vías.
          </p>

          <p>
            Además de su finalidad educativa, este curso permite acceder a los
            descuentos legales sobre determinadas infracciones de tránsito.
          </p>

          {/* COMPARENDO MANUAL */}
          <h2>
            Descuentos para Comparendos Manuales
          </h2>

          <p>
            Son aquellos comparendos impuestos directamente por un agente de
            tránsito.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 my-8">

            <div className="flex items-center gap-3 mb-4">
              <Car className="text-blue-600" />
              <h3 className="font-bold text-xl">
                Comparendo Manual
              </h3>
            </div>

            <div className="space-y-4">

              <div className="border rounded-lg p-4">

                <div className="flex items-center gap-2 mb-2">
                  <Percent className="text-green-600" />
                  <h4 className="font-bold">
                    50% de descuento
                  </h4>
                </div>

                <p className="mb-0">
                  Si realiza el curso y paga la multa dentro de los
                  primeros cinco (5) días hábiles.
                </p>

              </div>

              <div className="border rounded-lg p-4">

                <div className="flex items-center gap-2 mb-2">
                  <Percent className="text-yellow-600" />
                  <h4 className="font-bold">
                    25% de descuento
                  </h4>
                </div>

                <p className="mb-0">
                  Si realiza el curso y paga la multa entre el día 6 y el día
                  20 hábil después de la imposición del comparendo.
                </p>

              </div>

            </div>

          </div>

          {/* FOTOMULTAS */}
          <h2>
            Descuentos para Fotomultas
          </h2>

          <p>
            Las fotomultas son infracciones detectadas mediante cámaras de
            fotodetección o medios tecnológicos autorizados.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 my-8">

            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-purple-600" />
              <h3 className="font-bold text-xl">
                Fotomultas
              </h3>
            </div>

            <div className="space-y-4">

              <div className="border rounded-lg p-4">

                <div className="flex items-center gap-2 mb-2">
                  <Percent className="text-green-600" />
                  <h4 className="font-bold">
                    50% de descuento
                  </h4>
                </div>

                <p className="mb-0">
                  Si realiza el curso y paga dentro de los primeros once (11)
                  días hábiles siguientes a la notificación.
                </p>

              </div>

              <div className="border rounded-lg p-4">

                <div className="flex items-center gap-2 mb-2">
                  <Percent className="text-yellow-600" />
                  <h4 className="font-bold">
                    25% de descuento
                  </h4>
                </div>

                <p className="mb-0">
                  Si realiza el curso y paga entre el día 12 y el día 26 hábil
                  después de la notificación.
                </p>

              </div>

            </div>

          </div>

          {/* TABLA */}
          <h2>
            Resumen de los Plazos
          </h2>

          <div className="overflow-x-auto my-8">

            <table className="w-full border border-slate-200">

              <thead>

                <tr className="bg-slate-100">

                  <th className="p-4 text-left">
                    Tipo
                  </th>

                  <th className="p-4 text-left">
                    Primer Plazo
                  </th>

                  <th className="p-4 text-left">
                    Descuento
                  </th>

                  <th className="p-4 text-left">
                    Segundo Plazo
                  </th>

                  <th className="p-4 text-left">
                    Descuento
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td className="p-4 border-t">
                    Comparendo Manual
                  </td>

                  <td className="p-4 border-t">
                    5 días hábiles
                  </td>

                  <td className="p-4 border-t">
                    50%
                  </td>

                  <td className="p-4 border-t">
                    Día 6 al 20 hábil
                  </td>

                  <td className="p-4 border-t">
                    25%
                  </td>

                </tr>

                <tr>

                  <td className="p-4 border-t">
                    Fotomulta
                  </td>

                  <td className="p-4 border-t">
                    11 días hábiles
                  </td>

                  <td className="p-4 border-t">
                    50%
                  </td>

                  <td className="p-4 border-t">
                    Día 12 al 26 hábil
                  </td>

                  <td className="p-4 border-t">
                    25%
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          {/* IMPORTANTE */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-10">

            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-red-500" />
              <h3 className="font-bold">
                Importante
              </h3>
            </div>

            <p className="mb-0">
              Una vez vencidos los plazos establecidos por la ley,
              el comparendo deberá pagarse por el valor total y se
              pierde el beneficio del descuento.
            </p>

          </div>

          <h2>
            Requisitos para Obtener el Descuento
          </h2>

          <ul>

            <li>
              Realizar el curso de seguridad vial.
            </li>

            <li>
              Efectuar el pago dentro de los términos legales.
            </li>

            <li>
              Tener vigente la orden de comparendo.
            </li>

            <li>
              Cumplir con las condiciones establecidas por la autoridad de tránsito.
            </li>

          </ul>

          <h2>
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4 my-8">

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold">
                ¿Cuánto dura el curso?
              </h3>

              <p className="mb-0">
                Aproximadamente dos horas.
              </p>

            </div>

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold">
                ¿Debo hacer el curso antes de pagar?
              </h3>

              <p className="mb-0">
                Sí, el curso hace parte del procedimiento para acceder al beneficio.
              </p>

            </div>

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold">
                ¿Puedo obtener el descuento si se venció el plazo?
              </h3>

              <p className="mb-0">
                No. Una vez vencidos los términos legales se pierde el beneficio.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-10 text-center">

          <Clock
            size={50}
            className="mx-auto mb-4 text-yellow-400"
          />

          <h3 className="text-3xl font-bold mb-4">
            ¿Recibió un Comparendo?
          </h3>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            No deje vencer los plazos. Realice su curso de seguridad vial
            y aproveche los descuentos establecidos por la ley.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/appointment"
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition"
            >
              Agendar Curso
            </Link>

            <Link
              to="/cities"
              className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition"
            >
              Ver Sedes
            </Link>

          </div>

        </div>

      </article>

    </div>
  );
}