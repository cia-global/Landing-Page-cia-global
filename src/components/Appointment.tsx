import { useEffect, useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { supabase, City, CourseType } from '../lib/supabase';

export default function Appointment() {
  const [cities, setCities] = useState<City[]>([]);
  const [courseTypes, setCourseTypes] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    cityId: '',
    courseTypeId: '',
    fullName: '',
    idNumber: '',
    citationNumber: '',
    phone: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [citiesResponse, courseTypesResponse] = await Promise.all([
        supabase.from('cities').select('*').eq('is_active', true).order('name'),
        supabase.from('course_types').select('*').eq('is_active', true).order('name'),
      ]);

      if (citiesResponse.error) throw citiesResponse.error;
      if (courseTypesResponse.error) throw courseTypesResponse.error;

      setCities(citiesResponse.data || []);
      setCourseTypes(courseTypesResponse.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('appointments').insert([
        {
          city_id: formData.cityId,
          course_type_id: formData.courseTypeId,
          full_name: formData.fullName,
          id_number: formData.idNumber,
          citation_number: formData.citationNumber,
          phone: formData.phone,
          email: formData.email,
          appointment_date: formData.appointmentDate,
          appointment_time: formData.appointmentTime,
          status: 'pending',
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({
        cityId: '',
        courseTypeId: '',
        fullName: '',
        idNumber: '',
        citationNumber: '',
        phone: '',
        email: '',
        appointmentDate: '',
        appointmentTime: '',
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Hubo un error al agendar tu cita. Por favor intenta nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Cargando formulario...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Agendamiento Exitoso!
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Hemos recibido tu solicitud de agendamiento. En breve recibirás un correo electrónico con la confirmación y detalles de tu clase.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-900 font-medium">
                Revisa tu correo electrónico (incluyendo spam) para más información.
              </p>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Hacer otro agendamiento
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agendar mi Clase</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Completa el formulario para reservar tu curso de educación vial
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cityId" className="block text-sm font-semibold text-gray-900 mb-2">
                    Ciudad / Sede *
                  </label>
                  <select
                    id="cityId"
                    name="cityId"
                    value={formData.cityId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una ciudad</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="courseTypeId" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tipo de Curso *
                  </label>
                  <select
                    id="courseTypeId"
                    name="courseTypeId"
                    value={formData.courseTypeId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un curso</option>
                    {courseTypes.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} - ${course.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {formData.courseTypeId && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Descripción:</strong>{' '}
                    {courseTypes.find((c) => c.id === formData.courseTypeId)?.description}
                  </p>
                  <p className="text-sm text-blue-900 mt-2">
                    <strong>Duración:</strong>{' '}
                    {courseTypes.find((c) => c.id === formData.courseTypeId)?.duration_hours} horas
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="appointmentDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Fecha *
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="appointmentTime" className="block text-sm font-semibold text-gray-900 mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Hora *
                  </label>
                  <select
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una hora</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Juan Pérez García"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="idNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                    Número de Cédula *
                  </label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="citationNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                    Número de Comparendo *
                  </label>
                  <input
                    type="text"
                    id="citationNumber"
                    name="citationNumber"
                    value={formData.citationNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ABC123456"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="3001234567"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Procesando...' : 'Confirmar Agendamiento'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
