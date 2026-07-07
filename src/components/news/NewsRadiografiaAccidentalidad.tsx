import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CalendarDays,Clock,MapPin, AlertTriangle,ArrowLeft, TrendingDown, Quote } from "lucide-react";

export default function NewsRadiografiaAccidentalidad() {
  return (
    <>
      <Helmet>
        <title>Radiografía de la accidentalidad vial en Colombia 2026 | VialSeg</title>
        <meta
          name="description"
          content="Investigación especial: por qué siguen muriendo más de 8.000 personas al año en las vías de Colombia. Causas, motociclistas, jóvenes y estrategias de reducción."
        />
        <meta
          name="keywords"
          content="accidentalidad vial colombia, muertes transito colombia 2026, motociclistas accidentes, seguridad vial ANSV, mortalidad vial colombia"
        />
        <meta property="og:title" content="Radiografía de la accidentalidad vial en Colombia" />
        <meta property="og:description" content="Investigación especial sobre las causas de la mortalidad vial en Colombia y las estrategias que están funcionando." />
        <meta property="og:image" content="https://www.pagocursoscomparendos.com/images/news/noticia6.png" />
        <meta property="og:url" content="https://www.pagocursoscomparendos.com/noticias/radiografia-accidentalidad-vial-colombia" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/noticias/radiografia-accidentalidad-vial-colombia" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Radiografía de la Accidentalidad Vial en Colombia: ¿Por Qué Siguen Muriendo Más de 8.000 Personas al Año en las Carreteras?",
            image: ["https://www.pagocursoscomparendos.com/images/news/noticia6.png"],
            datePublished: "2026-06-01",
            dateModified: "2026-06-25",
            author: { "@type": "Organization", name: "Equipo Editorial VialSeg" },
            publisher: { "@type": "Organization", name: "Cursos Comparendos" },
            description: "Investigación especial sobre las causas de la mortalidad vial en Colombia, los grupos más vulnerables y las estrategias de reducción.",
          })}
        </script>
      </Helmet>

      <div className="pt-10 min-h-screen bg-white">

        {/* HERO */}
        <section className="relative  flow-hidden py-6 over">
          <img
            src="/images/news/noticia6.png"
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
              Investigación especial
            </span>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-amber-400 ">
              <span className="flex items-center gap-2"><CalendarDays size={15} /> 7 julio 2026</span>
              <span className="flex items-center gap-2"><MapPin size={15} /> Nacional</span>
              <span className="flex items-center gap-2"><Clock size={15} /> 4 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              Radiografía de la accidentalidad vial en Colombia: ¿por qué siguen muriendo más de 8.000 personas al año?
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl pt-4">
              Análisis de las causas, los grupos más vulnerables y las estrategias que están funcionando para reducir las muertes en las vías colombianas.
          </p>
         
          </div>
        </section>


        {/* CONTENIDO */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <article className="space-y-10">

              {/* Lead */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Mientras la atención pública suele concentrarse en seguridad ciudadana, salud o economía, existe una problemática que cada año cobra más vidas que muchas otras causas violentas en Colombia: los siniestros viales. Cada día, decenas de familias colombianas reciben una llamada que cambia sus vidas para siempre.
              </p>

              {/* Stats destacadas */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-pink-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-900">8.271</p>
                  <p className="text-xs text-pink-700 mt-1 leading-tight">Muertes en 2024<br />(−2% vs 2023)</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-900">61%</p>
                  <p className="text-xs text-pink-700 mt-1 leading-tight">Siniestros fatales<br />con motocicletas</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-900">44%</p>
                  <p className="text-xs text-pink-700 mt-1 leading-tight">Víctimas entre<br />15 y 35 años</p>
                </div>
              </div>

              {/* Un cambio positivo */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Un cambio positivo: por primera vez desde la pandemia se reduce la mortalidad vial
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Durante 2024, Colombia registró 8.271 fallecimientos por siniestros viales, una reducción cercana al 2% frente al año anterior que permitió salvar 134 vidas respecto a 2023. La tendencia positiva continuó durante los primeros meses de 2025: entre enero y abril se logró una reducción del 5,1% en las muertes frente al mismo período de 2024, equivalente a 137 vidas salvadas.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Según el Ministerio de Transporte y la ANSV, este resultado rompe la tendencia creciente que se venía presentando después de la pandemia.
                </p>
              </div>

              {/* Motocicletas */}
              <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6">
                <h2 className="font-bold text-lg text-pink-900 mb-2">
                  El gran protagonista de la crisis: las motocicletas
                </h2>
                <p className="text-pink-800 text-sm leading-relaxed">
                  Las motocicletas participan en aproximadamente el 61% de los siniestros fatales del país, y cerca del 62% de las víctimas mortales corresponden a usuarios de motocicleta. Durante 2024 fallecieron más de 5.100 motociclistas, un promedio cercano a 14 muertes diarias. Hoy, más del 60% de los vehículos registrados en Colombia son motocicletas, el principal medio de transporte para millones de ciudadanos.
                </p>
              </div>

              {/* Por qué mueren tantos motociclistas */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  ¿Por qué mueren tantos motociclistas?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { n: "01", t: "Exceso de velocidad", d: "Reduce el tiempo de reacción, aumenta la distancia de frenado e incrementa la severidad de las lesiones." },
                    { n: "02", t: "Falta de experiencia", d: "Conducción sin formación defensiva adecuada, reflejada en colisiones y pérdida de control del vehículo." },
                    { n: "03", t: "Protección inadecuada", d: "Los cascos certificados reducen el riesgo de muerte en aproximadamente un 39%." },
                    { n: "04", t: "Incumplimiento de normas", d: "Adelantamientos indebidos, uso del celular, alcohol y no respetar semáforos." },
                  ].map(({ n, t, d }) => (
                    <div key={n} className="bg-slate-50 rounded-2xl p-5">
                      <p className="text-xs font-semibold text-orange-700 mb-1">{n}</p>
                      <p className="font-semibold text-gray-800 mb-1">{t}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jóvenes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Los jóvenes: la población más vulnerable
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Cerca del 44% de las víctimas mortales registradas en 2024 correspondieron a personas entre 15 y 35 años de edad, en plena edad productiva. Esto implica reducción de ingresos familiares, incremento de gastos médicos, impactos psicológicos permanentes y pérdida de productividad nacional.
                </p>
              </div>

              {/* Peatones y ciclistas */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Peatones y ciclistas: los usuarios más vulnerables
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Aunque los motociclistas concentran la mayor cantidad de víctimas, peatones y ciclistas continúan enfrentando altos niveles de riesgo por excesos de velocidad en zonas urbanas, falta de infraestructura segura, cruces inseguros y distracción de conductores. Durante los primeros meses de 2025 se registraron reducciones importantes en las muertes de peatones, aunque siguen siendo uno de los grupos más afectados.
                </p>
              </div>

              {/* Dónde ocurren */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Dónde ocurren los siniestros más graves?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Durante el primer trimestre de 2025, departamentos como Chocó y Tolima registraron reducciones significativas en las fatalidades viales. Ciudades como Tunja, San Andrés y Quibdó presentaron disminuciones cercanas al 50% frente al mismo período del año anterior, evidencia de que el control, la educación vial y la gestión de velocidad generan resultados concretos cuando se implementan de forma consistente.
                </p>
              </div>

              {/* Semana Santa */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h2 className="font-bold text-lg text-green-900 mb-4">
                  Semana Santa: un caso de éxito
                </h2>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-800">−58%</p>
                    <p className="text-xs text-green-700 mt-1">Siniestros</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-800">−37%</p>
                    <p className="text-xs text-green-700 mt-1">Fallecidos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-800">−59%</p>
                    <p className="text-xs text-green-700 mt-1">Lesionados</p>
                  </div>
                </div>
                <p className="text-green-800 text-sm leading-relaxed">
                  Resultados de la operación de Semana Santa 2025, demostrando que las campañas de prevención, los controles operativos y la pedagogía sí tienen un impacto positivo cuando se ejecutan de manera coordinada.
                </p>
              </div>

              {/* Cita */}
              <blockquote className="border-l-4 border-pink-700 pl-5 py-1">
                <Quote size={18} className="text-pink-700 mb-2" />
                <p className="text-gray-600 italic leading-relaxed">
                  Cualquier fatalidad en las vías es inaceptable y además prevenible. La industria de motocicletas seguirá trabajando en construir un sistema seguro, enfocado en reducir riesgos y proteger a todos los usuarios de las vías.
                </p>
              </blockquote>

              {/* Costo económico */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  El costo económico de la accidentalidad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Los siniestros viales no solo generan pérdidas humanas: diversos estudios estiman que pueden representar hasta el 5% del Producto Interno Bruto debido a atención médica, rehabilitación, pérdida de productividad, daños materiales y costos judiciales y administrativos. La seguridad vial debe entenderse como una inversión social y económica, no únicamente como una obligación legal.
                </p>
              </div>

              {/* Estrategias */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  ¿Qué está haciendo Colombia para reducir la accidentalidad?
                </p>
                <div className="space-y-3">
                  {[
                    { t: "Intervenciones territoriales", d: "Programas focalizados en municipios con alta siniestralidad." },
                    { t: "Campañas pedagógicas", d: "Actividades dirigidas a motociclistas, peatones y conductores." },
                    { t: "Gestión de velocidad", d: "Promoción de límites seguros en zonas urbanas y rurales." },
                    { t: "Fortalecimiento del control", d: "Operativos conjuntos con autoridades de tránsito y Policía Nacional." },
                    { t: "Licencia por puntos", d: "Proyecto legislativo que busca sancionar la reincidencia mediante pérdida progresiva de puntos." },
                  ].map(({ t, d }) => (
                    <div key={t} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">{t}</p>
                        <p className="text-sm text-gray-500">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Educación vial */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  El papel de la educación vial
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Los expertos coinciden en que ninguna estrategia será suficiente sin educación. La evidencia internacional demuestra que los países con reducciones sostenidas en mortalidad vial combinan tres elementos: educación permanente, infraestructura segura y control efectivo. La educación vial no debe limitarse a la obtención de una licencia, sino convertirse en un proceso continuo de formación para todos los actores viales.
                </p>
              </div>

              {/* Conclusión */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  Más de 8.000 personas continúan perdiendo la vida cada año en las vías del país y los motociclistas siguen representando el grupo más vulnerable. Reducir la accidentalidad vial no es una meta estadística: es una oportunidad para salvar miles de vidas y construir un sistema de movilidad más humano y sostenible para todos los colombianos.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">La educación vial salva vidas</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Si tienes un comparendo, el curso pedagógico no solo reduce tu multa: te forma para conducir de forma más segura.
                </p>
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
                >
                  <TrendingDown size={18} />
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