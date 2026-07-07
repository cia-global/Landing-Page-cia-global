import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CalendarDays, AlertTriangle, Clock, MapPin,ArrowLeft } from "lucide-react";

const categorias = [
  { letra: "A", valor: "$168.900", nivel: "Leve", color: "green" },
  { letra: "B", valor: "$337.800", nivel: "Moderada", color: "amber" },
  { letra: "C", valor: "$633.200", nivel: "Grave", color: "coral" },
  { letra: "D", valor: "$1.266.200", nivel: "Muy grave", color: "pink" },
  { letra: "E", valor: "$1.899.300", nivel: "Gravísima", color: "red" },
];

const colorClasses: Record<string, { bg: string; text: string; sub: string }> = {
  green: { bg: "bg-green-50", text: "text-green-900", sub: "text-green-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-900", sub: "text-amber-700" },
  coral: { bg: "bg-orange-50", text: "text-orange-900", sub: "text-orange-700" },
  pink: { bg: "bg-pink-50", text: "text-pink-900", sub: "text-pink-700" },
  red: { bg: "bg-red-50", text: "text-red-900", sub: "text-red-700" },
};

const infracciones = [
  {
    letra: "A",
    color: "green",
    valor: "$168.900",
    nivel: "Leve",
    ejemplos: [
      "No transitar por la derecha de la vía",
      "Sujetarse de otro vehículo en movimiento",
      "Infracciones de conductores de vehículos no automotores",
    ],
  },
  {
    letra: "B",
    color: "amber",
    valor: "$337.800",
    nivel: "Moderada",
    ejemplos: [
      "No portar licencia de conducción",
      "No portar documentos exigidos por la autoridad",
      "Incumplimiento de requisitos administrativos",
    ],
  },
  {
    letra: "C",
    color: "coral",
    valor: "$633.200",
    nivel: "Grave",
    ejemplos: [
      "Exceso de velocidad",
      "No utilizar cinturón de seguridad",
      "Utilizar dispositivos móviles mientras se conduce",
      "No respetar señales de tránsito",
    ],
  },
  {
    letra: "D",
    color: "pink",
    valor: "$1.266.200",
    nivel: "Muy grave",
    ejemplos: [
      "Pasar un semáforo en rojo",
      "Circular sin SOAT vigente",
      "Realizar maniobras peligrosas",
    ],
  },
  {
    letra: "E",
    color: "red",
    valor: "$1.899.300",
    nivel: "Gravísima",
    ejemplos: [
      "Transporte no autorizado",
      "Exceso de capacidad de carga",
      "Incumplimiento de condiciones especiales de servicio",
    ],
  },
];

export default function NewsTablaComparendos2026() {
  return (
    <>
      <Helmet>
        <title>Tabla oficial de comparendos y fotomultas en Colombia 2026 | Valores y descuentos</title>
        <meta
          name="description"
          content="Conoce los valores actualizados de comparendos y fotomultas en Colombia 2026 por categoría A, B, C, D y E. Descubre cómo acceder al 50% de descuento con el curso pedagógico."
        />
        <meta
          name="keywords"
          content="tabla comparendos 2026, valor multas transito colombia, fotomultas 2026, categorias comparendos, descuento comparendo, curso pedagogico transito"
        />
        <meta property="og:title" content="Tabla oficial de comparendos y fotomultas en Colombia 2026" />
        <meta property="og:description" content="Valores actualizados, categorías A-E y cómo acceder al 50% de descuento en tu comparendo." />
        <meta property="og:image" content="https://www.pagocursoscomparendos.com/images/news/noticia5.png" />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/noticias/tabla-comparendos-2026" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/noticias/tabla-comparendos-2026" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Tabla Oficial de Comparendos y Fotomultas en Colombia 2026: Valores, Descuentos y Cómo Pagar Menos",
            image: ["https://www.pagocursoscomparendos.com/images/news/noticia5.png"],
            datePublished: "2026-06-01",
            dateModified: "2026-06-25",
            author: { "@type": "Organization", name: "Equipo Editorial VialSeg" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "Guía actualizada con los valores 2026 de comparendos por categoría, plazos de descuento y cómo pagar menos con el curso pedagógico.",
          })}
        </script>
      </Helmet>

      <div className="pt-10 min-h-screen bg-white">

        {/* HERO */}
         <section className="relative  flow-hidden py-6 over">
          <img
            src="/images/news/noticia5.png"
            alt="Cambio de Infractor en Fotomultas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-end py-8 text-white">
            
            <Link to="/#news"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-2 w-fit">
              <ArrowLeft size={16} />
              Volver a noticias
            </Link>

            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              Noticias de Tránsito
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-amber-400 ">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 7 julio 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Nacional</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 4 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              Tabla oficial de comparendos y fotomultas en Colombia 2026
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl pt-4">
              Conozca los valores actualizados de las multas por categoría A, B, C, D y E, los plazos para acceder a los descuentos y cómo pagar menos con el curso pedagógico.
          </p>
         
          </div>
        </section>

       

        {/* CONTENIDO */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="space-y-10">

              {/* Lead */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Miles de conductores en Colombia reciben cada año comparendos por exceso de velocidad, incumplimiento de señales de tránsito, uso del celular mientras conducen, falta de documentación o infracciones detectadas mediante sistemas de fotodetección. Conocer los valores actualizados de las multas y los plazos para acceder a los descuentos puede representar un ahorro significativo.
              </p>

              {/* Tabla de categorías */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Categorías y valores 2026
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {categorias.map((c) => {
                    const cls = colorClasses[c.color];
                    return (
                      <div key={c.letra} className={`${cls.bg} rounded-xl p-4 text-center`}>
                        <p className={`text-2xl font-bold ${cls.text}`}>{c.letra}</p>
                        <p className={`text-sm font-semibold ${cls.text} mt-1`}>{c.valor}</p>
                        <p className={`text-xs ${cls.sub} mt-0.5`}>{c.nivel}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Los valores pueden presentar variaciones por actualizaciones normativas o liquidaciones específicas de cada organismo de tránsito. Fuente: RUNT.
                </p>
              </div>

              {/* Cómo se calculan */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h2 className="font-bold text-lg text-blue-900 mb-2">
                  ¿Cómo se calculan las multas en 2026?
                </h2>
                <p className="text-blue-800 text-sm leading-relaxed">
                  A diferencia de años anteriores, desde 2026 las sanciones de tránsito ya no se calculan con base en el Salario Mínimo Diario Legal Vigente (SMDLV). La Ley 2294 de 2023 estableció la <strong>Unidad de Valor Básico (UVB)</strong> como la nueva unidad de medida para este tipo de cobros. Para 2026, el valor de la UVB es de <strong>$12.110</strong>, y cada categoría de infracción equivale a un número distinto de UVB según su gravedad.
                </p>
              </div>

              {/* Descuentos */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Descuento por curso pedagógico
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-green-700">50%</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Comparendo presencial<br />días 1 a 5 hábiles
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-green-700">25%</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Comparendo presencial<br />días 6 a 20 hábiles
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-green-700">50%</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Fotomulta<br />hasta 11 días hábiles
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                  <Clock size={12} /> Los plazos se cuentan a partir de la notificación del comparendo o fotomulta.
                </p>
              </div>

              {/* Infracciones por categoría */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Infracciones por categoría
                </p>
                <div className="space-y-5">
                  {infracciones.map((inf) => {
                    const cls = colorClasses[inf.color];
                    return (
                      <div key={inf.letra} className="border border-gray-100 rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`${cls.bg} ${cls.text} text-xs font-semibold px-3 py-1 rounded-full`}>
                            {inf.letra} · {inf.nivel}
                          </span>
                          <span className="font-semibold text-gray-800">{inf.valor}</span>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                          {inf.ejemplos.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Nota legal */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  Esta guía es informativa y se basa en valores aproximados para 2026. Para conocer el valor exacto de un comparendo específico, consulte directamente en el portal del RUNT o el SIMIT con su número de cédula o placa.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-blue-800 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">¿Tienes un comparendo activo?</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Realiza el curso pedagógico y reduce tu multa hasta un 50% antes de que vencan los plazos.
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