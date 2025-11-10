import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Teléfono
                    </h3>
                    <p className="text-gray-700">+57 601 300 1234</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Correo Electrónico
                    </h3>
                    <p className="text-gray-700">info@educacionvial.co</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Oficina Principal
                    </h3>
                    <p className="text-gray-700">Calle 72 #10-34, Bogotá D.C.</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Horario de Atención
                    </h3>
                    <p className="text-gray-700">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sábados: 8:00 AM - 12:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Domingos y festivos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envíanos un Mensaje
              </h2>

              <form className="bg-white p-8 rounded-xl shadow-md">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="3001234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="contact-subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="info">Información general</option>
                      <option value="appointment">Consulta sobre agendamiento</option>
                      <option value="city">Nueva ciudad</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Cuánto tiempo dura el curso?
              </h3>
              <p className="text-gray-700">
                La duración varía según el tipo de curso: teórico (4 horas), práctico (4 horas) o completo (8 horas).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Qué debo llevar el día del curso?
              </h3>
              <p className="text-gray-700">
                Debes llevar tu cédula original, una copia del comparendo y llegar con 15 minutos de anticipación.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Puedo reagendar mi cita?
              </h3>
              <p className="text-gray-700">
                Sí, puedes reagendar con al menos 24 horas de anticipación contactándonos por teléfono o correo.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Entregan certificado?
              </h3>
              <p className="text-gray-700">
                Sí, al finalizar el curso recibirás un certificado oficial válido ante las autoridades de tránsito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
