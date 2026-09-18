import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Search, AlertTriangle, CheckCircle, ExternalLink,
  MessageCircle, ShieldCheck, Clock, ChevronDown, ShieldAlert
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

const plataformas = [
  {
    nombre: "SIMIT",
    desc: "Sistema nacional oficial. Muestra todos los comparendos y fotomultas registrados a nivel nacional por cédula o placa.",
    url: "https://fcm.org.co/simit",
    urlLabel: "fcm.org.co/simit",
    scope: "Nacional",
    scopeColor: "bg-blue-50 text-blue-700",
    items: [
      "Comparendos activos y pagados",
      "Valor exacto de la multa",
      "Acuerdos de pago vigentes",
      "Estado de paz y salvo",
      "Opción de pago en línea",
    ],
    alerta: null,
  },
  {
    nombre: "RUNT",
    desc: "Registro Único Nacional de Tránsito. Complementa al SIMIT con información del conductor y el vehículo.",
    url: "https://www.runt.com.co",
    urlLabel: "runt.com.co",
    scope: "Nacional",
    scopeColor: "bg-blue-50 text-blue-700",
    items: [
      "Estado de la licencia",
      "Restricciones del vehículo",
      "Historial del conductor",
      "Información del propietario",
    ],
    alerta: null,
  },
  {
    nombre: "Fénix",
    desc: "Portal de la Secretaría Distrital de Movilidad de Bogotá. Úselo si su comparendo fue impuesto en la capital.",
    url: "https://www.movilidadbogota.gov.co",
    urlLabel: "movilidadbogota.gov.co",
    scope: "Solo Bogotá",
    scopeColor: "bg-amber-50 text-amber-700",
    items: [
      "Comparendos en Bogotá",
      "Pago en línea por PSE",
      "App Mi Movilidad",
      "Acuerdos de pago distritales",
    ],
    alerta: "Solo aplica para comparendos impuestos en Bogotá D.C.",
  },
];

const faqs = [
  {
    pregunta: "¿La consulta en el SIMIT tiene algún costo?",
    respuesta: "No. La consulta en el portal oficial fcm.org.co/simit es completamente gratuita y está disponible las 24 horas. Desconfíe de sitios que cobran por consultar — existen muchas páginas falsas que imitan el portal oficial.",
  },
  {
    pregunta: "¿Puedo consultar el vehículo de otra persona?",
    respuesta: "Sí. La información del SIMIT es pública según el Código Nacional de Tránsito. Puede consultar cualquier placa o cédula, lo que es útil, por ejemplo, antes de comprar un vehículo usado.",
  },
  {
    pregunta: "Tengo una multa pero no recuerdo haberla recibido, ¿qué hago?",
    respuesta: "Es posible que sea una fotomulta notificada por correo a una dirección desactualizada. Consulte en el SIMIT con su cédula o placa, revise la evidencia fotográfica y verifique la fecha de notificación para saber si aún está en plazo de descuento.",
  },
  {
    pregunta: "¿Por qué no aparece mi comparendo en el SIMIT?",
    respuesta: "Algunos organismos de tránsito pueden tardar 24 a 72 horas en reportar una nueva infracción al sistema. Si acaba de recibir el comparendo, espere un día y vuelva a consultar.",
  },
  {
    pregunta: "¿Una multa sin pagar puede bloquear mis trámites?",
    respuesta: "Sí. Comparendos sin pagar pueden bloquear la renovación de su licencia, la transferencia del vehículo y otros trámites ante organismos de tránsito en cualquier ciudad del país, sin importar dónde se impuso la multa.",
  },
  {
    pregunta: "¿Las multas prescriben?",
    respuesta: "La prescripción es de 3 años desde que la infracción quedó en firme. Sin embargo, si durante ese período el organismo realizó alguna gestión de cobro debidamente notificada, el término se interrumpe y comienza de nuevo. No asuma que una multa antigua ya prescribió sin verificarlo.",
  },
];

export default function SearchCitation() {
  return (
    <>
      <Helmet>
        <title>¿Cómo saber si tengo multas de tránsito en Colombia? Consulta gratis 2026</title>
        <meta
          name="description"
          content="Descubra cómo consultar sus multas de tránsito en Colombia usando SIMIT, RUNT y Fénix. Consulta gratuita por cédula o placa. También puede contactarnos y lo hacemos por usted."
        />
        <meta
          name="keywords"
          content="cómo saber si tengo multas colombia, consultar comparendos por cédula, simit por placa, cuánto debo de multas tránsito, consulta multas gratis colombia 2026"
        />
        <meta property="og:title" content="¿Cómo saber si tengo multas de tránsito en Colombia?" />
        <meta property="og:description" content="Guía gratuita para consultar sus comparendos y fotomultas en Colombia usando SIMIT, RUNT y Fénix." />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/consulta-multas" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/consulta-multas" />
      </Helmet>

      <div className="pt-10 min-h-screen bg-white">

        {/* HERO */}
       <section className="relative bg-gradient-to-br from-slate-950 via-[#253688] to-slate-900 text-white py-20 overflow-hidden">

  {/* Círculos decorativos de fondo */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Texto */}
      <div>
        <span className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
          <Search size={12} /> Consulta gratuita · 2026
        </span>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-5">
          ¿Tienes multas de
          <span className="text-amber-400"> tránsito </span>
          sin saberlo?
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
          Miles de conductores en Colombia tienen comparendos o fotomultas activas que desconocen. Consultar es gratis, toma menos de 2 minutos y puede evitarte bloqueos en trámites e intereses acumulados.
        </p>

       
        {/* Botones */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://fcm.org.co/simit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-6 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-400/20 text-sm"
          >
            <Search size={22} />
            Consultar en SIMIT
          </a>
          <a
            href="https://wa.me/573155200837?text=Hola,%20quiero%20que%20me%20ayuden%20a%20consultar%20mis%20multas%20de%20tránsito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 text-sm"
          >
             <img
                    src="/images/whatsapp.png"
                    alt="Banner decorativo"
                    className="centered-icon w-7 h-7"
                      />
            Que lo hagamos por ti
          </a>
        </div>

        <p className="text-slate-500 text-xs mt-5 flex items-center gap-1.5">
          <ShieldAlert size={12} className="text-amber-400 shrink-0" />
          El único portal oficial es fcm.org.co/simit — desconfíe de sitios que cobren por consultar.
        </p>
      </div>

      {/* Imagen */}
      <div className="hidden lg:flex items-end justify-center relative">

        {/* Halo detrás de la imagen */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/10 rounded-full blur-2xl" />

        <img
          src="/images/conductor_banner.webp"
          alt="Conductor consultando multas"
          className="relative z-10 w-full max-w-sm object-contain object-bottom drop-shadow-2xl select-none"
        />

        {/* Tarjeta flotante izquierda */}
        <div className="absolute top-8 -left-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0">
            <Search size={14} className="text-amber-400" />
          </div>
          <div>
            <p className="text-white text-xs font-bold leading-tight">Consulta en segundos</p>
            <p className="text-slate-400 text-[10px]">Por cédula o placa</p>
          </div>
        </div>

        {/* Tarjeta flotante derecha */}
        <div className="absolute z-30 bottom-16 -right-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
          <div className="w-8 h-8 rounded-xl bg-green-400/20 flex items-center justify-center shrink-0">
            <ShieldAlert size={14} className="text-green-400" />
          </div>
          <div>
            <p className="text-white text-xs font-bold leading-tight">Hasta 50% descuento</p>
            <p className="text-slate-400 text-[10px]">Si actúas a tiempo</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="space-y-12">

              {/* Intro */}
              <p className="text-lg text-gray-700 leading-relaxed">
                En Colombia, un comparendo sin pagar no desaparece con el tiempo. Al contrario: acumula intereses, puede bloquear la renovación de su licencia, impedir la transferencia de un vehículo y en casos extremos derivar en un cobro coactivo con embargo de cuentas. Consultar periódicamente su estado de multas es un hábito que puede ahorrarle dinero y problemas.
              </p>

              {/* Alerta sitios falsos */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle size={22} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900 mb-1">Cuidado con sitios falsos</p>
                  <p className="text-red-800 text-sm leading-relaxed">
                    Existen muchos portales que imitan el diseño del SIMIT y cobran por consultas que son completamente gratuitas. El único portal oficial es <strong>fcm.org.co/simit</strong> — verifique siempre que la URL termine en <strong>.org.co</strong> antes de ingresar sus datos.
                  </p>
                </div>
              </div>

              {/* Plataformas */}
             
             <div>
  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
    Plataformas oficiales de consulta
  </p>
  <div className="space-y-4">
    {plataformas.map((p) => (
      <div key={p.nombre} className="border border-gray-100 rounded-2xl p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-bold text-xl text-gray-900">{p.nombre}</h2>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.scopeColor}`}>
                {p.scope}
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ul className="space-y-1.5">
            {p.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={14} className="text-green-600 shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between gap-3">
            {p.alerta && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-amber-800 flex items-start gap-2">
                <AlertTriangle size={13} className="shrink-0 mt-0.5" /> {p.alerta}
              </div>
            )}
            {/* 👇 Aquí estaba el error — props fuera de la etiqueta */}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#253688] hover:bg-[#1a2660] text-white font-semibold px-5 py-3 rounded-xl transition text-sm hover:scale-[1.02]"
            >
              <ExternalLink size={15} />
              Ir a {p.urlLabel}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

              {/* Cómo consultar paso a paso */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                  Cómo consultar en el SIMIT — paso a paso
                </p>
                <div className="space-y-4">
                  {[
                    { n: "01", t: "Ingrese al portal oficial", d: "Abra fcm.org.co/simit desde su navegador. No use Google para llegar — escriba la URL directamente para evitar sitios falsos." },
                    { n: "02", t: "Elija el tipo de consulta", d: "Por cédula: muestra todos los comparendos a su nombre como conductor. Por placa: muestra las multas asociadas al vehículo. Ambas son gratuitas." },
                    { n: "03", t: "Ingrese sus datos", d: "Escriba su número de cédula o placa sin puntos, comas ni espacios. Complete el captcha si aparece." },
                    { n: "04", t: "Revise los resultados", d: "El sistema muestra comparendos activos, valor de la multa, fecha, organismo que la impuso y opciones de pago disponibles." },
                    { n: "05", t: "Tome acción a tiempo", d: "Si tiene multas activas, verifique la fecha para saber si aún está en plazo de descuento. Cada día que pasa puede costarle dinero." },
                  ].map((p) => (
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

              {/* Consecuencias de no pagar */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  ¿Qué pasa si no pago mis multas?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Clock size={18} className="text-red-600" />, t: "Acumulación de intereses", d: "El valor de la multa crece con intereses de mora mientras no se cancele." },
                    { icon: <ShieldCheck size={18} className="text-red-600" />, t: "Bloqueo de trámites", d: "No podrá renovar su licencia ni transferir el vehículo en ninguna ciudad del país." },
                    { icon: <AlertTriangle size={18} className="text-red-600" />, t: "Cobro coactivo", d: "Las multas pueden derivar en embargo de cuentas bancarias o retención de salario." },
                    { icon: <Search size={18} className="text-red-600" />, t: "Impacto en seguros", d: "Las aseguradoras consultan el historial al renovar pólizas, lo que puede aumentar su prima." },
                  ].map(({ icon, t, d }) => (
                    <div key={t} className="flex gap-3 items-start bg-slate-50 rounded-2xl p-4">
                      <div className="mt-0.5 shrink-0">{icon}</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm mb-0.5">{t}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA WhatsApp */}
              <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-950 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      ¿Prefiere que lo hagamos por usted?
                    </p>
                    <h2 className="text-2xl font-extrabold mb-3">
                      Consultamos sus multas y le explicamos todo
                    </h2>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      Escríbanos por WhatsApp con su cédula o placa y nuestro equipo consulta por usted, le explica cuánto debe, qué descuentos aplican y cómo proceder para pagar lo menos posible.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/573155200837?text=Hola,%20quiero%20que%20me%20ayuden%20a%20consultar%20mis%20multas%20de%20tránsito"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-white text-green-900 font-bold px-6 py-4 rounded-xl hover:scale-[1.02] transition shadow-lg text-sm"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Escribir al WhatsApp
                    </a>
                    <p className="text-gray-200 text-xs text-center">
                      +57 315 520 0837 · Respuesta en minutos
                    </p>
                  </div>
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

              {/* CTA final */}
              <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-950 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">
                  ¿Encontró multas activas?
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Realice el curso pedagógico y reduzca su multa hasta un 50% antes de que venzan los plazos.
                </p>
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
                >
                  <Search size={18} />
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