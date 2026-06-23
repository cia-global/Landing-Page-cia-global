import { Link } from "react-router-dom";

export default function NewsLicense() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4">

          <p className="text-yellow-400 font-semibold mb-3">
            Noticias de Tránsito
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Licencia de Conducción por Puntos en Colombia:
            Así Funcionará el Nuevo Sistema
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl">
            Colombia se prepara para implementar un nuevo sistema
            de licencias basado en puntos que busca promover una
            conducción más segura y responsable.
          </p>

        </div>
      </section>

      {/* Imagen principal */}
      <section className="max-w-5xl mx-auto px-4 -mt-10">
        <img
          src="/images/news/licencia-puntos.jpg"
          alt="Licencia de conducción por puntos en Colombia"
          className="w-full rounded-2xl shadow-2xl"
        />
      </section>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 py-16">

        <div className="prose prose-lg max-w-none">

          <p>
            El Senado de la República aprobó un proyecto que
            introduce el sistema de licencia de conducción por
            puntos en Colombia. Esta medida busca reducir la
            reincidencia en infracciones de tránsito y mejorar
            la seguridad vial mediante un mecanismo que premia
            el buen comportamiento al volante.
          </p>

          <h2>
            ¿Qué es la licencia de conducción por puntos?
          </h2>

          <p>
            La nueva medida no reemplaza la licencia actual ni
            exige un documento diferente. Los conductores seguirán
            obteniendo su licencia de la misma forma que hoy, pero
            esta tendrá asociado un sistema de puntaje que podrá
            disminuir cuando se cometan infracciones de tránsito.
          </p>

          <p>
            El objetivo es que el comportamiento vial tenga un
            impacto directo en la permanencia del permiso para
            conducir.
          </p>

          <h2>
            ¿Cuántos puntos tendrá la licencia?
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg my-8">
            <h3 className="font-bold text-xl mb-2">
              Puntaje Inicial
            </h3>

            <p>
              Cada conductor iniciará con
              <strong> 26 puntos </strong>
              en su licencia de conducción.
            </p>
          </div>

          <p>
            A medida que el conductor acumule infracciones,
            esos puntos serán descontados según la gravedad
            de la falta cometida.
          </p>

          <h2>
            Infracciones que harán perder puntos
          </h2>

          <div className="overflow-x-auto my-8">

            <table className="w-full border border-slate-200 rounded-lg overflow-hidden">

              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 text-left">
                    Infracción
                  </th>

                  <th className="p-4 text-left">
                    Descuento
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="p-4 border-t">
                    Exceso de velocidad
                  </td>

                  <td className="p-4 border-t">
                    5 a 10 puntos
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border-t">
                    Conducir bajo efectos del alcohol
                  </td>

                  <td className="p-4 border-t">
                    Hasta 10 puntos
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border-t">
                    No respetar semáforos
                  </td>

                  <td className="p-4 border-t">
                    5 puntos
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border-t">
                    Circular en motocicleta sin casco
                  </td>

                  <td className="p-4 border-t">
                    5 puntos
                  </td>
                </tr>

                <tr>
                  <td className="p-4 border-t">
                    No usar cinturón de seguridad
                  </td>

                  <td className="p-4 border-t">
                    4 puntos
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          <h2>
            ¿Qué pasa si se pierden todos los puntos?
          </h2>

          <p>
            Cuando el conductor llegue a cero puntos, la licencia
            podrá ser suspendida temporalmente.
          </p>

          <ul>
            <li>
              Primera pérdida total: suspensión por 9 meses.
            </li>

            <li>
              Segunda pérdida total: suspensión por 12 meses.
            </li>

            <li>
              Tercera pérdida total: cancelación permanente.
            </li>
          </ul>

          <h2>
            Conductores novatos
          </h2>

          <p>
            Los nuevos conductores tendrán un periodo especial
            de observación en el cual podrán existir restricciones
            relacionadas con velocidad, transporte de pasajeros
            y otras condiciones orientadas a fortalecer la
            seguridad vial.
          </p>

          <h2>
            ¿Habrá nuevos seguros obligatorios?
          </h2>

          <p>
            Durante la discusión del proyecto se estudió la
            posibilidad de implementar un seguro complementario
            al SOAT. Sin embargo, esta propuesta fue eliminada
            y el sistema continuará funcionando con el esquema
            actual de aseguramiento obligatorio.
          </p>

          <h2>
            ¿Cuándo entrará en vigencia?
          </h2>

          <p>
            El proyecto deberá completar los trámites legales
            correspondientes para su implementación definitiva.
            Una vez entre en vigor, Colombia se sumará a los
            países que utilizan sistemas de licencias por puntos
            para promover una conducción responsable.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-10 text-center">

          <h3 className="text-3xl font-bold mb-4">
            ¿Recibió un comparendo?
          </h3>

          <p className="text-slate-300 mb-6">
            Realice su curso para infractores y acceda a los
            descuentos establecidos por la ley.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition"
          >
            Agendar Curso
          </Link>

        </div>

      </article>

    </div>
  );
}