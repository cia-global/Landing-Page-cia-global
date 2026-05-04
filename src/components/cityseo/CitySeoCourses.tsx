import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle, Clock, MapPin, Award, Zap, Users,
  ChevronRight, ChevronDown, Calendar
} from "lucide-react";
import { useState } from "react";
import SedesBucaramanga from "./SedesBucaramanga";
 
// ─── FAQ Item ─────────────────────────────────────────────────────────────────
interface FAQItemProps {
  pregunta: string;
  respuesta: string;
}
 
function FAQItem({ pregunta, respuesta }: FAQItemProps) {
  const [open, setOpen] = useState(false);
 
  return (
    <div
      className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
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
 
// ─── Componente principal ─────────────────────────────────────────────────────
export default function BucaramangaCity() {
  const faqs = [
    {
      pregunta: "¿Cuánto dura el curso de comparendos en Bucaramanga?",
      respuesta:
        "El curso pedagógico para infractores de tránsito en Bucaramanga tiene una duración de 2 horas. Es un proceso rápido y sencillo que puedes completar en una sola sesión presencial en nuestra sede.",
    },
    {
      pregunta: "¿Cuánto descuento obtengo en mi comparendo?",
      respuesta:
        "Al completar el curso de educación vial obtienes hasta un 50% de descuento sobre el valor de tu comparendo, de acuerdo con la Ley 769 de 2002 del Código Nacional de Tránsito de Colombia.",
    },
    {
      pregunta: "¿Es obligatorio hacer el curso para obtener el descuento?",
      respuesta:
        "Sí. Para acceder al beneficio de reducción del 50% en el valor de tu multa, es obligatorio asistir y completar el curso pedagógico para infractores de tránsito en una institución certificada como la nuestra.",
    },
    {
      pregunta: "¿Dónde se realiza el curso en Bucaramanga?",
      respuesta:
        "Nuestra sede en Bucaramanga está ubicada en un punto de fácil acceso en la ciudad. Al agendar tu cita recibirás la dirección exacta y los horarios disponibles para que puedas planificar tu visita.",
    },
    {
      pregunta: "¿Aplica para comparendos manuales y fotomultas?",
      respuesta:
        "Sí, el beneficio del 50% de descuento aplica tanto para comparendos manuales impuestos por agentes de tránsito como para fotomultas registradas en el SIMIT.",
    },
  ];
 
  const beneficios = [
    { icon: <Award className="w-6 h-6" />, titulo: "50% de descuento", desc: "En comparendos manuales y fotomultas" },
    { icon: <CheckCircle className="w-6 h-6" />, titulo: "Curso certificado", desc: "Avalado por el Ministerio de Transporte" },
    { icon: <Clock className="w-6 h-6" />, titulo: "Solo 2 horas", desc: "Proceso rápido en una sola sesión" },
    { icon: <Zap className="w-6 h-6" />, titulo: "Proceso rápido", desc: "Agenda, asiste y recibe tu certificado" },
    { icon: <MapPin className="w-6 h-6" />, titulo: "Sede en Bucaramanga", desc: "Atención presencial en la ciudad" },
    { icon: <Users className="w-6 h-6" />, titulo: "Instructores certificados", desc: "Personal capacitado y profesional" },
  ];
 
  const pasos = [
    { num: "01", titulo: "Agenda tu curso", desc: "Selecciona la fecha y hora que mejor se adapte a tu horario en nuestra plataforma en línea." },
    { num: "02", titulo: "Asiste a la sede", desc: "Preséntate en nuestra sede en Bucaramanga con tu documento de identidad y el número del comparendo." },
    { num: "03", titulo: "Realiza el curso", desc: "Completa las 2 horas de educación vial con nuestros instructores certificados." },
    { num: "04", titulo: "Recibe tu certificado", desc: "Al finalizar el curso recibirás el certificado oficial que acredita tu participación." },
    { num: "05", titulo: "Aplica el descuento", desc: "Presenta el certificado ante la autoridad de tránsito y obtén el 50% de descuento en tu multa." },
  ];
 
  return (
    <>
      <Helmet>
        <title>Curso de comparendo en Bucaramanga con 50% de descuento | Agenda hoy</title>
        <meta
          name="description"
          content="Realiza tu curso de comparendos en Bucaramanga y obtén hasta un 50% de descuento en tu multa. Curso certificado, duración 2 horas, atención presencial. ¡Agenda hoy!"
        />
        <meta
          name="keywords"
          content="curso comparendo bucaramanga, descuento comparendo bucaramanga, curso infractores bucaramanga, reducir multa transito bucaramanga, curso pedagogico bucaramanga"
        />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/cities/bucaramanga" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Curso de comparendo en Bucaramanga con 50% de descuento" />
        <meta property="og:description" content="Obtén hasta un 50% de descuento en tu comparendo en Bucaramanga. Curso certificado de 2 horas. ¡Agenda hoy!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/cities/bucaramanga" />
      </Helmet>
 
      <div className="pt-16">
 
        {/* ── HERO BANNER ── */}
        <section className="bg-gradient-to-br from-gray-950 via-[#253688] to-gray-950 text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
          {/* Decorativos */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#253688]/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">

              <div className="flex-1 flex flex-col sm:items-center md:items-center lg:items-start sm:text-center md:text-center lg:text-left space-y-6">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-1.5 rounded-full text-sm font-semibold ">
                  <MapPin className="w-4 h-4" /> Bucaramanga, Santander
                </span>

                {/* H1 */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:text-center lg:text-left">
                  Curso de comparendo en{" "}
                  <span className="text-yellow-400">Bucaramanga</span>{" "}
                  con descuento
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-xl sm:text-center">
                  Si tienes un comparendo en Bucaramanga, puedes obtener hasta un{" "}
                  <span className="text-yellow-400 font-bold">50% de descuento</span>{" "}
                  realizando el curso pedagógico para infractores de tránsito. Agenda tu
                  curso de forma rápida y cumple con el proceso legal para reducir el valor
                  de tu multa.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/appointment?city=bucaramanga"
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
                    <img
                    src="/images/whatsapp.png"
                    alt="Banner decorativo"
                    className="centered-icon w-8 h-8"
                      />
                    +57 3207713935
                  </a>
                </div>

                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <span className="text-green-400">✔</span> Proceso 100% legal · Ley 769 de 2002
                </p>
              </div>

              {/* Tarjeta de descuento */}
              <div className="shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
                  <div className="flex justify-center">
              <img
                src="/images/promocion.webp"
                alt="50% descuento en comparendos"
                fetchPriority="high"
                className="w-60 sm:w-72 md:w-80 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              />
            </div>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">EN COMPARENDOS Y</p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">FOTOMULTAS</p>
                <div className="mt-4 w-12 sm:w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
 
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
                Somos una institución certificada con años de experiencia en Bucaramanga
              </p>
            </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {beneficios.map((b, i) => (
    <div
      key={i}
      className="group relative bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-[#253688]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icono */}
      <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#253688] to-[#1a2660] text-yellow-400 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
        {b.icon}
      </div>

      {/* Título */}
      <h3 className="relative z-10 font-bold text-gray-900 text-lg mb-2 group-hover:text-[#253688] transition-colors">
        {b.titulo}
      </h3>

      {/* Descripción */}
      <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
        {b.desc}
      </p>

      {/* Línea decorativa */}
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
              <p className="text-gray-500">5 pasos simples para obtener tu descuento en Bucaramanga</p>
            </div>
 
            <div className="relative">
              {/* Línea conectora */}
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
                to="/appointment?city=bucaramanga"
                className="group inline-flex items-center gap-2 bg-[#253688] hover:bg-[#1a2660] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Comenzar ahora
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <SedesBucaramanga />
 
        {/* ── FAQ ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-500">Todo lo que necesitas saber sobre el curso en Bucaramanga</p>
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
              Curso de comparendos en Bucaramanga: todo lo que debes saber
            </h2>
            <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
              <p>
                Si recibiste un comparendo en Bucaramanga o en cualquier municipio del
                departamento de Santander, tienes la posibilidad de reducir hasta el 50%
                del valor de tu multa gracias al <strong>curso pedagógico para infractores
                de tránsito</strong>, reglamentado por la Ley 769 de 2002, el Código
                Nacional de Tránsito de Colombia.
              </p>
              <p>
                En <strong>Cursos Comparendos Colombia</strong> contamos con
                dos sedes en Bucaramanga donde ofrecemos este curso de manera presencial,
                con instructores certificados y en un tiempo mínimo de 2 horas. Nuestro
                proceso está diseñado para que puedas cumplir con el requisito legal de
                forma rápida, cómoda y sin complicaciones.
              </p>
              <p>
                El <strong>descuento comparendo Bucaramanga</strong> aplica tanto para
                comparendos manuales impuestos por agentes de la Policía de Tránsito como
                para fotomultas registradas en el sistema SIMIT. Una vez completes el
                curso y obtengas tu certificado, podrás presentarlo ante la autoridad de
                tránsito correspondiente para hacer efectivo el beneficio.
              </p>
              <p>
                Agendar tu <strong>curso infractores Bucaramanga</strong> es muy sencillo.
                Solo debes ingresar a nuestra plataforma, seleccionar la ciudad de
                Bucaramanga, elegir la fecha y hora disponible, y completar tus datos
                personales. Recibirás una confirmación inmediata y el día del curso solo
                debes presentarte en nuestra sede con tu documento de identidad y el
                número de comparendo.
              </p>
              <p>
                No esperes más para resolver tu situación de tránsito en Bucaramanga.
                Cada día que pasa sin tramitar el descuento es dinero que puedes ahorrar.
                Con nuestro curso de educación vial no solo reduces tu multa sino que
                también contribuyes a mejorar tu comportamiento como conductor y a hacer
                de las vías de Bucaramanga y Santander un lugar más seguro para todos.
              </p>
            </div>
 
            {/* CTA final */}
            <div className="mt-10 bg-gradient-to-br from-gray-950 via-[#253688] to-gray-950 rounded-3xl p-8 text-center text-white">
              <p className="text-2xl font-extrabold mb-2">¿Listo para ahorrar en tu comparendo?</p>
              <p className="text-gray-300 mb-6 text-sm">Agenda tu curso en Bucaramanga en menos de 2 minutos</p>
              <Link
                to="/appointment?city=bucaramanga"
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