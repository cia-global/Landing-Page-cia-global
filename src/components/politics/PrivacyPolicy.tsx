import { Shield, Lock, Database, FileText, UserCheck, Mail, Eye, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1> 
            </div>
          </div>
        </div>
      </section>

    <div className="max-w-4xl mx-auto px-4 py-10">
         <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introducción */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A continuación, se establecen las políticas de privacidad y las reglas para el manejo de los datos e información de carácter personal de los usuarios que acceden y usan nuestra página web <span className="font-semibold text-blue-600">www.pagocursoscomparendos.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* 1. Responsable del tratamiento */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Responsable del tratamiento
          </h2>
          <div className="bg-blue-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Setvial S.A.S.</span>, identificada con NIT ######, es una empresa legalmente constituida en la <span className="font-semibold">República de Colombia</span>, responsable del tratamiento de los datos personales recopilados a través del sitio web <span className="font-semibold text-blue-600">https://www.pagocursoscomparendos.com</span>.
            </p>
          </div>
        </div>

        {/* 2. Datos recopilados */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Datos recopilados
          </h2>

          {/* 2.1 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              2.1 Datos personales suministrados directamente por el titular
            </h3>
            <p className="text-gray-700 mb-4">
              A través del sitio web, Setvial S.A.S. podrá recopilar los siguientes datos personales proporcionados voluntariamente por los usuarios:
            </p>
            <ul className="space-y-2">
              {[
                'Nombre completo',
                'Número de documento de identidad',
                'Correo electrónico',
                'Número de teléfono celular',
                'Información relacionada con el comparendo o infracción de tránsito'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm mt-4 italic">
              Estos datos son recolectados cuando el usuario realiza procesos como el registro, inscripción a cursos, solicitudes de información o trámites relacionados con los servicios ofrecidos.
            </p>
          </div>

          {/* 2.2 */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2.2 Datos recopilados automáticamente</h3>
            <p className="text-gray-700 mb-4">
              El sitio web podrá recopilar información de manera automática mediante el uso de tecnologías como cookies y servicios de terceros, entre ellos:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Cookies técnicas necesarias para el funcionamiento de servicios como Google Maps y Google reCAPTCHA',
                'Herramientas de análisis como Google Analytics, utilizadas únicamente para fines estadísticos y de mejora del servicio'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Importante:</span> El uso de estas tecnologías no permite identificar personalmente al usuario sin su consentimiento.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Finalidades del tratamiento */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Finalidades del tratamiento
          </h2>
          <p className="text-gray-700 mb-4">
            Los datos personales recolectados por Setvial S.A.S. serán tratados exclusivamente para las siguientes finalidades:
          </p>
          <div className="space-y-3">
            {[
              'Inscripción, registro y gestión de cursos de normas de tránsito, incluyendo la validación de información relacionada con comparendos.',
              'Comunicación con el usuario a través de correo electrónico, llamadas telefónicas, mensajes de texto o aplicaciones de mensajería instantánea como WhatsApp, para informar sobre procesos, horarios, requisitos y estados del servicio.',
              'Gestión administrativa y operativa del servicio, incluyendo control interno, atención al cliente y gestión de registros.',
              'Envío de información relacionada con el curso, trámites o servicios contratados, tales como recordatorios, confirmaciones y notificaciones importantes.',
              'Envío de publicidad, promociones, campañas informativas o comerciales relacionadas con los servicios ofrecidos por Setvial S.A.S.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <span className="font-bold text-blue-600 flex-shrink-0">{index + 1}.</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-gray-700 text-sm">
              El titular de los datos podrá, en cualquier momento, solicitar la actualización, rectificación o supresión de sus datos personales, así como revocar la autorización para el envío de comunicaciones comerciales, de conformidad con la normativa vigente.
            </p>
          </div>
        </div>

        {/* 4. Derechos de los titulares */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Derechos de los titulares
          </h2>
          <p className="text-gray-700 mb-4">
            De conformidad con la legislación colombiana vigente en materia de protección de datos personales, los titulares de la información tienen los siguientes derechos:
          </p>
          <div className="space-y-3">
            {[
              'Conocer, actualizar y rectificar sus datos personales frente a Setvial S.A.S., especialmente cuando sean parciales, inexactos, incompletos o induzcan a error.',
              'Solicitar prueba de la autorización otorgada para el tratamiento de sus datos personales, salvo cuando dicha autorización no sea requerida por la ley.',
              'Ser informados, previa solicitud, respecto del uso que se ha dado a sus datos personales.',
              'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a lo dispuesto en la normativa vigente, una vez hayan agotado el trámite de consulta o reclamo ante Setvial S.A.S.',
              'Revocar la autorización y/o solicitar la supresión de los datos, cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.',
              'Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <UserCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Canales para ejercicio de derechos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            Canales para el ejercicio de derechos
          </h2>
          <p className="text-gray-700 mb-4">
            El titular podrá ejercer sus derechos mediante los siguientes canales:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Correo electrónico:</h3>
              </div>
              <a href="mailto:sistemasciaglobal@gmail.com" className="text-blue-600 font-semibold hover:underline">
                sistemasciaglobal@gmail.com
              </a>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-gray-900">Formulario disponible en el sitio web:</h3>
              </div>
              <a href="https://www.pagocursoscomparendos.com/contact" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                https://www.pagocursoscomparendos.com/contact
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-yellow-600" />
              <h3 className="font-semibold text-gray-900">Plazo de respuesta</h3>
            </div>
            <p className="text-gray-700">
              Setvial S.A.S. dará respuesta a las consultas y reclamos relacionados con el tratamiento de datos personales dentro de un plazo máximo de <span className="font-semibold">quince (15) días hábiles</span>, contados a partir de la fecha de recepción de la solicitud.
            </p>
          </div>
        </div>

        {/* 6. Seguridad */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            Seguridad de la información
          </h2>
          <p className="text-gray-700 mb-4">
            Setvial S.A.S. adopta las medidas técnicas, humanas y administrativas necesarias para proteger los datos personales de los titulares, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            En particular, se implementan las siguientes medidas:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Almacenamiento seguro de la información mediante servicios en la nube administrados, los cuales cumplen con estándares de seguridad reconocidos a nivel internacional.',
              'Acceso restringido a la información, permitiendo el tratamiento de los datos únicamente a personal autorizado y bajo credenciales seguras.',
              'Controles de autenticación y autorización, incluyendo manejo de claves y roles para limitar las acciones que pueden realizar los usuarios y administradores.',
              'Monitoreo y mantenimiento continuo de la infraestructura tecnológica para detectar y mitigar posibles vulnerabilidades.'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Advertencia:</span> El titular reconoce que ningún sistema es completamente infalible, por lo que Setvial S.A.S. no puede garantizar la seguridad absoluta de la información, aunque se compromete a actuar diligentemente ante cualquier incidente de seguridad.
            </p>
          </div>
        </div>

        {/* 7. Transmisión de datos a terceros */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            Transmisión de datos a terceros
          </h2>
          <p className="text-gray-700 mb-4">
            Setvial S.A.S. podrá transmitir o transferir datos personales a terceros únicamente cuando sea necesario para el cumplimiento de las finalidades descritas en la presente Política de Privacidad.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            En particular, los datos personales podrán ser transmitidos a:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Proveedores de servicios tecnológicos:</h3>
              <ul className="space-y-2">
                {[
                  'Servicios de bases de datos, para el almacenamiento y administración de la información recolectada.',
                  'Servicios de infraestructura y hosting, utilizados para el despliegue y funcionamiento del sitio web y el backend.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Servicios de Google:</h3>
              <ul className="space-y-2">
                {[
                  'Google Maps, para la visualización de ubicaciones.',
                  'Google reCAPTCHA, para la protección contra accesos automatizados o fraudulentos.',
                  'Google Analytics, para el análisis estadístico del uso del sitio web.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                Estas transmisiones se realizan bajo acuerdos que garantizan el cumplimiento de estándares adecuados de seguridad y confidencialidad, y los terceros solo podrán tratar los datos conforme a las instrucciones de Setvial S.A.S. y para las finalidades autorizadas.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                En caso de transferencias internacionales de datos, Setvial S.A.S. verificará que el país receptor cuente con niveles adecuados de protección de datos personales o, en su defecto, adoptará las medidas contractuales necesarias para garantizar la seguridad de la información.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Importante:</span> Setvial S.A.S. no venderá, alquilará ni cederá los datos personales a terceros para fines distintos a los aquí establecidos sin la autorización previa, expresa e informada del titular.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Procedimiento para consultas y reclamos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            Procedimiento para consultas y reclamos
          </h2>
          <p className="text-gray-700 mb-4">
            Los titulares de los datos personales podrán ejercer sus derechos de consulta, actualización, rectificación, supresión o revocatoria de la autorización, mediante solicitud dirigida a Setvial S.A.S., a través del siguiente canal:
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Correo electrónico:</span>
              </div>
              <a href="mailto:sistemasciaglobal@gmail.com" className="text-blue-600 font-semibold hover:underline block ml-7">
                sistemasciaglobal@gmail.com
              </a>
              <div className="flex items-center gap-2 mt-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Asunto:</span>
                <span className="text-gray-700">Protección de Datos Personales</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Consultas */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-gray-900">Consultas</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-green-600">•</span>
                  <span>Atención en máximo <span className="font-semibold">10 días hábiles</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-green-600">•</span>
                  <span>Si no es posible: se informarán motivos y nueva fecha (máximo 5 días adicionales)</span>
                </li>
              </ul>
            </div>

            {/* Reclamos */}
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-gray-900">Reclamos</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-orange-600">•</span>
                  <span>Si está incompleto: requerimiento en 5 días hábiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-orange-600">•</span>
                  <span>Sin respuesta en 2 meses: se entiende desistimiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-orange-600">•</span>
                  <span>Atención en máximo <span className="font-semibold">15 días hábiles</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 9. Vigencia */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
            Vigencia de la Política de Privacidad
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              La presente Política de Privacidad entra en vigencia a partir de su publicación y permanecerá vigente mientras se desarrollen las finalidades para las cuales fueron recolectados los datos personales.
            </p>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="mb-2">
                Cualquier modificación sustancial será informada a los titulares a través del sitio web:
              </p>
              <a href="https://www.pagocursoscomparendos.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                https://www.pagocursoscomparendos.com
              </a>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm">
                Setvial S.A.S. se reserva el derecho de modificar la presente Política de Privacidad en cualquier momento, en cumplimiento de cambios normativos o ajustes internos, garantizando siempre los derechos de los titulares.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <p className="text-lg font-semibold mb-2">
            Última actualización: Enero 2026
          </p>
          <p className="text-purple-100 text-sm mb-4">
            Su privacidad es importante para nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:sistemasciaglobal@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              <span>Contactar</span>
            </a>
            <Link 
            to="https://www.pagocursoscomparendos.com/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-white/90 rounded-lg transition-colors font-semibold">
              <FileText className="w-5 h-5" />
              <span>Formulario</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}