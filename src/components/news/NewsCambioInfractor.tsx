import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CalendarDays,
  Car,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  UserCheck,
  ArrowLeft
} from "lucide-react";

export default function NewsCambioInfractor() {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative  flow-hidden py-6over">
          <img
            src="/images/news/cambio.png"
            alt="Cambio de Infractor en Fotomultas"
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
              Noticias de Tránsito
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 23 junio 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Nacional</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 4 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              RUNT Habilita el Cambio de Infractor en Fotomultas:
              Así Puedes Trasladar la Multa al Conductor Real
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl pt-4">
            Los propietarios de vehículos ahora pueden solicitar
            de forma virtual que determinadas fotomultas sean
            asumidas por la persona que realmente cometió la
            infracción.
          </p>
         
          </div>
        </section>

     
      

      {/* CONTENIDO */}
      <article className="max-w-4xl mx-auto px-4 py-16">

        <div className="prose prose-lg max-w-none">

          <p>
            Una de las principales preocupaciones de muchos
            propietarios de vehículos en Colombia ha sido
            recibir fotomultas por infracciones que no
            cometieron personalmente.
          </p>

          <p>
            Con la nueva funcionalidad habilitada por el RUNT,
            ahora será posible solicitar que determinadas
            infracciones captadas por cámaras de fotodetección
            sean trasladadas al conductor que realmente iba al
            volante en el momento de la falta.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-8">

            <h3 className="font-bold text-xl mb-2">
              ¿Qué significa este cambio?
            </h3>

            <p className="mb-0">
              El propietario del vehículo ya no tendrá que asumir
              automáticamente ciertas fotomultas cuando otra
              persona era quien conducía.
            </p>

          </div>

          <h2>
            ¿Qué infracciones permiten solicitar el cambio de infractor?
          </h2>

          <p>
            Esta nueva herramienta aplica únicamente para
            determinadas infracciones detectadas mediante
            sistemas automáticos de vigilancia.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">

            <div className="border rounded-xl p-5">
              <Car className="text-yellow-500 mb-3" size={28} />
              <h3 className="font-bold">
                Exceso de velocidad
              </h3>
            </div>

            <div className="border rounded-xl p-5">
              <AlertTriangle className="text-red-500 mb-3" size={28} />
              <h3 className="font-bold">
                Cruce de semáforo en rojo
              </h3>
            </div>

            <div className="border rounded-xl p-5">
              <Car className="text-blue-500 mb-3" size={28} />
              <h3 className="font-bold">
                Invasión de carriles exclusivos
              </h3>
            </div>

            <div className="border rounded-xl p-5">
              <FileText className="text-green-600 mb-3" size={28} />
              <h3 className="font-bold">
                Infracciones de pico y placa
              </h3>
            </div>

          </div>

          <h2>
            ¿Qué multas NO pueden cambiarse?
          </h2>

          <p>
            Existen algunas infracciones que continúan siendo
            responsabilidad directa del propietario del vehículo.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">

            <ul className="space-y-3">

              <li className="flex gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0" />
                <span>
                  SOAT vencido.
                </span>
              </li>

              <li className="flex gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0" />
                <span>
                  Falta de revisión técnico-mecánica.
                </span>
              </li>

              <li className="flex gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0" />
                <span>
                  Infracciones relacionadas con documentos obligatorios del vehículo.
                </span>
              </li>

            </ul>

          </div>

          <h2>
            ¿Cómo funciona el proceso?
          </h2>

          <p>
            El trámite se realiza de forma virtual mediante
            la Sede Electrónica del RUNT.
          </p>

          <div className="space-y-4 my-8">

            <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
              <span className="font-bold text-yellow-500">
                1
              </span>

              <div>
                <h3 className="font-semibold">
                  El propietario inicia la solicitud
                </h3>

                <p className="text-gray-600 mb-0">
                  Debe registrar la información del conductor real.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
              <span className="font-bold text-yellow-500">
                2
              </span>

              <div>
                <h3 className="font-semibold">
                  El conductor acepta la responsabilidad
                </h3>

                <p className="text-gray-600 mb-0">
                  Debe ingresar al sistema y aprobar el cambio.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
              <span className="font-bold text-yellow-500">
                3
              </span>

              <div>
                <h3 className="font-semibold">
                  El organismo de tránsito valida la solicitud
                </h3>

                <p className="text-gray-600 mb-0">
                  La autoridad correspondiente decide si aprueba o rechaza el trámite.
                </p>
              </div>
            </div>

          </div>

          <h2>
            Requisitos importantes
          </h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">

            <ul className="space-y-3">

              <li className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" />
                <span>
                  Ambas personas deben aceptar voluntariamente el proceso.
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" />
                <span>
                  Los datos de contacto deben estar actualizados en el RUNT.
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" />
                <span>
                  El comparendo debe encontrarse dentro de los términos legales para el trámite.
                </span>
              </li>

            </ul>

          </div>

          <h2>
            ¿Qué beneficio tiene esta medida?
          </h2>

          <p>
            La nueva funcionalidad permite que las sanciones
            recaigan sobre quien realmente cometió la infracción,
            fortaleciendo la transparencia del sistema y evitando
            que propietarios deban asumir responsabilidades que
            no les corresponden.
          </p>

          <p>
            Además, el conductor que asuma la infracción podrá
            acceder directamente a los beneficios contemplados
            por la ley, incluyendo descuentos mediante cursos
            pedagógicos cuando estos apliquen.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-10 text-center">

          <UserCheck
            size={48}
            className="mx-auto mb-4 text-yellow-400"
          />

          <h3 className="text-3xl font-bold mb-4">
            ¿Recibiste una fotomulta?
          </h3>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Consulta tu comparendo y conoce si puedes acceder a
            descuentos realizando el curso para infractores
            establecido por la ley.
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