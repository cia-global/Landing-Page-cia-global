import { Phone, Mail, Clock } from 'lucide-react';
import { useRef, useState } from 'react';
import { API_URL } from '../config/api';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [id.replace('contact-', '')]: value,
    }));
  };

  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError(null);
  try {

    const recaptchaToken = recaptchaRef.current?.getValue();
     if (!recaptchaToken) {
        setError('Por favor completa la verificación "No soy un robot"');
        setLoading(false);
        return;
      }

    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, recaptchaToken }),
    });

    const data = await res.json(); 

    if (!res.ok || !data.success) {
      // Mostrar el error específico del backend si existe
      throw new Error(data.error || 'Error enviando el mensaje');
    }

    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    recaptchaRef.current?.reset();
    alert('✅ ¡Mensaje enviado! Te responderemos pronto.');
    
  } catch (error: any) {
    console.error('Error:', error);
    alert(error.message || 'No se pudo enviar el mensaje. Intenta más tarde.');
     recaptchaRef.current?.reset();
  } finally {
    setLoading(false);
  }
};
  
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
                    <p className="text-gray-700">+57 3207713935</p>
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
                    <p className="text-gray-700">sistemasciaglobal@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Respuesta en menos de 24 horas
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

              <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                    <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                     sitekey={RECAPTCHA_SITE_KEY}
                      theme="light"
                      size="normal"
                       onChange={(token) => {
                        if (token) {
                        setIsCaptchaValid(true);
                    }
                      }}
                      onExpired={() => setIsCaptchaValid(false)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading|| !isCaptchaValid}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>

                  {success && (
                    <p className="text-green-600 text-sm font-semibold text-center">
                      ✓ Mensaje enviado correctamente
                    </p>
                  )}
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
                ¿El curso sirve para reducir el valor del comparendo?
              </h3>
              <p className="text-gray-700">
                Sí. El curso de concientización vial permite acceder a los descuentos establecidos por la ley, siempre que se realice dentro de los plazos definidos por la autoridad de tránsito.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Cuánto tiempo dura el curso?
              </h3>
              <p className="text-gray-700">
                La duración del curso de concientización vial es de aproximadamente 2 horas, de acuerdo con lo establecido por la normativa vigente.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Qué debo llevar el día del curso?
              </h3>
              <p className="text-gray-700">
                Debes presentar tu documento de identidad original, el número de comparendo y llegar con al menos 15 minutos de anticipación.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Puedo reagendar mi cita?
              </h3>
              <p className="text-gray-700">
                Sí. Puedes reagendar tu cita con anticipación comunicándote con nuestra línea de atención o por WhatsApp, sujeto a disponibilidad de horarios.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Entregan certificado?
              </h3>
              <p className="text-gray-700">
                Sí. Al finalizar el curso recibirás un certificado de asistencia, el cual es válido para el proceso de reducción del comparendo, según la normativa aplicable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}