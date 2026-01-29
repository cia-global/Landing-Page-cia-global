import {  CheckCircle, AlertCircle, Scale, Shield } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="pt-16">
    
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-green-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" items-center text-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
            </div>
          </div>
        </div>
      </section>
         <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introducción */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Introducción</h2>
              <p className="text-gray-600 leading-relaxed">
                El presente sitio web, <span className="font-semibold text-blue-600">www.pagocursoscomparendos.com</span>, es operado por <span className="font-semibold">Setvial S.A.S.</span>, y tiene como finalidad brindar información, orientación y facilitar la inscripción, gestión y pago de cursos de normas de tránsito, dirigidos a personas que han sido sancionadas por infracciones de tránsito en el territorio colombiano.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">A través de este sitio, los usuarios podrán:</h3>
            <ul className="space-y-3">
              {[
                'Consultar información relacionada con los Centros Integrales de Atención (CIA).',
                'Inscribirse en cursos pedagógicos de normas de tránsito.',
                'Gestionar citas, horarios y sedes disponibles.',
                'Proporcionar la información necesaria para la correcta prestación del servicio.',
                'Recibir comunicaciones relacionadas con su proceso, curso o trámite.',
                'Acceder a contenido informativo y promocional relacionado con los servicios ofrecidos.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Nota importante:</span> El sitio no actúa como autoridad de tránsito ni reemplaza las funciones de los organismos oficiales, sino que presta un servicio educativo y administrativo, conforme a la normativa vigente.
            </p>
          </div>
        </div>

        {/* 1. Registro y obligaciones del usuario */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Registro y obligaciones del usuario
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              El acceso, navegación y uso del sitio web <span className="font-semibold">www.pagocursoscomparendos.com</span>, así como la inscripción a cursos, agendamiento de citas o realización de pagos, están sujetos a la aceptación plena y sin reservas de los presentes Términos y Condiciones.
            </p>
            <p>
              Antes de completar cualquier proceso de agendamiento, inscripción o pago, el usuario deberá aceptar expresamente estos Términos y Condiciones mediante la selección de un checkbox obligatorio, lo cual constituye una manifestación inequívoca de su consentimiento.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                En caso de que el usuario no esté de acuerdo con alguno de los términos aquí establecidos, deberá abstenerse de utilizar el sitio web y de contratar los servicios ofrecidos.
              </p>
            </div>
            <p>
              La aceptación de estos Términos y Condiciones implica que el usuario declara haber leído, entendido y aceptado su contenido, y se compromete a cumplirlos en su totalidad.
            </p>
          </div>
        </div>

        {/* 2. Registro y veracidad de la información */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Registro y veracidad de la información
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Para acceder a determinados servicios ofrecidos en el sitio web <span className="font-semibold">www.pagocursoscomparendos.com</span>, como el agendamiento de cursos, inscripción o pagos, el usuario deberá suministrar información personal y del comparendo de manera completa, veraz, actualizada y exacta.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">El usuario declara y garantiza que:</h3>
              <ul className="space-y-2">
                {[
                  'La información suministrada le pertenece o cuenta con la autorización del titular.',
                  'Los datos proporcionados son reales y no contienen errores, omisiones o falsedades.',
                  'Es responsable de mantener actualizada la información registrada en el sistema.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">IMPORTANTE:</span> SETVIAL S.A.S. no será responsable por inconvenientes, rechazos, sanciones, pérdidas de cupos, reprocesos o perjuicios derivados del suministro de información incorrecta, incompleta o falsa por parte del usuario.
              </p>
            </div>
          </div>

          {/* 2.1 Obligaciones del usuario */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2.1 Obligaciones del usuario</h3>
            <p className="text-gray-700 mb-4">El usuario se compromete a:</p>
            <ul className="space-y-3">
              {[
                'Utilizar el sitio web únicamente para fines legales y relacionados con los servicios ofrecidos.',
                'No suplantar la identidad de terceros ni proporcionar datos de otras personas sin autorización.',
                'No realizar actos que puedan afectar la seguridad, funcionamiento o integridad del sitio web.',
                'Respetar los horarios, fechas y condiciones del curso o cita agendada.',
                'Revisar cuidadosamente la información antes de confirmar cualquier agendamiento o pago.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                El incumplimiento de estas obligaciones podrá dar lugar a la suspensión del servicio, cancelación del agendamiento o exclusión del usuario del sistema, sin perjuicio de las acciones legales a que haya lugar.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Condiciones del servicio */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Condiciones del servicio (cursos y agendamientos)
          </h2>

          {/* 3.1 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3.1. Disponibilidad y asignación de cupos</h3>
            <p className="text-gray-700 mb-3">
              Los cursos de normas de tránsito ofrecidos a través del sitio web están sujetos a disponibilidad de cupos, horarios y sedes autorizadas.
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'El agendamiento realizado por el usuario no garantiza automáticamente la disponibilidad, hasta que el sistema confirme la inscripción.',
                'SETVIAL S.A.S. se reserva el derecho de reprogramar, modificar o cancelar horarios por razones operativas, logísticas, fuerza mayor o disposiciones de la autoridad competente.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm italic">
              En caso de cambios, el usuario será notificado a través de los canales de contacto registrados.
            </p>
          </div>

          {/* 3.2 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3.2. Reprogramaciones</h3>
            <p className="text-gray-700 mb-3">El usuario podrá solicitar la reprogramación del curso, siempre que:</p>
            <ul className="space-y-2 mb-3">
              {[
                'La solicitud se realice con antelación suficiente.',
                'Exista disponibilidad en la nueva fecha u horario solicitado.',
                'Se respeten las condiciones particulares informadas durante el proceso de inscripción.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm">
              SETVIAL S.A.S. no garantiza que la reprogramación pueda realizarse en la fecha exacta solicitada por el usuario.
            </p>
          </div>

          {/* 3.3 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3.3. Inasistencia del usuario</h3>
            <p className="text-gray-700 mb-3">
              En caso de que el usuario no asista al curso en la fecha y hora programadas, sin previo aviso o justificación válida:
            </p>
            <ul className="space-y-2">
              {[
                'Podrá perder el cupo asignado.',
                'Podrán aplicarse restricciones para nuevas inscripciones.',
                'El servicio podrá considerarse prestado, según el caso.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3.4 */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3.4. Responsabilidad del usuario frente al comparendo</h3>
            <p className="text-gray-700 mb-3">El usuario es responsable de:</p>
            <ul className="space-y-2">
              {[
                'Verificar que el curso sea aplicable a su tipo de comparendo.',
                'Cumplir con los plazos establecidos por la autoridad de tránsito correspondiente.',
                'Presentarse con la documentación requerida el día del curso.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                SETVIAL S.A.S. no se hace responsable por sanciones, recargos o consecuencias derivadas del incumplimiento de los plazos legales por parte del usuario.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Pagos y tarifas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Pagos y tarifas
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-gray-900 mb-2">Actualmente:</p>
              <p className="text-gray-700">
                SETVIAL S.A.S. <span className="font-semibold">no realiza pagos a través del sitio web</span>. Todos los pagos correspondientes a los cursos de normas de tránsito se realizan de manera presencial en las sedes autorizadas, bajo las condiciones y tarifas informadas al usuario en el momento de la inscripción o agendamiento.
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              En caso de que en el futuro se habiliten pagos en línea, SETVIAL S.A.S. informará oportunamente a los usuarios y actualizará los presentes Términos y Condiciones.
            </p>
          </div>
        </div>

        {/* 5. Responsabilidad y limitación */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            Responsabilidad y limitación de responsabilidad
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              SETVIAL S.A.S. se compromete a prestar sus servicios de manera diligente, profesional y conforme a la normatividad vigente aplicable a los Centros Integrales de Atención (CIA).
            </p>
            <p className="font-semibold text-gray-900">
              Sin embargo, el usuario entiende y acepta que SETVIAL S.A.S. no será responsable por:
            </p>
            <div className="space-y-3">
              {[
                { letter: 'a', text: 'Información incorrecta, incompleta o inexacta suministrada por el usuario al momento del registro, agendamiento o inscripción.' },
                { letter: 'b', text: 'Incumplimientos, retrasos o decisiones adoptadas por autoridades de tránsito, organismos gubernamentales o entidades externas relacionadas con comparendos, procesos administrativos o validaciones oficiales.' },
                { letter: 'c', text: 'Fallas técnicas, interrupciones del servicio, errores de conectividad o indisponibilidad temporal del sitio web causadas por terceros, fuerza mayor o caso fortuito.' },
                { letter: 'd', text: 'El uso indebido del sitio web por parte del usuario o de terceros no autorizados.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="font-bold text-blue-600 flex-shrink-0">{item.letter})</span>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                SETVIAL S.A.S. no garantiza que el uso del sitio web asegure resultados específicos frente a procesos administrativos de tránsito distintos a la correcta prestación del curso conforme a la normativa vigente.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Modificaciones */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            Modificaciones
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              SETVIAL S.A.S. se reserva el derecho de modificar en cualquier momento los presentes Términos y Condiciones.
            </p>
            <p>
              Las modificaciones serán publicadas en el sitio web y entrarán en vigencia desde su publicación. El uso continuado del sitio web por parte del usuario se entenderá como aceptación de los cambios realizados.
            </p>
          </div>
        </div>

        {/* 7. Legislación */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            Legislación aplicable y jurisdicción
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Los presentes Términos y Condiciones se rigen por las leyes de la <span className="font-semibold">República de Colombia</span>.
            </p>
            <p>
              Cualquier controversia derivada del uso del sitio web o de los servicios ofrecidos será sometida a la jurisdicción de los jueces competentes de la República de Colombia.
            </p>
          </div>
        </div>

        {/* Footer con fecha de última actualización */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <Scale className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <p className="text-lg font-semibold mb-2">
            Última actualización: Enero 2026
          </p>
          <p className="text-blue-100 text-sm">
            Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad
          </p>
        </div>
      </div>
    </div>
  );
}